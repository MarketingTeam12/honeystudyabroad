import { useState, useRef, useEffect } from 'react';
import { getCommonsImageUrl } from '../utils/imageUtils';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import melbourneImage from '@/imports/Melbourne.jpg';
import australiaImage from '@/imports/Australia.jpg';
import {
  ArrowLeft, GraduationCap, Users, Clock, Award, DollarSign,
  FileText, Globe, TrendingUp, Shield, ChevronDown, ChevronUp,
  MapPin, Star, Calendar, CheckCircle, Mail, MessageCircle,
  Building2, BookOpen, Briefcase, Code, Database, Heart,
  TrendingUp as Finance, Megaphone, Home, Menu, X, Palmtree, Phone, ArrowRight
} from 'lucide-react';

type AccordionSection = 'document-checklist' | 'entry-requirements' | 'admission-process' | 'visa-process' | 'financial-requirements' | 'psw-visa' | 'intakes' | 'scholarships' | 'cost-living' | 'faq' | null;

export function AustraliaPage() {
  const [activeAccordion, setActiveAccordion] = useState<AccordionSection>(null);
  const [showAllUniversities, setShowAllUniversities] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllCities, setShowAllCities] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
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
      // Only allow numbers
      if (!/^[0-9]*$/.test(value)) {
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

    const message = `New Enquiry from Australia Page:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACourse: ${formData.course}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const universities = [
    {
      name: 'University of Melbourne',
      rank: 'QS #14',
      location: 'Melbourne, VIC',
      tuition: 'AUD 30,000 - 45,000',
      programs: ['Engineering', 'Business', 'Medicine'],
      image: melbourneImage.src,
      website: 'https://www.unimelb.edu.au'
    },
    {
      name: 'Australian National University (ANU)',
      rank: 'QS #34',
      location: 'Canberra, ACT',
      tuition: 'AUD 35,000 - 48,000',
      programs: ['Science', 'Politics', 'Economics'],
      image: australiaImage.src,
      website: 'https://www.anu.edu.au'
    },
    {
      name: 'University of Sydney',
      rank: 'QS #41',
      location: 'Sydney, NSW',
      tuition: 'AUD 32,000 - 46,000',
      programs: ['Law', 'Medicine', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.sydney.edu.au'
    },
    {
      name: 'UNSW Sydney',
      rank: 'QS #45',
      location: 'Sydney, NSW',
      tuition: 'AUD 33,000 - 47,000',
      programs: ['Engineering', 'Computer Science', 'Business'],
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.unsw.edu.au'
    },
    {
      name: 'University of Queensland',
      rank: 'QS #50',
      location: 'Brisbane, QLD',
      tuition: 'AUD 30,000 - 44,000',
      programs: ['Agriculture', 'Environmental Science', 'Biotechnology'],
      image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.uq.edu.au'
    },
    {
      name: 'Monash University',
      rank: 'QS #57',
      location: 'Melbourne, VIC',
      tuition: 'AUD 31,000 - 45,000',
      programs: ['Pharmacy', 'Medicine', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.monash.edu'
    },
    {
      name: 'University of Western Australia',
      rank: 'QS #72',
      location: 'Perth, WA',
      tuition: 'AUD 29,000 - 43,000',
      programs: ['Mining Engineering', 'Marine Science', 'Medicine'],
      image: getCommonsImageUrl('AUS Perth, Central Business District, University of Western Australia 0068.jpg'),
      website: 'https://www.uwa.edu.au'
    },
    {
      name: 'University of Adelaide',
      rank: 'QS #89',
      location: 'Adelaide, SA',
      tuition: 'AUD 28,000 - 42,000',
      programs: ['Wine Business', 'Agriculture', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.adelaide.edu.au'
    },
    {
      name: 'University of Technology Sydney (UTS)',
      rank: 'QS #90',
      location: 'Sydney, NSW',
      tuition: 'AUD 30,000 - 45,000',
      programs: ['IT', 'Design', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.uts.edu.au'
    }
  ];

  const courses = [
    {
      name: 'Engineering',
      duration: '3-4 years',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-[#2b2d72] to-[#2b2d72]',
      searchUrl: 'https://www.google.com/search?q=Engineering+universities+in+Australia'
    },
    {
      name: 'Business Management',
      duration: '2-3 years',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      searchUrl: 'https://www.google.com/search?q=MBA+Business+universities+in+Australia'
    },
    {
      name: 'Computer Science',
      duration: '3-4 years',
      icon: <Code className="w-8 h-8" />,
      color: 'from-[#10B981] to-[#059669]',
      searchUrl: 'https://www.google.com/search?q=Computer+Science+universities+in+Australia'
    },
    {
      name: 'Data Science',
      duration: '1.5-2 years',
      icon: <Database className="w-8 h-8" />,
      color: 'from-[#F59E0B] to-[#D97706]',
      searchUrl: 'https://www.google.com/search?q=Data+Science+universities+in+Australia'
    },
    {
      name: 'Nursing',
      duration: '3 years',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-[#EC4899] to-[#DB2777]',
      searchUrl: 'https://www.google.com/search?q=Nursing+universities+in+Australia'
    },
    {
      name: 'Finance',
      duration: '1-2 years',
      icon: <Finance className="w-8 h-8" />,
      color: 'from-[#EF4444] to-[#DC2626]',
      searchUrl: 'https://www.google.com/search?q=Finance+universities+in+Australia'
    },
    {
      name: 'Media & Communication',
      duration: '3 years',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'from-[#06B6D4] to-[#0891B2]',
      searchUrl: 'https://www.google.com/search?q=Media+Communication+universities+in+Australia'
    },
    {
      name: 'Environmental Science',
      duration: '3-4 years',
      icon: <Palmtree className="w-8 h-8" />,
      color: 'from-[#14B8A6] to-[#0D9488]',
      searchUrl: 'https://www.google.com/search?q=Environmental+Science+universities+in+Australia'
    },
    {
      name: 'Health Sciences',
      duration: '3-4 years',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-[#A855F7] to-[#9333EA]',
      searchUrl: 'https://www.google.com/search?q=Health+Sciences+universities+in+Australia'
    },
    {
      name: 'Hospitality',
      duration: '2-3 years',
      icon: <Home className="w-8 h-8" />,
      color: 'from-[#F97316] to-[#EA580C]',
      searchUrl: 'https://www.google.com/search?q=Hospitality+universities+in+Australia'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg z-50 border-b border-[#E5E9F2]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-xl font-bold bg-orange-500 hover:bg-orange-600 bg-clip-text text-transparent">
                  Study Abroad
                </span>
                <span className="block text-xs text-gray-600">Your Global Education Partner</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#home" className="text-gray-600 hover:text-[#2b2d72] font-semibold transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] group-hover:w-full transition-all duration-300"></span>
              </a>

              <a href="/#countries" className="text-gray-600 hover:text-[#2b2d72] font-semibold transition-colors relative group">
                Countries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] group-hover:w-full transition-all duration-300"></span>
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
                  <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-3 border border-[#E5E9F2]">
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('admission-process');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2b2d72] to-[#2b2d72] rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                      <span>Australia Admission Process</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('visa-process');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <span>Student Visa Process</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('scholarships');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <span>Scholarships</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('cost-living');
                      }}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-lg flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      <span>Cost of Living</span>
                    </button>
                  </div>
                )}
              </div>

              

              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1E40AF]/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Enquiry
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#2b2d72] p-2 hover:bg-[#EFF6FF] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="/#home" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-[#EFF6FF] transition-colors">
                  Home
                </a>
                <a href="/#countries" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-[#EFF6FF] transition-colors">
                  Countries
                </a>
                <a href="#universities" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-[#EFF6FF] transition-colors">
                  Universities
                </a>
                <a href="#courses" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-[#EFF6FF] transition-colors">
                  Courses
                </a>
                <a href="#contact" className="text-gray-600 hover:text-[#2b2d72] font-medium px-2 py-1 rounded-lg hover:bg-[#EFF6FF] transition-colors">
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
      <section className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-md border border-[#E5E9F2] rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 mb-6 md:mb-7">
                <img
                  src="https://flagcdn.com/au.svg"
                  alt="Australia Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[14px] font-bold text-[#2b2d72]">
                  Quality Education Down Under
                </span>
              </div>

              {/* Heading with Flag */}
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <img
                  src="https://flagcdn.com/w320/au.png"
                  alt="Australia Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-gray-100"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#1E40AF] via-[#1A73E8] to-[#3B82F6] bg-clip-text text-transparent leading-tight">
                  Study in Australia
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-7 md:mb-8">
                Experience world-class education in a safe, welcoming environment. Study at top-ranked universities, gain 2-4 years post-study work rights, and enjoy an exceptional quality of life in one of the world's most livable countries.
              </p>

              {/* Statistics Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-7 md:mb-8">
                <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                    43
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Universities</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                    2-4 Yrs
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Work Rights</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                    Top 50
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Global Ranking</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="group w-full sm:w-auto px-7 sm:px-8 md:px-9 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#1E40AF]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Send Enquiry</span>
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>

                <a
                  href="https://wa.me/917299005577?text=Hi!%20I'm%20interested%20in%20studying%20in%20Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto px-7 sm:px-8 md:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0px_20px_60px_rgba(30,64,175,0.4)] transition-all duration-500 hover:-translate-y-2 border-4 border-white/60 group">
                <img
                  src="https://images.unsplash.com/photo-1748243262890-bffad63a7807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxTeWRuZXklMjBPcGVyYSUyMEhvdXNlJTIwQXVzdHJhbGlhJTIwaGFyYm9yfGVufDF8fHx8MTc3ODczOTI5OHww&ixlib=rb-4.1.0&q=85&w=1400"
                  alt="Study in Australia - Sydney Opera House and Harbour"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/40 via-[#1E40AF]/10 to-transparent"></div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-white/60 hover:bg-white transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#2b2d72] mb-0.5 sm:mb-1 truncate">700,000+ Students</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-snug">Studying in Australia annually</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              <div className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-white/60 mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-orange-500 hover:bg-orange-600 bg-clip-text text-transparent">
              Why Study in Australia?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <div className="group bg-white/50 hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#3B82F6]/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#2b2d72] to-[#2b2d72] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 sm:mb-3">Top Universities</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">7 universities in global top 100</p>
              </div>

              <div className="group bg-white/50 hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#8B5CF6]/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 sm:mb-3">Work Opportunities</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">2-4 years post-study work visa</p>
              </div>

              <div className="group bg-white/50 hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#10B981]/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 sm:mb-3">Safe Environment</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Low crime rate and student-friendly</p>
              </div>

              <div className="group bg-white/50 hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#F59E0B]/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 sm:mb-3">Quality of Life</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">High living standards and vibrant culture</p>
              </div>

              <div className="group bg-white/50 hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#EC4899]/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 sm:mb-3">Diverse Culture</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Multicultural society and welcoming</p>
              </div>

              <div className="group bg-white/50 hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#06B6D4]/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 sm:mb-3">Flexible Programs</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Wide range of courses and specializations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E40AF]/5 to-[#3B82F6]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-orange-500 hover:bg-orange-600 bg-clip-text text-transparent">
              Top Universities in Australia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Study at world-renowned Australian institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllUniversities ? universities : universities.slice(0, 6)).map((uni, index) => (
              <a
                key={index}
                href={getUniversityDetailUrl(uni.name)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#1A73E8]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <span className="text-sm font-bold text-[#2b2d72]">{uni.rank}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2b2d72] mb-2 group-hover:text-[#1A73E8] transition-colors">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{uni.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">{uni.tuition}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.map((program, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] text-[#2b2d72] rounded-full text-xs font-medium"
                      >
                        {program}
                      </span>
                    ))}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-orange-500 hover:bg-orange-600 bg-clip-text text-transparent">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from Australia's most sought-after programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {(showAllCourses ? courses : courses.slice(0, 5)).map((course, index) => (
              <a
                key={index}
                href={course.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#1A73E8]"
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {course.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2b2d72] mb-2 group-hover:text-[#1A73E8] transition-colors">
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

      {/* Course Details Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F4FF] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[12px] mb-3 uppercase tracking-wide">
              Course Details
            </div>
            <h2 className="text-[32px] font-bold text-[#0F172A] mb-2">Study in Australia — At a Glance</h2>
            <p className="text-gray-600 text-[15px]">Key facts about studying in Australia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: DollarSign,
                label: 'Tuition Fees',
                value: 'AUD 20,000 – 50,000',
                sub: 'per year',
                color: 'from-[#1E40AF] to-[#3B82F6]',
                bg: 'bg-[#EFF6FF]'
              },
              {
                icon: Clock,
                label: 'Course Duration',
                value: '1 – 4 Years',
                sub: 'depending on program',
                color: 'from-[#10B981] to-[#059669]',
                bg: 'bg-[#ECFDF5]'
              },
              {
                icon: BookOpen,
                label: 'Course Type',
                value: 'UG / PG / MBA',
                sub: 'Diploma & Certificate',
                color: 'from-[#F59E0B] to-[#D97706]',
                bg: 'bg-[#FEF3C7]'
              },
              {
                icon: Home,
                label: 'Cost of Living',
                value: 'AUD 18,000 – 26,000',
                sub: 'per year',
                color: 'from-[#8B5CF6] to-[#7C3AED]',
                bg: 'bg-[#F5F3FF]'
              },
              {
                icon: Calendar,
                label: 'Intake',
                value: 'Feb · July',
                sub: 'February is primary',
                color: 'from-[#EC4899] to-[#DB2777]',
                bg: 'bg-[#FCE7F3]'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`${item.bg} rounded-2xl p-5 border border-white/80 shadow-sm hover:shadow-md transition-shadow`}>
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-[15px] font-bold text-[#0F172A] leading-snug">{item.value}</div>
                  <div className="text-[11px] text-[#94A3B8] mt-0.5">{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section id="cities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E40AF]/5 to-[#3B82F6]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-orange-500 hover:bg-orange-600 bg-clip-text text-transparent">
              Popular Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover Australia's vibrant student cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Sydney',
                state: 'New South Wales',
                universities: '5 Top Universities',
                image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop&auto=format&q=85',
                description: 'Harbor city with iconic landmarks'
              },
              {
                name: 'Melbourne',
                state: 'Victoria',
                universities: '7 Top Universities',
                image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&h=400&fit=crop&auto=format&q=85',
                description: 'Cultural capital and livable city'
              },
              {
                name: 'Brisbane',
                state: 'Queensland',
                universities: '3 Top Universities',
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format&q=85',
                description: 'Subtropical climate and outdoor lifestyle'
              },
              {
                name: 'Perth',
                state: 'Western Australia',
                universities: '2 Top Universities',
                image: 'https://images.unsplash.com/photo-1583419039920-1f6cf79c2a1d?w=600&h=400&fit=crop&auto=format&q=85',
                description: 'Beautiful beaches and sunny weather'
              },
              ...(showAllCities ? [
                {
                  name: 'Adelaide',
                  state: 'South Australia',
                  universities: '3 Top Universities',
                  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format&q=85',
                  description: 'Affordable living and wine regions'
                },
                {
                  name: 'Canberra',
                  state: 'Australian Capital Territory',
                  universities: 'ANU - Top Ranked',
                  image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
                  description: "Australia's capital and research hub"
                },
                {
                  name: 'Gold Coast',
                  state: 'Queensland',
                  universities: 'Griffith University',
                  image: 'https://images.unsplash.com/photo-1583419039920-1f6cf79c2a1d?w=600&h=400&fit=crop&auto=format&q=85',
                  description: 'Beach lifestyle and tourism hub'
                },
                {
                  name: 'Hobart',
                  state: 'Tasmania',
                  universities: 'UTAS - Top Research',
                  image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&h=400&fit=crop&auto=format&q=85',
                  description: 'Natural beauty and affordable study'
                }
              ] : [])
            ].map((city, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#1A73E8]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                    <p className="text-white/90 text-sm">{city.state}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#2b2d72] mb-3">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">{city.universities}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{city.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllCities(!showAllCities)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {showAllCities ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More Cities <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Document Checklist */}
          <div id="document-checklist" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('document-checklist')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2b2d72] to-[#2b2d72] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Documents Required</h3>
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
                    { name: 'Valid Passport', icon: <FileText className="w-6 h-6" />, color: 'from-[#2b2d72] to-[#2b2d72]' },
                    { name: 'Academic Transcripts', icon: <BookOpen className="w-6 h-6" />, color: 'from-[#8B5CF6] to-[#7C3AED]' },
                    { name: 'Statement of Purpose', icon: <FileText className="w-6 h-6" />, color: 'from-[#10B981] to-[#059669]' },
                    { name: 'Letters of Recommendation', icon: <Award className="w-6 h-6" />, color: 'from-[#F59E0B] to-[#D97706]' },
                    { name: 'English Test (IELTS/PTE/TOEFL)', icon: <Globe className="w-6 h-6" />, color: 'from-[#EC4899] to-[#DB2777]' },
                    { name: 'Resume/CV', icon: <FileText className="w-6 h-6" />, color: 'from-[#06B6D4] to-[#0891B2]' },
                    { name: 'Financial Documents', icon: <DollarSign className="w-6 h-6" />, color: 'from-[#EF4444] to-[#DC2626]' },
                    { name: 'GTE Statement', icon: <Shield className="w-6 h-6" />, color: 'from-[#14B8A6] to-[#0D9488]' },
                    { name: 'Health Insurance (OSHC)', icon: <Heart className="w-6 h-6" />, color: 'from-[#A855F7] to-[#9333EA]' },
                    { name: 'Police Clearance', icon: <Shield className="w-6 h-6" />, color: 'from-[#F97316] to-[#EA580C]' }
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl hover:shadow-md transition-all"
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

          {/* Entry Requirements */}
          <div id="entry-requirements" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('entry-requirements')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Entry Requirements (UG & PG)</h3>
              </div>
              {activeAccordion === 'entry-requirements' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'entry-requirements'
                  ? 'max-h-[3000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-[#2b2d72]" />
                    Undergraduate (UG) Requirements
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Academic Qualification',
                        desc: 'Completion of Year 12 or equivalent (65-85% depending on university)'
                      },
                      {
                        title: 'English Proficiency',
                        desc: 'IELTS: 6.0-6.5 overall (5.5 in each band) or PTE: 50-58 or TOEFL: 60-79'
                      },
                      {
                        title: 'Foundation/Diploma',
                        desc: 'Alternative pathway through foundation or diploma programs'
                      }
                    ].map((req, index) => (
                      <div key={index} className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl p-5">
                        <h5 className="font-bold text-[#2b2d72] mb-2">{req.title}</h5>
                        <p className="text-gray-600">{req.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#2b2d72]" />
                    Postgraduate (PG) Requirements
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Bachelor\'s Degree',
                        desc: 'Relevant bachelor\'s degree with 60-70% or GPA 2.5-3.0/4.0'
                      },
                      {
                        title: 'English Proficiency',
                        desc: 'IELTS: 6.5-7.0 overall (6.0 in each band) or PTE: 58-65 or TOEFL: 79-94'
                      },
                      {
                        title: 'Work Experience',
                        desc: 'Some programs require 1-3 years of relevant work experience (MBA, etc.)'
                      },
                      {
                        title: 'GMAT/GRE',
                        desc: 'Required for top business schools (GMAT 600+ recommended)'
                      }
                    ].map((req, index) => (
                      <div key={index} className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl p-5">
                        <h5 className="font-bold text-[#2b2d72] mb-2">{req.title}</h5>
                        <p className="text-gray-600">{req.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Process */}
          <div id="admission-process" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('admission-process')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Australia Admission Process</h3>
              </div>
              {activeAccordion === 'admission-process' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'admission-process'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8">
                <div className="space-y-6">
                  {[
                    {
                      step: 'Step 1',
                      title: 'Research & Shortlist',
                      description: 'Research universities, courses, and entry requirements. Shortlist 5-8 universities',
                      color: 'from-[#2b2d72] to-[#2b2d72]'
                    },
                    {
                      step: 'Step 2',
                      title: 'Prepare Documents',
                      description: 'Gather all required documents including transcripts, English tests, and references',
                      color: 'from-[#8B5CF6] to-[#7C3AED]'
                    },
                    {
                      step: 'Step 3',
                      title: 'Submit Applications',
                      description: 'Apply through university portals or agents. Application fees: AUD 50-150',
                      color: 'from-[#10B981] to-[#059669]'
                    },
                    {
                      step: 'Step 4',
                      title: 'Receive Offer Letter',
                      description: 'Receive conditional/unconditional offer. Accept and pay deposit',
                      color: 'from-[#F59E0B] to-[#D97706]'
                    },
                    {
                      step: 'Step 5',
                      title: 'Get CoE',
                      description: 'Receive Confirmation of Enrollment (CoE) after fee payment',
                      color: 'from-[#EC4899] to-[#DB2777]'
                    }
                  ].map((stage, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#2b2d72] mb-2">{stage.title}</h4>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Student Visa Process */}
          <div id="visa-process" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('visa-process')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Student Visa (Subclass 500)</h3>
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
                        title: 'Obtain CoE',
                        description: 'Get Confirmation of Enrollment from your university',
                        icon: <FileText className="w-5 h-5" />
                      },
                      {
                        title: 'Prepare GTE Statement',
                        description: 'Write Genuine Temporary Entrant statement explaining study plans',
                        icon: <FileText className="w-5 h-5" />
                      },
                      {
                        title: 'Arrange OSHC',
                        description: 'Purchase Overseas Student Health Cover for visa duration',
                        icon: <Heart className="w-5 h-5" />
                      },
                      {
                        title: 'Complete Medical Check',
                        description: 'Undergo health examination by panel doctors',
                        icon: <CheckCircle className="w-5 h-5" />
                      },
                      {
                        title: 'Lodge Visa Application',
                        description: 'Apply online through ImmiAccount. Fee: AUD 710',
                        icon: <DollarSign className="w-5 h-5" />
                      },
                      {
                        title: 'Visa Grant',
                        description: 'Receive visa decision (4-6 weeks typical)',
                        icon: <Award className="w-5 h-5" />
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

          {/* Financial Requirements */}
          <div id="financial-requirements" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('financial-requirements')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Financial Requirements</h3>
              </div>
              {activeAccordion === 'financial-requirements' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'financial-requirements'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8 space-y-6">
                <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-6 border-l-4 border-[#1E40AF]">
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-3">Proof of Funds Required</h4>
                  <p className="text-gray-600 mb-4">
                    You must demonstrate sufficient funds to cover tuition fees, living costs, and travel expenses for you and any dependents.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      category: 'Student (12 months)',
                      amount: 'AUD 24,505',
                      icon: <Users className="w-5 h-5" />,
                      color: 'from-[#2b2d72] to-[#2b2d72]'
                    },
                    {
                      category: 'Partner/Spouse',
                      amount: 'AUD 8,574',
                      icon: <Heart className="w-5 h-5" />,
                      color: 'from-[#EC4899] to-[#DB2777]'
                    },
                    {
                      category: 'First Child',
                      amount: 'AUD 3,670',
                      icon: <Users className="w-5 h-5" />,
                      color: 'from-[#10B981] to-[#059669]'
                    },
                    {
                      category: 'Additional Children',
                      amount: 'AUD 2,749 each',
                      icon: <Users className="w-5 h-5" />,
                      color: 'from-[#F59E0B] to-[#D97706]'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white`}>
                          {item.icon}
                        </div>
                        <span className="font-bold text-[#2b2d72]">{item.category}</span>
                      </div>
                      <p className="text-2xl font-bold text-[#2b2d72]">{item.amount}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-[#2b2d72]">Additional Costs to Consider:</h5>
                  {[
                    'Return airfare: AUD 1,500 - 2,500',
                    'OSHC (Health Insurance): AUD 500 - 700/year',
                    'First year tuition fees (varies by course)',
                    'Accommodation bond/deposit: AUD 1,000 - 2,000'
                  ].map((cost, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PSW Visa */}
          <div id="psw-visa" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('psw-visa')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Post-Study Work (PSW) Visa</h3>
              </div>
              {activeAccordion === 'psw-visa' ? (
                <ChevronUp className="w-6 h-6 text-[#2b2d72]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeAccordion === 'psw-visa'
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-8 pb-8 space-y-6">
                <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-6 border-l-4 border-[#1E40AF]">
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-3">Temporary Graduate Visa (Subclass 485)</h4>
                  <p className="text-gray-600">
                    After completing your studies, you may be eligible for a post-study work visa allowing you to work in Australia temporarily.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      level: 'Bachelor\'s Degree',
                      duration: '2 Years',
                      color: 'from-[#2b2d72] to-[#2b2d72]'
                    },
                    {
                      level: 'Master\'s Degree',
                      duration: '2-3 Years',
                      color: 'from-[#10B981] to-[#059669]'
                    },
                    {
                      level: 'Doctoral Degree',
                      duration: '4 Years',
                      color: 'from-[#F59E0B] to-[#D97706]'
                    }
                  ].map((option, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#1E40AF] transition-all">
                      <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mx-auto`}>
                        <GraduationCap className="w-7 h-7 text-white" />
                      </div>
                      <h5 className="text-lg font-bold text-[#2b2d72] text-center mb-2">{option.level}</h5>
                      <p className="text-2xl font-bold text-[#2b2d72] text-center">{option.duration}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-[#2b2d72]">Key Requirements:</h5>
                  {[
                    'Must hold an eligible student visa for at least 2 years',
                    'Complete a CRICOS-registered course',
                    'Meet English language requirements (IELTS 6.0 overall)',
                    'Must apply within 6 months of course completion',
                    'Hold adequate health insurance',
                    'Meet health and character requirements'
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-[#2b2d72]" />
                    <h5 className="font-bold text-[#2b2d72]">Visa Application Fee</h5>
                  </div>
                  <p className="text-xl font-bold text-[#2b2d72]">AUD 1,895</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intakes */}
          <div id="intakes" className="bg-[#EEF4FF] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 scroll-mt-24">
            <button
              onClick={() => toggleAccordion('intakes')}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'February Intake',
                      months: 'February - March',
                      deadline: 'Apply by August - October',
                      popular: true,
                      color: 'from-[#2b2d72] to-[#2b2d72]'
                    },
                    {
                      name: 'July Intake',
                      months: 'July - August',
                      deadline: 'Apply by February - April',
                      popular: true,
                      color: 'from-[#10B981] to-[#059669]'
                    }
                  ].map((intake, index) => (
                    <div
                      key={index}
                      className="relative bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      {intake.popular && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Main Intake
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
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A855F7] to-[#9333EA] rounded-xl flex items-center justify-center">
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
                      name: 'Australia Awards Scholarships',
                      amount: 'Full Tuition + Living',
                      eligibility: 'Outstanding students from developing countries',
                      icon: '🏆',
                      color: 'from-[#F59E0B] to-[#D97706]'
                    },
                    {
                      name: 'Destination Australia',
                      amount: 'AUD 15,000/year',
                      eligibility: 'International & domestic students in regional areas',
                      icon: '🌏',
                      color: 'from-[#2b2d72] to-[#2b2d72]'
                    },
                    {
                      name: 'University Merit Scholarships',
                      amount: 'AUD 5,000 - 30,000',
                      eligibility: 'Based on academic excellence',
                      icon: '🎓',
                      color: 'from-[#EC4899] to-[#DB2777]'
                    },
                    {
                      name: 'Research Training Program',
                      amount: 'Full Fee Waiver + Stipend',
                      eligibility: 'PhD & Research Masters students',
                      icon: '🔬',
                      color: 'from-[#10B981] to-[#059669]'
                    }
                  ].map((scholarship, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-2xl p-6 hover:shadow-lg transition-all"
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
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72]">Tuition Fees & Cost of Living</h3>
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
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-4">Annual Tuition Fees</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { type: 'Undergraduate', amount: 'AUD 20,000 - 45,000/year' },
                      { type: 'Postgraduate', amount: 'AUD 22,000 - 50,000/year' },
                      { type: 'MBA Programs', amount: 'AUD 40,000 - 80,000/year' },
                      { type: 'Doctoral Programs', amount: 'AUD 18,000 - 42,000/year' }
                    ].map((fee, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl">
                        <span className="font-medium text-[#2b2d72]">{fee.type}</span>
                        <span className="font-bold text-[#2b2d72]">{fee.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#2b2d72] mb-4">Monthly Living Expenses</h4>
                  <div className="space-y-3">
                    {[
                      { category: 'Accommodation', cost: 'AUD 800 - 2,500', icon: <Home className="w-5 h-5" /> },
                      { category: 'Food & Groceries', cost: 'AUD 400 - 800', icon: <DollarSign className="w-5 h-5" /> },
                      { category: 'Transportation', cost: 'AUD 100 - 200', icon: <MapPin className="w-5 h-5" /> },
                      { category: 'Utilities & Internet', cost: 'AUD 150 - 300', icon: <Building2 className="w-5 h-5" /> },
                      { category: 'Entertainment', cost: 'AUD 100 - 300', icon: <TrendingUp className="w-5 h-5" /> }
                    ].map((expense, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#2b2d72] to-[#2b2d72] rounded-lg flex items-center justify-center text-white">
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
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl flex items-center justify-center">
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
                    question: 'Can I work while studying in Australia?',
                    answer: 'Yes! Student visa holders can work up to 48 hours per fortnight during semester and unlimited hours during breaks. This helps cover living expenses and gain work experience.'
                  },
                  {
                    question: 'How much does a student visa cost?',
                    answer: 'The Australian student visa (subclass 500) application fee is AUD 710. Additional costs include health examinations (AUD 300-500) and biometrics if required.'
                  },
                  {
                    question: 'Is IELTS mandatory for Australian universities?',
                    answer: 'Most universities require English proficiency tests. IELTS is common, but PTE, TOEFL, and Duolingo are also accepted. Some universities may waive it for students from English-medium institutions.'
                  },
                  {
                    question: 'Can I bring my family to Australia?',
                    answer: 'Yes, you can include your spouse/partner and dependent children on your visa application. They can study and work (with restrictions) while you study in Australia.'
                  },
                  {
                    question: 'What is the average processing time for Australian student visa?',
                    answer: 'Visa processing typically takes 4-6 weeks, but can vary. Apply at least 6-8 weeks before your course starts. Higher education sector visas are usually processed faster.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-xl p-6">
                    <h4 className="text-lg font-bold text-[#2b2d72] mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                Get in touch with our expert counselors for personalized guidance on studying in Australia.
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

      {/* Enquiry Popup */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-16 h-16 bg-[#2b2d72] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#2b2d72]/25">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-[#2b2d72] mb-2 text-center">Quick Enquiry</h3>
            <p className="text-gray-500 text-sm mb-6 text-center">Fill in your details and we'll get back to you soon</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#2b2d72] hover:bg-[#1a1d4a] text-white rounded-xl font-bold text-base shadow-lg shadow-[#2b2d72]/20 hover:shadow-xl hover:shadow-[#2b2d72]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
