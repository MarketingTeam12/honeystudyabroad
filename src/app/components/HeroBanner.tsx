import { ArrowRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
        }}
      >
        {/* Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2472]/90 via-[#0A2472]/85 to-[#1A3A8F]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-extrabold">
          Your Dream University.<br />Our Expert Guidance.
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-[#d0d0e8] max-w-3xl mx-auto">
          Study Abroad with confidence — from application to arrival.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#countries"
            className="bg-[#1A73E8] text-white px-10 py-4 rounded-lg hover:bg-[#F4C430] hover:text-[#1C1C1C] transition-all shadow-xl flex items-center justify-center gap-2 text-lg font-semibold"
          >
            Explore Countries
            <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={() => {
              const event = new CustomEvent('openEnquiry');
              window.dispatchEvent(event);
            }}
            className="bg-[#F4C430] text-[#1C1C1C] px-10 py-4 rounded-lg hover:bg-[#1A73E8] hover:text-white transition-all shadow-xl text-lg font-semibold"
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
