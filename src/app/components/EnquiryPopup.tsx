import { useState } from 'react';
import { X, Send, CheckCircle, Star, Users, GraduationCap } from 'lucide-react';
import { SearchableCountrySelect } from './SearchableCountrySelect';

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryPopup({ isOpen, onClose }: EnquiryPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredCountry: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Study Abroad Enquiry — ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Country: ${formData.preferredCountry}
Message: ${formData.message}`;

    const mailtoLink = `mailto:salesteam@honeytranslations.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredCountry: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60"
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      ></div>

      {/* Modal - Compact */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 transition-all z-10 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6">
          {!submitted ? (
            <>
              {/* Header Section - Compact */}
              <div className="text-center mb-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#2b2d72] to-[#1e40af] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-xl mb-1 text-[#2b2d72] font-bold">
                  Start Your Journey
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-gray-500">
                  Get expert guidance in 24 hours
                </p>
              </div>

              {/* Form - Compact */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b2d72]/20 focus:border-[#2b2d72] outline-none transition-all text-sm text-gray-700 placeholder:text-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b2d72]/20 focus:border-[#2b2d72] outline-none transition-all text-sm text-gray-700 placeholder:text-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b2d72]/20 focus:border-[#2b2d72] outline-none transition-all text-sm text-gray-700 placeholder:text-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <SearchableCountrySelect
                    name="preferredCountry"
                    required
                    value={formData.preferredCountry}
                    onChange={(val) => setFormData({ ...formData, preferredCountry: val })}
                    placeholder="Select Country"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b2d72]/20 focus:border-[#2b2d72] outline-none transition-all resize-none text-sm text-gray-700 placeholder:text-gray-400"
                    placeholder="Any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2b2d72] to-[#1e40af] text-white py-2.5 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 font-semibold text-sm"
                >
                  <Send className="w-4 h-4" />
                  Get Expert Guidance
                </button>

                <p className="text-xs text-center text-gray-500">
                  🔒 Your information is secure
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              {/* Success Animation */}
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl mb-2 text-[#2b2d72] font-bold">Enquiry Sent!</h3>
              <p className="text-sm text-gray-600 mb-4">
                We'll contact you within 24 hours.
              </p>

              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">Journey started!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
