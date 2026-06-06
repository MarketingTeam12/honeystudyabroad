import { useState } from 'react';
import {
  ArrowRight,
  Home,
  Building2,
  Laptop,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

export function IndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2472] via-[#1A3A8F] to-[#0A2472]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A2472]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.location.hash = 'home'}
              className="flex items-center gap-2 text-white hover:text-[#F4C430] transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
              <MapPin className="w-5 h-5 text-[#F4C430]" />
              <span className="text-white font-semibold">Study in India</span>
            </div>

            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              India University Admissions
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your gateway to top IITs, NITs, IIMs, Medical Colleges, and Premier Universities across India
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => window.location.hash = 'campus-admission-page'}
                className="bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] text-white px-8 py-4 rounded-xl hover:from-[#0D5DBD] hover:to-[#1A73E8] transition-all font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
              >
                <Building2 className="w-6 h-6" />
                Campus Admission
              </button>
              <button
                onClick={() => window.location.hash = 'online-admission-page'}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0A2472] transition-all font-bold text-lg border-2 border-white/30 hover:border-white shadow-2xl hover:shadow-3xl hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
              >
                <Laptop className="w-6 h-6" />
                Online Admission
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#F4C430] mb-2">1000+</div>
                <div className="text-white/80 text-sm">Universities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#F4C430] mb-2">100%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#F4C430] mb-2">5000+</div>
                <div className="text-white/80 text-sm">Students Placed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#F4C430] mb-2">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in India */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Why Study in India?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              World-class education with diverse opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-xl flex items-center justify-center text-white mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Prestigious Institutions</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Study at world-renowned IITs, NITs, IIMs, AIIMS, and top universities with global recognition
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-xl flex items-center justify-center text-white mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Affordable Education</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Quality education at a fraction of international costs. Government colleges offer excellent value
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-xl flex items-center justify-center text-white mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Diverse Programs</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Thousands of programs across engineering, medical, management, law, arts, and sciences
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-xl flex items-center justify-center text-white mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Rich Campus Life</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Vibrant student communities, cultural festivals, sports, and extracurricular activities
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-xl flex items-center justify-center text-white mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Excellent Placements</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Top companies recruit from premier institutions. Strong alumni networks across industries
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-xl flex items-center justify-center text-white mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Flexible Options</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Choose between full-time campus programs or online degrees for working professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Choose Your Path
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Select the admission type that fits your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Campus Admission Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <Building2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl text-white font-bold mb-4 text-center">Campus Admission</h3>
              <p className="text-white/80 text-center mb-6 leading-relaxed">
                Traditional on-campus education with face-to-face learning, residential facilities, and complete campus experience
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">IITs, NITs, IIMs, AIIMS, Top Universities</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">JEE, NEET, CAT, CLAT entrance exams</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Hostel facilities and campus life</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">On-campus placements and internships</span>
                </li>
              </ul>
              <button
                onClick={() => window.location.hash = 'campus-admission-page'}
                className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] text-white py-4 rounded-xl hover:from-[#0D5DBD] hover:to-[#1A73E8] transition-all font-bold flex items-center justify-center gap-2"
              >
                Explore Campus Programs
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Online Admission Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-[#F4C430] transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4C430] to-[#FFD700] rounded-2xl flex items-center justify-center text-[#0A2472] mb-6 mx-auto">
                <Laptop className="w-10 h-10" />
              </div>
              <h3 className="text-3xl text-white font-bold mb-4 text-center">Online Admission</h3>
              <p className="text-white/80 text-center mb-6 leading-relaxed">
                Study from anywhere with UGC-approved online degrees. Flexible learning for working professionals and students
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">UGC-DEB approved online degrees</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 access to learning materials</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Work while you study</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">30-50% cost savings</span>
                </li>
              </ul>
              <button
                onClick={() => window.location.hash = 'online-admission-page'}
                className="w-full bg-white/10 backdrop-blur-md text-white py-4 rounded-xl hover:bg-white hover:text-[#0A2472] transition-all font-bold border-2 border-white/30 hover:border-white flex items-center justify-center gap-2"
              >
                Explore Online Programs
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl text-white mb-4 font-bold">
              Ready to Start Your Admission Journey?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get personalized counselling and complete support for admissions to top Indian institutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi! I'm interested in India admission guidance"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#20BA5A] transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi! I'm interested in India admission guidance"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-40 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
