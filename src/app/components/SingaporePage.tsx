import image_Singapore_Sight_Seeing from '@/imports/Singapore-Sight-Seeing.jpg'
import { useState, useRef, useEffect } from 'react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { goToHome } from '../utils/rootNavigation';
import { getCommonsImageUrl } from '../utils/imageUtils';
import { HeaderBrandLogo } from './HeaderBrandLogo';
import { CountryAdmissionTimeline } from './CountryAdmissionTimeline';
import { CountryApplicationModal } from './CountryApplicationModal';
import downloadImage from '@/imports/download.jpg';
import {
  GraduationCap, Users, Globe, TrendingUp, Shield, ChevronDown, ChevronUp,
  MapPin, Star, Calendar, CheckCircle, Phone, Mail, MessageCircle,
  Building2, BookOpen, Briefcase, Code, Database, Brain,
  Heart, Zap, Menu, X, Home, Award, FileText, DollarSign,
  Clock, Target, Sparkles, ArrowRight, PlayCircle
} from 'lucide-react';

export function SingaporePage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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

    // Form submitted
    alert('Thank you! Our counselor will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    setIsEnquiryOpen(false);
  };

  const handleGoHome = () => {
    goToHome();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[92px]">
            {/* Logo */}
            <button type="button" onClick={handleGoHome} className="flex items-center group">
              <HeaderBrandLogo className="group-hover:scale-105 transition-transform" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={handleGoHome} className="text-gray-700 hover:text-[#2b2d72] font-medium transition-colors flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </button>
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#2b2d72] font-medium transition-colors"
                >
                  Quick Links
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                    {[
                      { label: 'Why Singapore', id: 'why-singapore', icon: Star },
                      { label: 'Top Universities', id: 'universities', icon: Building2 },
                      { label: 'Courses', id: 'courses', icon: BookOpen },
                      { label: 'Admission Process', id: 'admission', icon: CheckCircle },
                      { label: 'Documents', id: 'documents', icon: FileText },
                      { label: 'Visa Assistance', id: 'visa', icon: Shield },
                      { label: 'Scholarships', id: 'scholarships', icon: Award },
                      { label: 'Student Life', id: 'student-life', icon: Heart },
                      { label: 'Testimonials', id: 'testimonials', icon: MessageCircle },
                      { label: 'FAQ', id: 'faq', icon: MessageCircle }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full px-4 py-3 text-left hover:bg-[#2b2d72]/5 transition-all flex items-center gap-3 group"
                      >
                        <item.icon className="w-5 h-5 text-[#2b2d72] group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover:text-[#2b2d72] font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#2b2d72] to-[#1a1d4a] text-white rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#2b2d72] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-2">
                <button onClick={handleGoHome} className="px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  <span className="font-medium">Home</span>
                </button>
                {[
                  { label: 'Why Singapore', id: 'why-singapore' },
                  { label: 'Top Universities', id: 'universities' },
                  { label: 'Courses', id: 'courses' },
                  { label: 'Admission Process', id: 'admission' },
                  { label: 'Documents', id: 'documents' },
                  { label: 'Visa Assistance', id: 'visa' },
                  { label: 'Scholarships', id: 'scholarships' },
                  { label: 'Student Life', id: 'student-life' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'FAQ', id: 'faq' }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-all"
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsEnquiryOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 text-left bg-gradient-to-r from-[#2b2d72] to-[#1a1d4a] text-white rounded-lg font-semibold mt-2"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b2d72] via-[#1a1d4a] to-[#2b2d72] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1280&fit=crop&auto=format&q=85')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <img
                  src="https://flagcdn.com/sg.svg"
                  alt="Singapore Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[14px] font-bold text-white">Asia's Education Hub</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://flagcdn.com/w320/sg.png"
                  alt="Singapore Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-white/50"
                />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Study in</span>
                  <br />
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Singapore</span>
                </h1>
              </div>

              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                Transform your future with world-class education in one of Asia&apos;s most dynamic and innovative cities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-3xl font-bold text-white mb-1">6</h3>
                  <p className="text-sm text-white/80">Top Universities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-3xl font-bold text-white mb-1">95%</h3>
                  <p className="text-sm text-white/80">Employment Rate</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-3xl font-bold text-white mb-1">120+</h3>
                  <p className="text-sm text-white/80">Nationalities</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="group px-8 py-4 bg-white text-[#2b2d72] rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/917299005577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with Expert</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=800&fit=crop&auto=format&q=85"
                  alt="Singapore Skyline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2d72]/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Singapore */}
      <section id="why-singapore" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Why Study in Singapore?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of pursuing your education in Asia&apos;s premier educational destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'World-Class Education',
                description: 'Home to top-ranked universities recognized globally for academic excellence',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Career Opportunities',
                description: 'Gateway to Asia-Pacific with excellent post-study work opportunities',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Shield,
                title: 'Safe & Modern',
                description: 'One of the world&apos;s safest cities with world-class infrastructure',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: 'Multicultural Hub',
                description: 'Vibrant mix of cultures creating a welcoming environment for international students',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Briefcase,
                title: 'Innovation & Research',
                description: 'Leading hub for research and innovation with state-of-the-art facilities',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: MapPin,
                title: 'Strategic Location',
                description: 'Perfect base to explore Southeast Asia with excellent connectivity',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b2d72] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Top Universities in Singapore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Study at world-renowned institutions consistently ranked among the best globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'National University of Singapore',
                ranking: '#8 QS World Ranking 2024',
                image: downloadImage.src,
                programs: 'Engineering, Business, Medicine, Law'
              },
              {
                name: 'Nanyang Technological University',
                ranking: '#26 QS World Ranking 2024',
                image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Engineering, Science, Business, Arts'
              },
              {
                name: 'Singapore Management University',
                ranking: 'Top 50 Business Schools',
                image: getCommonsImageUrl('SMU Campus Green.jpg'),
                programs: 'Business, Economics, Law, IT'
              },
              {
                name: 'Singapore Institute of Technology',
                ranking: 'Applied Learning Excellence',
                image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Engineering, IT, Health Sciences'
              },
              {
                name: 'Singapore University of Technology',
                ranking: 'Innovation Focused',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Architecture, Design, Technology'
              },
              {
                name: 'James Cook University Singapore',
                ranking: 'Australian University Campus',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Business, IT, Psychology, Tourism'
              }
            ].map((university, index) => (
              <a
                key={index}
                href={getUniversityDetailUrl(university.name)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2b2d72] mb-2">{university.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{university.ranking}</p>
                  <p className="text-gray-600 text-sm mb-4">{university.programs}</p>
                  <div className="text-[#2b2d72] hover:text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#2b2d72] to-[#1a1d4a] text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get University Guidance
            </button>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a wide range of programs designed for global success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Business Management', icon: Briefcase, color: 'from-blue-500 to-blue-600' },
              { name: 'Computer Science', icon: Code, color: 'from-purple-500 to-purple-600' },
              { name: 'Data Science & AI', icon: Brain, color: 'from-pink-500 to-pink-600' },
              { name: 'Engineering', icon: Zap, color: 'from-orange-500 to-orange-600' },
              { name: 'Finance & Banking', icon: DollarSign, color: 'from-green-500 to-green-600' },
              { name: 'Hospitality Management', icon: Heart, color: 'from-red-500 to-red-600' },
              { name: 'Information Technology', icon: Database, color: 'from-teal-500 to-teal-600' },
              { name: 'Mass Communication', icon: Globe, color: 'from-indigo-500 to-indigo-600' }
            ].map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => setIsEnquiryOpen(true)}
              >
                <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#2b2d72] mb-2">{course.name}</h3>
                <span className="text-sm text-blue-600 flex items-center gap-1 font-semibold">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F4FF] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 bg-[#EFF6FF] rounded-full text-[#2b2d72] font-semibold text-[12px] mb-3 uppercase tracking-wide">
              Course Details
            </div>
            <h2 className="text-[32px] font-bold text-[#0F172A] mb-2">Study in Singapore — At a Glance</h2>
            <p className="text-gray-600 text-[15px]">Key facts about studying in Singapore</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: DollarSign,
                label: 'Tuition Fees',
                value: 'SGD 15,000 – 50,000',
                sub: 'per year',
                color: 'from-[#2b2d72] to-[#3B82F6]',
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
                value: 'SGD 12,000 – 24,000',
                sub: 'per year',
                color: 'from-[#8B5CF6] to-[#7C3AED]',
                bg: 'bg-[#F5F3FF]'
              },
              {
                icon: Calendar,
                label: 'Intake',
                value: 'Aug · January',
                sub: 'August is primary',
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

      <CountryAdmissionTimeline countryName="Singapore" sectionId="admission" />
      {/* Required Documents */}
      <section id="documents" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to prepare for your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Documents',
                icon: GraduationCap,
                items: ['10th & 12th Mark Sheets', 'Bachelor\'s Degree Certificate', 'Official Transcripts', 'Provisional Certificate']
              },
              {
                title: 'Test Scores',
                icon: BookOpen,
                items: ['IELTS/TOEFL Score', 'GRE/GMAT (if required)', 'English Proficiency Test', 'Valid Test Reports']
              },
              {
                title: 'Personal Documents',
                icon: FileText,
                items: ['Valid Passport', 'Passport Size Photos', 'Birth Certificate', 'Identity Proof']
              },
              {
                title: 'Statement Documents',
                icon: Mail,
                items: ['Statement of Purpose', 'Letters of Recommendation', 'Resume/CV', 'Work Experience Letters']
              },
              {
                title: 'Financial Documents',
                icon: DollarSign,
                items: ['Bank Statements', 'Sponsor Letters', 'Income Proof', 'Property Documents']
              },
              {
                title: 'Additional Documents',
                icon: Award,
                items: ['Portfolio (if required)', 'Publications/Research', 'Certificates', 'Medical Reports']
              }
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#2b2d72] to-[#1a1d4a] rounded-xl flex items-center justify-center shadow-lg">
                  <doc.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2d72] mb-4">{doc.title}</h3>
                <ul className="space-y-2">
                  {doc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#2b2d72] mb-3">Need Help with Documents?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team will guide you through the entire documentation process
            </p>
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#2b2d72] to-[#1a1d4a] text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get Document Checklist
            </button>
          </div>
        </div>
      </section>

      {/* Visa Assistance */}
      <section id="visa" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#2b2d72]">
                Visa Assistance
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide complete support for your Singapore student visa application with a proven track record of successful approvals.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Student Pass Application',
                    description: 'Complete guidance on Student Pass (IPA) application process',
                    icon: Shield
                  },
                  {
                    title: 'Documentation Support',
                    description: 'Help with preparing and verifying all required visa documents',
                    icon: FileText
                  },
                  {
                    title: 'Medical Examination',
                    description: 'Guidance on required medical tests and health insurance',
                    icon: Heart
                  },
                  {
                    title: 'Immigration Formalities',
                    description: 'Complete support for immigration check-in procedures',
                    icon: CheckCircle
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2b2d72] to-[#1a1d4a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2b2d72] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-[#2b2d72] to-[#1a1d4a] text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Get Visa Assistance
              </button>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={image_Singapore_Sight_Seeing.src}
                  alt="Visa Assistance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#2b2d72]">98%</p>
                    <p className="text-gray-600 font-medium">Visa Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b2d72] to-[#1a1d4a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Scholarships & Financial Support
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Multiple funding options to support your education journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Merit-Based Scholarships',
                amount: 'Up to 100%',
                description: 'Awarded based on academic excellence and achievements',
                icon: Award
              },
              {
                title: 'Financial Aid',
                amount: '30-70%',
                description: 'Need-based financial assistance for deserving students',
                icon: DollarSign
              },
              {
                title: 'Research Grants',
                amount: 'Fully Funded',
                description: 'For postgraduate research programs and PhD candidates',
                icon: GraduationCap
              }
            ].map((scholarship, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="w-16 h-16 mb-6 bg-white/20 rounded-xl flex items-center justify-center">
                  <scholarship.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{scholarship.title}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4">{scholarship.amount}</p>
                <p className="text-white/80">{scholarship.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-white text-[#2b2d72] rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Check Your Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section id="student-life" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Student Life in Singapore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience vibrant campus life and cultural diversity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Accommodation',
                description: 'On-campus hostels, private apartments, and homestay options available',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop&auto=format&q=85',
                icon: Home
              },
              {
                title: 'Part-Time Work',
                description: 'Students can work up to 16 hours/week during semester',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&q=85',
                icon: Briefcase
              },
              {
                title: 'Cultural Activities',
                description: 'Diverse festivals, events, and student clubs throughout the year',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format&q=85',
                icon: Heart
              },
              {
                title: 'Transportation',
                description: 'Excellent public transport with student concession passes',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format&q=85',
                icon: MapPin
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2b2d72] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who achieved their dreams with our guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                course: 'MBA at NUS',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format&q=85',
                text: 'The counseling team was exceptional! They guided me through every step and I got admission to my dream university.'
              },
              {
                name: 'Rahul Patel',
                course: 'Computer Science at NTU',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=85',
                text: 'Best decision ever! The support for visa and documentation made the entire process stress-free.'
              },
              {
                name: 'Sneha Reddy',
                course: 'Finance at SMU',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=85',
                text: 'I received a 50% scholarship with their help. Truly grateful for their expert guidance and support!'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#2b2d72]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2b2d72]">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about studying in Singapore
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What is the cost of studying in Singapore?',
                answer: 'Tuition fees range from SGD 20,000 to SGD 40,000 per year for international students. Living expenses are approximately SGD 1,000 to SGD 2,000 per month depending on lifestyle.'
              },
              {
                question: 'Can I work while studying?',
                answer: 'Yes, international students with a valid Student Pass can work up to 16 hours per week during semester and full-time during vacations without requiring a work permit.'
              },
              {
                question: 'What are the English language requirements?',
                answer: 'Most universities require IELTS 6.5+ or TOEFL 90+. Some programs may have higher requirements. We can guide you on specific requirements for your chosen program.'
              },
              {
                question: 'How long does the visa process take?',
                answer: 'The Student Pass application typically takes 4-6 weeks after receiving your admission offer. We provide complete support throughout the process.'
              },
              {
                question: 'Are scholarships available?',
                answer: 'Yes, various merit-based and need-based scholarships are available ranging from 30% to 100% tuition coverage. We help identify and apply for suitable scholarships.'
              },
              {
                question: 'What is the duration of programs?',
                answer: 'Bachelor\'s programs typically take 3-4 years, Master\'s programs 1-2 years, and PhD programs 3-5 years. Duration may vary based on the course and university.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-all"
                >
                  <h3 className="text-lg font-bold text-[#2b2d72] pr-4">{faq.question}</h3>
                  {activeFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#2b2d72] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeFaq === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
                Get in touch with our expert counselors for personalized guidance on studying in Singapore.
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
        countryName="Singapore"
        mode="apply"
      />
    </div>
  );
}




