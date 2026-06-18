import { Award, BookOpen, BriefcaseBusiness, Building2, ChevronDown, GraduationCap, Menu, PlaneTakeoff, ShieldCheck, X } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import honeyLogo from '../../imports/header-study-abroad.png';
import { getPageFromHash } from '../utils/pageRoutes';

interface NavigationProps {
  onEnquiryClick: () => void;
  activePage?: string;
}

const services = [
  { name: 'India Admission', icon: <GraduationCap className="h-4 w-4" />, path: '/india-admission' },
  { name: 'Visa Assistance', icon: <ShieldCheck className="h-4 w-4" />, path: '/visa-assistance' },
  { name: 'University Admissions', icon: <Building2 className="h-4 w-4" />, path: '/university-admissions' },
  { name: 'Scholarship Guidance', icon: <Award className="h-4 w-4" />, path: '/scholarship-guidance' },
  { name: 'Language Test Prep', icon: <BookOpen className="h-4 w-4" />, path: '/ielts-test-prep' },
  { name: 'Pre-Departure Briefing', icon: <PlaneTakeoff className="h-4 w-4" />, path: '/pre-departure' },
  { name: 'Career Counseling', icon: <BriefcaseBusiness className="h-4 w-4" />, path: '/career-counseling' },
];

const countries = [
  { name: 'USA', flag: 'us', path: '/usa', available: true },
  { name: 'UK', flag: 'gb', path: '/uk', available: true },
  { name: 'Canada', flag: 'ca', path: '/canada', available: true },
  { name: 'Australia', flag: 'au', path: '/australia', available: true },
  { name: 'Singapore', flag: 'sg', path: '/singapore', available: true },
  { name: 'Germany', flag: 'de', path: '/germany', available: true },
  { name: 'France', flag: 'fr', path: '/france', available: true },
  { name: 'New Zealand', flag: 'nz', path: '/new-zealand', available: true },
  { name: 'Ireland', flag: 'ie', path: '/ireland', available: true },
  { name: 'Europe', flag: 'eu', path: '/europe', available: true },
];

const HOME_SECTIONS = ['home', 'about', 'services', 'countries', 'contact'] as const;
const NAVBAR_OFFSET = 88;

export function Navigation({ onEnquiryClick, activePage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countriesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenus = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    if (countriesCloseTimerRef.current) {
      clearTimeout(countriesCloseTimerRef.current);
      countriesCloseTimerRef.current = null;
    }
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
        if (servicesCloseTimerRef.current) {
          clearTimeout(servicesCloseTimerRef.current);
          servicesCloseTimerRef.current = null;
        }
        setIsServicesOpen(false);
      }
      if (countriesRef.current && !countriesRef.current.contains(event.target as Node)) {
        if (countriesCloseTimerRef.current) {
          clearTimeout(countriesCloseTimerRef.current);
          countriesCloseTimerRef.current = null;
        }
        setIsCountriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (servicesCloseTimerRef.current) {
        clearTimeout(servicesCloseTimerRef.current);
        servicesCloseTimerRef.current = null;
      }
      if (countriesCloseTimerRef.current) {
        clearTimeout(countriesCloseTimerRef.current);
        countriesCloseTimerRef.current = null;
      }
    };
  }, []);

  const isActive = (page: string) => activePage === page;
  const renderFlag = (flagCode: string, sizeClassName: string) => {
    const commonProps = {
      "aria-hidden": true,
      className: `${sizeClassName} shadow-sm`,
      viewBox: "0 0 64 64",
      xmlns: "http://www.w3.org/2000/svg" as const,
    };

    switch (flagCode) {
      case "us":
        return (
          <svg {...commonProps}>
            <rect width="64" height="64" fill="#ffffff" />
            {Array.from({ length: 7 }).map((_, index) => (
              <rect key={index} y={index * 9.14} width="64" height="4.57" fill="#dc2626" />
            ))}
            <rect width="28" height="24" fill="#1e3a8a" />
            {Array.from({ length: 3 }).map((_, row) =>
              Array.from({ length: 4 }).map((__, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={5 + col * 6}
                  cy={4.5 + row * 6}
                  r="0.9"
                  fill="#ffffff"
                />
              )),
            )}
          </svg>
        );
      case "gb":
        return (
          <svg {...commonProps}>
            <rect width="64" height="64" fill="#1d4ed8" />
            <path d="M0 0L24 0L64 27L64 40L40 40L0 13Z" fill="#ffffff" />
            <path d="M64 0L64 13L24 40L0 40L0 27L40 0Z" fill="#ffffff" />
            <path d="M0 0L10 0L64 28L64 38L54 38L0 10Z" fill="#dc2626" />
            <path d="M64 0L64 10L10 38L0 38L0 28L54 0Z" fill="#dc2626" />
            <rect x="25" width="14" height="64" fill="#ffffff" />
            <rect y="25" width="64" height="14" fill="#ffffff" />
            <rect x="28" width="8" height="64" fill="#dc2626" />
            <rect y="28" width="64" height="8" fill="#dc2626" />
          </svg>
        );
      case "ca":
        return (
          <svg {...commonProps}>
            <rect width="64" height="64" fill="#ffffff" />
            <rect width="16" height="64" fill="#ef4444" />
            <rect x="48" width="16" height="64" fill="#ef4444" />
            <path
              d="M32 18l2.5 5 5.5-1.5-2.5 5 4.5 3-5.5 1 1 5.5-5-2.5-5 2.5 1-5.5-5.5-1 4.5-3-2.5-5 5.5 1.5z"
              fill="#ef4444"
            />
          </svg>
        );
      case "au":
        return (
          <svg {...commonProps}>
            <rect width="64" height="64" fill="#1e40af" />
            <path d="M0 0L28 0L64 24L64 32L36 32L0 8Z" fill="#ffffff" />
            <path d="M64 0L64 8L28 32L0 32L0 24L36 0Z" fill="#ffffff" />
            <path d="M0 0L8 0L64 28L64 36L56 36L0 8Z" fill="#dc2626" />
            <path d="M64 0L64 8L8 36L0 36L0 28L56 0Z" fill="#dc2626" />
            <rect x="26" width="12" height="32" fill="#ffffff" />
            <rect y="26" width="32" height="12" fill="#ffffff" />
            <rect x="29" width="6" height="32" fill="#dc2626" />
            <rect y="29" width="32" height="6" fill="#dc2626" />
            <circle cx="46" cy="20" r="3" fill="#ffffff" />
            <circle cx="52" cy="34" r="2.5" fill="#ffffff" />
            <circle cx="42" cy="44" r="2.5" fill="#ffffff" />
          </svg>
        );
      case "sg":
        return (
          <svg {...commonProps}>
            <rect width="64" height="32" fill="#ef4444" />
            <rect y="32" width="64" height="32" fill="#ffffff" />
            <circle cx="19" cy="21" r="8" fill="#ffffff" />
            <circle cx="22" cy="21" r="6" fill="#ef4444" />
            {Array.from({ length: 5 }).map((_, index) => (
              <circle key={index} cx={27 + index * 4} cy={17 + (index % 2) * 4} r="1.2" fill="#ffffff" />
            ))}
          </svg>
        );
      case "de":
        return (
          <svg {...commonProps}>
            <rect width="64" height="21.34" fill="#000000" />
            <rect y="21.34" width="64" height="21.33" fill="#dc2626" />
            <rect y="42.67" width="64" height="21.33" fill="#facc15" />
          </svg>
        );
      case "fr":
        return (
          <svg {...commonProps}>
            <rect width="21.34" height="64" fill="#1d4ed8" />
            <rect x="21.34" width="21.33" height="64" fill="#ffffff" />
            <rect x="42.67" width="21.33" height="64" fill="#ef4444" />
          </svg>
        );
      case "nz":
        return (
          <svg {...commonProps}>
            <rect width="64" height="64" fill="#1e40af" />
            <path d="M0 0L28 0L64 24L64 32L36 32L0 8Z" fill="#ffffff" />
            <path d="M64 0L64 8L28 32L0 32L0 24L36 0Z" fill="#ffffff" />
            <path d="M0 0L8 0L64 28L64 36L56 36L0 8Z" fill="#dc2626" />
            <path d="M64 0L64 8L8 36L0 36L0 28L56 0Z" fill="#dc2626" />
            <circle cx="46" cy="20" r="2.4" fill="#dc2626" />
            <circle cx="52" cy="34" r="2.4" fill="#dc2626" />
            <circle cx="42" cy="44" r="2.4" fill="#dc2626" />
            <circle cx="50" cy="48" r="2.4" fill="#dc2626" />
          </svg>
        );
      case "ie":
        return (
          <svg {...commonProps}>
            <rect width="21.34" height="64" fill="#16a34a" />
            <rect x="21.34" width="21.33" height="64" fill="#ffffff" />
            <rect x="42.67" width="21.33" height="64" fill="#f97316" />
          </svg>
        );
      case "eu":
        return (
          <svg {...commonProps}>
            <rect width="64" height="64" fill="#1d4ed8" />
            {Array.from({ length: 12 }).map((_, index) => {
              const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
              return (
                <circle
                  key={index}
                  cx={32 + Math.cos(angle) * 18}
                  cy={32 + Math.sin(angle) * 18}
                  r="1.8"
                  fill="#facc15"
                />
              );
            })}
          </svg>
        );
      default:
        return (
          <svg {...commonProps}>
            <circle cx="32" cy="32" r="32" fill="#e2e8f0" />
          </svg>
        );
    }
  };
  const renderServiceBadge = (badge: ReactNode) => (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm">
      {badge}
    </span>
  );

  const openServicesMenu = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    setIsServicesOpen(true);
    setIsCountriesOpen(false);
  };

  const closeServicesMenu = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
    }
    servicesCloseTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, 120);
  };

  const openCountriesMenu = () => {
    if (countriesCloseTimerRef.current) {
      clearTimeout(countriesCloseTimerRef.current);
      countriesCloseTimerRef.current = null;
    }
    setIsCountriesOpen(true);
    setIsServicesOpen(false);
  };

  const closeCountriesMenu = () => {
    if (countriesCloseTimerRef.current) {
      clearTimeout(countriesCloseTimerRef.current);
    }
    countriesCloseTimerRef.current = setTimeout(() => {
      setIsCountriesOpen(false);
      countriesCloseTimerRef.current = null;
    }, 120);
  };

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

            <div
              ref={servicesRef}
              className="relative flex items-center gap-1"
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
            >
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
                  setIsServicesOpen((current) => !current);
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
                <div
                  className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-lg shadow-[0px_12px_32px_rgba(0,0,0,0.15)] border-t-[3px] border-[#F4C430] overflow-hidden animate-slideDown"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                >
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service.name}
                      onClick={() => void handleServiceClick(service.path)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-[#1C1C1C] hover:bg-[#EBF2FF] hover:border-l-[3px] hover:border-l-[#F4C430] transition-all text-left"
                    >
                      {renderServiceBadge(service.icon)}
                      <span>{service.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div
              ref={countriesRef}
              className="relative flex items-center gap-1"
              onMouseEnter={openCountriesMenu}
              onMouseLeave={closeCountriesMenu}
            >
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
                  setIsCountriesOpen((current) => !current);
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
                <div
                  className="absolute top-full left-0 mt-2 w-[360px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E5E9F2] overflow-hidden animate-slideDown"
                  onMouseEnter={openCountriesMenu}
                  onMouseLeave={closeCountriesMenu}
                >
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
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm overflow-hidden">
                            {renderFlag(country.flag, 'h-8 w-8')}
                          </span>
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
                      <span className="inline-flex items-center gap-2">
                        {renderServiceBadge(service.icon)}
                        <span>{service.name}</span>
                      </span>
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
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm overflow-hidden">
                        {renderFlag(country.flag, 'h-7 w-7')}
                      </span>
                      <span>{country.name}</span>
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
