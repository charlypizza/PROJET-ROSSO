import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/rossocafemarseille_/';

const menuItems = [
  { label: 'Le Concept', href: '/#about' },
  { label: 'Nos Menus', href: '/#menu' },
  { label: 'Galerie', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const navHeight = window.innerWidth >= 640 ? 64 : 56;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-white'
      } ${isOpen ? 'nav-expanded' : ''}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 h-14 sm:h-16">
        <Link
          to="/#contact"
          onClick={handleLinkClick}
          className="group relative bg-rosso text-white font-medium text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2 rounded-btn overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-rosso whitespace-nowrap">
            Nous trouver
          </span>
          <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </Link>

        <Link
          to="/"
          onClick={() => {
            handleLinkClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <img
            src="https://charlypizza.github.io/assets/rosso-cafe-marseille-logo-rouge-barre-de-navigation.png"
            alt="ROSSO"
            className="h-8 sm:h-10 w-auto transition-opacity duration-300 hover:opacity-80"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rosso hover:text-accent transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <button
            onClick={handleMenuToggle}
            className={`group flex flex-col items-end gap-[5px] sm:gap-[6px] p-1.5 sm:p-2 ${isOpen ? 'hamburger-open' : ''}`}
            aria-label="Menu"
          >
            <span className="hamburger-line h-[2px] bg-rosso group-hover:bg-accent w-3 sm:w-4 block transition-colors duration-300" />
            <span className="hamburger-line h-[2px] bg-rosso group-hover:bg-accent w-5 sm:w-6 block transition-colors duration-300" />
            <span className="hamburger-line h-[2px] bg-rosso group-hover:bg-accent w-3 sm:w-4 block transition-colors duration-300" />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 h-10 sm:h-12 px-4 sm:px-6 flex-wrap">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={handleLinkClick}
              className="menu-item-wrapper text-rosso font-regular text-xs sm:text-sm relative"
            >
              <span className="menu-item-text menu-item-text-original">
                {item.label}
              </span>
              <span className="menu-item-text menu-item-text-clone">
                {item.label}
              </span>
              <span className="menu-underline" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
