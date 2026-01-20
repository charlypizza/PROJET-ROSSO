import { useState, useEffect } from 'react';
import MenuModal from './MenuModal';
import { client, urlFor } from '../lib/sanity';
import { MenuCategory } from '../types/sanity';

type MenuType = 'boissons' | 'sandwichs';

const fallbackMenus = {
  boissons: {
    name: 'Boissons',
    displayName: 'Boissons',
    videoUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-preparation-boissons-specialites-video.webm',
    subcategories: [],
  },
  sandwichs: {
    name: 'Sandwichs',
    displayName: 'Sandwichs',
    imageUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-menu-sandwichs-maison-carte.webp',
    subcategories: [],
  },
};

export default function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>('boissons');
  const [menus, setMenus] = useState(fallbackMenus);

  useEffect(() => {
    async function fetchMenuCategories() {
      try {
        const data = await client.fetch<MenuCategory[]>(`
          *[_type == "menuCategory"] {
            _id,
            name,
            displayName,
            slug,
            image,
            videoUrl,
            imageUrl,
            "subcategories": subcategories[]-> {
              _id,
              name,
              barTitle,
              subtitle,
              footer,
              "items": items[]-> {
                _id,
                name,
                title,
                description,
                variant
              }
            }
          }
        `);

        if (data && data.length > 0) {
          const boissonsCategory = data.find(cat => cat.slug?.current === 'boissons');
          const sandwichsCategory = data.find(cat => cat.slug?.current === 'sandwichs');

          const updatedMenus = { ...fallbackMenus };

          if (boissonsCategory) {
            updatedMenus.boissons = {
              name: boissonsCategory.name || fallbackMenus.boissons.name,
              displayName: boissonsCategory.displayName || fallbackMenus.boissons.displayName,
              videoUrl: boissonsCategory.videoUrl || fallbackMenus.boissons.videoUrl,
              subcategories: boissonsCategory.subcategories || [],
            };
          }

          if (sandwichsCategory) {
            const imageUrl = sandwichsCategory.imageUrl || 
              (sandwichsCategory.image ? urlFor(sandwichsCategory.image).url() : fallbackMenus.sandwichs.imageUrl);

            updatedMenus.sandwichs = {
              name: sandwichsCategory.name || fallbackMenus.sandwichs.name,
              displayName: sandwichsCategory.displayName || fallbackMenus.sandwichs.displayName,
              imageUrl,
              subcategories: sandwichsCategory.subcategories || [],
            };
          }

          setMenus(updatedMenus);
        }
      } catch (error) {
        console.error('Error fetching menu categories:', error);
      }
    }

    fetchMenuCategories();
  }, []);

  const openMenu = (type: MenuType) => {
    setActiveMenu(type);
    setModalOpen(true);
  };

  const handleNavigate = (type: MenuType) => {
    setActiveMenu(type);
  };

  return (
    <section id="menu" className="pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 bg-rosso">
      <div className="max-w-5xl mx-auto">
        <div className="text-left sm:text-center mb-8 sm:mb-12">
          <span className="text-accent font-light text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            Nos creations
          </span>
          <h2 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl">
            Nos Menus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <button
            onClick={() => openMenu('boissons')}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] sm:aspect-[4/5] block text-left"
          >
            {menus.boissons.videoUrl ? (
              <video
                src={menus.boissons.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gray-800" />
            )}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-accent font-light text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2">
                Decouvrir
              </span>
              <h3 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl">
                {menus.boissons.displayName}
              </h3>
              <div className="mt-4 sm:mt-6 w-10 sm:w-12 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </button>

          <button
            onClick={() => openMenu('sandwichs')}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] sm:aspect-[4/5] block text-left"
          >
            <img
              src={menus.sandwichs.imageUrl}
              alt="Nos sandwichs"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-accent font-light text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2">
                Decouvrir
              </span>
              <h3 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl">
                {menus.sandwichs.displayName}
              </h3>
              <div className="mt-4 sm:mt-6 w-10 sm:w-12 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </button>
        </div>
      </div>

      <MenuModal
        isOpen={modalOpen}
        menuType={activeMenu}
        menuData={menus}
        onClose={() => setModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}