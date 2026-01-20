import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuSubcategory, MenuItem } from '../types/sanity';

type SandwichItem = {
  title?: string;
  description?: string[];
};

type SandwichSection = {
  barTitle?: string;
  subtitle?: string;
  items: SandwichItem[];
  footer?: string;
};

type DrinkItem = {
  name?: string;
  variant?: string;
};

type DrinkSection = {
  title?: string;
  subtitle?: string;
  items: DrinkItem[];
};

// Fallback data
const fallbackSandoBar: SandwichSection = {
  barTitle: 'SANDO BAR',
  subtitle: 'SANDWICHES FROIDS A BASE DE PAIN JAPONAIS',
  items: [
    {
      title: 'HALLOUMI (VG)',
      description: [
        'HALLOUMI, TOMATES SÉCHÉES, SALADE,',
        'MENTHE, OIGNON ROUGE, CONCOMBRE',
      ],
    },
    {
      title: 'SPICY TUNA',
      description: [
        'FARCI DE THON À LA MENTHE,',
        'OIGNON ROUGE, SAUCE SHIRASHA, CONCOMBRE',
      ],
    },
    {
      title: 'KATSU',
      description: [
        'POULET PANÉ, CHOU BLANC,',
        'SALADE DE CHOU ROUGE CAROTTE',
      ],
    },
    {
      title: 'EGG & CHEESE',
      description: [
        'BROUILLADE D\'OEUFS,',
        'TARTUFFADE, CREAM CHEESE',
      ],
    },
    {
      title: 'LE BLT',
      description: [
        'BACON (POITRINE DE BOEUF),',
        'LAITUE, TOMATES & MAYO EPICÉE',
      ],
    },
  ],
};

const fallbackDwichesBar: SandwichSection = {
  barTitle: 'DWICHES BAR',
  subtitle: 'SANDWICHES CHAUDS DANS UNE BONNE BAGUETTE',
  items: [
    {
      title: 'LE MEATBALL',
      description: [
        'BOULETTES DE VIANDE, SAUCE TOMATE',
        '& MOZZARELLA GRATINÉE',
      ],
    },
    {
      title: 'LA BAVETTE SUPRÊME',
      description: [
        'BAVETTE, CHEDDAR & COMPOTÉE D\'OIGNONS',
      ],
    },
    {
      title: 'SUGGESTION ROSSO',
      description: [
        'EN FONCTION DE L\'INSPIRATION DU CHEF',
      ],
    },
  ],
  footer: 'LE VRAI GOUT D\'UNE PAUSE',
};

const fallbackDrinksData: Record<string, DrinkSection> = {
  coffeeBar: {
    title: 'COFFEE BAR',
    items: [
      { name: 'EXPRESSO' },
      { name: 'DOUBLE' },
      { name: 'MACCHIATO' },
      { name: 'CAPPUCCINO' },
      { name: 'FLAT WHITE' },
      { name: 'LATTE', variant: 'VANILLE, CINNAMON' },
    ],
  },
  matchaBar: {
    title: 'MATCHA BAR',
    items: [
      { name: 'ORIGINAL MATCHA' },
      { name: 'MATCHA LATTE' },
      { name: 'MATCHA LATTE VANILLE' },
      { name: 'MATCHA COCONUT WATER' },
      { name: 'DIRTY MATCHA LATTE' },
    ],
  },
  sesameBar: {
    title: 'SESAME BAR',
    items: [
      { name: 'BLACK LATTE' },
      { name: 'DIRTY BLACK LATTE' },
    ],
  },
  blueBar: {
    title: 'BLUE BAR',
    subtitle: 'UNE BOISSON A BASE DE SPIRULINE',
    items: [
      { name: 'BLUE LATTE VANILLE' },
      { name: 'BLUE COCONUT WATER' },
    ],
  },
  chocolatBar: {
    title: 'CHOCOLAT BAR',
    items: [
      { name: 'HOT CHOCOLAT' },
      { name: 'HOT BOUNTY', variant: 'WITH COCO MILK' },
      { name: 'DIRTY HOT CHOCOLAT' },
    ],
  },
  ubeBar: {
    title: 'UBE BAR',
    subtitle: 'BOISSON SPÉCIFIQUE A BASE D\'IGNAME VIOLETTE.',
    items: [
      { name: 'UBE LATTE' },
      { name: 'UBE LATTE VANILLE' },
      { name: 'DIRTY UBE LATTE' },
      { name: 'UBE COCONUT WATER' },
    ],
  },
  goldenBar: {
    title: 'GOLDEN BAR',
    subtitle: 'BOISSON AU CURCUMA QUI POSSÈDE MILLE VERTUS',
    items: [
      { name: 'GOLDEN LATTE' },
      { name: 'GOLDEN AMERICANO' },
      { name: 'GOLDEN LATTE VANILLE' },
      { name: 'DIRTY GOLDEN LATTE' },
    ],
  },
};

function SandwichCard({ barTitle, subtitle, items, footer }: SandwichSection) {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 text-center flex flex-col h-full">
      <h2 className="text-rosso font-bold text-2xl sm:text-3xl mb-2">
        {barTitle}
      </h2>
      <p className="text-black font-bold text-[7px] sm:text-[8px] mb-6 sm:mb-8">
        {subtitle}
      </p>

      <div className="space-y-5 sm:space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-rosso font-bold text-base sm:text-lg mb-1">
              {item.title}
            </h3>
            <div className="text-black font-bold text-[10px] sm:text-xs">
              {item.description?.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {footer && (
        <p className="text-rosso font-bold text-base sm:text-lg mt-auto pt-8 sm:pt-10">
          {footer}
        </p>
      )}
    </div>
  );
}

function DrinkCategory({ title, subtitle, items }: DrinkSection) {
  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-rosso font-bold text-base sm:text-lg mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-black text-[7px] sm:text-[8px] mb-2">
          {subtitle}
        </p>
      )}
      {items.length > 0 && (
        <div className="space-y-1">
          {items.map((item, index) => (
            <p key={index} className="text-black font-bold text-[10px] sm:text-xs">
              {item.name}
              {item.variant && (
                <span className="text-rosso font-bold text-[8px] sm:text-[10px] ml-2">
                  {item.variant}
                </span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

type MenuType = 'boissons' | 'sandwichs';

type MenuModalProps = {
  isOpen: boolean;
  menuType: MenuType;
  menuData: {
    boissons: {
      subcategories?: MenuSubcategory[];
    };
    sandwichs: {
      subcategories?: MenuSubcategory[];
    };
  };
  onClose: () => void;
  onNavigate: (type: MenuType) => void;
};

export default function MenuModal({ isOpen, menuType, menuData, onClose, onNavigate }: MenuModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onNavigate(menuType === 'boissons' ? 'sandwichs' : 'boissons');
    } else if (e.key === 'ArrowRight') {
      onNavigate(menuType === 'boissons' ? 'sandwichs' : 'boissons');
    }
  }, [menuType, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const goToPrevious = () => {
    onNavigate(menuType === 'boissons' ? 'sandwichs' : 'boissons');
  };

  const goToNext = () => {
    onNavigate(menuType === 'boissons' ? 'sandwichs' : 'boissons');
  };

  // Process sandwich data
  const sandwichSubcategories = menuData.sandwichs.subcategories || [];
  const sandoBar = sandwichSubcategories[0] || fallbackSandoBar;
  const dwichesBar = sandwichSubcategories[1] || fallbackDwichesBar;

  const sandoData: SandwichSection = {
    barTitle: sandoBar.barTitle || fallbackSandoBar.barTitle,
    subtitle: sandoBar.subtitle || fallbackSandoBar.subtitle,
    footer: sandoBar.footer,
    items: sandoBar.items?.map(item => ({
      title: item.title,
      description: item.description,
    })) || fallbackSandoBar.items,
  };

  const dwichesData: SandwichSection = {
    barTitle: dwichesBar.barTitle || fallbackDwichesBar.barTitle,
    subtitle: dwichesBar.subtitle || fallbackDwichesBar.subtitle,
    footer: dwichesBar.footer || fallbackDwichesBar.footer,
    items: dwichesBar.items?.map(item => ({
      title: item.title,
      description: item.description,
    })) || fallbackDwichesBar.items,
  };

  // Process drinks data
  const drinksSubcategories = menuData.boissons.subcategories || [];
  const drinksData: Record<string, DrinkSection> = {};

  drinksSubcategories.forEach((subcategory, index) => {
    const key = Object.keys(fallbackDrinksData)[index] || `category${index}`;
    drinksData[key] = {
      title: subcategory.barTitle || subcategory.name,
      subtitle: subcategory.subtitle,
      items: subcategory.items?.map(item => ({
        name: item.name || item.title,
        variant: item.variant,
      })) || [],
    };
  });

  // Use fallback if no data from Sanity
  const finalDrinksData = Object.keys(drinksData).length > 0 ? drinksData : fallbackDrinksData;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Menu precedent"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Menu suivant"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <div
        className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {menuType === 'sandwichs' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <SandwichCard {...sandoData} />
            <SandwichCard {...dwichesData} />
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div>
                {Object.entries(finalDrinksData).slice(0, 4).map(([key, data]) => (
                  <DrinkCategory key={key} {...data} />
                ))}
              </div>

              <div>
                {Object.entries(finalDrinksData).slice(4).map(([key, data]) => (
                  <DrinkCategory key={key} {...data} />
                ))}

                <div className="mt-6 sm:mt-8 space-y-1">
                  <p className="text-black font-bold text-[10px] sm:text-xs">
                    DIRTY : SHOT DE CAFE
                  </p>
                  <p className="text-black font-bold text-[10px] sm:text-xs">
                    ALL OUR DRINKS ARE AVAILABLE HOT OR COLD.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-rosso font-bold text-base sm:text-lg">
                LE VRAI GOUT D'UNE PAUSE
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}