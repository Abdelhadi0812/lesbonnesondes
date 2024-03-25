import React, { useState } from 'react';
import { Footer, Modal, Button } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from 'react-icons/bs';

export default function FooterCom() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <img
                src="/thumbnails/mascotte-fond-blanc.png"
                alt="footer_logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="A propos" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  News
                </Footer.Link>
                <Footer.Link
                  href="/laradio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  La radio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Rejoignez-nous" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.facebook.com/agencebonnesondes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/lesbonnesondes_podcasts/"
                  target="_blank"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link
                  href="#"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Conditions générales d'utilisation
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            by="Les Bonnes Ondes"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/agencebonnesondes"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/lesbonnesondes_podcasts/"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/ondes_les"
              target="_blank"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.linkedin.com/company/les-bonnes-ondes-ma/"
              target="_blank"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        show={showModal}
        dismissible
        onClose={() => setShowModal(false)}
        popup
        size="4xl"
      >
        <div className="w-full bg-teal-400 flex flex-col rounded-lg  ">
          <Modal.Header />
          <div className="bg-[#fa7066] px-6 mx-12  rounded-lg">
            <h1 className="text-center  text-3xl text-black">
              Conditions Générales D'utilisation
            </h1>
            <p>
              Ce site présente les activités et les productions de “Les Bonnes
              Ondes” SARL de droit marocain.
            </p>
            <h4 className="text-start font-semibold text-lg my-4">
              Droit d'utilisation
            </h4>
            <div className="flex flex-col gap-3">
              <p>
                Par l'accès au site lesbonnesondes.ma, Les Bonnes Ondes consent
                à l'utilisateur, qui l'accepte, un droit d'utilisation dans les
                conditions détaillées ci-après. Le droit de l'utilisateur se
                limite à la reproduction pour stockage aux fins de
                représentation sur écran monoposte.
              </p>
              <p>
                L'Utilisateur s'interdit de transmettre ou vendre, de quelque
                manière que ce soit, des textes contenus dans le site
                lesbonnesondes.ma, et plus généralement de porter atteinte de
                quelque façon que ce soit aux droits de reproduction et autres
                détenus par Les Bonnes Ondes. La violation de ces dispositions
                impératives est passible des sanctions applicables au délit de
                contrefaçon, et expose les contrevenants aux peines pénales et
                civiles instaurées par la loi.
              </p>
            </div>
            <h4 className="text-start font-semibold text-lg my-4">
              Traitement des données à caractère personnel
            </h4>
            <div className="flex flex-col gap-3">
              <p>
                L'utilisation du site lesbonnesondes.ma est régie par la
                présente politique d'utilisation des données à caractère
                personnel. En utilisant le site lesbonnesondes.ma, l'utilisateur
                reconnaît et déclare être préalablement informé de manière
                expresse, précise et non équivoque par Les Bonnes Ondes du
                traitement de ses données à caractère personnel. Ainsi,
                l'utilisateur consent à ce que Les Bonnes Ondes collecte et
                traite les données personnelles le concernant, de la façon qui
                sera la plus appropriée.
              </p>
              <p>
                L'utilisateur, justifiant de son identité, a le droit à la
                communication, l'actualisation, l'opposition, la rectification,
                l'effacement de ses données à caractère personnel conformément
                aux dispositions de la loi 09-08. L'utilisateur peut également,
                pour des motifs légitimes, s'opposer à ce que ses données
                personnelles fassent l'objet d'un traitement par Les Bonnes
                Ondes. Pour l'exercice des actions précitées, l'utilisateur
                peut, gratuitement et en respectant un délai raisonnable,
                adresser une demande à l'adresse email suivante :
                info@lesbonnesondes.ma
              </p>
              <p>
                Les Bonnes Ondes s'engage à ce que les droits de l'utilisateur
                soient préservés, conformément aux dispositions de la loi 09-08
                en matière de protection des données personnelles.
              </p>
            </div>
            <h4 className="text-start font-semibold text-lg my-4">
              Droits de propriété intellectuelle
            </h4>
            <div className="flex flex-col gap-3">
              <p>
                L'ensemble des fonds documentaires, informations, textes,
                ouvrages, articles, vidéos, sons et illustrations mis en ligne
                par Les Bonnes Ondes sont protégés par le droit d'auteur et par
                le droit protégeant les bases de données dont Les Bonnes Ondes
                est titulaire en application de la loi n° 2-00 relative aux
                droits d'auteur et droits voisins.
              </p>
              <p>
                Les marques de Les Bonnes Ondes et de ses partenaires, ainsi que
                les logos figurant sur le site lesbonnesondes.ma sont des
                marques déposées. Toute reproduction ou représentation totale ou
                partielle de ces marques, toute modification, toute altération
                de ces marques et/ou logos ou reproduction de leurs signes
                distinctifs ou tout élément graphique ou autre du site
                lesbonnesondes.ma sans l'autorisation préalable écrite de Les
                Bonnes Ondes sont interdites et exposent le contrevenant à des
                sanctions pénales et civiles.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 my-4">
            <Button color="success" onClick={() => setShowModal(false)}>
              Oui, j'accepte.
            </Button>
            <Button color="gray" onClick={() => setShowModal(false)}>
              Non, retour.
            </Button>
          </div>
        </div>
      </Modal>
    </Footer>
  );
}
