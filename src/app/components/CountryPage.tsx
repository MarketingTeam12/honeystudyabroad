import { useState } from 'react';
import {
  GraduationCap,
  DollarSign,
  FileText,
  Briefcase,
  Award,
  Calendar,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Phone,
  Send,
  Globe,
  Users,
  Clock,
  Home,
  Utensils,
  Bus,
  Heart,
  Star,
  ArrowRight,
  MapPin
} from 'lucide-react';

interface University {
  name: string;
  ranking: string;
  tuition: string;
  programs: string[];
}

interface CountryData {
  name: string;
  flag: string;
  heroImage: string;
  tagline: string;
  description: string;
  universities: University[];
  tuitionRange: { undergraduate: string; postgraduate: string };
  livingCost: {
    accommodation: string;
    food: string;
    transport: string;
    utilities: string;
    entertainment: string;
    total: string;
  };
  visaSteps: { step: string; duration: string; icon: any }[];
  prInfo: {
    available: boolean;
    duration: string;
    details: string;
  };
  workRights: {
    during: string;
    after: string;
  };
  scholarships: { name: string; amount: string; eligibility: string }[];
  intakes: { season: string; deadline: string; startDate: string }[];
  jobOpportunities: {
    averageSalary: string;
    topSectors: string[];
  };
  testimonials: { name: string; university: string; text: string; year: string }[];
  faqs: { question: string; answer: string }[];
}

interface CountryPageProps {
  countryData: CountryData;
}

export function CountryPage({ countryData }: CountryPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Study in ${countryData.name} — Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${countryData.name}
Message: ${formData.message}`;

    const mailtoLink = `mailto:salesteam@honeytranslations.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A2472]">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden mt-[72px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${countryData.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2472]/95 via-[#1A3A8F]/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-8xl">{countryData.flag}</span>
              <div>
                <h1 className="text-6xl font-bold text-white mb-2">Study in {countryData.name}</h1>
                <p className="text-2xl text-[#F4C430]">{countryData.tagline}</p>
              </div>
            </div>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {countryData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F4C430] text-[#0A2472] px-8 py-4 rounded-lg hover:bg-white transition-all font-semibold text-lg flex items-center gap-2 shadow-xl"
              >
                <Send className="w-5 h-5" />
                Get Free Consultation
              </button>
              <a
                href="https://wa.me/917299005577?text=Hello!%20I%20want%20to%20study%20in%20USA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all font-semibold text-lg flex items-center gap-2 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">Top Universities</h2>
            <p className="text-xl text-[#6B7280]">World-class education at premier institutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.universities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-[#E5E7EB] hover:border-[#1A73E8] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="w-12 h-12 text-[#1A73E8]" />
                  <span className="bg-[#F4C430] text-[#1C1C1C] px-3 py-1 rounded-full text-sm font-semibold">
                    {uni.ranking}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">{uni.name}</h3>
                <p className="text-[#1A73E8] font-semibold mb-4">{uni.tuition}/year</p>
                <div className="space-y-2">
                  {uni.programs.map((program, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Living Costs */}
      <section className="py-20 bg-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Cost of Studying</h2>
            <p className="text-xl text-white/80">Complete breakdown of expenses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tuition Fees */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-[#1A73E8]" />
                <h3 className="text-2xl font-bold text-[#1C1C1C]">Tuition Fees</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#F9FAFB] rounded-lg">
                  <span className="font-semibold text-[#1C1C1C]">Undergraduate</span>
                  <span className="text-[#1A73E8] font-bold text-lg">{countryData.tuitionRange.undergraduate}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#F9FAFB] rounded-lg">
                  <span className="font-semibold text-[#1C1C1C]">Postgraduate</span>
                  <span className="text-[#1A73E8] font-bold text-lg">{countryData.tuitionRange.postgraduate}</span>
                </div>
              </div>
            </div>

            {/* Living Costs */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-[#1A73E8]" />
                <h3 className="text-2xl font-bold text-[#1C1C1C]">Living Costs (Monthly)</h3>
              </div>
              <div className="space-y-3">
                {Object.entries(countryData.livingCost).map(([key, value]) => {
                  if (key === 'total') return null;
                  const icons: any = {
                    accommodation: Home,
                    food: Utensils,
                    transport: Bus,
                    utilities: Globe,
                    entertainment: Heart,
                  };
                  const Icon = icons[key];
                  return (
                    <div key={key} className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-[#6B7280]" />
                        <span className="font-medium text-[#1C1C1C] capitalize">{key}</span>
                      </div>
                      <span className="text-[#1C1C1C] font-semibold">{value}</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center p-4 bg-[#1A73E8] rounded-lg mt-4">
                  <span className="font-bold text-white text-lg">Total Estimate</span>
                  <span className="text-[#F4C430] font-bold text-xl">{countryData.livingCost.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">Visa Process Timeline</h2>
            <p className="text-xl text-[#6B7280]">Step-by-step guide to your student visa</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1A73E8]/20"></div>
            <div className="space-y-12">
              {countryData.visaSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#E5E7EB] inline-block">
                        <h4 className="font-bold text-[#1C1C1C] text-lg mb-2">{step.step}</h4>
                        <p className="text-[#1A73E8] font-semibold">{step.duration}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-[#1A73E8] rounded-full flex items-center justify-center shadow-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PR & Work Opportunities */}
      <section className="py-20 bg-[#1A3A8F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* PR Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <MapPin className="w-12 h-12 text-[#1A73E8] mb-4" />
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Permanent Residency</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#6B7280]">{countryData.prInfo.available ? 'Available' : 'Not Available'}</span>
                </div>
                {countryData.prInfo.available && (
                  <>
                    <p className="text-[#1A73E8] font-semibold">{countryData.prInfo.duration}</p>
                    <p className="text-[#6B7280] text-sm">{countryData.prInfo.details}</p>
                  </>
                )}
              </div>
            </div>

            {/* Work Rights */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <Briefcase className="w-12 h-12 text-[#1A73E8] mb-4" />
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Work Rights</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#6B7280] font-medium mb-2">During Studies:</p>
                  <p className="text-[#1A73E8] font-semibold">{countryData.workRights.during}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] font-medium mb-2">After Graduation:</p>
                  <p className="text-[#1A73E8] font-semibold">{countryData.workRights.after}</p>
                </div>
              </div>
            </div>

            {/* Job Opportunities */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <TrendingUp className="w-12 h-12 text-[#1A73E8] mb-4" />
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Job Market</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#6B7280] font-medium mb-2">Average Salary:</p>
                  <p className="text-[#1A73E8] font-bold text-xl">{countryData.jobOpportunities.averageSalary}</p>
                </div>
                <div>
                  <p className="text-[#6B7280] font-medium mb-2">Top Sectors:</p>
                  <div className="flex flex-wrap gap-2">
                    {countryData.jobOpportunities.topSectors.map((sector, idx) => (
                      <span key={idx} className="bg-[#F4C430]/20 text-[#1C1C1C] px-3 py-1 rounded-full text-sm font-medium">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">Available Scholarships</h2>
            <p className="text-xl text-[#6B7280]">Funding opportunities for international students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryData.scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A73E8] to-[#0A2472] rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <Award className="w-10 h-10 text-[#F4C430] mb-4" />
                <h4 className="font-bold text-xl mb-3">{scholarship.name}</h4>
                <p className="text-[#F4C430] font-bold text-2xl mb-3">{scholarship.amount}</p>
                <p className="text-white/90 text-sm">{scholarship.eligibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">Application Intakes</h2>
            <p className="text-xl text-[#6B7280]">Plan your admission timeline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {countryData.intakes.map((intake, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#E5E7EB]">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-[#1A73E8]" />
                  <h4 className="font-bold text-xl text-[#1C1C1C]">{intake.season}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Application Deadline:</span>
                    <span className="font-semibold text-[#1C1C1C]">{intake.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Start Date:</span>
                    <span className="font-semibold text-[#1A73E8]">{intake.startDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
            <p className="text-xl text-white/80">Hear from students who made it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4C430] text-[#F4C430]" />
                  ))}
                </div>
                <p className="text-[#6B7280] mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#1C1C1C]">{testimonial.name}</p>
                  <p className="text-[#1A73E8] text-sm">{testimonial.university}</p>
                  <p className="text-[#6B7280] text-xs">{testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#6B7280]">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {countryData.faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-[#E5E7EB] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9FAFB] transition-colors"
                >
                  <span className="font-semibold text-[#1C1C1C] text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#1A73E8] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[#6B7280]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form CTA */}
      <section id="consultation-form" className="py-20 bg-gradient-to-br from-[#1A73E8] to-[#0A2472]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90">Get free expert guidance from our counsellors</p>
          </div>

          <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl p-8 shadow-2xl border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A2472] mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all resize-none bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                  placeholder="Tell us about your study abroad goals..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] text-white py-4 rounded-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </button>
                <a
                  href="https://wa.me/917299005577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white py-4 rounded-lg hover:bg-[#20BA5A] transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+917299005577"
                  className="flex-1 bg-[#F4C430] text-[#0A2472] py-4 rounded-lg hover:bg-[#E5B528] transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
