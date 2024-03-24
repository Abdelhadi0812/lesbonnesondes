import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CallToAction from '../components/CallToAction';

const images = [];

for (let i = 1; i <= 24; i++) {
  const src = `/swipe${i}.webp`;
  const alt = `Image ${i}`;
  // @vite-ignore
  import(/* @vite-ignore */ src).then((module) => {
    images.push({ src: module.default, alt });
  });
}

const Festival = () => {
  return (
    <div className="w-full bg-[#fa7066] flex flex-col justify-center items-center">
      <div className="w-[80%]">
        <div className="w-full flex flex-col justify-center items-center my-8">
          <h1 className="text-start text-white text-4xl font-bold my-6">
            Festival Amwaj 2023 : Une 1ère édition réussie !
          </h1>
          <p className="italic text-[17px] text-lg text-start text-white font-semibold mb-4 ">
            Du 14 au 17 décembre 2023, nous avons eu le privilège d'être
            co-organisateurs de la première édition du Festival Amwaj à
            Casablanca, présenté par l&apos;Institut français du Maroc.
          </p>
          <p className="text-white text-lg ">
            Pari gagné pour la 1ère édition du Festival des écoutes Amwaj
            célébrant le podcast, la radio et la création sonore dans toute sa
            diversité ! Organisé en partenariat avec le studio de production
            indépendant marocain Les Bonnes Ondes et le festival brestois
            Longueur d&apos;Ondes, le festival s&apos;est déroulé du 14 au 17
            décembre 2023 à l&apos;Institut français de Casablanca dans une
            ambiance festive et riche en rencontres !
          </p>
          <p className="text-white text-lg ">
            Depuis plusieurs années, le Maroc voit émerger une diversité
            d&apos;initiatives et d'acteurs dans le domaine du podcast.
            C&apos;est cette dynamique et l&apos;engouement des auditeurs
            marocains qui a poussé la conception de ce festival pour permettre
            la rencontre avec le public, susciter des échanges entre
            professionnels et valoriser la diffusion de nouvelles formes
            d&apos;expression journalistiques ainsi que les sujets sociétaux
            qu'elles portent.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <Swiper
            navigation
            pagination={{ type: 'fraction' }}
            modules={[Navigation, Pagination]}
            className="h-full w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <p className="text-white text-lg mb-6 ">
            Ainsi, ce sont 15 panels centrés sur des sujets d&apos;actualité
            tels que le féminisme, la désinformation, la musique, les langues,
            le journalisme, la jeunesse ou encore le sport, qui ont été
            organisés en présence de nombreux invités reconnus parmi lesquels :
            Omar Ouahmane, grand reporter de guerre pour Radio France, le
            rappeur et auteur de podcasts Oxmo Puccino, l&apos;humoriste Asmaa
            El Arabi, la journaliste Leila Chik, l&apos;artiste et co-fondateur
            de Radio Maârif Réda Allali, la sociologue et auteure du livre
            Génération Darija ! Dominique Caubet, le fondateur d&apos;Arte Radio
            Silvain Gire, la journaliste et militante Fedwa Misk, Jean-Guillaume
            Santi producteur du podcast l&apos;Heure du Monde et bien
            d&apos;autres encore ! En marge des panels, une salle d&apos;écoute
            à l&apos;ambiance feutrée offrait la possibilité d&apos;écouter les
            histoires et les documentaires des réalisateurs invités.
          </p>
          <p className="text-white text-lg ">
            Et parce que le son est aussi une question de «transmission », une
            soixantaine de jeunes participants ont pris part à plusieurs
            sessions de formation, telles que la formation « développer son
            podcast », l&apos;atelier « paysage sonore » avec les jeunes du
            quartier Sidi Moumen, une grande masterclass avec le rappeur Oxmo
            Puccino sur l&apos;écoute et l'échange à l&apos;Uzine. En outre, une
            radio éphémère, encadrée par le fondateur des Bonnes Ondes, Mehdi El
            Kindi et Fabienne Laumonier, productrice de documentaires
            radiophoniques, a permis à des étudiants en école de journalisme
            d&apos;expérimenter chaque jour, en live, une émission de radio
            dédiée à la jeunesse marocaine. Installé dans la cour de
            l&apos;Institut français, ce studio éphémère a offert une expérience
            sonore unique au public venu y assister
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <div className="w-full h-[400px] mx-8 flex flex-col justify-center items-center">
            <iframe
              class="wuksD5"
              title="Embedded Content"
              name="htmlComp-iframe"
              width="100%"
              height="100%"
              allow="fullscreen"
              data-src=""
              src="https://player.podcastics.com/playlist/5587/?s=2949"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <p className="text-white text-lg mb-6 ">
            Amwaj, c&apos;était aussi une facilitation de la mise en réseau des
            professionnels. C&apos;est pourquoi des rencontres sur le livre
            audio et le métier d&apos;ingénieur du son ont été proposées au sein
            du studio de la Fondation Hiba. On pourrait encore ajouter le
            soutien financier apporté à 12 projets de création sonore, un
            atelier de création d&apos;une pièce de théâtre radiophonique en
            darija, le magnifique spectacle sonore « Jean-Chat voit dans le noir
            » pour les tout-petit : ce sont près d&apos;une quarantaine de
            programmes qui étaient proposés au public pendant ces quatre
            journées d&apos;une rare intensité.
          </p>
          <p className="text-white text-lg ">
            Au total, plus de 50 intervenants professionnels des plus grands
            médias marocains et français étaient présents pendant toute la durée
            du festival qui a recueilli une fréquentation estimée à 1 millier
            d&apos;amateurs du son mais aussi de nombreux curieux venus
            découvrir et écouter de nouvelles aventures sonores. Devant
            l&apos;engouement suscité par Amwaj, le rendez-vous est d&apos;ores
            et déjà donné pour une seconde édition !
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Festival;
