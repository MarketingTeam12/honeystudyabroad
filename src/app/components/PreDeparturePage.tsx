import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { EnquiryPopup } from './EnquiryPopup';
import {
  Plane, MapPin, Home, CreditCard, Shield, Users, CheckCircle, ArrowRight,
  Clock, Globe, FileText, Smartphone, Briefcase, Book, Heart, AlertCircle,
  ChevronDown, Wallet, Phone, Mail, MessageCircle
} from 'lucide-react';

export function PreDeparturePage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cultural Orientation',
      description: 'Understand cultural norms, social etiquette, and local customs of your destination country.'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Accommodation Guidance',
      description: 'Assistance with finding suitable on-campus or off-campus housing options.'
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Travel Arrangements',
      description: 'Flight booking support, airport pickup arrangements, and travel tips.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Financial Planning',
      description: 'Guidance on opening bank accounts, managing finances, and currency exchange.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Health & Insurance',
      description: 'Information about health insurance, medical facilities, and emergency services.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Essential Services Setup',
      description: 'Help with SIM cards, internet connection, student ID, and local registration.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Pre-Departure Session',
      description: 'Attend comprehensive orientation session covering all essential topics and requirements.'
    },
    {
      step: '02',
      title: 'Document Verification',
      description: 'Final check of all required documents including passport, visa, tickets, and certificates.'
    },
    {
      step: '03',
      title: 'Travel Planning',
      description: 'Assistance with flight bookings, transit arrangements, and luggage guidelines.'
    },
    {
      step: '04',
      title: 'Financial Setup',
      description: 'Guidance on forex, travel cards, and international bank account opening.'
    },
    {
      step: '05',
      title: 'Accommodation Confirmation',
      description: 'Verify housing arrangements and provide checklist for arrival day essentials.'
    },
    {
      step: '06',
      title: 'Post-Arrival Support',
      description: 'Connect with local support network and receive guidance for first week settlement.'
    }
  ];

  const essentials = [
    {
      title: 'Documents Checklist',
      icon: <FileText className="w-8 h-8 text-[#1A73E8]" />,
      items: [
        'Valid passport with visa',
        'University offer letter & I-20/CAS',
        'Academic transcripts & certificates',
        'Medical records & prescriptions',
        'Travel insurance documents',
        'Financial proof documents',
        'Accommodation confirmation',
        'Emergency contact details'
      ]
    },
    {
      title: 'Financial Essentials',
      icon: <Wallet className="w-8 h-8 text-[#1A73E8]" />,
      items: [
        'International debit/credit card',
        'Forex card with sufficient balance',
        'Cash in local currency',
        'Bank account opening documents',
        'Scholarship/loan documentation',
        'Receipt of tuition fee payment',
        'Budget plan for first month',
        'Emergency fund backup'
      ]
    },
    {
      title: 'Packing Essentials',
      icon: <Briefcase className="w-8 h-8 text-[#1A73E8]" />,
      items: [
        'Weather-appropriate clothing',
        'Laptop and electronic devices',
        'Prescribed medications',
        'Personal hygiene products',
        'Stationery and notebooks',
        'Adapters and converters',
        'Comfort items from home',
        'Important phone numbers list'
      ]
    },
    {
      title: 'First Week Tasks',
      icon: <CheckCircle className="w-8 h-8 text-[#1A73E8]" />,
      items: [
        'Register with university',
        'Open local bank account',
        'Get local SIM card',
        'Register with embassy',
        'Explore campus facilities',
        'Attend orientation programs',
        'Set up accommodation',
        'Connect with student community'
      ]
    }
  ];

  const countries = [
    { name: 'USA', flag: '🇺🇸', tips: 'Social Security, Driver License, Healthcare' },
    { name: 'UK', flag: '🇬🇧', tips: 'BRP Collection, NHS Registration, Council Tax' },
    { name: 'Canada', flag: '🇨🇦', tips: 'SIN Card, Health Card, Bank Account' },
    { name: 'Australia', flag: '🇦🇺', tips: 'TFN, Medicare, Accommodation Check-in' },
    { name: 'Germany', flag: '🇩🇪', tips: 'Anmeldung, Blocked Account, Public Transport' },
    { name: 'Singapore', flag: '🇸🇬', tips: 'IPA, Student Pass, GIRO Account' }
  ];

  const faqs = [
    {
      question: 'When should I start preparing for departure?',
      answer: 'Ideally, start your pre-departure preparations 2-3 months before your travel date. This allows sufficient time for visa processing, accommodation booking, flight reservations, and completing all necessary formalities without rushing.'
    },
    {
      question: 'What documents should I carry in hand luggage?',
      answer: 'Always carry your passport, visa, flight tickets, university offer letter, accommodation confirmation, financial documents, medical prescriptions, and emergency contacts in your hand luggage. Keep both physical and digital copies.'
    },
    {
      question: 'How much money should I carry for the first month?',
      answer: 'We recommend carrying enough funds to cover 1-2 months of living expenses, including rent, food, local transport, and miscellaneous costs. Use a combination of forex cards, international credit/debit cards, and some cash in local currency.'
    },
    {
      question: 'Do you help with accommodation arrangements?',
      answer: 'Yes, we provide comprehensive accommodation support including university housing applications, private rental options, shared apartments, and homestays. We also help you understand tenancy agreements and local housing laws.'
    },
    {
      question: 'What about health insurance and medical coverage?',
      answer: 'We guide you through mandatory health insurance requirements for international students. This includes understanding university health plans, private insurance options, coverage details, and how to access medical services in your destination country.'
    },
    {
      question: 'Will I receive support after arriving in the country?',
      answer: 'Absolutely! We provide post-arrival support including airport pickup coordination, initial settlement assistance, emergency helpline access, and connection with local student communities. Our support continues throughout your first semester.'
    }
  ];

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

    console.log('Form submitted:', formData);
    setIsEnquiryOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation onEnquiryClick={() => setIsEnquiryOpen(true)} activePage="services" />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 mt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-[#2b2d72] transition-colors flex items-center gap-1">
              <Home className="w-[14px] h-[14px]" />
              Home
            </a>
            <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
            <a href="/#services" className="text-gray-600 hover:text-[#2b2d72] transition-colors">
              Services
            </a>
            <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
            <span className="text-[#2b2d72] font-semibold">Pre-Departure Briefing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2472] via-[#1A3A8F] to-[#0A2472] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Plane className="w-4 h-4" />
                <span className="text-sm font-semibold">Complete Pre-Departure Support</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pre-Departure <span className="text-[#F4C430]">Briefing</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Comprehensive orientation and support to ensure a smooth transition to your study abroad destination. Get ready for your new chapter with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="bg-gradient-to-r from-[#F4C430] to-[#F4A430] text-[#0A2472] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#contact-form"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A2472] transition-all text-center"
                >
                  Get Preparation Guide
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
                  >
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <div className="text-lg font-bold mb-2">{country.name}</div>
                    <div className="text-xs text-white/70">{country.tips}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              What Our Pre-Departure Program Covers
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl mx-auto">
              Everything you need to know before you fly — from documentation to cultural adaptation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-8 hover:shadow-xl transition-all border border-[#E5E9F2]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-lg flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#000000] mb-3">{benefit.title}</h3>
                <p className="text-[#000000] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Pre-Departure Preparation Process
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl mx-auto">
              Our structured approach to ensure you're fully prepared for your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#F4C430]"
              >
                <div className="text-5xl font-bold text-[#F4C430] mb-4 opacity-50">{item.step}</div>
                <h3 className="text-xl font-bold text-[#000000] mb-3">{item.title}</h3>
                <p className="text-[#000000] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Essential Checklists
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl mx-auto">
              Comprehensive lists to ensure you don't miss anything important
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {essentials.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-8 border border-[#E5E9F2]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#000000]">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1A73E8] flex-shrink-0 mt-0.5" />
                      <span className="text-[#000000]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-Specific Tips */}
      <section className="py-20 bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Country-Specific Guidance
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl mx-auto">
              Tailored advice for each destination country's unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#1A73E8]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{country.flag}</div>
                  <h3 className="text-xl font-bold text-[#000000]">{country.name}</h3>
                </div>
                <p className="text-[#000000] text-sm leading-relaxed">
                  <strong>Key Tasks:</strong> {country.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#000000]">
              Common questions about pre-departure preparation
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl shadow-md overflow-hidden border border-[#E5E9F2]"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <span className="font-semibold text-[#000000] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1A73E8] flex-shrink-0 transition-transform ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-5 text-[#000000] leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2472] via-[#1A3A8F] to-[#0A2472] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Plane className="w-16 h-16 text-[#F4C430] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Prepare for Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our comprehensive pre-departure orientation and start your study abroad journey with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-gradient-to-r from-[#F4C430] to-[#F4A430] text-[#0A2472] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Book Pre-Departure Session
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A2472] transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Register for Pre-Departure Briefing
            </h2>
            <p className="text-lg text-[#000000]">
              Fill out the form below to book your comprehensive orientation session
            </p>
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
                Get in touch with our expert counselors for personalized pre-departure guidance.
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
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all"
                  >
                    <option value="" className="text-gray-900">Select Destination</option>
                    <option value="USA" className="text-gray-900">USA</option>
                    <option value="UK" className="text-gray-900">UK</option>
                    <option value="Canada" className="text-gray-900">Canada</option>
                    <option value="Australia" className="text-gray-900">Australia</option>
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

      <Footer />
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  );
}
