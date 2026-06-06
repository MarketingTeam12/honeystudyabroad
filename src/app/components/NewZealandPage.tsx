import { useState, useRef, useEffect } from 'react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { goToCountries, goToHome } from '../utils/rootNavigation';
import { SearchableCountrySelect } from './SearchableCountrySelect';
import aucklandImage from '@/imports/University_of_Auckland.jpg';
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
  Palmtree,
  X,
  Upload,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

export function NewZealandPage() {
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
    countryPreference: 'New Zealand',
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
    const message = encodeURIComponent('Hello! I am interested in studying in New Zealand. Please guide me.');
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Zealand Study Abroad Enquiry');
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

    const subject = encodeURIComponent('New Zealand Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const whyNewZealandPoints = [
    {
      icon: Award,
      title: 'World-Class Education',
      desc: 'All 8 universities ranked in top 3% globally',
      color: 'from-[#1E40AF] to-[#3B82F6]'
    },
    {
      icon: DollarSign,
      title: 'Affordable Tuition',
      desc: 'Lower costs compared to USA, UK, and Australia',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Briefcase,
      title: 'Work While Studying',
      desc: '20 hours/week part-time work + 3-year post-study visa',
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      icon: Shield,
      title: 'Safe & Peaceful',
      desc: 'One of the world\'s safest countries',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      icon: Globe,
      title: 'Stunning Natural Beauty',
      desc: 'Breathtaking landscapes and adventure activities',
      color: 'from-[#EC4899] to-[#DB2777]'
    },
    {
      icon: Users,
      title: 'Friendly Culture',
      desc: 'Welcoming, diverse community with excellent quality of life',
      color: 'from-[#06B6D4] to-[#0891B2]'
    }
  ];

  const popularCourses = [
    {
      name: 'Business & Management',
      icon: Briefcase,
      color: 'from-[#1E40AF] to-[#3B82F6]',
      searchUrl: 'https://www.google.com/search?q=Business+MBA+courses+in+New+Zealand'
    },
    {
      name: 'Engineering',
      icon: Award,
      color: 'from-[#10B981] to-[#059669]',
      searchUrl: 'https://www.google.com/search?q=Engineering+courses+in+New+Zealand'
    },
    {
      name: 'Information Technology',
      icon: Code,
      color: 'from-[#F59E0B] to-[#D97706]',
      searchUrl: 'https://www.google.com/search?q=IT+Computer+Science+courses+in+New+Zealand'
    },
    {
      name: 'Health Sciences',
      icon: Activity,
      color: 'from-[#EC4899] to-[#DB2777]',
      searchUrl: 'https://www.google.com/search?q=Health+Sciences+Nursing+courses+in+New+Zealand'
    },
    {
      name: 'Hospitality & Tourism',
      icon: Palmtree,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      searchUrl: 'https://www.google.com/search?q=Hospitality+Tourism+courses+in+New+Zealand'
    },
    {
      name: 'Agriculture & Environment',
      icon: Globe,
      color: 'from-[#06B6D4] to-[#0891B2]',
      searchUrl: 'https://www.google.com/search?q=Agriculture+Environmental+Science+courses+in+New+Zealand'
    },
    {
      name: 'Data Science',
      icon: Laptop,
      color: 'from-[#F97316] to-[#EA580C]',
      searchUrl: 'https://www.google.com/search?q=Data+Science+courses+in+New+Zealand'
    }
  ];

  const universities = [
    {
      name: 'University of Auckland',
      rank: 'QS #68',
      location: 'Auckland',
      tuition: 'NZD 30,000 - 45,000',
      programs: ['Business', 'Engineering', 'Medicine', 'Computer Science'],
      image: aucklandImage.src,
      website: 'https://www.auckland.ac.nz'
    },
    {
      name: 'University of Otago',
      rank: 'QS #217',
      location: 'Dunedin',
      tuition: 'NZD 28,000 - 40,000',
      programs: ['Health Sciences', 'Medicine', 'Dentistry', 'Pharmacy'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.otago.ac.nz'
    },
    {
      name: 'Victoria University',
      rank: 'QS #236',
      location: 'Wellington',
      tuition: 'NZD 27,000 - 38,000',
      programs: ['Law', 'Government', 'Business', 'Arts'],
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.wgtn.ac.nz'
    },
    {
      name: 'University of Canterbury',
      rank: 'QS #256',
      location: 'Christchurch',
      tuition: 'NZD 29,000 - 42,000',
      programs: ['Engineering', 'Sciences', 'Commerce', 'Arts'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.canterbury.ac.nz'
    },
    {
      name: 'University of Waikato',
      rank: 'QS #250-300',
      location: 'Hamilton',
      tuition: 'NZD 26,000 - 36,000',
      programs: ['Management', 'Computing', 'Sciences', 'Maori Studies'],
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.waikato.ac.nz'
    },
    {
      name: 'Massey University',
      rank: 'QS #292',
      location: 'Palmerston North',
      tuition: 'NZD 26,500 - 37,000',
      programs: ['Agriculture', 'Veterinary Science', 'Creative Arts', 'Business'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.massey.ac.nz'
    },
    {
      name: 'Lincoln University',
      rank: 'QS #362',
      location: 'Christchurch',
      tuition: 'NZD 27,000 - 35,000',
      programs: ['Agriculture', 'Environment', 'Business', 'Sciences'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.lincoln.ac.nz'
    },
    {
      name: 'Auckland University of Technology',
      rank: 'QS #407',
      location: 'Auckland',
      tuition: 'NZD 28,500 - 40,000',
      programs: ['Design', 'Business', 'Health', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.aut.ac.nz'
    }
  ];

  const intakes = [
    {
      name: 'Semester 1 Intake',
      season: '🌸 February - March',
      popular: 'Primary Intake',
      applicationPeriod: 'October - November',
      startDate: 'February',
      advantages: ['Widest course selection', 'Best for undergraduate programs', 'Maximum scholarship opportunities'],
      color: 'from-[#1E40AF] to-[#3B82F6]'
    },
    {
      name: 'Semester 2 Intake',
      season: '❄️ July - August',
      popular: 'Secondary Intake',
      applicationPeriod: 'April - May',
      startDate: 'July',
      advantages: ['Many programs available', 'Mid-year entry option', 'Good for postgraduate courses'],
      color: 'from-[#10B981] to-[#059669]'
    }
  ];

  const visaProcess = [
    {
      step: '1',
      title: 'Get Admission',
      description: 'Receive offer letter from NZ university',
      items: ['Confirmed enrollment', 'Fee payment receipt', 'Course details']
    },
    {
      step: '2',
      title: 'Gather Documents',
      description: 'Prepare required visa documents',
      items: ['Valid passport', 'Offer letter', 'Proof of funds (NZD $15,000/year)', 'Medical certificate', 'Police clearance']
    },
    {
      step: '3',
      title: 'Apply Online',
      description: 'Submit application via Immigration NZ',
      items: ['Online application', 'Upload documents', 'Pay visa fee (NZD $295)', 'Biometrics if required']
    },
    {
      step: '4',
      title: 'Processing',
      description: 'Wait for visa decision (4-6 weeks)',
      items: ['Track application', 'Respond to queries', 'Medical exam if requested']
    },
    {
      step: '5',
      title: 'Receive Visa',
      description: 'Get student visa and prepare',
      items: ['Visa valid for course duration', 'Work rights (20 hrs/week)', 'Book flights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4FF] to-white">
      {/* Premium Navbar */}
      <nav className="bg-[#EEF4FF] backdrop-blur-lg border-b border-[#E5E9F2] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-[22px] font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                StudyAbroad Pro
              </div>
            </div>
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
                      onClick={() => scrollToSection('why-new-zealand')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Heart className="w-4 h-4" />
                      Why Study New Zealand
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
                      Courses
                    </button>
                    <button
                      onClick={() => scrollToSection('visa-process')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <FileText className="w-4 h-4" />
                      Visa Process
                    </button>
                  </div>
                </div>
              </div>

              
              <button
                onClick={() => window.dispatchEvent(new Event('openEnquiry'))}
                className="px-6 py-2.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all"
              >
                Send Enquiry
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
                  src="https://flagcdn.com/nz.svg"
                  alt="Official Flag of New Zealand"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[#2b2d72] text-[14px] font-bold">Premium Study Destination</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://flagcdn.com/w320/nz.png"
                  alt="Official Flag of New Zealand"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-gray-100"
                />
                <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[58px] font-bold bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
                  Study in New Zealand
                </h1>
              </div>

              <p className="text-[#475569] text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                Experience world-class education, stunning landscapes, and a welcoming culture. New Zealand welcomes <span className="font-bold text-[#2b2d72]">100,000+</span> international students every year.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">8</div>
                  <div className="text-gray-600 text-xs sm:text-sm"></div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">3 Yrs</div>
                  <div className="text-gray-600 text-[13px]">Work Visa</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">Top 3%</div>
                  <div className="text-gray-600 text-[13px]">Global Rankings</div>
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
                  onClick={() => window.dispatchEvent(new Event('openEnquiry'))}
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
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop"
                  alt="New Zealand Landscape"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section id="why-new-zealand" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              TOP BENEFITS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-tight mb-4">
              Why Study in New Zealand?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              New Zealand offers exceptional advantages for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNewZealandPoints.map((point, index) => {
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
              Top Universities in New Zealand
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              All 8 universities ranked in top 3% globally
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
              Popular Courses in New Zealand
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
              Study Intakes in New Zealand
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
              Simple and straightforward visa application steps
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-[20px] mb-10">
            Get expert guidance for studying in New Zealand from our experienced counsellors
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new Event('openEnquiry'))}
              className="px-8 py-4 bg-white text-[#2b2d72] rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Send Enquiry
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
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
                Get in touch with our expert counselors for personalized guidance on studying in New Zealand.
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

      {/* Apply Now Modal */}
      {isApplyNowOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl relative border border-gray-100 my-8">
              <button
                onClick={() => setIsApplyNowOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#2b2d72] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#2b2d72]/25">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#2b2d72] mb-2">Apply Now – New Zealand</h2>
                  <p className="text-gray-500 text-sm">Complete the form below to start your application process</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const subject = encodeURIComponent('New Zealand Application - ' + applyFormData.fullName);
                    const body = encodeURIComponent(
                      `Full Name: ${applyFormData.fullName}\nEmail: ${applyFormData.email}\nPhone: ${applyFormData.phone}\nCountry Preference: ${applyFormData.countryPreference}\nCourse Interested: ${applyFormData.courseInterested}\nQualification: ${applyFormData.qualification}\n\nMessage:\n${applyFormData.message}`
                    );
                    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
                  }}
                  className="space-y-6"
                >
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applyFormData.fullName}
                        onChange={(e) => setApplyFormData({ ...applyFormData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={applyFormData.email}
                        onChange={(e) => setApplyFormData({ ...applyFormData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Country Preference */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={applyFormData.phone}
                        onChange={(e) => setApplyFormData({ ...applyFormData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                        Country Preference <span className="text-red-500">*</span>
                      </label>
                      <SearchableCountrySelect
                        required
                        value={applyFormData.countryPreference}
                        onChange={(val) => setApplyFormData({ ...applyFormData, countryPreference: val })}
                        placeholder="Select Country Preference"
                        variant="blue"
                      />
                    </div>
                  </div>

                  {/* Row 3: Course Interested & Qualification */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                        Course Interested <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applyFormData.courseInterested}
                        onChange={(e) => setApplyFormData({ ...applyFormData, courseInterested: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                        placeholder="e.g., MBA, Computer Science"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                        Highest Qualification <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={applyFormData.qualification}
                        onChange={(e) => setApplyFormData({ ...applyFormData, qualification: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
                      >
                        <option value="">Select Qualification</option>
                        <option value="High School">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD">PhD</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Upload Documents */}
                  <div>
                    <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                      Upload Documents (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="documents"
                        onChange={(e) => setApplyFormData({ ...applyFormData, documents: e.target.files?.[0] || null })}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <label
                        htmlFor="documents"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 bg-white cursor-pointer hover:border-[#2b2d72] transition-all flex items-center gap-3"
                      >
                        <Upload className="w-5 h-5 text-[#2b2d72]" />
                        <span className="text-sm font-medium">
                          {applyFormData.documents ? applyFormData.documents.name : 'Click to upload transcripts, resume, or certificates'}
                        </span>
                      </label>
                      <p className="text-xs text-gray-500 mt-2">Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="block text-[#2b2d72] font-semibold mb-2 text-sm">
                      Additional Message
                    </label>
                    <textarea
                      rows={4}
                      value={applyFormData.message}
                      onChange={(e) => setApplyFormData({ ...applyFormData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium resize-none"
                      placeholder="Tell us about your study goals, academic background, or any questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#2b2d72] hover:bg-[#1a1d4a] text-white rounded-xl font-bold text-base shadow-lg shadow-[#2b2d72]/20 hover:shadow-xl hover:shadow-[#2b2d72]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    🔒 Your information is secure and will be used only for application processing
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F172A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-[14px]">
            © 2024 StudyAbroad Pro. Your trusted partner for studying in New Zealand.
          </p>
        </div>
      </footer>
    </div>
  );
}
