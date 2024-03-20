import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Recevoir nos Bonnes Ondes</h2>
        <p className="text-gray-500 my-2">
          Abonnez-vous afin de recevoir les dernières de nos actualités.
        </p>
        <Link to="/sign-in" className="self-center">
          <Button gradientDuoTone="purpleToPink" outline>
            S'abonner
          </Button>
        </Link>
      </div>
      <div className="p-7 flex flex-1 justify-center items-center">
        <Link to="/sign-in" className="self-center">
          <img src="/thumbnails/mascotte-fond-blanc.png" />
        </Link>
      </div>
    </div>
  );
}
