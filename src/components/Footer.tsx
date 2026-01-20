import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/rossocafemarseille_/';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rosso py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              onClick={scrollToTop}
              className="block mb-3 sm:mb-4"
            >
              <img
                src="https://charlypizza.github.io/assets/rosso-cafe-marseille-logo-blanc-footer-site-web.png"
                alt="ROSSO"
                className="h-8 sm:h-10 w-auto transition-opacity duration-300 hover:opacity-80"
              />
            </Link>
            <p className="text-white/70 font-light text-xs sm:text-sm leading-relaxed">
              Coffee shop tendance au coeur de Marseille.
              Cafes de specialite et sandwichs maison.
            </p>
          </div>

          <div>
            <span className="text-accent font-medium text-xs sm:text-sm block mb-3 sm:mb-4">Horaires</span>
            <div className="text-white/70 font-light text-xs sm:text-sm space-y-1">
              <p>Lun - Sam : 8h - 20h</p>
              <p>Dimanche : Ferme</p>
            </div>
          </div>

          <div>
            <span className="text-accent font-medium text-xs sm:text-sm block mb-3 sm:mb-4">Contact</span>
            <div className="space-y-2 sm:space-y-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 font-light text-xs sm:text-sm hover:text-white transition-colors"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                @rossocafemarseille_
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-white/50 font-light text-[10px] sm:text-xs">
            {currentYear} ROSSO Marseille. Tous droits reserves.
          </p>
          <a
            href="https://www.vasseo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 font-light text-[10px] sm:text-xs hover:text-white transition-colors order-last sm:order-none"
          >
            Created with <span className="text-accent">&#9829;</span> by Vasseo
          </a>
        </div>
      </div>
    </footer>
  );
}
