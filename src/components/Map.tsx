import { MapPin, Navigation } from 'lucide-react';


export default function Map() {
  const address = '29 Rue Pavillon';
  const mapsUrl = 'https://maps.app.goo.gl/2GWWxjoKGWEA6sx59';

  return (
    <section id="contact" className="bg-rosso">
      <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <span className="text-accent font-light text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            Venez nous voir
          </span>
          <h2 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            Nous Trouver
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/80 font-light text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.9673772893487!2d5.373771776669766!3d43.29548927913038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0cc9d1d0a9d%3A0x5c4b8b8b8b8b8b8b!2s29%20Rue%20Pavillon%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1703764800000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ROSSO Marseille Location"
        />

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center bg-rosso text-white font-medium text-xs sm:text-sm px-5 sm:px-8 py-2 sm:py-3 rounded-btn overflow-hidden shadow-lg"
          >
            <div className="relative z-10 w-3 sm:w-0 sm:group-hover:w-4 overflow-hidden transition-all duration-300 ease-out">
              <Navigation className="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 group-hover:text-rosso" />
            </div>
            <div className="w-2 sm:w-0 sm:group-hover:w-2 transition-all duration-300 ease-out" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-rosso">
              Itineraire
            </span>
            <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </div>
    </section>
  );
}
