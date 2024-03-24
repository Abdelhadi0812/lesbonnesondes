import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import CallToAction from '../components/CallToAction';
// Images
import swipe1 from '/swipe1.webp';
import swipe2 from '/swipe2.webp';
import swipe3 from '/swipe3.webp';
import swipe4 from '/swipe4.webp';
import swipe5 from '/swipe5.webp';
import swipe6 from '/swipe6.webp';
import swipe7 from '/swipe7.webp';
import swipe8 from '/swipe8.webp';
import swipe9 from '/swipe9.webp';
import swipe10 from '/swipe10.webp';
import swipe11 from '/swipe11.webp';
import swipe12 from '/swipe12.webp';
import swipe13 from '/swipe13.webp';
import swipe14 from '/swipe14.webp';
import swipe15 from '/swipe15.webp';
import swipe16 from '/swipe16.webp';
import swipe17 from '/swipe17.webp';
import swipe18 from '/swipe18.webp';
import swipe19 from '/swipe19.webp';
import swipe20 from '/swipe20.webp';
import swipe21 from '/swipe21.webp';
import swipe22 from '/swipe22.webp';
import swipe23 from '/swipe23.webp';
import swipe24 from '/swipe24.webp';

const images = [
  { src: swipe1, alt: 'Swipe1' },
  { src: swipe2, alt: 'swipe2' },
  { src: swipe3, alt: 'swipe3' },
  { src: swipe4, alt: 'swipe4' },
  { src: swipe5, alt: 'swipe5' },
  { src: swipe6, alt: 'swipe6' },
  { src: swipe7, alt: 'swipe7' },
  { src: swipe8, alt: 'swipe8' },
  { src: swipe9, alt: 'swipe9' },
  { src: swipe10, alt: 'swipe10' },
  { src: swipe11, alt: 'swipe11' },
  { src: swipe12, alt: 'swipe12' },
  { src: swipe13, alt: 'swipe13' },
  { src: swipe14, alt: 'swipe14' },
  { src: swipe15, alt: 'swipe15' },
  { src: swipe16, alt: 'swipe16' },
  { src: swipe17, alt: 'swipe17' },
  { src: swipe18, alt: 'swipe18' },
  { src: swipe19, alt: 'swipe19' },
  { src: swipe20, alt: 'swipe20' },
  { src: swipe21, alt: 'swipe21' },
  { src: swipe22, alt: 'swipe22' },
  { src: swipe23, alt: 'swipe23' },
  { src: swipe24, alt: 'swipe24' },
];

const Festival = () => {
  const [thumbSwiper, setThumbSwiper] = useState(null);

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
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
            }}
            pagination={{ type: 'fraction' }}
            modules={[Navigation, Pagination, FreeMode, Thumbs]}
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

          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-3 h-32 w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className="w-full h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </button>
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
