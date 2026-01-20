const INSTAGRAM_URL = 'https://www.instagram.com/rossocafemarseille_/';

const media = [
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-sandwichs-maison-faits-sur-place.webp',
    alt: 'Sandwich maison',
    isVideo: false,
  },
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-sandwich-gourmand-fait-maison.webp',
    alt: 'Burger maison',
    isVideo: false,
  },
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-coffee-shop-tendance-sandwichs-maison-boissons-qualite.webm',
    alt: 'Carrousel photo',
    isVideo: true,
  },
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-coffee-shop-moment-deguster-sur-place.webp',
    alt: 'Ambiance coffe shop',
    isVideo: false,
  },
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-video-concept-ambiance-deco-experience-client.webm',
    alt: 'Bento photo',
    isVideo: true,
  },
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-cafe-specialite-boisson-chaude.webp',
    alt: 'Coffee',
    isVideo: false,
  },
  {
    url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-dessert-gourmand-fait-maison.webp',
    alt: 'Dessert maison',
    isVideo: false,
  },
];

const gridPositions = [
  'md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3',
  'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2',
  'md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3',
  'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3',
  'md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4',
  'md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4',
  'md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4',
];

function MediaItem({ item }: { item: typeof media[0] }) {
  if (item.isVideo) {
    return (
      <video
        src={item.url}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return (
    <img
      src={item.url}
      alt={item.alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-rosso">
      <div className="gallery-grid">
        {media.map((item, index) => {
          let cellClasses = '';

          if (index === 0) {
            cellClasses = 'col-span-2 row-span-2';
          } else if (index === 2) {
            cellClasses = 'row-span-2';
          } else if (index === 5) {
            cellClasses = 'col-span-2';
          }

          let orderClass = '';
          if (index === 5) orderClass = 'order-[7] sm:order-[7] md:order-none';
          if (index === 6) orderClass = 'order-[6] sm:order-[6] md:order-none';

          return (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`overflow-hidden group ${cellClasses} ${gridPositions[index]} ${orderClass}`}
            >
              <MediaItem item={item} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
