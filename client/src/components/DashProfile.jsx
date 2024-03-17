import React from 'react';
import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const DashProfile = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full ">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray] opacity-60"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="nom d'utilisateur"
          defaultValue={currentUser.username}
          //   onChange={handleChange}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          //   onChange={handleChange}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="mot de passe"
          //   onChange={handleChange}
        />
        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          outline
          //   disabled={loading || imageFileUploading}
        >
          {loading ? 'Loading...' : 'Update'}
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer hover:underline">
          Supprimer le compte
        </span>
        <span className="cursor-pointer hover:underline">Se déconnecter</span>
      </div>
    </div>
  );
};

export default DashProfile;
