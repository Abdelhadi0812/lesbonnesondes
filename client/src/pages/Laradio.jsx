import React from 'react';
import CallToAction from '../components/CallToAction';

const Laradio = () => {
  return (
    <div className="w-full bg-[#fa7066] flex flex-col justify-center items-center">
      <div className="w-[80%] ">
        <div className="w-full flex flex-col justify-center items-center border-b-4 border-dotted border-teal-400 my-8">
          <h2 className="font-bold text-3xl text-start">
            LES BONNES ONDES - La radio
          </h2>
          <div className="w-full my-6">
            <h4 className="text-white text-xl text-center font-semibold mb-4">
              Une radio éphémère événementielle pour les professionnels Une
              radio éphémère de formation et de transmission pour la société
              civile
            </h4>
            <p className="text-white text-lg font-[400] mb-4">
              Dans un souci d&apos;accompagnement de structures culturelles et
              événementielles nous avons créé la WEBRADIO - Les Bonnes Ondes -
            </p>
            <p className="text-white text-lg font-[400] mb-4">
              Une webradio éphémère qui accompagne les festivals, salons et
              autres événements ponctuels pour faire découvrir le programme de
              l&apos;intérieur. Une webradio qui fait la part belle à la
              formation en proposant à des étudiants et autres curieux de la
              société civile de découvrir le monde de la radio.
            </p>
            <h4 className="text-white text-xl text-center font-semibold">
              Vous souhaitez vous faire accompagner par la webradio Les Bonnes
              Ondes ? : contact@lesbonnesondes.ma
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <p className="text-white text-lg font-[400] mb-4">
            La Webradio Les Bonnes Ondes, à émis pour sa première en direct de
            la seconde édition du Taghazout surf expo 2023 pour partager les
            singularités d&apos;un salon professionnel ouvert sur le grand
            public et en phase avec les attentes de sa région.
          </p>
          <div className="w-full h-[250px] mx-8 flex flex-col justify-center items-center">
            <iframe
              title="podcast taghazout surf expo"
              name="htmlComp-iframe"
              width="100%"
              height="100%"
              allow="fullscreen"
              data-src=""
              src="https://www-lesbonnesondes-ma.filesusr.com/html/622815_5edab6839cc008599335189896c071a8.html"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <p className="text-white text-lg font-[400] mb-4">
            Les 15, 16 décembre 2023, à l&pos;issue d&pos;une formation de 4
            jours au studio Les Bonnes Ondes et en lien avec l'ONG MAKING WAVES
            , 6 étudiants en école de journalisme ont émis en direct du festival
            Amwaj, premier festival dédié à la radio, au podcast et à la
            création sonore organisé à Casablanca en partenariat avec
            l&pos;Institut Français du Maroc et le festival brestois Longueur
            d&pos;Ondes.
          </p>
          <div className="w-full h-[600px] mx-8 flex flex-col justify-center items-center">
            <iframe
              class="wuksD5"
              title="Embedded Content"
              name="htmlComp-iframe"
              width="100%"
              height="100%"
              allow="fullscreen"
              data-src=""
              src="https://www-lesbonnesondes-ma.filesusr.com/html/622815_042078cb9f97bbc9649cf933681c05e5.html"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Laradio;
