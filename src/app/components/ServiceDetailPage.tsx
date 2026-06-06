import { useState } from 'react';
import { SearchableCountrySelect } from './SearchableCountrySelect';
import {
  ArrowRight,
  Home,
  ChevronRight,
  User,
  Building2,
  FileText,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Shield,
  Clock,
  Globe,
  MessageCircle,
  Phone,
  GraduationCap,
  X,
  Mail,
  ChevronDown
} from 'lucide-react';
import { ContactModal } from './ContactModal';
import { Navigation } from './Navigation';
import honeyLogo from '../../imports/Artboard_1_copy_1.png';

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    heroImage: string;
    journeySteps: Array<{
      icon: React.ReactNode;
      label: string;
      description: string;
      color: string;
    }>;
    features: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
      bullets: string[];
      color: string;
    }>;
    stats: Array<{
      number: string;
      label: string;
      icon: React.ReactNode;
    }>;
    testimonial: {
      name: string;
      country: string;
      university: string;
      photo: string;
      rating: number;
      text: string;
      flag: string;
    };
    ctaText: string;
  };
}

export function ServiceDetailPage({ service }: ServiceDetailProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [preferredCountry, setPreferredCountry] = useState('');
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

    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    const newErrors = { ...errors };
    if (name in newErrors) {
      newErrors[name as keyof typeof errors] = '';
      setErrors(newErrors);
    }
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

    const subject = encodeURIComponent(`${service.title} Enquiry`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onEnquiryClick={() => setIsEnquiryOpen(true)} activePage="services" />

      {/* Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-200 mt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="#home" className="text-gray-600 hover:text-[#2b2d72] transition-colors flex items-center gap-1">
              <Home size={14} />
              Home
            </a>
            <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
            <a href="#services" className="text-gray-600 hover:text-[#2b2d72] transition-colors">
              Services
            </a>
            <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
            <span className="text-[#2b2d72] font-semibold">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#EEF4FF] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-xs font-extrabold mb-4 uppercase tracking-wide text-[#2b2d72] shadow-sm">
                <CheckCircle size={13} /> {service.subtitle}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#2b2d72] mb-5 leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                {service.summary}
              </p>

              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
              >
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right - Student Photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-[#2b2d72] shadow-2xl">
                <img
                  src={service.heroImage}
                  alt={`${service.title} - Happy student`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Success Rate</div>
                <div className="text-3xl font-extrabold text-emerald-600">99%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#2b2d72] mb-3">
              Your Journey with Us
            </h2>
            <p className="text-gray-500 text-sm sm:text-[14px]">A simple, streamlined 4-step process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#2b2d72] transition-all hover:shadow-md">
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 mb-2">{step.label}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < service.journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2b2d72] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
              Comprehensive support tailored to your needs at every stage
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(43,45,114,0.15)] border-t-4 border-[#2b2d72] shadow-sm"
              >
                <div className="p-7">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-base sm:text-[17px] font-extrabold text-gray-900 mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[12px] text-gray-600">
                        <CheckCircle size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Stats */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2b2d72] mb-8">
                Proven Results
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {service.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#EEF4FF] rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-[#2b2d72] rounded-xl flex items-center justify-center text-white mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-extrabold text-[#2b2d72] mb-1">{stat.number}</div>
                    <div className="text-[12px] text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2b2d72] mb-8">
                Student Success Story
              </h2>
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: service.testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-[15px] text-gray-700 leading-relaxed mb-6 italic">
                  "{service.testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2b2d72]">
                    <img
                      src={service.testimonial.photo}
                      alt={service.testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] font-extrabold text-gray-900">
                      {service.testimonial.name}
                    </div>
                    <div className="text-[12px] text-gray-500">
                      {service.testimonial.flag} {service.testimonial.university}, {service.testimonial.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className="relative bg-[#2b2d72] rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2b2d72 0%, #1e3a8a 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 lg:px-12 py-10 lg:py-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">
                  {service.ctaText}
                </h3>
                <p className="text-white/70 text-[15px] lg:text-[16px]">
                  Our expert counselors are ready to guide you through every step of the process.
                </p>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-extrabold text-[15px] transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
              >
                Talk to our Expert FREE
                <ArrowRight size={18} />
              </button>
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
                Get in touch with our expert counselors for personalized guidance on {service.title.toLowerCase()}.
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

      {/* Enquiry Popup */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl border border-gray-100">
            <button
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#2b2d72] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#2b2d72]/25">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#2b2d72] mb-2">{service.title} Enquiry</h3>
              <p className="text-gray-500 text-sm">Get free expert guidance from our counselors</p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium"
              />
              <SearchableCountrySelect
                value={preferredCountry}
                onChange={setPreferredCountry}
                placeholder="Preferred Country"
                className="text-sm"
              />
              <textarea
                placeholder="Your Message (Optional)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2b2d72] focus:ring-4 focus:ring-[#2b2d72]/10 transition-all font-medium resize-none"
              />
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

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
