import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Study Abroad Enquiry — ${formData.fullName}`;
    const body = `Name: ${formData.fullName}
Mobile: ${formData.mobile}
City: ${formData.city}
Country: ${formData.country}
Message: ${formData.message}`;

    const mailtoLink = `mailto:salesteam@honeytranslations.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = '+917299005577';
  const whatsappMessage = 'Hello, I am interested in Study Abroad services.';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;


  return (
    <div id="contact" className="min-h-screen">
      {/* PAGE BANNER */}
      <section className="bg-gradient-to-r from-[#0A2472] to-[#1A3A8F] text-white py-20 mt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="text-white text-[13px] mb-4">
            <a href="#home" className="hover:text-[#F4C430]">Home</a> &gt; Contact
          </div>

          {/* Title */}
          <h1 className="text-[52px] md:text-[52px] text-[30px] font-bold text-white mb-4">
            Get In Touch
          </h1>

          {/* Decorative Gold Underline */}
          <div className="w-12 h-[3px] bg-[#F4C430] mx-auto mb-6"></div>

          {/* Subtitle */}
          <p className="text-[18px] md:text-[18px] text-[15px] text-[#CBD5E1] max-w-2xl mx-auto">
            We're here to help you with your study abroad journey
          </p>
        </div>
      </section>

      {/* CONTACT SECTION - 2 COLUMN LAYOUT */}
      <section className="bg-[#0A2472] py-20 md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT COLUMN - Contact Info */}
            <div className="text-white space-y-8">
              {/* Address */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[20px] font-bold mb-2">Address</h3>
                    <p className="text-white/80 text-[15px] leading-relaxed">
                      Worldwide 🌍<br />
                      <span className="text-sm text-white/60">We serve students globally</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold mb-3">Phone / WhatsApp</h3>
                    <div className="space-y-2 text-[15px]">
                      <div>
                        <a href="tel:+917299005577" className="text-white hover:text-[#F4C430] transition-colors font-medium text-lg">
                          +91 72990 05577
                        </a>
                      </div>
                      <div>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white/80 hover:text-[#F4C430] transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 text-green-400" />
                          <span>WhatsApp Available</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[20px] font-bold mb-2">Email</h3>
                    <a
                      href="mailto:salesteam@honeytranslations.com"
                      className="text-white/80 hover:text-[#F4C430] transition-colors text-[15px]"
                    >
                      salesteam@honeytranslations.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[20px] font-bold mb-2">Working Hours</h3>
                    <div className="text-white/80 text-[15px] space-y-1">
                      <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-[20px] font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/honeytranslationservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 border border-white/20"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/honey_translation_services_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#F77737] transition-all duration-300 border border-white/20"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/honey-translation-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 border border-white/20"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 border border-white/20"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Form */}
            <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl p-7 md:p-7 shadow-2xl border border-blue-100">
              <h2 className="text-[28px] font-bold text-[#0A2472] mb-2">Send Us a Message</h2>
              <p className="text-sm text-blue-600/70 mb-6">Fill in your details and we'll get back to you soon</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="w-20 px-4 py-3 border-2 border-blue-200 rounded-xl bg-blue-50/50 backdrop-blur-sm text-[#0A2472] flex items-center justify-center font-semibold">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                    placeholder="Your city"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    Preferred Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium"
                  >
                    <option value="">Select Country</option>
                    <option value="USA">🇺🇸 United States</option>
                    <option value="UK">🇬🇧 United Kingdom</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Singapore">🇸🇬 Singapore</option>
                    <option value="NewZealand">🇳🇿 New Zealand</option>
                    <option value="Ireland">🇮🇪 Ireland</option>
                    <option value="Dubai">🇦🇪 Dubai (UAE)</option>
                    <option value="Other">🌍 Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#0A2472] mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition-all resize-none bg-white/80 backdrop-blur-sm text-[#0A2472] font-medium placeholder:text-blue-400/60"
                    placeholder="Tell us about your study abroad goals..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] text-white py-4 rounded-xl hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 font-bold text-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </button>

                <p className="text-xs text-center text-blue-600/70 mt-3">
                  🔒 Your information is secure and confidential
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
