import { Instagram as InstagramIcon } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/rossocafemarseille_/';

const photos = [
  'https://charlypizza.github.io/assets/rosso-cafe-marseille-coffee-shop-tendance-instagram-post.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-marseille-flatlay-cafe-sandwich-dessert.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-marseille-latte-art-cafe-specialite.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-marseille-ambiance-interieur-deco-design.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-marseille-equipe-barista-service-souriant.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-marseille-a-emporter-takeaway-cafe-sandwich.webp',
];

export default function Instagram() {
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="bg-rosso overflow-hidden">
      <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 text-center">
        <span className="text-accent font-light text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 block">
          @rossocafemarseille_
        </span>
        <h3 className="text-white font-medium text-xl sm:text-2xl mb-2 sm:mb-3">
          Suivez-nous
        </h3>
        <p className="text-white/70 font-light text-xs sm:text-sm mb-4 sm:mb-6 max-w-md mx-auto">
          Retrouvez notre quotidien et nos creations du moment
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block bg-white text-rosso font-medium text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-btn overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-rosso">
            Instagram
          </span>
          <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </a>
      </div>

      <div className="relative">
        <div className="flex animate-marquee-mobile sm:animate-marquee">
          {duplicatedPhotos.map((photo, index) => (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-56 sm:w-64 md:w-80 overflow-hidden group"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={photo}
                  alt={`Instagram post ${(index % photos.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
