import React from 'react';
import bgVid from '/vidbackground.mp4';
import { Link } from 'react-router-dom';

const VidBackground = () => {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 inset-0 w-full h-full object-cover"
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      <div className="relative z-10 text-white text-center py-6 flex justify-center items-center">
        <div className="w-[80%] my-6 ">
          <h2 className="block text-3xl mb-6 text-start font-semibold ">
            La philosophie
          </h2>
          <div className="w-full flex flex-col justify-center items-center">
            <ol className="flex flex-col text-start gap-2 text-sm lg:text-lg list-decimal">
              <li>
                Nos bonnes ondes, nous les tirons du fait que nous aimons le
                son, la voix, le sens….
              </li>
              <li>
                Nos bonnes ondes, nous les tirons de nos échanges avec vous, des
                conversations et réflexions que nous menons à l&apos;unisson...
              </li>
              <li>
                Nos bonnes ondes, nous les tirons de notre connexion avec votre
                écoute ...
              </li>
              <li>
                Nos bonnes ondes, nous les tirons du fait que nos contenus sont
                le fruit de mobilisation, de réflexion et de travail bien
                fait...
              </li>
              <li>
                Nos bonnes ondes prennent leur véritable sens lorsqu&apos;elles
                vous atteignent et rejoignent les fréquences de vos ondes !
              </li>
            </ol>
          </div>
          <Link
            to="mailto:contact@lesbonnesondes.ma?subject=contact%20depuis%20lesbonnesondes.ma"
            className="absolute bottom-0 right-[10%] "
          >
            <h6 className="font-semibold underline">
              Nous contacter : contact@lesbonnesondes.ma
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VidBackground;
