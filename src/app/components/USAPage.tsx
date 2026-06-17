import { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft, GraduationCap, Users, Clock, Award, DollarSign,
  FileText, Globe, TrendingUp, Shield, ChevronDown, ChevronUp,
  MapPin, Star, Calendar, CheckCircle, Phone, Mail, MessageCircle,
  Building2, BookOpen, Briefcase, Code, Database, Brain, Lock,
  Heart, TrendingUp as Finance, Megaphone, Home, Menu, X, ArrowRight
} from 'lucide-react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { ContactModal } from './ContactModal';
import { CountryAdmissionTimeline } from './CountryAdmissionTimeline';
import { HeaderBrandLogo } from './HeaderBrandLogo';
import { CountryApplicationModal } from './CountryApplicationModal';
import columbiaImg from '@/imports/columbia.jpg';

type AccordionSection = 'document-checklist' | 'admission-process' | 'visa-process' | 'intakes' | 'scholarships' | 'cost-living' | 'faq' | null;

export function USAPage() {
  const [activeAccordion, setActiveAccordion] = useState<AccordionSection>(null);
  const [showAllUniversities, setShowAllUniversities] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    intake: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleAccordion = (section: AccordionSection) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
      setTimeout(() => {
        scrollToSection(section || '');
      }, 100);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validation logic
    if (name === 'name') {
      // Only allow letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return; // Don't update if invalid
      }
    }

    if (name === 'phone') {
      // Only allow numbers, spaces, plus, and dash
      if (!/^[0-9+\-\s]*$/.test(value)) {
        return; // Don't update if invalid
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

    // Phone validation
    if (formData.phone.replace(/[\s\-+]/g, '').length < 10) {
      setErrors({ ...errors, phone: 'Please enter a valid phone number' });
      return;
    }

    const message = `New Enquiry from USA Page:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACourse: ${formData.course}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const universities = [
    {
      name: 'Massachusetts Institute of Technology (MIT)',
      tuition: 'USD 55,000/year',
      costOfLiving: 'USD 1,800-2,500/month',
      duration: '2 years',
      intake: 'Fall, Spring',
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'Stanford University',
      tuition: 'USD 56,000/year',
      costOfLiving: 'USD 2,000-3,000/month',
      duration: '2 years',
      intake: 'Fall, Winter',
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'Harvard University',
      tuition: 'USD 54,000/year',
      costOfLiving: 'USD 1,800-2,500/month',
      duration: '1-2 years',
      intake: 'Fall',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'California Institute of Technology',
      tuition: 'USD 56,000/year',
      costOfLiving: 'USD 1,500-2,200/month',
      duration: '2 years',
      intake: 'Fall',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'University of Chicago',
      tuition: 'USD 60,000/year',
      costOfLiving: 'USD 1,400-2,000/month',
      duration: '1-2 years',
      intake: 'Fall, Winter, Spring',
      image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'Yale University',
      tuition: 'USD 57,000/year',
      costOfLiving: 'USD 1,600-2,300/month',
      duration: '1-2 years',
      intake: 'Fall',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'Princeton University',
      tuition: 'USD 55,000/year',
      costOfLiving: 'USD 1,700-2,400/month',
      duration: '2 years',
      intake: 'Fall',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop&auto=format&q=85',
    },
    {
      name: 'Columbia University',
      tuition: 'USD 61,000/year',
      costOfLiving: 'USD 2,000-2,800/month',
      duration: '1-2 years',
      intake: 'Fall, Spring',
      image: columbiaImg.src,
    },
    {
      name: 'UC Berkeley',
      tuition: 'USD 45,000/year',
      costOfLiving: 'USD 1,800-2,600/month',
      duration: '2 years',
      intake: 'Fall, Spring',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&auto=format&q=85',
    }
  ];

  const courses = [
    {
      name: 'Computer Science',
      duration: '2-4 years',
      icon: <Code className="w-8 h-8" />,
      color: 'from-[#3B82F6] to-[#2563EB]',
      searchUrl: 'https://www.google.com/search?q=Computer+Science+universities+in+USA'
    },
    {
      name: 'Data Science',
      duration: '1.5-2 years',
      icon: <Database className="w-8 h-8" />,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      searchUrl: 'https://www.google.com/search?q=Data+Science+universities+in+USA'
    },
    {
      name: 'Business Management',
      duration: '1-2 years',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-[#10B981] to-[#059669]',
      searchUrl: 'https://www.google.com/search?q=MBA+Business+Management+universities+in+USA'
    },
    {
      name: 'Engineering',
      duration: '2-4 years',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-[#F59E0B] to-[#D97706]',
      searchUrl: 'https://www.google.com/search?q=Engineering+universities+in+USA'
    },
    {
      name: 'Artificial Intelligence',
      duration: '1.5-2 years',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-[#EC4899] to-[#DB2777]',
      searchUrl: 'https://www.google.com/search?q=Artificial+Intelligence+AI+universities+in+USA'
    },
    {
      name: 'Cyber Security',
      duration: '1.5-2 years',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-[#EF4444] to-[#DC2626]',
      searchUrl: 'https://www.google.com/search?q=Cyber+Security+universities+in+USA'
    },
    {
      name: 'Nursing',
      duration: '2-4 years',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-[#06B6D4] to-[#0891B2]',
      searchUrl: 'https://www.google.com/search?q=Nursing+universities+in+USA'
    },
    {
      name: 'Finance',
      duration: '1-2 years',
      icon: <Finance className="w-8 h-8" />,
      color: 'from-[#14B8A6] to-[#0D9488]',
      searchUrl: 'https://www.google.com/search?q=Finance+universities+in+USA'
    },
    {
      name: 'Media & Communication',
      duration: '1-2 years',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'from-[#A855F7] to-[#9333EA]',
      searchUrl: 'https://www.google.com/search?q=Media+Communication+universities+in+USA'
    },
    {
      name: 'Health Sciences',
      duration: '2-4 years',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-[#F97316] to-[#EA580C]',
      searchUrl: 'https://www.google.com/search?q=Health+Sciences+universities+in+USA'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[92px]">
            {/* Logo */}
            <a href="/#home" className="flex items-center gap-3 group">
              <HeaderBrandLogo className="group-hover:scale-105 transition-transform" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#home" className="text-gray-600 hover:text-[#2b2d72] font-semibold transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2b2d72] group-hover:w-full transition-all duration-300"></span>
              </a>

              <a href="/#countries" className="text-gray-600 hover:text-[#2b2d72] font-semibold transition-colors relative group">
                Countries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2b2d72] group-hover:w-full transition-all duration-300"></span>
              </a>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#2b2d72] font-semibold transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-3 border border-gray-100">
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('admission-process');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-[#2b2d72] rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                      <span>USA Admission Process</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('visa-process');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-[#2b2d72] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <span>F-1 Visa Process</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('scholarships');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <span>Scholarships</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('cost-living');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      <span>Cost of Living</span>
                    </button>
                  </div>
                )}
              </div>

              

              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Enquiry
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#2b2d72] p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="/#home" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                  Home
                </a>
                <a href="/#countries" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                  Countries
                </a>
                <a href="#universities" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                  Universities
                </a>
                <a href="#courses" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                  Courses
                </a>
                <a href="#contact" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsEnquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-lg"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
              {/* Badge with Flag */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-md border border-gray-100 rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="USA Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[14px] font-bold text-[#2b2d72]">
                  World-Class Education Hub
                </span>
              </div>

              {/* Heading with Flag */}
              <div className="flex items-center gap-4">
                <img
                  src="https://flagcdn.com/w320/us.png"
                  alt="United States Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-gray-100"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2b2d72] leading-tight">
                  Study in USA
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Unlock your potential at world's top-ranked universities. Experience cutting-edge STEM programs, gain 3 years of OPT work authorization, and build a global career with unparalleled opportunities in innovation and research excellence.
              </p>

              {/* Statistics Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl hover:shadow-[#2b2d72]/15 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2b2d72] mb-1 group-hover:scale-110 transition-transform">
                    4,000+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Universities</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl hover:shadow-[#2b2d72]/15 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-1 group-hover:scale-110 transition-transform">
                    3 Years
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">OPT Permit</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl hover:shadow-[#2b2d72]/15 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2b2d72] mb-1 group-hover:scale-110 transition-transform">
                    Top 10
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Ranked Globally</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="group px-6 sm:px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Talk to Expert</span>
                </button>

                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="group px-6 sm:px-7 py-3 bg-white text-[#2b2d72] border-2 border-[#2b2d72] rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-xl hover:shadow-[#2b2d72]/15 transition-all duration-500 hover:-translate-y-2 border-4 border-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjBza3lsaW5lJTIwTmV3JTIwWW9yayUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Nzg3MzUzMzJ8MA&ixlib=rb-4.1.0&q=85&w=1400"
                  alt="Study in USA - New York City Skyline with Brooklyn Bridge"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2d72]/40 via-[#2b2d72]/10 to-transparent"></div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-gray-100 hover:bg-white transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2b2d72] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#2b2d72] mb-0.5 sm:mb-1 truncate">1M+ International Students</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-snug">Join the world's largest education ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#2b2d72]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Why Study in USA */}
          <div className="bg-[#EEF4FF] backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-[#2b2d72] leading-tight">
              Why Study in USA?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group hover:bg-white p-6 rounded-2xl transition-all">
                <div className="w-14 h-14 mb-4 bg-[#2b2d72] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-3">World-Class Education</h3>
                <p className="text-gray-600">Home to 8 of the top 10 universities globally with cutting-edge research facilities</p>
              </div>

              <div className="group hover:bg-white p-6 rounded-2xl transition-all">
                <div className="w-14 h-14 mb-4 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-3">Career Opportunities</h3>
                <p className="text-gray-600">Access to top companies and up to 3 years of OPT work authorization</p>
              </div>

              <div className="group hover:bg-white p-6 rounded-2xl transition-all">
                <div className="w-14 h-14 mb-4 bg-[#2b2d72] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-3">Flexible Programs</h3>
                <p className="text-gray-600">Choose from thousands of programs with flexible course structures</p>
              </div>

              <div className="group hover:bg-white p-6 rounded-2xl transition-all">
                <div className="w-14 h-14 mb-4 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-3">Research Excellence</h3>
                <p className="text-gray-600">Leading innovation in technology, science, and business research</p>
              </div>

              <div className="group hover:bg-white p-6 rounded-2xl transition-all">
                <div className="w-14 h-14 mb-4 bg-[#2b2d72] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-3">Cultural Diversity</h3>
                <p className="text-gray-600">Experience diverse cultures and build a global network</p>
              </div>

              <div className="group hover:bg-white p-6 rounded-2xl transition-all">
                <div className="w-14 h-14 mb-4 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-3">Innovation Hub</h3>
                <p className="text-gray-600">Center of entrepreneurship and technological advancement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72] leading-tight">
              Top Universities in USA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Study at the world's most prestigious institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllUniversities ? universities : universities.slice(0, 6)).map((uni, index) => (
              <a
                key={index}
                href={getUniversityDetailUrl(uni.name)}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#2b2d72]"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#2b2d72] transition-colors">
                    {uni.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-gray-500">Tuition Fees</div>
                        <div className="text-xs font-semibold text-gray-900">{uni.tuition}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Home className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-gray-500">Cost of Living</div>
                        <div className="text-xs font-semibold text-gray-900">{uni.costOfLiving}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-gray-500">Duration</div>
                        <div className="text-xs font-semibold text-gray-900">{uni.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-gray-500">Intake</div>
                        <div className="text-xs font-semibold text-gray-900">{uni.intake}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {universities.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllUniversities(!showAllUniversities)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {showAllUniversities ? (
                  <>
                    Show Less <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Show More Universities <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72] leading-tight">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of in-demand programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {(showAllCourses ? courses : courses.slice(0, 5)).map((course, index) => (
              <a
                key={index}
                href={course.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-[#2b2d72]/15 transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-gray-100 hover:border-[#2b2d72]"
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {course.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2b2d72] mb-2 group-hover:text-orange-500 transition-colors">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm">{course.duration}</p>
              </a>
            ))}
          </div>

          {courses.length > 5 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllCourses(!showAllCourses)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {showAllCourses ? (
                  <>
                    Show Less <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Show More Courses <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Document Checklist */}
          <div id="document-checklist" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('document-checklist')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2b2d72] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Document Checklist</h3>
              </div>
              {activeAccordion === 'document-checklist' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'document-checklist'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'Passport', icon: <FileText className="w-6 h-6" />, color: 'from-[#3B82F6] to-[#2563EB]' },
                    { name: 'Academic Transcripts', icon: <BookOpen className="w-6 h-6" />, color: 'from-[#8B5CF6] to-[#7C3AED]' },
                    { name: 'Statement of Purpose', icon: <FileText className="w-6 h-6" />, color: 'from-[#10B981] to-[#059669]' },
                    { name: 'Letters of Recommendation', icon: <Award className="w-6 h-6" />, color: 'from-[#F59E0B] to-[#D97706]' },
                    { name: 'IELTS/TOEFL/Duolingo', icon: <Globe className="w-6 h-6" />, color: 'from-[#EC4899] to-[#DB2777]' },
                    { name: 'Resume/CV', icon: <FileText className="w-6 h-6" />, color: 'from-[#06B6D4] to-[#0891B2]' },
                    { name: 'Financial Documents', icon: <DollarSign className="w-6 h-6" />, color: 'from-[#EF4444] to-[#DC2626]' },
                    { name: 'Visa Documents', icon: <Shield className="w-6 h-6" />, color: 'from-[#14B8A6] to-[#0D9488]' }
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {doc.icon}
                      </div>
                      <span className="font-medium text-[#2b2d72]">{doc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* F-1 Visa Process */}          {/* F-1 Visa Process */}
          <div id="visa-process" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('visa-process')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2b2d72] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">F-1 Visa Process</h3>
              </div>
              {activeAccordion === 'visa-process' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'visa-process'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8">
                <div className="relative">
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#10B981]"></div>
                  <div className="space-y-8">
                    {[
                      {
                        title: 'Receive I-20 Form',
                        description: 'University issues I-20 after admission and deposit payment',
                        icon: <FileText className="w-5 h-5" />
                      },
                      {
                        title: 'Pay SEVIS Fee',
                        description: 'Pay $350 SEVIS fee online and save receipt',
                        icon: <DollarSign className="w-5 h-5" />
                      },
                      {
                        title: 'Complete DS-160',
                        description: 'Fill online visa application form DS-160',
                        icon: <FileText className="w-5 h-5" />
                      },
                      {
                        title: 'Schedule Appointment',
                        description: 'Book visa interview at US Embassy',
                        icon: <Calendar className="w-5 h-5" />
                      },
                      {
                        title: 'Attend Interview',
                        description: 'Appear for visa interview with all documents',
                        icon: <Users className="w-5 h-5" />
                      },
                      {
                        title: 'Visa Approval',
                        description: 'Receive passport with F-1 visa stamp',
                        icon: <CheckCircle className="w-5 h-5" />
                      }
                    ].map((step, index) => (
                      <div key={index} className="relative flex gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-full flex items-center justify-center text-white z-10 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-bold text-[#2b2d72] mb-2">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intakes */}
          <div id="intakes" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('intakes')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Intakes</h3>
              </div>
              {activeAccordion === 'intakes' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'intakes'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Fall Intake',
                      months: 'August - September',
                      deadline: 'Apply by January - March',
                      popular: true,
                      color: 'from-[#3B82F6] to-[#2563EB]'
                    },
                    {
                      name: 'Spring Intake',
                      months: 'January - February',
                      deadline: 'Apply by August - October',
                      popular: false,
                      color: 'from-[#10B981] to-[#059669]'
                    },
                    {
                      name: 'Summer Intake',
                      months: 'May - June',
                      deadline: 'Apply by January - March',
                      popular: false,
                      color: 'from-[#F59E0B] to-[#D97706]'
                    }
                  ].map((intake, index) => (
                    <div
                      key={index}
                      className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      {intake.popular && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Most Popular
                        </div>
                      )}
                      <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${intake.color} rounded-xl flex items-center justify-center`}>
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-[#2b2d72] mb-2">{intake.name}</h4>
                      <p className="text-gray-600 mb-2">{intake.months}</p>
                      <p className="text-sm text-gray-600 font-medium">{intake.deadline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div id="scholarships" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('scholarships')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2b2d72] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Scholarships</h3>
              </div>
              {activeAccordion === 'scholarships' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'scholarships'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'Fulbright Scholarship',
                      amount: 'Full Tuition + Living',
                      eligibility: 'Outstanding academic achievement',
                      icon: '🏆',
                      color: 'from-[#F59E0B] to-[#D97706]'
                    },
                    {
                      name: 'University Merit Scholarships',
                      amount: '$5,000 - $20,000',
                      eligibility: 'Based on academic performance',
                      icon: '🎓',
                      color: 'from-[#3B82F6] to-[#2563EB]'
                    },
                    {
                      name: 'AAUW International Fellowship',
                      amount: '$18,000 - $30,000',
                      eligibility: 'Women pursuing graduate studies',
                      icon: '👩‍🎓',
                      color: 'from-[#EC4899] to-[#DB2777]'
                    },
                    {
                      name: 'Assistantships & Fellowships',
                      amount: 'Tuition Waiver + Stipend',
                      eligibility: 'Graduate students with research/teaching roles',
                      icon: '💼',
                      color: 'from-[#10B981] to-[#059669]'
                    }
                  ].map((scholarship, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${scholarship.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                          {scholarship.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[#2b2d72] mb-2">{scholarship.name}</h4>
                          <p className="text-[#2b2d72] font-bold mb-2">{scholarship.amount}</p>
                          <p className="text-sm text-gray-600">{scholarship.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cost of Living & Tuition */}
          <div id="cost-living" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('cost-living')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Cost of Living & Tuition</h3>
              </div>
              {activeAccordion === 'cost-living' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'cost-living'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-4">Tuition Fees</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { type: 'Public Universities', amount: 'USD 20,000 - 40,000/year' },
                      { type: 'Private Universities', amount: 'USD 35,000 - 70,000/year' },
                      { type: 'Community Colleges', amount: 'USD 8,000 - 15,000/year' },
                      { type: 'Top Tier Universities', amount: 'USD 50,000 - 80,000/year' }
                    ].map((fee, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl">
                        <span className="font-medium text-[#2b2d72]">{fee.type}</span>
                        <span className="font-bold text-[#2b2d72]">{fee.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-4">Living Expenses (Monthly)</h4>
                  <div className="space-y-3">
                    {[
                      { category: 'Accommodation', cost: '$700 - $2,000', icon: <Home className="w-5 h-5" /> },
                      { category: 'Food & Groceries', cost: '$300 - $600', icon: <DollarSign className="w-5 h-5" /> },
                      { category: 'Transportation', cost: '$50 - $150', icon: <MapPin className="w-5 h-5" /> },
                      { category: 'Health Insurance', cost: '$150 - $300', icon: <Shield className="w-5 h-5" /> },
                      { category: 'Miscellaneous', cost: '$200 - $400', icon: <TrendingUp className="w-5 h-5" /> }
                    ].map((expense, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#2b2d72] rounded-lg flex items-center justify-center text-white">
                            {expense.icon}
                          </div>
                          <span className="font-medium text-[#2b2d72]">{expense.category}</span>
                        </div>
                        <span className="font-bold text-[#2b2d72]">{expense.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('faq')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Frequently Asked Questions</h3>
              </div>
              {activeAccordion === 'faq' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'faq'
                  ? 'max-h-[3000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8 space-y-6">
                {[
                  {
                    question: 'How long does it take to get a US student visa?',
                    answer: 'The visa processing time varies, but typically takes 2-4 weeks after the interview. Plan to apply at least 3 months before your program starts.'
                  },
                  {
                    question: 'Can I work while studying in the USA?',
                    answer: 'Yes! F-1 students can work on-campus for up to 20 hours/week during term and full-time during breaks. After one year, you can apply for CPT and later OPT for off-campus work.'
                  },
                  {
                    question: 'What is OPT and how long can I stay after graduation?',
                    answer: 'OPT (Optional Practical Training) allows you to work for up to 12 months after graduation. STEM graduates get an additional 24-month extension (total 36 months).'
                  },
                  {
                    question: 'Do I need IELTS or TOEFL for US universities?',
                    answer: 'Most universities require English proficiency tests like IELTS (6.5+), TOEFL (80+), or Duolingo (105+). Some may waive this for students from English-medium institutions.'
                  },
                  {
                    question: 'What is the cost difference between public and private universities?',
                    answer: 'Public universities typically cost $20,000-40,000/year while private universities range from $35,000-70,000/year. However, private universities often offer more financial aid.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-[#2b2d72] mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CountryAdmissionTimeline countryName="USA" sectionId="admission-process" />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b2d72] to-[#1a1d4a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get in touch with our expert counselors for personalized guidance on studying in the USA.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, text: '+91 72990 05577', label: 'Call Us' },
                  { icon: Mail, text: 'salesteam@honeytranslations.com', label: 'Email Us' },
                  { icon: Clock, text: 'Mon - Sat: 9 AM - 7 PM', label: 'Working Hours' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">{item.label}</p>
                      <p className="font-semibold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/917299005577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Request Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all"
                  >
                    <option value="" className="text-gray-900">Select Course Interest</option>
                    <option value="Business" className="text-gray-900">Business Management</option>
                    <option value="Engineering" className="text-gray-900">Engineering</option>
                    <option value="IT" className="text-gray-900">Information Technology</option>
                    <option value="Finance" className="text-gray-900">Finance & Banking</option>
                    <option value="Other" className="text-gray-900">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message (Optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-[#2b2d72] rounded-xl font-bold hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917299005577"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      <CountryApplicationModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        countryName="USA"
        mode="apply"
      />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}


