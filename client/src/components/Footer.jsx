import { Footer } from 'flowbite-react';
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
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
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
    </Footer>
  );
}
