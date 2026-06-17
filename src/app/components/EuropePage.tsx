import { useState, useRef, useEffect } from 'react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { goToCountries, goToHome } from '../utils/rootNavigation';
import { HeaderBrandLogo } from './HeaderBrandLogo';
import { CountryAdmissionTimeline } from './CountryAdmissionTimeline';
import { CountryApplicationModal } from './CountryApplicationModal';
import munichImage from '@/imports/munich.jpg';
import {
  ArrowLeft,
  MessageCircle,
  GraduationCap,
  FileText,
  DollarSign,
  Home,
  Briefcase,
  Award,
  CheckCircle,
  Users,
  Calendar,
  Plane,
  ChevronDown,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Send,
  BookOpen,
  Shield,
  Heart,
  MapPin,
  Code,
  Activity,
  Laptop,
  Plus,
  Minus,
  Building2,
  Beaker,
  Map,
  Languages,
  X,
  Upload,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

export function EuropePage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isApplyNowOpen, setIsApplyNowOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showAllUniversities, setShowAllUniversities] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
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
  const [applyFormData, setApplyFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryPreference: 'Europe',
    courseInterested: '',
    qualification: '',
    message: '',
    documents: null as File | null
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
    setIsServicesOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I am interested in studying in Europe. Please guide me.');
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Europe Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validation logic
    if (name === 'name' || name === 'fullName') {
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

    setFormData(prev => ({ ...prev, [name]: value }));

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

    const subject = encodeURIComponent('Europe Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const whyEuropePoints = [
    {
      icon: Award,
      title: 'World-Class Education',
      desc: 'Home to oldest universities with Nobel laureates and cutting-edge research',
      color: 'from-[#1E40AF] to-[#3B82F6]'
    },
    {
      icon: DollarSign,
      title: 'Low or No Tuition Fees',
      desc: 'Many countries offer free or highly affordable education',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Map,
      title: 'Travel 27 Countries',
      desc: 'Schengen visa allows travel across European Union',
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      icon: Languages,
      title: 'Multilingual Environment',
      desc: 'Learn new languages while studying in diverse cultures',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      icon: Briefcase,
      title: 'Work Opportunities',
      desc: 'Part-time work during studies and post-study work permits',
      color: 'from-[#EC4899] to-[#DB2777]'
    },
    {
      icon: Shield,
      title: 'Safe & Diverse',
      desc: 'High quality of life with rich cultural heritage',
      color: 'from-[#06B6D4] to-[#0891B2]'
    }
  ];

  const popularCourses = [
    {
      name: 'Engineering',
      icon: Award,
      color: 'from-[#1E40AF] to-[#3B82F6]',
      searchUrl: 'https://www.google.com/search?q=Engineering+courses+in+Europe'
    },
    {
      name: 'Business & MBA',
      icon: Briefcase,
      color: 'from-[#10B981] to-[#059669]',
      searchUrl: 'https://www.google.com/search?q=Business+MBA+courses+in+Europe'
    },
    {
      name: 'Computer Science',
      icon: Code,
      color: 'from-[#F59E0B] to-[#D97706]',
      searchUrl: 'https://www.google.com/search?q=Computer+Science+courses+in+Europe'
    },
    {
      name: 'Medicine & Health',
      icon: Activity,
      color: 'from-[#EC4899] to-[#DB2777]',
      searchUrl: 'https://www.google.com/search?q=Medicine+Health+Sciences+courses+in+Europe'
    },
    {
      name: 'Arts & Design',
      icon: Heart,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      searchUrl: 'https://www.google.com/search?q=Arts+Design+courses+in+Europe'
    },
    {
      name: 'Data Science',
      icon: Laptop,
      color: 'from-[#06B6D4] to-[#0891B2]',
      searchUrl: 'https://www.google.com/search?q=Data+Science+courses+in+Europe'
    },
    {
      name: 'Architecture',
      icon: Building2,
      color: 'from-[#F97316] to-[#EA580C]',
      searchUrl: 'https://www.google.com/search?q=Architecture+courses+in+Europe'
    }
  ];

  const universities = [
    {
      name: 'ETH Zurich',
      rank: 'QS #7',
      location: 'Switzerland',
      tuition: 'CHF 1,500/year',
      programs: ['Engineering', 'Sciences', 'Technology', 'Mathematics'],
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://ethz.ch'
    },
    {
      name: 'Technical University of Munich',
      rank: 'QS #37',
      location: 'Germany',
      tuition: 'Free (EU), €3,000 (Non-EU)',
      programs: ['Engineering', 'IT', 'Natural Sciences', 'Medicine'],
      image: munichImage.src,
      website: 'https://www.tum.de'
    },
    {
      name: 'University of Amsterdam',
      rank: 'QS #53',
      location: 'Netherlands',
      tuition: '€2,314 - €20,000',
      programs: ['Business', 'Social Sciences', 'Sciences', 'Arts'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.uva.nl'
    },
    {
      name: 'KU Leuven',
      rank: 'QS #61',
      location: 'Belgium',
      tuition: '€938 - €12,000',
      programs: ['Engineering', 'Sciences', 'Business', 'Medicine'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.kuleuven.be'
    },
    {
      name: 'University of Copenhagen',
      rank: 'QS #72',
      location: 'Denmark',
      tuition: 'Free (EU), €12,000 (Non-EU)',
      programs: ['Health Sciences', 'Natural Sciences', 'Social Sciences'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ku.dk'
    },
    {
      name: 'Sorbonne University',
      rank: 'QS #59',
      location: 'France',
      tuition: '€170 - €4,000',
      programs: ['Arts', 'Sciences', 'Medicine', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.sorbonne-universite.fr'
    },
    {
      name: 'Politecnico di Milano',
      rank: 'QS #111',
      location: 'Italy',
      tuition: '€3,900/year',
      programs: ['Engineering', 'Architecture', 'Design'],
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.polimi.it'
    },
    {
      name: 'Stockholm University',
      rank: 'Top in Scandinavia',
      location: 'Sweden',
      tuition: 'Free (EU), €9,000 (Non-EU)',
      programs: ['Sciences', 'Humanities', 'Social Sciences', 'Law'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.su.se'
    },
    {
      name: 'University of Vienna',
      rank: 'QS #130',
      location: 'Austria',
      tuition: '€726 - €1,500',
      programs: ['Arts', 'Sciences', 'Business', 'Law'],
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.univie.ac.at'
    }
  ];

  const intakes = [
    {
      name: 'Fall Semester',
      season: '🍂 September - October',
      popular: 'Primary Intake',
      applicationPeriod: 'December - May',
      startDate: 'September/October',
      advantages: ['Largest intake window', 'Maximum course availability', 'Best scholarship opportunities'],
      color: 'from-[#1E40AF] to-[#3B82F6]'
    },
    {
      name: 'Spring Semester',
      season: '🌸 February - March',
      popular: 'Secondary Intake',
      applicationPeriod: 'August - November',
      startDate: 'February/March',
      advantages: ['Available in most countries', 'Less competition', 'Quick processing'],
      color: 'from-[#10B981] to-[#059669]'
    }
  ];

  const scholarships = [
    {
      name: 'Erasmus+ Programme',
      amount: 'Full tuition + stipend',
      eligibility: 'EU and international students',
      description: 'Study across multiple European universities'
    },
    {
      name: 'DAAD Scholarships',
      amount: '€850 - €1,200/month',
      eligibility: 'International students for Germany',
      description: 'German Academic Exchange Service funding'
    },
    {
      name: 'Eiffel Excellence',
      amount: '€1,181 - €1,700/month',
      eligibility: 'Master\'s and PhD in France',
      description: 'French government scholarship program'
    },
    {
      name: 'Holland Scholarship',
      amount: '€5,000',
      eligibility: 'Non-EU students in Netherlands',
      description: 'One-time scholarship for first year'
    }
  ];

  const costBreakdown = [
    {
      country: 'Germany',
      tuition: 'Free - €3,000/year',
      living: '€850 - €1,200/month',
      color: 'from-[#1E40AF] to-[#3B82F6]'
    },
    {
      country: 'France',
      tuition: '€170 - €4,000/year',
      living: '€800 - €1,200/month',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      country: 'Netherlands',
      tuition: '€2,000 - €20,000/year',
      living: '€900 - €1,300/month',
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      country: 'Italy',
      tuition: '€900 - €4,000/year',
      living: '€700 - €1,100/month',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    }
  ];

  const visaProcess = [
    {
      step: '1',
      title: 'Get University Admission',
      description: 'Receive acceptance letter from European university',
      items: ['Letter of acceptance', 'Course enrollment confirmation', 'Fee payment receipt']
    },
    {
      step: '2',
      title: 'Prepare Documents',
      description: 'Gather all required visa documents',
      items: ['Valid passport (6 months validity)', 'Proof of financial means', 'Health insurance', 'Accommodation proof', 'Academic transcripts']
    },
    {
      step: '3',
      title: 'Apply for Visa',
      description: 'Submit application at embassy/consulate',
      items: ['Complete visa application', 'Book appointment', 'Pay visa fee (€80-150)', 'Biometrics if required']
    },
    {
      step: '4',
      title: 'Attend Interview',
      description: 'Visa interview at embassy (if required)',
      items: ['Bring all original documents', 'Explain study plans', 'Demonstrate financial stability']
    },
    {
      step: '5',
      title: 'Receive Visa & Travel',
      description: 'Get your student visa and travel to Europe',
      items: ['Processing: 2-8 weeks', 'Receive Schengen visa', 'Register locally within 90 days']
    }
  ];

  const admissionProcess = [
    {
      step: 'Research & Shortlist',
      desc: 'Research universities, programs, and admission requirements',
      icon: BookOpen
    },
    {
      step: 'Prepare Documents',
      desc: 'Transcripts, LOR, SOP, CV, language test scores',
      icon: FileText
    },
    {
      step: 'Apply Online',
      desc: 'Submit applications via university portals (Uni-Assist for Germany)',
      icon: Send
    },
    {
      step: 'Wait for Decision',
      desc: 'Universities review applications (4-12 weeks)',
      icon: Clock
    },
    {
      step: 'Accept Offer',
      desc: 'Pay acceptance fee and confirm enrollment',
      icon: CheckCircle
    },
    {
      step: 'Apply for Visa',
      desc: 'Submit visa application with university documents',
      icon: Plane
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4FF] to-white">
      {/* Premium Navbar */}
      <nav className="bg-[#EEF4FF] backdrop-blur-lg border-b border-[#E5E9F2] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[92px]">
            <button type="button" onClick={goToHome} className="flex items-center group">
              <HeaderBrandLogo className="group-hover:scale-105 transition-transform" />
            </button>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/#home"
                onClick={(e) => {
                  e.preventDefault();
                  goToHome();
                }}
                className="text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="/#countries"
                onClick={(e) => {
                  e.preventDefault();
                  goToCountries();
                }}
                className="text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Countries
              </a>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E5E9F2] overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-2">
                    <button
                      onClick={() => scrollToSection('why-europe')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Heart className="w-4 h-4" />
                      Why Study in Europe
                    </button>
                    <button
                      onClick={() => scrollToSection('intakes')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Calendar className="w-4 h-4" />
                      Intakes
                    </button>
                    <button
                      onClick={() => scrollToSection('top-universities')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Top Universities
                    </button>
                    <button
                      onClick={() => scrollToSection('popular-courses')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <BookOpen className="w-4 h-4" />
                      Popular Courses
                    </button>
                    <button
                      onClick={() => scrollToSection('scholarships')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Award className="w-4 h-4" />
                      Scholarships
                    </button>
                    <button
                      onClick={() => scrollToSection('cost-living')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <DollarSign className="w-4 h-4" />
                      Cost of Living
                    </button>
                    <button
                      onClick={() => scrollToSection('visa-process')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <FileText className="w-4 h-4" />
                      Visa Process
                    </button>
                    <button
                      onClick={() => scrollToSection('admission-process')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Send className="w-4 h-4" />
                      Admission Process
                    </button>
                  </div>
                </div>
              </div>

              
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all"
              >
                Free Counseling
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Link */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-[#E5E9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="/#countries"
            onClick={(e) => {
              e.preventDefault();
              goToCountries();
            }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2b2d72] text-[14px] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Countries
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#60A5FA]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full border border-[#E5E9F2] mb-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://flagcdn.com/eu.svg"
                  alt="European Union Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[#2b2d72] text-[14px] font-bold">World's Education Leader</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://flagcdn.com/w320/eu.png"
                  alt="European Union Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-gray-100"
                />
                <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[58px] font-bold bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
                  Study in Europe
                </h1>
              </div>

              <p className="text-[#475569] text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                Experience world-class education, rich cultural diversity, and affordable tuition across 27+ countries. Europe hosts <span className="font-bold text-[#2b2d72]">2.5 million+</span> international students every year.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">27</div>
                  <div className="text-gray-600 text-[13px]">EU Countries</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">500+</div>
                  <div className="text-gray-600 text-[13px]">Universities</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">Low</div>
                  <div className="text-gray-600 text-[13px]">Tuition Fees</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsApplyNowOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] text-white rounded-xl font-bold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <FileText className="w-5 h-5" />
                  Apply Now
                </button>
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop"
                  alt="European Architecture"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Europe */}
      <section id="why-europe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              TOP BENEFITS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Why Study in Europe?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Europe offers unmatched advantages for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyEuropePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-6 border border-[#E5E9F2] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="top-universities" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              WORLD-CLASS INSTITUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Top Universities in Europe
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click on any university to visit their official website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllUniversities ? universities : universities.slice(0, 3)).map((uni, index) => (
              <a
                key={index}
                href={getUniversityDetailUrl(uni.name)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E5E9F2] hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-[#2b2d72] font-bold text-[13px]">{uni.rank}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                      <span className="text-[#2b2d72] font-bold text-[14px] flex items-center gap-2">
                        Visit Website
                        <Globe className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#2b2d72] transition-colors">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-[14px] mb-4">
                    <MapPin className="w-4 h-4" />
                    {uni.location}
                  </div>
                  <div className="flex items-center gap-2 text-[#2b2d72] text-[14px] font-semibold mb-4">
                    <DollarSign className="w-4 h-4" />
                    {uni.tuition}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.slice(0, 3).map((prog, idx) => (
                      <span
                        key={idx}
                        className="text-[12px] px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2b2d72] font-medium group-hover:bg-gradient-to-r group-hover:from-[#1E40AF] group-hover:to-[#3B82F6] group-hover:text-white transition-all"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {universities.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllUniversities(!showAllUniversities)}
                className="group px-8 py-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 mx-auto hover:-translate-y-1"
              >
                {showAllUniversities ? (
                  <>
                    <Minus className="w-5 h-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Show More Universities ({universities.length - 3} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Courses */}
      <section id="popular-courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              IN-DEMAND PROGRAMS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Popular Courses in Europe
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click on any course to explore programs and universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAllCourses ? popularCourses : popularCourses.slice(0, 4)).map((course, index) => {
              const Icon = course.icon;
              return (
                <a
                  key={index}
                  href={course.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-8 border-2 border-[#E5E9F2] hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white group-hover:text-[#2b2d72] transition-colors" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0F172A] group-hover:text-white transition-colors mb-2">
                      {course.name}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white/90 text-[13px] flex items-center gap-1">
                        Explore Programs
                        <Globe className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {popularCourses.length > 4 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllCourses(!showAllCourses)}
                className="group px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 mx-auto hover:-translate-y-1"
              >
                {showAllCourses ? (
                  <>
                    <Minus className="w-5 h-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Show More Courses ({popularCourses.length - 4} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Intakes */}
      <section id="intakes" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              ACADEMIC CALENDAR
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Study Intakes in Europe
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Plan your academic journey with flexible intake options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {intakes.map((intake, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${intake.color} rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 shadow-xl text-white`}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{intake.season}</div>
                  <h3 className="text-2xl sm:text-[28px] font-bold mb-2">{intake.name}</h3>
                  <p className="text-white/90 text-[16px] font-semibold">{intake.popular}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <div className="text-white/80 text-[13px]">Application Period</div>
                      <div className="font-semibold">{intake.applicationPeriod}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <div>
                      <div className="text-white/80 text-[13px]">Start Date</div>
                      <div className="font-semibold">{intake.startDate}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-white/90 text-[14px] font-semibold mb-3">Advantages:</div>
                  {intake.advantages.map((advantage, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-[14px]">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              FINANCIAL AID
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Scholarships Available
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Generous funding opportunities for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-[#E5E9F2] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1">{scholarship.name}</h3>
                    <p className="text-[#2b2d72] font-semibold text-[14px]">{scholarship.amount}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[14px] mb-3">{scholarship.description}</p>
                <div className="flex items-center gap-2 text-gray-600 text-[13px]">
                  <Users className="w-4 h-4" />
                  {scholarship.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section id="cost-living" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              BUDGET PLANNING
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Cost of Living in Europe
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Affordable education with transparent cost breakdown
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costBreakdown.map((cost, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${cost.color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                <h3 className="text-[24px] font-bold mb-4">{cost.country}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-white/80 text-[13px] mb-1">Tuition Fees</div>
                    <div className="font-semibold text-[16px]">{cost.tuition}</div>
                  </div>
                  <div>
                    <div className="text-white/80 text-[13px] mb-1">Living Costs</div>
                    <div className="font-semibold text-[16px]">{cost.living}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section id="visa-process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              VISA INFORMATION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Student Visa Process
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Step-by-step guide to getting your Schengen student visa
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {visaProcess.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-[#E5E9F2] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">{step.step}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[24px] font-bold text-[#0F172A] mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-[16px] mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#2b2d72] flex-shrink-0 mt-0.5" />
                          <span className="text-[#475569] text-[14px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryAdmissionTimeline countryName="Europe" sectionId="admission-process" />
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6">
            Ready to Start Your European Journey?
          </h2>
          <p className="text-white/90 text-[20px] mb-10">
            Get free expert guidance for studying in Europe from our experienced counsellors
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-white text-[#2b2d72] rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Free Counseling
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </button>
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
                Get in touch with our expert counselors for personalized guidance on studying in Europe.
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
        countryName="Europe"
        mode="apply"
      />
    </div>
  );
}




