import { useState, useRef, useEffect } from 'react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { goToHome } from '../utils/rootNavigation';
import { getCommonsImageUrl } from '../utils/imageUtils';
import { HeaderBrandLogo } from './HeaderBrandLogo';
import { CountryApplicationModal } from './CountryApplicationModal';
import {
  GraduationCap, Users, Globe, TrendingUp, Shield, ChevronDown, ChevronUp,
  MapPin, Star, Calendar, CheckCircle, Phone, Mail, MessageCircle,
  Building2, BookOpen, Briefcase, Code, Database, Brain,
  Heart, Zap, Menu, X, Home, Award, FileText, DollarSign,
  Clock, Target, Sparkles, ArrowRight, Euro, Landmark, Languages
} from 'lucide-react';

export function GermanyPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
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
    alert('Danke! Our counselor will contact you within 24 hours.');
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
              <button onClick={handleGoHome} className="text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </button>
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  Quick Links
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                    {[
                      { label: 'Why Germany', id: 'why-germany', icon: Star },
                      { label: 'Top Universities', id: 'universities', icon: Building2 },
                      { label: 'Courses', id: 'courses', icon: BookOpen },
                      { label: 'Admission Process', id: 'admission', icon: CheckCircle },
                      { label: 'Documents', id: 'documents', icon: FileText },
                      { label: 'Visa & Blocked Account', id: 'visa', icon: Shield },
                      { label: 'Scholarships', id: 'scholarships', icon: Award },
                      { label: 'Student Life', id: 'student-life', icon: Heart },
                      { label: 'Testimonials', id: 'testimonials', icon: MessageCircle },
                      { label: 'FAQ', id: 'faq', icon: MessageCircle }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full px-4 py-3 text-left hover:bg-red-50 transition-all flex items-center gap-3 group"
                      >
                        <item.icon className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover:text-red-600 font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-red-600 transition-colors"
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
                  { label: 'Why Germany', id: 'why-germany' },
                  { label: 'Top Universities', id: 'universities' },
                  { label: 'Courses', id: 'courses' },
                  { label: 'Admission Process', id: 'admission' },
                  { label: 'Documents', id: 'documents' },
                  { label: 'Visa & Blocked Account', id: 'visa' },
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
                  className="px-4 py-3 text-left bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold mt-2"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=1280&fit=crop&auto=format&q=85')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <img
                  src="https://flagcdn.com/de.svg"
                  alt="Germany Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[14px] font-bold text-white">Europe&apos;s Education Powerhouse</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://flagcdn.com/w320/de.png"
                  alt="Germany Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-gray-100"
                />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Study in</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">Germany</span>
                </h1>
              </div>

              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                Experience world-class education with no tuition fees at public universities. Build your future in Europe&apos;s strongest economy.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-1">€0</h3>
                  <p className="text-sm text-white/80">Tuition Fees</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-1">400+</h3>
                  <p className="text-sm text-white/80">Universities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-1">18mo</h3>
                  <p className="text-sm text-white/80">Post-Study Work</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="group px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
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
                  src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=800&fit=crop&auto=format&q=85"
                  alt="Germany Brandenburg Gate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Germany */}
      <section id="why-germany" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Why Study in Germany?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Germany is the top choice for international students worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Euro,
                title: 'No Tuition Fees',
                description: 'Study at public universities with zero tuition fees - only semester contribution required',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Globe,
                title: 'World-Class Education',
                description: 'Home to some of the world&apos;s best universities and research institutions',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Briefcase,
                title: 'Strong Economy',
                description: 'Europe&apos;s largest economy with excellent job opportunities for graduates',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Languages,
                title: 'English Programs',
                description: 'Thousands of programs taught entirely in English at all levels',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Shield,
                title: 'Work While Studying',
                description: 'Students can work 120 full days or 240 half days per year',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: Target,
                title: '18-Month Job Search',
                description: 'Generous post-study work visa to find employment after graduation',
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Top Universities in Germany
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Study at prestigious institutions known for innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Technical University of Munich',
                ranking: '#37 QS World Ranking 2024',
                image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Engineering, Technology, Sciences'
              },
              {
                name: 'Ludwig Maximilian University',
                ranking: '#54 QS World Ranking 2024',
                image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Medicine, Sciences, Humanities'
              },
              {
                name: 'Heidelberg University',
                ranking: '#87 QS World Ranking 2024',
                image: getCommonsImageUrl('Akademiegarten Campus Altstadt Heidelberg P1100078.jpg'),
                programs: 'Medicine, Law, Natural Sciences'
              },
              {
                name: 'Humboldt University of Berlin',
                ranking: '#120 QS World Ranking 2024',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Arts, Humanities, Social Sciences'
              },
              {
                name: 'RWTH Aachen University',
                ranking: 'Top Engineering University',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Engineering, Technology, Sciences'
              },
              {
                name: 'Free University of Berlin',
                ranking: '#98 QS World Ranking 2024',
                image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
                programs: 'Social Sciences, Humanities'
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                  <p className="text-sm text-red-600 font-semibold mb-3">{university.ranking}</p>
                  <p className="text-gray-600 text-sm mb-4">{university.programs}</p>
                  <div className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
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
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-renowned programs in engineering, technology, and sciences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mechanical Engineering', icon: Zap, color: 'from-blue-500 to-blue-600' },
              { name: 'Computer Science', icon: Code, color: 'from-purple-500 to-purple-600' },
              { name: 'Automotive Engineering', icon: Target, color: 'from-red-500 to-red-600' },
              { name: 'Data Science', icon: Database, color: 'from-green-500 to-green-600' },
              { name: 'Business Administration', icon: Briefcase, color: 'from-orange-500 to-orange-600' },
              { name: 'Electrical Engineering', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
              { name: 'Medicine', icon: Heart, color: 'from-pink-500 to-pink-600' },
              { name: 'Artificial Intelligence', icon: Brain, color: 'from-indigo-500 to-indigo-600' }
            ].map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => setIsEnquiryOpen(true)}
              >
                <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.name}</h3>
                <span className="text-sm text-red-600 flex items-center gap-1 font-semibold">
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
            <h2 className="text-[32px] font-bold text-[#0F172A] mb-2">Study in Germany — At a Glance</h2>
            <p className="text-gray-600 text-[15px]">Key facts about studying in Germany</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Euro,
                label: 'Tuition Fees',
                value: 'EUR 0 – 20,000',
                sub: 'per year (mostly free)',
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
                value: 'UG / PG / PhD',
                sub: 'Research programs',
                color: 'from-[#F59E0B] to-[#D97706]',
                bg: 'bg-[#FEF3C7]'
              },
              {
                icon: Home,
                label: 'Cost of Living',
                value: 'EUR 8,000 – 12,000',
                sub: 'per year',
                color: 'from-[#8B5CF6] to-[#7C3AED]',
                bg: 'bg-[#F5F3FF]'
              },
              {
                icon: Calendar,
                label: 'Intake',
                value: 'Oct · April',
                sub: 'Winter is primary',
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

      {/* Admission Process */}
      <section id="admission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to Germany in simple, guided steps
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-red-300 transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Document Preparation',
                  description: 'We help you prepare, organize, and verify all required academic and supporting documents.',
                  icon: FileText
                },
                {
                  step: '2',
                  title: 'University Selection',
                  description: 'We shortlist the best-fit universities based on your course goals, profile, and budget.',
                  icon: Building2
                },
                {
                  step: '3',
                  title: 'Application Submission',
                  description: 'We submit your application through Uni-Assist or directly to the selected university.',
                  icon: CheckCircle
                },
                {
                  step: '4',
                  title: 'Profile Evaluation',
                  description: 'We review your academic profile and suggest the right admission route for Germany.',
                  icon: Target
                },
                {
                  step: '5',
                  title: 'Blocked Account Setup',
                  description: 'Assistance with opening your blocked account for visa requirements and fund proof.',
                  icon: Euro
                },
                {
                  step: '6',
                  title: 'Visa Processing',
                  description: 'Complete visa support with document verification, appointment booking, and follow-up.',
                  icon: Shield
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section id="documents" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete documentation checklist for Germany student visa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Documents',
                icon: GraduationCap,
                items: ['10th & 12th Certificates', 'Bachelor\'s Degree', 'Transcripts (Certified)', 'VPD Certificate (Uni-Assist)']
              },
              {
                title: 'Language Proficiency',
                icon: Languages,
                items: ['IELTS/TOEFL (English)', 'TestDaF/DSH (German)', 'B1/B2 Level Certificate', 'Valid Test Reports']
              },
              {
                title: 'Personal Documents',
                icon: FileText,
                items: ['Valid Passport', 'Passport Photos', 'Birth Certificate', 'CV/Resume']
              },
              {
                title: 'Motivation Documents',
                icon: Mail,
                items: ['Statement of Purpose', 'Letters of Recommendation', 'Research Proposal (if PhD)', 'Portfolio (if required)']
              },
              {
                title: 'Financial Proof',
                icon: Euro,
                items: ['Blocked Account (€11,208)', 'Bank Statements', 'Sponsor Letters', 'Scholarship Letters']
              },
              {
                title: 'Additional Documents',
                icon: Shield,
                items: ['Health Insurance', 'APS Certificate', 'Admission Letter', 'Visa Application Form']
              }
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  <doc.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{doc.title}</h3>
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

          <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Document Guidance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts will help you prepare all documents correctly
            </p>
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get Document Checklist
            </button>
          </div>
        </div>
      </section>

      {/* Visa & Blocked Account */}
      <section id="visa" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Visa & Blocked Account
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for your Germany student visa process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Blocked Account */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Blocked Account</h3>
              <p className="text-lg text-gray-700 mb-6">
                Mandatory financial proof for your visa application
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Required Amount</p>
                  <p className="text-3xl font-bold text-green-600">€11,208</p>
                  <p className="text-xs text-gray-500 mt-1">For one year</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'Help with account opening',
                    'Document verification',
                    'Bank selection guidance',
                    'Transfer assistance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visa Process */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Student Visa</h3>
              <p className="text-lg text-gray-700 mb-6">
                End-to-end visa processing support
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Processing Time</p>
                  <p className="text-3xl font-bold text-blue-600">8-12 weeks</p>
                  <p className="text-xs text-gray-500 mt-1">After application</p>
                </div>
                <ul className="space-y-2">
                  {[
                    'Visa appointment booking',
                    'Document preparation',
                    'Interview preparation',
                    'Follow-up support'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get Visa Assistance
            </button>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Multiple funding opportunities for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'DAAD Scholarships',
                amount: '€850/month',
                description: 'German Academic Exchange Service scholarships for graduate students',
                icon: Award
              },
              {
                title: 'Erasmus+',
                amount: '€500-1,500',
                description: 'EU scholarships for exchange and degree-seeking students',
                icon: Globe
              },
              {
                title: 'University Scholarships',
                amount: 'Varies',
                description: 'Merit-based and need-based scholarships offered by universities',
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
              className="px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Check Scholarship Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section id="student-life" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Student Life in Germany
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience vibrant culture, excellent quality of life, and endless opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Affordable Living',
                description: 'Monthly expenses: €850-1,200 including accommodation, food, and transport',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop&auto=format&q=85',
                icon: Euro
              },
              {
                title: 'Work Opportunities',
                description: 'Work 120 full days or 240 half days per year while studying',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&q=85',
                icon: Briefcase
              },
              {
                title: 'Rich Culture',
                description: 'Explore historical cities, festivals, museums, and vibrant nightlife',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format&q=85',
                icon: Heart
              },
              {
                title: 'Travel Europe',
                description: 'Excellent location to explore 26 Schengen countries visa-free',
                image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format&q=85',
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students who made their dreams come true with our guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amit Kumar',
                course: 'MS in Mechanical Engineering, TUM',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=85',
                text: 'Amazing support throughout! From university selection to visa, they handled everything professionally.'
              },
              {
                name: 'Divya Menon',
                course: 'MS in Computer Science, RWTH Aachen',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=85',
                text: 'Got admission with no tuition fees! The team made my dream of studying in Germany a reality.'
              },
              {
                name: 'Rohan Verma',
                course: 'MBA at Heidelberg University',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format&q=85',
                text: 'Excellent guidance on blocked account and visa. I highly recommend their services!'
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
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about studying in Germany
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Is education really free in Germany?',
                answer: 'Yes! Public universities in Germany charge no tuition fees for most programs. You only pay a semester contribution of €250-350 which covers administrative costs and public transport.'
              },
              {
                question: 'Do I need to know German?',
                answer: 'Not necessarily. Many universities offer programs in English, especially at Master&apos;s level. However, learning basic German is recommended for daily life and better job opportunities.'
              },
              {
                question: 'What is a blocked account?',
                answer: 'A blocked account (Sperrkonto) is mandatory proof that you have €11,208 for living expenses. This amount is blocked and you can withdraw approximately €934 per month during your studies.'
              },
              {
                question: 'Can I work while studying?',
                answer: 'Yes! Students can work 120 full days or 240 half days per year. There&apos;s no limit on work hours during semester breaks. Part-time jobs pay €12-15 per hour.'
              },
              {
                question: 'How long does visa processing take?',
                answer: 'Student visa processing takes 8-12 weeks after application submission. Start the process immediately after receiving your admission letter to avoid delays.'
              },
              {
                question: 'Can I stay in Germany after graduation?',
                answer: 'Yes! After completing your degree, you get an 18-month job search visa. During this time, you can work full-time and search for a job related to your field of study.'
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
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  {activeFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Begin Your German Journey
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Connect with our Germany education experts for personalized guidance
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, text: '+91 72990 05577', label: 'Call Us' },
                  { icon: Mail, text: 'sales@honeytranslations.com', label: 'Email Us' },
                  { icon: Clock, text: 'Mon - Sat: 9 AM - 7 PM', label: 'Office Hours' }
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
                    <option value="Engineering" className="text-gray-900">Engineering</option>
                    <option value="Computer Science" className="text-gray-900">Computer Science</option>
                    <option value="Business" className="text-gray-900">Business Administration</option>
                    <option value="Medicine" className="text-gray-900">Medicine</option>
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
                  className="w-full py-4 bg-white text-red-600 rounded-xl font-bold hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
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
        countryName="Germany"
        mode="apply"
      />
    </div>
  );
}
