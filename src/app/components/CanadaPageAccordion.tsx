import { useState, useRef, useEffect } from 'react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { goToCountries, goToHome } from '../utils/rootNavigation';
import { HeaderBrandLogo } from './HeaderBrandLogo';
import { CountryApplicationModal } from './CountryApplicationModal';
import { CountryAdmissionTimeline } from './CountryAdmissionTimeline';
import waterlooImage from '@/imports/Waterloo.jpg';
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
  Zap,
  Target,
  Heart,
  MapPin,
  AlertCircle,
  FileCheck,
  Building,
  Monitor,
  Laptop,
  Activity,
  Stethoscope,
  Code,
  Gamepad2,
  Plus,
  Minus,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

type AccordionSection = 'document-checklist' | 'academic-credentials' | 'intakes' | 'cost-living' | 'faq' | null;

export function CanadaPageAccordion() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<AccordionSection>(null);
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

  // Close services dropdown when clicking outside
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

  const toggleAccordion = (section: AccordionSection) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
      // Scroll to the accordion section
      setTimeout(() => {
        const element = document.getElementById(`accordion-${section}`);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I am interested in studying in Canada. Please guide me.');
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Canada Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
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

    const subject = encodeURIComponent('Canada Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const whyCanadaPoints = [
    {
      icon: Award,
      title: 'World-Class Education',
      desc: 'Top-ranked universities with globally recognized degrees',
      color: 'from-[#1E40AF] to-[#3B82F6]'
    },
    {
      icon: DollarSign,
      title: 'Affordable Tuition',
      desc: 'Lower costs compared to USA and UK',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Briefcase,
      title: 'Work While Studying',
      desc: '20 hours/week part-time work allowed',
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      icon: Home,
      title: 'PR Pathway',
      desc: 'Clear route to permanent residency',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      icon: Globe,
      title: 'Multicultural Society',
      desc: 'Welcoming environment for international students',
      color: 'from-[#EC4899] to-[#DB2777]'
    },
    {
      icon: Shield,
      title: 'Safe & Peaceful',
      desc: 'One of the safest countries in the world',
      color: 'from-[#06B6D4] to-[#0891B2]'
    }
  ];

  const popularCourses = [
    {
      name: 'Computer Science',
      icon: Code,
      color: 'from-[#1E40AF] to-[#3B82F6]',
      searchUrl: 'https://www.google.com/search?q=Computer+Science+courses+in+Canada'
    },
    {
      name: 'Business',
      icon: Briefcase,
      color: 'from-[#10B981] to-[#059669]',
      searchUrl: 'https://www.google.com/search?q=Business+MBA+courses+in+Canada'
    },
    {
      name: 'Engineering',
      icon: Award,
      color: 'from-[#F59E0B] to-[#D97706]',
      searchUrl: 'https://www.google.com/search?q=Engineering+courses+in+Canada'
    },
    {
      name: 'Health Sciences',
      icon: Activity,
      color: 'from-[#EC4899] to-[#DB2777]',
      searchUrl: 'https://www.google.com/search?q=Health+Sciences+courses+in+Canada'
    },
    {
      name: 'Physiotherapy',
      icon: Stethoscope,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      searchUrl: 'https://www.google.com/search?q=Physiotherapy+courses+in+Canada'
    },
    {
      name: 'Information Technology',
      icon: Laptop,
      color: 'from-[#06B6D4] to-[#0891B2]',
      searchUrl: 'https://www.google.com/search?q=Information+Technology+courses+in+Canada'
    },
    {
      name: 'Animation & Gaming',
      icon: Gamepad2,
      color: 'from-[#F97316] to-[#EA580C]',
      searchUrl: 'https://www.google.com/search?q=Animation+Gaming+courses+in+Canada'
    }
  ];

  const documentChecklist = [
    { doc: 'Passport', icon: '📘', desc: 'Valid for at least 6 months', gradient: 'from-[#1E40AF] to-[#3B82F6]' },
    { doc: 'Mark Sheets', icon: '📜', desc: '10th, 12th & Bachelor\'s marks', gradient: 'from-[#10B981] to-[#059669]' },
    { doc: 'LOR - 2 or 3', icon: '📝', desc: 'Letters of Recommendation', gradient: 'from-[#F59E0B] to-[#D97706]' },
    { doc: 'Funds Proof', icon: '💰', desc: 'Bank statements & financial docs', gradient: 'from-[#8B5CF6] to-[#7C3AED]' },
    { doc: 'SOP', icon: '✍️', desc: 'Statement of Purpose', gradient: 'from-[#EC4899] to-[#DB2777]' },
    { doc: 'Birth Certificate', icon: '🎂', desc: 'Official birth certificate', gradient: 'from-[#06B6D4] to-[#0891B2]' },
    { doc: 'IELTS', icon: '🗣️', desc: 'English language test score', gradient: 'from-[#F97316] to-[#EA580C]' },
    { doc: 'Medical Certificate', icon: '🏥', desc: 'Health examination report', gradient: 'from-[#EF4444] to-[#DC2626]' },
    { doc: 'NON-SDS Visa Filing', icon: '📋', desc: 'Standard visa application', gradient: 'from-[#6366F1] to-[#4F46E5]' },
    { doc: 'PAL/TAL from DLI', icon: '🎓', desc: 'Provincial Attestation Letter', gradient: 'from-[#14B8A6] to-[#0D9488]' }
  ];

  const academicCredentials = [
    { abbr: 'WES', fullName: 'World Education Services', icon: '🌍' },
    { abbr: 'NACES', fullName: 'National Association of Credential Evaluation Services', icon: '🎓' },
    { abbr: 'AICE', fullName: 'Association of International Credential Evaluators', icon: '📋' },
    { abbr: 'AEA', fullName: 'American Evaluation Association', icon: '🏛️' },
    { abbr: 'EAIE', fullName: 'European Association of International Education', icon: '🇪🇺' },
    { abbr: 'ATA', fullName: 'American Translation Association', icon: '📝' }
  ];

  const intakes = [
    {
      name: 'September Intake',
      season: '🍂 Fall',
      popular: 'Most Popular',
      applicationPeriod: 'December - April',
      startDate: 'September',
      advantages: ['Maximum course options', 'Best scholarship opportunities', 'Largest intake'],
      color: 'from-[#DC2626] to-[#B91C1C]'
    },
    {
      name: 'January Intake',
      season: '❄️ Winter',
      popular: 'Second Popular',
      applicationPeriod: 'August - October',
      startDate: 'January',
      advantages: ['Good course availability', 'Less competition', 'Quicker admission'],
      color: 'from-[#3B82F6] to-[#2563EB]'
    },
    {
      name: 'May Intake',
      season: '🌸 Summer',
      popular: 'Limited Options',
      applicationPeriod: 'November - February',
      startDate: 'May',
      advantages: ['Faster processing', 'Specific programs only', 'Smaller batch size'],
      color: 'from-[#10B981] to-[#059669]'
    }
  ];

  const costBreakdown = {
    tuition: [
      { type: 'Undergraduate Programs', cost: 'CAD 15,000 - 35,000' },
      { type: 'Postgraduate Programs', cost: 'CAD 18,000 - 50,000' },
      { type: 'MBA Programs', cost: 'CAD 30,000 - 65,000' }
    ],
    living: [
      { type: 'Accommodation', cost: 'CAD 600 - 1,500' },
      { type: 'Food & Groceries', cost: 'CAD 250 - 500' },
      { type: 'Transportation', cost: 'CAD 80 - 150' },
      { type: 'Other Expenses', cost: 'CAD 250 - 500' }
    ]
  };

  const faqs = [
    {
      q: 'How much does it cost to study in Canada?',
      a: 'Tuition fees range from CAD 15,000 to 55,000 per year depending on the program and university. Living expenses are around CAD 12,000-25,000 per year.'
    },
    {
      q: 'Can I work while studying in Canada?',
      a: 'Yes! International students can work up to 20 hours per week off-campus during semesters and full-time during scheduled breaks.'
    },
    {
      q: 'What is the difference between SDS and Non-SDS visa?',
      a: 'SDS offers faster processing (20-30 days) for students from eligible countries with IELTS 6.0+ in each band, GIC of CAD 10,000, and first-year tuition paid.'
    },
    {
      q: 'Which intake is best for Canada?',
      a: 'September (Fall) intake is the most popular with maximum course options and scholarship opportunities.'
    }
  ];

  const universities = [
    {
      name: 'University of Toronto',
      rank: 'QS #25',
      location: 'Toronto, ON',
      tuition: 'CAD 45,000 - 55,000',
      programs: ['Engineering', 'Business', 'Computer Science', 'Medicine'],
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.utoronto.ca'
    },
    {
      name: 'University of British Columbia',
      rank: 'QS #34',
      location: 'Vancouver, BC',
      tuition: 'CAD 40,000 - 50,000',
      programs: ['Sciences', 'Arts', 'Business', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ubc.ca'
    },
    {
      name: 'McGill University',
      rank: 'QS #46',
      location: 'Montreal, QC',
      tuition: 'CAD 35,000 - 45,000',
      programs: ['Medicine', 'Law', 'Engineering', 'Arts'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.mcgill.ca'
    },
    {
      name: 'University of Waterloo',
      rank: 'Top for Engineering & CS',
      location: 'Waterloo, ON',
      tuition: 'CAD 40,000 - 52,000',
      programs: ['Computer Science', 'Engineering', 'Mathematics', 'Co-op'],
      image: waterlooImage.src,
      website: 'https://uwaterloo.ca'
    },
    {
      name: 'McMaster University',
      rank: 'Renowned for Health Sciences',
      location: 'Hamilton, ON',
      tuition: 'CAD 35,000 - 45,000',
      programs: ['Health Sciences', 'Engineering', 'Business', 'Sciences'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.mcmaster.ca'
    },
    {
      name: 'University of Alberta',
      rank: 'Strong research focus',
      location: 'Edmonton, AB',
      tuition: 'CAD 30,000 - 40,000',
      programs: ['Research', 'Engineering', 'Sciences', 'Medicine'],
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ualberta.ca'
    },
    {
      name: 'Western University',
      rank: 'QS #114',
      location: 'London, ON',
      tuition: 'CAD 32,000 - 48,000',
      programs: ['Ivey Business', 'Medicine', 'Engineering', 'Arts'],
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.uwo.ca'
    },
    {
      name: 'University of Calgary',
      rank: 'Research-intensive',
      location: 'Calgary, AB',
      tuition: 'CAD 28,000 - 38,000',
      programs: ['Energy', 'Engineering', 'Business', 'Sciences'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ucalgary.ca'
    },
    {
      name: 'Queen\'s University',
      rank: 'QS #209',
      location: 'Kingston, ON',
      tuition: 'CAD 38,000 - 48,000',
      programs: ['Business', 'Engineering', 'Law', 'Health Sciences'],
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.queensu.ca'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Chennai, India',
      university: 'University of Toronto',
      course: 'MBA',
      text: 'The PGWP program helped me gain 3 years of Canadian work experience. I applied for PR and got it within 18 months!',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      location: 'Mumbai, India',
      university: 'UBC Vancouver',
      course: 'Computer Science',
      text: 'Best decision ever! Affordable education, multicultural environment, and amazing job opportunities.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[92px]">
            <button type="button" onClick={goToHome} className="flex items-center group">
              <HeaderBrandLogo className="group-hover:scale-105 transition-transform" />
            </button>
            <div className="flex items-center gap-8">
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
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-2">
                    <button
                      onClick={() => scrollToSection('why-canada')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Globe className="w-4 h-4" />
                      Why Study Abroad
                    </button>
                    <button
                      onClick={() => scrollToSection('popular-courses')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <BookOpen className="w-4 h-4" />
                      Popular Courses
                    </button>
                    <button
                      onClick={() => scrollToSection('top-universities')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Top Universities
                    </button>
                  </div>
                </div>
              </div>

              
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Link */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-gray-100">
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
      <section className="relative py-20 overflow-hidden bg-[#EEF4FF]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#2b2d72]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2b2d72]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full border border-gray-100 mb-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://flagcdn.com/ca.svg"
                  alt="Canada Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[#2b2d72] text-[14px] font-bold">Premium Study Destination</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://flagcdn.com/w320/ca.png"
                  alt="Canada Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-white/50"
                />
                <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[58px] font-bold text-[#2b2d72] leading-tight">
                  Study in Canada
                </h1>
              </div>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                World-class education, affordable tuition, and a clear pathway to permanent residency. Canada welcomes <span className="font-bold text-[#2b2d72]">800,000+</span> international students every year.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">26</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Top Universities</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">3 Yrs</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Work Permit</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">98%</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Visa Success</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-[16px] hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-[16px] hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop"
                  alt="Canadian University Campus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2d72]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Canada */}
      <section id="why-canada" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-xs sm:text-sm mb-4">
              TOP BENEFITS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] mb-4 leading-tight">
              Why Study in Canada?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Canada offers unmatched advantages for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCanadaPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="top-universities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-xs sm:text-sm mb-4">
              WORLD-CLASS INSTITUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] mb-4 leading-tight">
              Top Universities in Canada
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all duration-500 border border-gray-100 hover:-translate-y-2 cursor-pointer"
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
                  <h3 className="text-[20px] font-bold text-[#2b2d72] mb-2 transition-colors">
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
                        className="text-[12px] px-3 py-1 rounded-full bg-[#EEF4FF] text-[#2b2d72] font-medium group-hover:bg-[#2b2d72] group-hover:text-white transition-all"
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
                className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-[16px] hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
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
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-xs sm:text-sm mb-4">
              IN-DEMAND PROGRAMS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] mb-4 leading-tight">
              Popular Courses in Canada
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
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white group-hover:text-[#2b2d72] transition-colors" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#2b2d72] group-hover:text-white transition-colors mb-2">
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
                className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-[16px] hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
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

      {/* Course Details Section */}
      <section className="py-14 bg-[#EEF4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 bg-white rounded-full text-[#2b2d72] font-semibold text-xs mb-3 uppercase tracking-wide">
              Course Details
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2b2d72] mb-2 leading-tight">Study in Canada — At a Glance</h2>
            <p className="text-gray-600 text-sm sm:text-[15px]">Key facts about studying in Canada</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: DollarSign,
                label: 'Tuition Fees',
                value: 'CAD 15,000 – 55,000',
                sub: 'per year',
                color: 'from-[#2b2d72] to-[#2b2d72]',
                bg: 'bg-white'
              },
              {
                icon: Clock,
                label: 'Course Duration',
                value: '1 – 4 Years',
                sub: 'depending on program',
                color: 'from-[#2b2d72] to-[#2b2d72]',
                bg: 'bg-white'
              },
              {
                icon: BookOpen,
                label: 'Course Type',
                value: 'UG / PG / MBA',
                sub: 'Diploma & Certificate',
                color: 'from-[#2b2d72] to-[#2b2d72]',
                bg: 'bg-white'
              },
              {
                icon: Home,
                label: 'Cost of Living',
                value: 'CAD 12,000 – 25,000',
                sub: 'per year',
                color: 'from-[#2b2d72] to-[#2b2d72]',
                bg: 'bg-white'
              },
              {
                icon: Calendar,
                label: 'Intake',
                value: 'Sep · Jan · May',
                sub: 'September is primary',
                color: 'from-[#2b2d72] to-[#2b2d72]',
                bg: 'bg-white'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`${item.bg} rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
                  <div className={`w-10 h-10 bg-[#2b2d72] rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-[15px] font-bold text-[#2b2d72] leading-snug">{item.value}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-xs sm:text-sm mb-4">
              ESSENTIAL INFORMATION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] mb-4 leading-tight">
              Everything You Need to Know
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click on any section below to explore detailed information
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {/* Document Checklist Accordion */}
            <div
              id="accordion-document-checklist"
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all"
            >
              <button
                onClick={() => toggleAccordion('document-checklist')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'document-checklist'
                      ? 'bg-[#2b2d72]'
                      : 'bg-[#EEF4FF]'
                  }`}>
                    <FileText className={`w-7 h-7 ${activeAccordion === 'document-checklist' ? 'text-white' : 'text-[#2b2d72]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Document Checklist</h3>
                    <p className="text-gray-600 text-[14px]">Essential documents for your application</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'document-checklist' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'document-checklist' ? (
                    <Minus className="w-6 h-6 text-[#2b2d72]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'document-checklist' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                    {documentChecklist.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-center mb-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="text-[14px] font-bold text-[#2b2d72] mb-1">{item.doc}</h4>
                          <p className="text-gray-600 text-[12px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Credentials Accordion */}
            <div
              id="accordion-academic-credentials"
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all"
            >
              <button
                onClick={() => toggleAccordion('academic-credentials')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'academic-credentials'
                      ? 'bg-[#2b2d72]'
                      : 'bg-[#EEF4FF]'
                  }`}>
                    <Award className={`w-7 h-7 ${activeAccordion === 'academic-credentials' ? 'text-white' : 'text-[#2b2d72]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Academic Credentials</h3>
                    <p className="text-gray-600 text-[14px]">Recognized credential evaluation services</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'academic-credentials' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'academic-credentials' ? (
                    <Minus className="w-6 h-6 text-[#2b2d72]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'academic-credentials' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {academicCredentials.map((cred, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all hover:-translate-y-1"
                      >
                        <div className="text-4xl mb-3 text-center">{cred.icon}</div>
                        <h4 className="text-[18px] font-bold text-[#2b2d72] mb-2 text-center">{cred.abbr}</h4>
                        <p className="text-gray-600 text-[13px] text-center leading-relaxed">{cred.fullName}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Intakes Accordion */}
            <div
              id="accordion-intakes"
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all"
            >
              <button
                onClick={() => toggleAccordion('intakes')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'intakes'
                      ? 'bg-[#2b2d72]'
                      : 'bg-[#EEF4FF]'
                  }`}>
                    <Calendar className={`w-7 h-7 ${activeAccordion === 'intakes' ? 'text-white' : 'text-[#2b2d72]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Intakes in Canada</h3>
                    <p className="text-gray-600 text-[14px]">University admission timelines</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'intakes' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'intakes' ? (
                    <Minus className="w-6 h-6 text-[#2b2d72]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'intakes' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {intakes.map((intake, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all border border-gray-100"
                      >
                        <div className={`bg-gradient-to-br ${intake.color} p-6 text-white`}>
                          <div className="text-3xl mb-2">{intake.season.split(' ')[0]}</div>
                          <h4 className="text-[20px] font-bold mb-2">{intake.name}</h4>
                          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[12px] font-semibold">
                            {intake.popular}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <div className="text-gray-600 text-[13px] mb-1">Application Period</div>
                            <div className="text-[#2b2d72] font-bold">{intake.applicationPeriod}</div>
                          </div>
                          <div className="mb-4">
                            <div className="text-gray-600 text-[13px] mb-1">Start Date</div>
                            <div className="text-[#2b2d72] font-bold">{intake.startDate}</div>
                          </div>
                          <div className="space-y-2">
                            {intake.advantages.map((adv, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                                <span className="text-gray-600 text-[13px]">{adv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost of Living Accordion */}
            <div
              id="accordion-cost-living"
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all"
            >
              <button
                onClick={() => toggleAccordion('cost-living')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'cost-living'
                      ? 'bg-[#2b2d72]'
                      : 'bg-[#EEF4FF]'
                  }`}>
                    <DollarSign className={`w-7 h-7 ${activeAccordion === 'cost-living' ? 'text-white' : 'text-[#2b2d72]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Cost of Living</h3>
                    <p className="text-gray-600 text-[14px]">Budget planning for studying in Canada</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'cost-living' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'cost-living' ? (
                    <Minus className="w-6 h-6 text-[#2b2d72]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'cost-living' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="bg-[#EEF4FF] rounded-xl p-6 border border-gray-100">
                      <h4 className="text-[20px] font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-[#2b2d72]" />
                        Annual Tuition Fees
                      </h4>
                      <div className="space-y-3">
                        {costBreakdown.tuition.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 text-[14px]">{item.type}</span>
                            <span className="font-bold text-[#2b2d72]">{item.cost}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h4 className="text-[20px] font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <Home className="w-6 h-6 text-[#2b2d72]" />
                        Monthly Living Costs
                      </h4>
                      <div className="space-y-3">
                        {costBreakdown.living.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 text-[14px]">{item.type}</span>
                            <span className="font-bold text-[#2b2d72]">{item.cost}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div
              id="accordion-faq"
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all"
            >
              <button
                onClick={() => toggleAccordion('faq')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'faq'
                      ? 'bg-[#2b2d72]'
                      : 'bg-[#EEF4FF]'
                  }`}>
                    <AlertCircle className={`w-7 h-7 ${activeAccordion === 'faq' ? 'text-white' : 'text-[#2b2d72]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">FAQ</h3>
                    <p className="text-gray-600 text-[14px]">Frequently asked questions</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'faq' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'faq' ? (
                    <Minus className="w-6 h-6 text-[#2b2d72]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeAccordion === 'faq' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="space-y-4 mt-6">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-5 border border-gray-100"
                      >
                        <h5 className="font-bold text-[#2b2d72] mb-2 text-[16px]">{faq.q}</h5>
                        <p className="text-gray-600 text-[14px] leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CountryAdmissionTimeline countryName="Canada" sectionId="admission-process" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-xs sm:text-sm mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] mb-4 leading-tight">
              Student Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-[#2b2d72]/15 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#2b2d72] rounded-full flex items-center justify-center text-white font-bold text-[20px]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#2b2d72]">{testimonial.name}</div>
                    <div className="text-gray-600 text-[13px]">{testimonial.location}</div>
                    <div className="text-[#2b2d72] text-[13px] font-medium">
                      {testimonial.course} • {testimonial.university}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                Get in touch with our expert counselors for personalized guidance on studying in Canada.
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
        countryName="Canada"
        mode="apply"
      />
    </div>
  );
}



