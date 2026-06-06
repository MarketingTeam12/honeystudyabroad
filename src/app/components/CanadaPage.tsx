import { ArrowLeft, MessageCircle } from 'lucide-react';
import { canadaData } from '../data/countries/canada';

export function CanadaPage() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I am interested in studying in Canada. Please guide me.');
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const handleApplyClick = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-[20px] font-bold text-[#2b2d72]">
              StudyAbroad Pro
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'home';
                }}
                className="text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#countries"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'home';
                  setTimeout(() => {
                    document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Countries
              </a>
              <span className="text-orange-500 font-semibold text-[15px]">
                Canada
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Link */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="#countries"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'home';
              setTimeout(() => {
                document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 text-[14px] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Countries
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#2b2d72] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🍁</span>
              <span className="text-white text-[13px] font-semibold">Study Destination</span>
            </div>

            {/* Heading */}
            <h1 className="text-[56px] font-bold text-white mb-6 leading-tight">
              Study in Canada
            </h1>

            {/* Subtext */}
            <p className="text-white/90 text-[20px] leading-relaxed mb-8">
              {canadaData.tagline}. {canadaData.welcomeText}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white px-5 py-2.5 rounded-full">
                <span className="text-orange-500 font-semibold text-[14px]">🎓 World-ranked unis</span>
              </div>
              <div className="bg-white px-5 py-2.5 rounded-full">
                <span className="text-orange-500 font-semibold text-[14px]">🌍 PR pathway</span>
              </div>
              <div className="bg-white px-5 py-2.5 rounded-full">
                <span className="text-orange-500 font-semibold text-[14px]">💼 Work while study</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <h2 className="text-[32px] font-bold text-[#2b2d72] mb-6">
              About studying in Canada
            </h2>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              {canadaData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-bold text-[#2b2d72] mb-10 text-center">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canadaData.keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-[18px] font-bold text-[#2b2d72] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-[14px]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-bold text-[#2b2d72] mb-10 text-center">
            Top Universities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canadaData.universities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-[#E5E7EB]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[18px] font-bold text-[#2b2d72] flex-1">
                    {uni.name}
                  </h3>
                  <span className="text-[12px] font-semibold px-3 py-1 rounded-full bg-[#2b2d72]/10 text-orange-500">
                    {uni.ranking}
                  </span>
                </div>
                <p className="text-gray-600 text-[14px] mb-4">
                  Tuition: <span className="font-semibold text-[#2b2d72]">{uni.tuition}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {uni.programs.map((program, idx) => (
                    <span
                      key={idx}
                      className="text-[12px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Available */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-bold text-[#2b2d72] mb-10 text-center">
            Courses Available
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {canadaData.coursesAvailable.map((course, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-[#2b2d72] text-white font-semibold text-[15px] hover:bg-[#B91C1C] transition-colors cursor-pointer"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-bold text-[#2b2d72] mb-10 text-center">
            Visa Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canadaData.visaSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-[#2b2d72] text-white font-bold text-[20px] flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-[16px] font-bold text-[#2b2d72] mb-2">
                  {step.step}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-bold text-[#2b2d72] mb-10 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {canadaData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#2b2d72]/10 flex items-center justify-center text-[24px] font-bold text-orange-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[18px] font-bold text-[#2b2d72]">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-[14px]">
                      {testimonial.location} • {testimonial.university}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  {testimonial.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-[#2b2d72] mb-6">
            Ready to Start Your Canada Journey?
          </h2>
          <p className="text-gray-600 text-[18px] mb-10">
            Our expert counselors are here to guide you through every step
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleApplyClick}
              className="px-10 py-4 rounded-lg bg-[#2b2d72] text-white font-semibold text-[16px] hover:bg-[#B91C1C] transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-10 py-4 rounded-lg bg-[#25D366] text-white font-semibold text-[16px] hover:bg-[#20BA5A] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
