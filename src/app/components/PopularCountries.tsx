import { ArrowRight } from 'lucide-react';

const countries = [
  {
    name: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1593387629494-b62649d80934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'USA study abroad process universities visa scholarships',
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/20/cambridge.JPG?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'UK study abroad process universities visa scholarships',
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1629038767056-cbd4df86332b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'Canada study abroad process universities visa scholarships',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1737160308734-6530e9a10f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'Australia study abroad process universities visa scholarships',
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'Singapore study abroad process universities visa scholarships',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'Germany study abroad process universities visa scholarships',
  },
  {
    name: 'France',
    flag: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'France study abroad process universities visa scholarships',
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'New Zealand study abroad process universities visa scholarships',
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'Ireland study abroad process universities visa scholarships',
  },
  {
    name: 'Europe',
    flag: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1591019052241-e4d95a5dc3fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    searchQuery: 'Europe study abroad process universities visa scholarships',
  },
];

export function PopularCountries() {
  const countryRoutes: { [key: string]: { route: string; available: boolean } } = {
    'United States': { route: 'usa-page', available: true },
    'United Kingdom': { route: 'uk-page', available: true },
    'Canada': { route: 'canada-page', available: true },
    'Australia': { route: 'australia-page', available: true },
    'Singapore': { route: 'singapore-page', available: true },
    'Germany': { route: 'germany-page', available: true },
    'France': { route: 'france-page', available: true },
    'New Zealand': { route: 'new-zealand-page', available: true },
    'Ireland': { route: 'ireland-page', available: true },
    'Europe': { route: 'europe-page', available: true },
  };

  const handleCountryClick = (country: string, searchQuery: string) => {
    const countryInfo = countryRoutes[country];
    if (countryInfo?.available) {
      window.location.hash = countryInfo.route;
    } else {
      // For countries not yet available, show coming soon or keep current behavior
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  return (
    <section id="countries" className="py-20 bg-[#0A2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white font-extrabold">
            Popular Countries
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore top study destinations around the world
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {countries.map((country, index) => {
              const countryInfo = countryRoutes[country.name];
              const isAvailable = countryInfo?.available || false;

              return (
                <div
                  key={index}
                  onClick={() => handleCountryClick(country.name, country.searchQuery)}
                  className={`w-80 bg-white rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer ${
                    isAvailable
                      ? 'hover:shadow-[0px_12px_32px_rgba(26,115,232,0.3)] hover:-translate-y-2 border-2 border-transparent hover:border-[#1A73E8]'
                      : 'hover:shadow-[0px_12px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1 opacity-90'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isAvailable ? 'hover:scale-110' : 'hover:scale-105'
                      }`}
                    />
                    <div className="absolute top-4 right-4 text-5xl">{country.flag}</div>
                    {isAvailable && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        ✓ Available
                      </div>
                    )}
                    {!isAvailable && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        Coming Soon
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-4 text-[#1C1C1C] font-bold">{country.name}</h3>
                    <div className={`flex items-center gap-2 transition-colors font-medium ${
                      isAvailable
                        ? 'text-[#1A73E8] hover:text-[#F4C430]'
                        : 'text-[#64748B] hover:text-[#1A73E8]'
                    }`}>
                      <span>{isAvailable ? 'Explore Now' : 'Learn More'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-6 text-white/60 text-sm">
          ← Scroll to explore more countries →
        </div>
      </div>
    </section>
  );
}
