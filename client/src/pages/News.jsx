import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="w-full bg-[#fa7066]">
      <div className="bg-white dark:bg-[rgb(55,65,81)] mb-5 max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col justify-center items-center mx-auto gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Les posts récents
            </h2>
            <div className="flex flex-wrap gap-4 w-full justify-center items-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              Voir tous les posts
            </Link>
          </div>
        )}
      </div>

      <div className="p-3 dark:bg-slate-700">
        <CallToAction />
      </div>
    </div>
  );
};

export default News;
