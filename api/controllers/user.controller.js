import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const test = (req, res) => {
  res.json({ message: 'API is working :)' });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(
        403,
        "Vous n'êtes pas autorisé à mettre à jour cet utilisateur"
      )
    );
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(
          400,
          'Le mot de passe doit consister au moins de 6 caractères'
        )
      );
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(
          400,
          "Le nom d'utilisateur doit comporter entre 7 et 20 caractères"
        )
      );
    }
    if (req.body.username.includes(' ')) {
      return next(
        errorHandler(400, "Le nom d'utilisateur ne peut pas contenir d'espaces")
      );
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(
        errorHandler(400, "Le nom d'utilisateur doit être en minuscule")
      );
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(
          400,
          "Le nom d'utilisateur ne peut contenir que des lettres et des chiffres"
        )
      );
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "Vous n'êtes pas authorisé à supprimer ce compte")
    );
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('Utilisateur a été supprimé');
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res, next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to see all users'));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'asc' ? 1 : -1;

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};
