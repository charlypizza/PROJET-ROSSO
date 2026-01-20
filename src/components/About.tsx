import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import { AboutSection } from '../types/sanity';

const fallbackData = {
  topLabel: '29 Rue Pavillon',
  title: 'Le Concept',
  paragraphs: [
    'ROSSO c\'est un lieu chaleureux de partage et de gourmandise.',
    'Entre déco rouge et clins d\'œil à nos chambres d\'ado, sens-toi comme à la maison.',
    'Pâtisseries, boissons de notre barista et sandwichs généreux sont disponibles toute la journée.',
    'Au cœur de Marseille, Rosso est ton nouveau QG solaire, mêlant café de spécialité et détente absolue.',
    'Bosse, papote, prends du bon temps… on s\'occupe du reste.',
  ],
  imageUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-interieur-coffee-shop-tendance.webp',
  schedule: {
    weekdays: 'Lun - Sam : 8h - 20h',
    sunday: 'Dimanche : Ferme',
  },
  contactInstagram: '@rossocafemarseille_',
  contactInstagramUrl: 'https://www.instagram.com/rossocafemarseille_',
  mapUrl: 'https://maps.app.goo.gl/2GWWxjoKGWEA6sx59',
  mapButtonText: 'Nous trouver',
};

export default function About() {
  const [aboutData, setAboutData] = useState(fallbackData);

  useEffect(() => {
    async function fetchAboutSection() {
      try {
        const data = await client.fetch<AboutSection>(`*[_type == "aboutSection"][0]`);
        
        if (data) {
          const imageUrl = data.imageUrl || (data.image ? urlFor(data.image).url() : fallbackData.imageUrl);
          
          setAboutData({
            topLabel: data.topLabel || fallbackData.topLabel,
            title: data.title || fallbackData.title,
            paragraphs: data.paragraphs || fallbackData.paragraphs,
            imageUrl,
            schedule: data.schedule || fallbackData.schedule,
            contactInstagram: data.contactInstagram || fallbackData.contactInstagram,
            contactInstagramUrl: data.contactInstagramUrl || fallbackData.contactInstagramUrl,
            mapUrl: data.mapUrl || fallbackData.mapUrl,
            mapButtonText: data.mapButtonText || fallbackData.mapButtonText,
          });
        }
      } catch (error) {
        console.error('Error fetching about section:', error);
      }
    }

    fetchAboutSection();
  }, []);

  return (
    <section id="about" className="bg-rosso">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[55vh] lg:h-auto lg:min-h-[350px] m-3 sm:m-6 lg:m-16">
          <img
            src={aboutData.imageUrl}
            alt="Panneau ROSSO cafe"
            className="absolute inset-0 w-full h-full object-contain lg:object-cover rounded-2xl"
          />
        </div>

        <div className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28 flex flex-col justify-center">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase">
                {aboutData.topLabel}
              </span>
            </div>

            <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium mb-10 tracking-tight leading-none whitespace-nowrap">
              {aboutData.title}
            </h2>

            <div className="space-y-6 text-white/70 font-light text-base leading-relaxed mb-14">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 ? (
                    <>
                      <span className="text-white">ROSSO</span> {paragraph.replace('ROSSO', '').trim()}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-14">
              <div>
                <span className="text-accent text-xs tracking-[0.2em] uppercase block mb-3">
                  Horaires
                </span>
                <div className="text-white/80 text-sm font-light space-y-1">
                  <p>{aboutData.schedule?.weekdays}</p>
                  <p>{aboutData.schedule?.sunday}</p>
                </div>
              </div>

              <div>
                <span className="text-accent text-xs tracking-[0.2em] uppercase block mb-3">
                  Contact
                </span>
                <div className="text-white/80 text-sm font-light space-y-1">
                  <a
                    href={aboutData.contactInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {aboutData.contactInstagram}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={aboutData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center lg:justify-start gap-3 text-white hover:text-accent transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide">
                {aboutData.mapButtonText}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}