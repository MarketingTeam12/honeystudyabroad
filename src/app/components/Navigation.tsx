import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import honeyLogo from '../../imports/header-study-abroad.png';
import { getPageFromHash } from '../utils/pageRoutes';

interface NavigationProps {
  onEnquiryClick: () => void;
  activePage?: string;
}

const services = [
  { name: 'India Admission', icon: 'IN', path: '/india-admission' },
  { name: 'Visa Assistance', icon: 'VA', path: '/visa-assistance' },
  { name: 'University Admissions', icon: 'UA', path: '/university-admissions' },
  { name: 'Scholarship Guidance', icon: 'SG', path: '/scholarship-guidance' },
  { name: 'Language Test Prep', icon: 'LT', path: '/ielts-test-prep' },
  { name: 'Pre-Departure Briefing', icon: 'PD', path: '/pre-departure' },
  { name: 'Career Counseling', icon: 'CC', path: '/career-counseling' },
];

const countries = [
  { name: 'USA', flag: 'US', path: '/usa', available: true },
  { name: 'UK', flag: 'UK', path: '/uk', available: true },
  { name: 'Canada', flag: 'CA', path: '/canada', available: true },
  { name: 'Australia', flag: 'AU', path: '/australia', available: true },
  { name: 'Singapore', flag: 'SG', path: '/singapore', available: true },
  { name: 'Germany', flag: 'DE', path: '/germany', available: true },
  { name: 'France', flag: 'FR', path: '/france', available: true },
  { name: 'New Zealand', flag: 'NZ', path: '/new-zealand', available: true },
  { name: 'Ireland', flag: 'IE', path: '/ireland', available: true },
  { name: 'Europe', flag: 'EU', path: '/europe', available: true },
];

const HOME_SECTIONS = ['home', 'about', 'services', 'countries', 'contact'] as const;
const NAVBAR_OFFSET = 88;

export function Navigation({ onEnquiryClick, activePage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsCountriesOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') {
      return false;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }

    const element = document.getElementById(sectionId);
    if (!element) {
      return false;
    }

    const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET);
    window.scrollTo({ top, behavior: 'smooth' });
    return true;
  };

  const isStandalonePage = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    return pathname !== '/';
  };

  const navigateToRootHash = (hash: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    const normalizedHash = hash ? `#${hash}` : '';
    const targetUrl = `/${normalizedHash}`;
    if (`${window.location.pathname}${window.location.hash}` === targetUrl) {
      return;
    }

    window.location.href = targetUrl;
  };

  const updateHash = (hash: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    if (isStandalonePage()) {
      navigateToRootHash(hash);
      return;
    }

    const currentHash = window.location.hash.slice(1);
    if (currentHash === hash) {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      return;
    }

    window.location.hash = hash;
  };

  const navigateToPath = (path: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.pathname === path && !window.location.hash) {
      return;
    }

    window.location.href = path;
  };

  const navigateToHomeSection = (sectionId: typeof HOME_SECTIONS[number]) => {
    closeMenus();

    if (typeof window === 'undefined') {
      return;
    }

    if (isStandalonePage()) {
      navigateToRootHash(sectionId);
      return;
    }

    const currentHash = window.location.hash.slice(1);
    const isHomeView = getPageFromHash(currentHash) === 'home';

    if (isHomeView && scrollToSection(sectionId)) {
      if (currentHash !== sectionId) {
        window.history.replaceState(null, '', `#${sectionId}`);
      }
      return;
    }

    updateHash(sectionId);
  };

  const handleCountryClick = (path: string) => {
    closeMenus();
    navigateToPath(path);
  };

  const handleServiceClick = (path: string) => {
    closeMenus();
    navigateToPath(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (countriesRef.current && !countriesRef.current.contains(event.target as Node)) {
        setIsCountriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (page: string) => activePage === page;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[92px]">
          <button type="button" onClick={() => void navigateToHomeSection('home')} className="flex items-center">
            <img
              src={honeyLogo.src}
              alt="Honey Translation Services"
              className="h-24 w-auto object-contain"
            />
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <button
              type="button"
              onClick={() => void navigateToHomeSection('home')}
              className={`text-[16px] font-medium transition-colors ${
                isActive('home')
                  ? 'text-[#0A2472] border-b-2 border-[#F4C430]'
                  : 'text-[#0F172A] hover:text-[#2563EB]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => void navigateToHomeSection('about')}
              className={`text-[16px] font-medium transition-colors ${
                isActive('about')
                  ? 'text-[#0A2472] border-b-2 border-[#F4C430]'
                  : 'text-[#0F172A] hover:text-[#2563EB]'
              }`}
            >
              About
            </button>

            <div ref={servicesRef} className="relative flex items-center gap-1">
              <button
                type="button"
                onClick={() => void navigateToHomeSection('services')}
                className={`text-[16px] font-medium transition-colors ${
                  isActive('services')
                    ? 'text-[#0A2472] border-b-2 border-[#F4C430]'
                    : 'text-[#0F172A] hover:text-[#2563EB]'
                }`}
              >
                Services
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                  setIsCountriesOpen(false);
                }}
                className={`flex items-center transition-colors ${
                  isActive('services')
                    ? 'text-[#0A2472]'
                    : 'text-[#0F172A] hover:text-[#2563EB]'
                }`}
                aria-label="Toggle services menu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-lg shadow-[0px_12px_32px_rgba(0,0,0,0.15)] border-t-[3px] border-[#F4C430] overflow-hidden animate-slideDown">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service.name}
                      onClick={() => void handleServiceClick(service.path)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-[#1C1C1C] hover:bg-[#EBF2FF] hover:border-l-[3px] hover:border-l-[#F4C430] transition-all text-left"
                    >
                      <span className="text-xs font-bold rounded-md bg-slate-100 px-2 py-1 text-slate-700">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div ref={countriesRef} className="relative flex items-center gap-1">
              <button
                type="button"
                onClick={() => void navigateToHomeSection('countries')}
                className={`text-[16px] font-medium transition-colors ${
                  isActive('countries')
                    ? 'text-[#0A2472] border-b-2 border-[#F4C430]'
                    : 'text-[#0F172A] hover:text-[#2563EB]'
                }`}
              >
                Countries
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsCountriesOpen(!isCountriesOpen);
                  setIsServicesOpen(false);
                }}
                className={`flex items-center transition-colors ${
                  isActive('countries')
                    ? 'text-[#0A2472]'
                    : 'text-[#0F172A] hover:text-[#2563EB]'
                }`}
                aria-label="Toggle countries menu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isCountriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCountriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[360px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E5E9F2] overflow-hidden animate-slideDown">
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-2">
                      {countries.map((country) => (
                        <button
                          type="button"
                          key={country.name}
                          onClick={() => void handleCountryClick(country.path)}
                          disabled={!country.available}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                            country.available
                              ? 'bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] hover:from-[#1E40AF] hover:to-[#3B82F6] text-[#1E40AF] hover:text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                              : 'bg-[#F8FAFC] text-[#94A3B8] cursor-not-allowed opacity-60'
                          }`}
                        >
                          <span className="text-xs font-bold rounded-md bg-white/80 px-2 py-1">{country.flag}</span>
                          <div className="flex-1">
                            <span className="block font-semibold text-[14px]">{country.name}</span>
                            {!country.available && (
                              <span className="text-[10px] text-[#64748B]">Coming Soon</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => void navigateToHomeSection('contact')}
              className={`text-[16px] font-medium transition-colors ${
                isActive('contact')
                  ? 'text-[#0A2472] border-b-2 border-[#F4C430]'
                  : 'text-[#0F172A] hover:text-[#2563EB]'
              }`}
            >
              Contact
            </button>

            <button
              onClick={onEnquiryClick}
              className="bg-gradient-to-r from-[#F4C430] to-[#F4A430] text-[#0A2472] px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Free Counselling
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#0F172A]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-gray-200 bg-white">
            <button
              type="button"
              onClick={() => void navigateToHomeSection('home')}
              className={`block font-medium transition-colors ${
                isActive('home') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => void navigateToHomeSection('about')}
              className={`block font-medium transition-colors ${
                isActive('about') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
              }`}
            >
              About
            </button>

            <div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => void navigateToHomeSection('services')}
                  className={`text-left font-medium transition-colors ${
                    isActive('services') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
                  }`}
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`transition-colors ${
                    isActive('services') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
                  }`}
                  aria-label="Toggle services menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service.name}
                      onClick={() => void handleServiceClick(service.path)}
                      className="block w-full text-left text-[#1C1C1C] hover:text-[#0A2472] transition-colors text-sm py-1"
                    >
                      {service.icon} {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => void navigateToHomeSection('countries')}
                  className={`text-left font-medium transition-colors ${
                    isActive('countries') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
                  }`}
                >
                  Countries
                </button>
                <button
                  type="button"
                  onClick={() => setIsCountriesOpen(!isCountriesOpen)}
                  className={`transition-colors ${
                    isActive('countries') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
                  }`}
                  aria-label="Toggle countries menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCountriesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isCountriesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {countries.map((country) => (
                    <button
                      type="button"
                      key={country.name}
                      onClick={() => country.available && handleCountryClick(country.path)}
                      disabled={!country.available}
                      className={`w-full text-left flex items-center gap-2 text-sm transition-colors ${
                        country.available
                          ? 'text-[#1C1C1C] hover:text-[#0A2472] cursor-pointer'
                          : 'text-[#94A3B8] cursor-not-allowed'
                      }`}
                    >
                      {country.flag} {country.name}
                      {!country.available && <span className="text-xs">(Soon)</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => void navigateToHomeSection('contact')}
              className={`block font-medium transition-colors ${
                isActive('contact') ? 'text-[#0A2472] font-semibold' : 'text-[#0F172A] hover:text-[#2563EB]'
              }`}
            >
              Contact
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onEnquiryClick();
              }}
              className="w-full bg-gradient-to-r from-[#F4C430] to-[#F4A430] text-[#0A2472] px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Free Counselling
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
