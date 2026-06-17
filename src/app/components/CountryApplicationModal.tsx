import { useEffect, useState } from 'react';
import { CheckCircle, GraduationCap, Send, Upload, X } from 'lucide-react';
import { SearchableCountrySelect } from './SearchableCountrySelect';

type ApplicationMode = 'apply' | 'enquiry';

interface CountryApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryName: string;
  mode?: ApplicationMode;
}

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  countryPreference: string;
  courseInterested: string;
  qualification: string;
  documents: File | null;
  message: string;
}

export function CountryApplicationModal({
  isOpen,
  onClose,
  countryName,
  mode = 'apply',
}: CountryApplicationModalProps) {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryPreference: countryName,
    courseInterested: '',
    qualification: '',
    documents: null,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryPreference: countryName,
        courseInterested: '',
        qualification: '',
        documents: null,
        message: '',
      });
    }
  }, [countryName, isOpen]);

  if (!isOpen) return null;

  const title = mode === 'apply' ? `Apply Now - ${countryName}` : `Quick Enquiry - ${countryName}`;
  const subtitle =
    mode === 'apply'
      ? 'Complete the form below to start your application process'
      : 'Complete the form below and our team will contact you soon';
  const submitLabel = mode === 'apply' ? 'Submit Application' : 'Submit Enquiry';
  const subjectPrefix = mode === 'apply' ? `${countryName} Application` : `${countryName} Enquiry`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previous) => ({
      ...previous,
      documents: event.target.files?.[0] || null,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    const phoneDigits = formData.phone.replace(/[\s\-+]/g, '');
    if (phoneDigits.length < 8) {
      return;
    }

    const subject = encodeURIComponent(`${subjectPrefix} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail Address: ${formData.email}\nPhone Number: ${formData.phone}\nCountry Preference: ${formData.countryPreference}\nCourse Interested: ${formData.courseInterested}\nHighest Qualification: ${formData.qualification}\nUploaded Document: ${formData.documents ? formData.documents.name : 'Not uploaded'}\n\nAdditional Message:\n${formData.message || 'N/A'}`
    );

    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-3 overflow-y-auto">
      <div className="relative my-2 flex max-h-[calc(100dvh-1rem)] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl sm:max-w-2xl lg:max-w-3xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          {!submitted ? (
            <>
              <div className="mb-5 text-center sm:mb-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#2b2d72] shadow-lg shadow-[#2b2d72]/25 sm:h-14 sm:w-14">
                  <GraduationCap className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>
                <h2 className="mb-2 text-xl font-bold text-[#2b2d72] sm:text-2xl">{title}</h2>
                <p className="text-sm text-gray-500">{subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-900 placeholder:text-gray-400 transition-all focus:border-[#2b2d72] focus:outline-none focus:ring-4 focus:ring-[#2b2d72]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-900 placeholder:text-gray-400 transition-all focus:border-[#2b2d72] focus:outline-none focus:ring-4 focus:ring-[#2b2d72]/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-900 placeholder:text-gray-400 transition-all focus:border-[#2b2d72] focus:outline-none focus:ring-4 focus:ring-[#2b2d72]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                      Country Preference <span className="text-red-500">*</span>
                    </label>
                    <SearchableCountrySelect
                      name="countryPreference"
                      required
                      value={formData.countryPreference}
                      onChange={(value) => setFormData((previous) => ({ ...previous, countryPreference: value }))}
                      placeholder="Select Country Preference"
                      variant="blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                      Course Interested <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="courseInterested"
                      required
                      value={formData.courseInterested}
                      onChange={handleChange}
                      placeholder="e.g., MBA, Computer Science"
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-900 placeholder:text-gray-400 transition-all focus:border-[#2b2d72] focus:outline-none focus:ring-4 focus:ring-[#2b2d72]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="qualification"
                      required
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-900 transition-all focus:border-[#2b2d72] focus:outline-none focus:ring-4 focus:ring-[#2b2d72]/10"
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

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2b2d72]">
                    Upload Documents (Optional)
                  </label>
                  <input
                    type="file"
                    id="country-application-documents"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                  <label
                    htmlFor="country-application-documents"
                    className="flex w-full cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-gray-900 transition-all hover:border-[#2b2d72]"
                  >
                    <Upload className="h-4 w-4 text-[#2b2d72]" />
                    <span className="text-sm font-medium">
                      {formData.documents ? formData.documents.name : 'Click to upload transcripts, resume, or certificates'}
                    </span>
                  </label>
                  <p className="mt-1.5 text-[11px] text-gray-500">Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#2b2d72] sm:text-sm">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your study goals, academic background, or any questions..."
                    className="w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-900 placeholder:text-gray-400 transition-all focus:border-[#2b2d72] focus:outline-none focus:ring-4 focus:ring-[#2b2d72]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2b2d72] py-3 text-sm font-bold text-white shadow-lg shadow-[#2b2d72]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a1d4a] hover:shadow-xl hover:shadow-[#2b2d72]/30 sm:py-3.5 sm:text-base"
                >
                  <Send className="h-5 w-5" />
                  {submitLabel}
                </button>

                <p className="text-center text-[11px] text-gray-500 sm:text-xs">
                  <CheckCircle className="mr-1 inline-block h-3.5 w-3.5 text-green-600 sm:h-4 sm:w-4" />
                  Your information is secure and will be used only for application processing
                </p>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-[#2b2d72]">Application Sent!</h3>
              <p className="text-sm text-gray-600">We have opened your email client with the application details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
