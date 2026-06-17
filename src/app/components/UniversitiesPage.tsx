import { ArrowRight } from 'lucide-react';
import { getUniversityDetailUrl } from '../utils/universityUtils';

interface University {
  name: string;
  country: string;
  flag: string;
  image: string;
  searchUrl: string;
}

const universities: University[] = [
  // USA (5)
  { name: 'MIT', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=MIT+study+abroad+admission' },
  { name: 'Harvard University', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=Harvard+University+study+abroad' },
  { name: 'Stanford University', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1519167758481-83f29da8dd8f?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=Stanford+University+study+abroad' },
  { name: 'UC Berkeley', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=UC+Berkeley+study+abroad' },
  { name: 'Columbia University', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=Columbia+University+study+abroad' },

  // UK (5)
  { name: 'University of Oxford', country: 'UK', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1588965850265-f2d51ea30e48?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=University+of+Oxford+study+abroad' },
  { name: 'University of Cambridge', country: 'UK', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1606155661599-0cca2bc5892f?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=University+of+Cambridge+study+abroad' },
  { name: 'Imperial College London', country: 'UK', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=Imperial+College+London+study+abroad' },
  { name: 'University College London (UCL)', country: 'UK', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1529655683842-98d4a3100d88?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=UCL+London+study+abroad' },
  { name: 'University of Edinburgh', country: 'UK', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1556742400-b5ad8e246a88?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=University+of+Edinburgh+study+abroad' },

  // Canada (3)
  { name: 'University of Toronto', country: 'Canada', flag: '🇨🇦', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=University+of+Toronto+study+abroad' },
  { name: 'University of British Columbia (UBC)', country: 'Canada', flag: '🇨🇦', image: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=UBC+Vancouver+study+abroad' },
  { name: 'McGill University', country: 'Canada', flag: '🇨🇦', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=McGill+University+study+abroad' },

  // Australia (3)
  { name: 'University of Melbourne', country: 'Australia', flag: '🇦🇺', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=University+of+Melbourne+study+abroad' },
  { name: 'Australian National University (ANU)', country: 'Australia', flag: '🇦🇺', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=Australian+National+University+study+abroad' },
  { name: 'University of Sydney', country: 'Australia', flag: '🇦🇺', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=University+of+Sydney+study+abroad' },

  // Germany (2)
  { name: 'Technical University of Munich (TUM)', country: 'Germany', flag: '🇩🇪', image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=TU+Munich+study+abroad' },
  { name: 'Heidelberg University', country: 'Germany', flag: '🇩🇪', image: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=Heidelberg+University+study+abroad' },

  // Singapore (2)
  { name: 'National University of Singapore (NUS)', country: 'Singapore', flag: '🇸🇬', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=NUS+Singapore+study+abroad' },
  { name: 'Nanyang Technological University (NTU)', country: 'Singapore', flag: '🇸🇬', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=240&fit=crop', searchUrl: 'https://www.google.com/search?q=NTU+Singapore+study+abroad' },
];

export function UniversitiesPage() {
  const handleUniversityClick = (universityName: string) => {
    window.location.href = getUniversityDetailUrl(universityName);
  };

  return (
    <section id="universities" className="py-20 bg-[#0A2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white font-extrabold">
            Top Universities Worldwide
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore 20 world-class institutions across 6 countries
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {universities.map((university, index) => (
              <div
                key={index}
                onClick={() => handleUniversityClick(university.name)}
                className="w-80 bg-white rounded-2xl overflow-hidden shadow-[0px_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0px_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 text-5xl">{university.flag}</div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-4 text-[#1C1C1C] font-bold">{university.name}</h3>
                  <div className="flex items-center gap-2 text-[#1A73E8] hover:text-[#F4C430] transition-colors font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-6 text-white/60 text-sm">
          ← Scroll to explore more universities →
        </div>
      </div>
    </section>
  );
}
