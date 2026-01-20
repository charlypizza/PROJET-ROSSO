import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import { HeroPanel } from '../types/sanity';

const fallbackPanels = [
  'https://charlypizza.github.io/assets/rosso-cafe-canette-chocolat-chaud-boisson-gourmande.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-canette-blue-latte-vanille-boisson-signature.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-canette-golden-latte-vanille-curcuma.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-canette-ube-latte-vanille-boisson-violette.webp',
  'https://charlypizza.github.io/assets/rosso-cafe-canette-matcha-latte-vanille-the-vert.webp',
];

export default function Hero() {
  const [panels, setPanels] = useState<string[]>(fallbackPanels);

  useEffect(() => {
    async function fetchHeroPanels() {
      try {
        const data = await client.fetch<HeroPanel[]>(`*[_type == "heroPanel"] | order(_createdAt asc)`);
        
        if (data && data.length > 0) {
          const panelUrls = data.map(panel => {
            if (panel.imageUrl) {
              return panel.imageUrl;
            } else if (panel.image) {
              return urlFor(panel.image).url();
            }
            return '';
          }).filter(url => url !== '');
          
          if (panelUrls.length > 0) {
            setPanels(panelUrls);
          }
        }
      } catch (error) {
        console.error('Error fetching hero panels:', error);
      }
    }

    fetchHeroPanels();
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full">
      <div className="flex h-[calc(100%-4rem)] w-full pt-14 sm:pt-16 bg-black">
        {panels.map((image, index) => (
          <div
            key={index}
            className="flex-1 relative overflow-hidden -ml-px first:ml-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </div>

      <div className="h-16 bg-rosso flex items-center justify-center">
        <a href="#about" className="animate-bounce-arrow">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-accent" />
        </a>
      </div>
    </section>
  );
}