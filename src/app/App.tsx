import image_download__3__3 from '@/imports/download__3_-3.jpg'
import { useState, useEffect } from 'react';
import {
  Phone, ChevronDown, Menu, X, Star, ArrowRight,
  CheckCircle, Award, Users, TrendingUp, Search,
  GraduationCap, Globe, MessageCircle, Shield, Zap,
} from 'lucide-react';
import honeyLogo from '../imports/Artboard_1_copy_1.png';
import { CanadaPageAccordion } from './components/CanadaPageAccordion';
import { UKPage } from './components/UKPage';
import { USAPage } from './components/USAPage';
import { AustraliaPage } from './components/AustraliaPage';
import { SingaporePage } from './components/SingaporePage';
import { GermanyPage } from './components/GermanyPage';
import { FrancePage } from './components/FrancePage';
import { IndiaPage } from './components/IndiaPage';
import { OnlineAdmissionPage } from './components/OnlineAdmissionPage';
import { CampusAdmissionPage } from './components/CampusAdmissionPage';
import { CourseDetailPage } from './components/CourseDetailPage';
import { NewZealandPage } from './components/NewZealandPage';
import { IrelandPage } from './components/IrelandPage';
import { EuropePage } from './components/EuropePage';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { EnquiryPopup } from './components/EnquiryPopup';
import { ContactModal } from './components/ContactModal';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { Navigation } from './components/Navigation';
import { VisaAssistanceDetailPage } from './components/VisaAssistanceDetailPage';
import { UniversityAdmissionsDetailPage } from './components/UniversityAdmissionsDetailPage';
import { ScholarshipGuidanceDetailPage } from './components/ScholarshipGuidanceDetailPage';
import { IELTSTestPrepDetailPage } from './components/IELTSTestPrepDetailPage';
import { CareerCounselingPage } from './components/CareerCounselingPage';
import { IndiaAdmissionPage } from './components/IndiaAdmissionPage';
import { PreDeparturePage } from './components/PreDeparturePage';
import { UniversityDetailPage } from './components/UniversityDetailPage';
import { SearchableCourseInput } from './components/SearchableCourseInput';
import { getPageFromHash, isUniversityDetailPage, getUniversityIdFromHash } from './utils/pageRoutes';

// ─── Static Data ──────────────────────────────────────────────────────────────

const NAV_COUNTRIES = [
  { label: '🇺🇸 USA', href: '#usa-page' },
  { label: '🇬🇧 United Kingdom', href: '#uk-page' },
  { label: '🇨🇦 Canada', href: '#canada-page' },
  { label: '🇦🇺 Australia', href: '#australia-page' },
  { label: '🇩🇪 Germany', href: '#germany-page' },
  { label: '🇫🇷 France', href: '#france-page' },
  { label: '🇸🇬 Singapore', href: '#singapore-page' },
  { label: '🇳🇿 New Zealand', href: '#new-zealand-page' },
  { label: '🇮🇪 Ireland', href: '#ireland-page' },
  { label: '🇪🇺 Europe', href: '#europe-page' },
];

const NAV_SERVICES = [
  { label: 'University Admissions', href: '#university-admissions' },
  { label: 'Visa Assistance', href: '#visa-assistance' },
  { label: 'Campus Admission', href: '#campus-admission' },
  { label: 'Online Admission', href: '#online-admission' },
  { label: 'Scholarship Guidance', href: '#scholarship-guidance' },
  { label: 'IELTS / Test Prep', href: '#ielts-test-prep' },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', country: 'Canada', text: "Got into University of Toronto — the entire process was seamless and completely stress-free. Couldn't be more grateful!", rating: 5, flag: '🇨🇦', uni: 'Univ. of Toronto' },
  { name: 'Rahul Verma', country: 'UK', text: 'Visa approved in just 3 weeks. The counselors are incredibly experienced and walked me through every step.', rating: 5, flag: '🇬🇧', uni: "King's College London" },
  { name: 'Aisha Mohammed', country: 'USA', text: 'Got into NYU with a partial scholarship! The financial aid and SOP guidance was absolutely exceptional.', rating: 5, flag: '🇺🇸', uni: 'New York University' },
  { name: 'Karthik Reddy', country: 'Australia', text: 'Smooth process from IELTS prep to final visa approval. Would 100% recommend Honey Translations to everyone!', rating: 5, flag: '🇦🇺', uni: 'Univ. of Melbourne' },
  { name: 'Meena Nair', country: 'Germany', text: "Now studying at TU Munich — the study loan and blocked account guidance made everything effortless.", rating: 5, flag: '🇩🇪', uni: 'TU Munich' },
  { name: 'Sanjay Kumar', country: 'Singapore', text: "Got an NUS offer within 2 months. Honey's document support and mock interviews were top-notch.", rating: 5, flag: '🇸🇬', uni: 'National Univ. of Singapore' },
  { name: 'Divya Pillai', country: 'Ireland', text: 'Amazing guidance from document prep to finding accommodation in Dublin. The team genuinely cares.', rating: 5, flag: '🇮🇪', uni: 'Trinity College Dublin' },
  { name: 'Arjun Kapoor', country: 'New Zealand', text: "My PR pathway is completely clear now thanks to Honey's immigration expertise. Absolutely outstanding!", rating: 5, flag: '🇳🇿', uni: 'Univ. of Auckland' },
];

const COUNTRIES = [
  { name: 'USA', flag: '🇺🇸', href: '#usa-page', desc: '500+ Universities' },
  { name: 'United Kingdom', flag: '🇬🇧', href: '#uk-page', desc: 'Top World Rankings' },
  { name: 'Canada', flag: '🇨🇦', href: '#canada-page', desc: 'PR Pathway Available' },
  { name: 'Australia', flag: '🇦🇺', href: '#australia-page', desc: 'Work & Study Visa' },
  { name: 'Germany', flag: '🇩🇪', href: '#germany-page', desc: 'Low / No Tuition Fees' },
  { name: 'France', flag: '🇫🇷', href: '#france-page', desc: 'Arts & Sciences Hub' },
  { name: 'Singapore', flag: '🇸🇬', href: '#singapore-page', desc: "Asia's Premier Hub" },
  { name: 'New Zealand', flag: '🇳🇿', href: '#new-zealand-page', desc: 'Scenic & Safe' },
  { name: 'Ireland', flag: '🇮🇪', href: '#ireland-page', desc: 'Tech Career Gateway' },
  { name: 'Europe', flag: '🇪🇺', href: '#europe-page', desc: '20+ Countries' },
];

const UNIVERSITIES = [
  'University of Toronto', 'Oxford University', 'MIT', 'Harvard University',
  'Stanford University', 'NUS Singapore', 'TU Munich', 'McGill University',
  'Monash University', 'Trinity College Dublin',
];

const HOME_SECTIONS = ['home', 'about', 'services', 'countries', 'contact'] as const;
const HOME_SECTION_SET = new Set<string>(HOME_SECTIONS);
const HOME_NAV_OFFSET = 88;

function scrollToHomeSection(sectionId: string, behavior: ScrollBehavior = 'smooth') {
  if (typeof window === 'undefined') {
    return;
  }

  if (!sectionId || sectionId === 'home') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - HOME_NAV_OFFSET);
  window.scrollTo({ top, behavior });
}

// ─── AlertBanner ──────────────────────────────────────────────────────────────

function AlertBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="relative bg-gradient-to-r from-[#2b2d72] via-[#3b4ab8] to-[#2b2d72] text-white text-center py-3 px-12 text-sm font-semibold shadow-sm">
      <span className="hidden sm:inline">🎓 </span>
      <strong>Free Visa Guidance</strong>
      <span className="hidden sm:inline"> — Book your free counselling session today!</span>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent('openEnquiry'))}
        className="ml-2 text-orange-400 hover:text-orange-300 font-extrabold transition-colors"
      >
        Apply Now →
      </button>
      <button
        onClick={onDismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}


// ─── HeroSection ──────────────────────────────────────────────────────────────

function HeroSection({ onEnquiryClick, onExpertClick }: { onEnquiryClick: () => void; onExpertClick: () => void }) {
  return (
    <section className="relative bg-[#2b2d72] overflow-hidden" id="home">
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.065]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }}
      />
      {/* Ambient glows */}
      <div className="absolute top-[-120px] right-[-80px] w-[520px] h-[520px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT ─ Copy */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-[13px] text-white/90 font-semibold mb-7">
              <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
              India's Most Trusted Study Abroad Consultancy
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
              Your Dream
              <span className="text-orange-400"> University,</span>
              <br />Our Expertise
            </h1>

            {/* Tagline */}
            <p className="text-base lg:text-[1.05rem] text-white/72 mb-9 leading-relaxed max-w-lg">
              Expert guidance for studying in USA, UK, Canada, Australia &amp; 25+ countries.
              From university selection to visa approval — we handle everything end-to-end.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={onExpertClick}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-extrabold text-[15px] transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 hover:shadow-2xl active:scale-[0.98]"
              >
                <Phone size={17} /> Talk to an Expert
              </button>
              <button
                onClick={onEnquiryClick}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 text-white border border-white/25 px-8 py-4 rounded-xl font-extrabold text-[15px] transition-all backdrop-blur-sm active:scale-[0.98]"
              >
                Take Free Counselling <ArrowRight size={17} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Award size={14} />, label: 'ISO Certified' },
                { icon: <Users size={14} />, label: '15,000+ Students' },
                { icon: <TrendingUp size={14} />, label: '99% Visa Success' },
              ].map(b => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-[13px] text-white/90 font-semibold"
                >
                  <span className="text-orange-400">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ─ Photo card */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Glow halo behind card */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-3xl pointer-events-none"></div>

            <div className="relative w-full max-w-[420px] h-[360px] sm:h-[480px] lg:h-[520px]">
              {/* Main blue rounded container with image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b4ab8] to-[#2b2d72] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-white/10">
                {/* Subtle gradient overlay for depth with background image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2d72]/70 via-[#2b2d72]/40 to-transparent">
                  <img
                    src={image_download__3__3.src}
                    alt="Graduate student"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-left-10 bg-white rounded-2xl px-5 py-3.5 shadow-lg z-20 transition-transform duration-200 hover:scale-105">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Students Placed</div>
                <div className="text-[30px] sm:text-[32px] font-extrabold text-[#2b2d72] leading-none">15,000+</div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-10 bg-white rounded-2xl px-5 py-3.5 shadow-lg z-20 transition-transform duration-200 hover:scale-105">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visa Success</div>
                <div className="text-[30px] sm:text-[32px] font-extrabold text-emerald-600 leading-none">99%</div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl px-5 py-3.5 shadow-lg z-20 text-white transition-transform duration-200 hover:scale-105">
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-90 mb-0.5">Countries</div>
                <div className="text-[30px] sm:text-[32px] font-extrabold leading-none">25+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TestimonialMarquee ───────────────────────────────────────────────────────

function TestimonialMarquee() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2b2d72] rounded-full px-4 py-1.5 text-xs font-extrabold mb-3 uppercase tracking-wide">
          <Star size={12} className="fill-[#2b2d72]" /> Success Stories
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#2b2d72] mb-3 leading-tight">Students Who Achieved Their Dreams</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl mx-auto">Join 15,000+ students who trusted us with their future</p>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-marquee will-change-transform" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => (
            <div
              key={`testimonial-${i}`}
              className="w-[320px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#2b2d72]/10 hover:-translate-y-1 hover:border-[#2b2d72]/30 transition-all duration-200 flex-shrink-0"
            >
              {/* Rating stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3 italic">"{t.text}"</p>

              {/* Student info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2b2d72] to-[#3b4ab8] flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-extrabold text-gray-900 truncate">{t.name}</div>
                  <div className="text-xs text-gray-500 truncate">{t.flag} {t.uni}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </section>
  );
}

// ─── UniversityLogos ─────────────────────────────────────────────────────────

function UniversityLogos() {
  return (
    <section className="py-12 lg:py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.16em] mb-8">
          Admissions to World's Best Universities
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {UNIVERSITIES.map(name => (
            <span
              key={name}
              className="text-[#2b2d72] font-extrabold text-[13px] sm:text-[14px] transition-all duration-300 cursor-pointer select-none hover:text-[#F4A430] hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── StatsSection ─────────────────────────────────────────────────────────────

function StatsSection() {
  const stats = [
    { number: '15,000+', label: 'Students Placed Worldwide', icon: <GraduationCap size={24} />, gradient: 'from-[#2b2d72] to-[#3b4ab8]' },
    { number: '25+', label: 'Study Destinations', icon: <Globe size={24} />, gradient: 'from-[#3b4ab8] to-[#4a5bc4]' },
    { number: '99%', label: 'Visa Success Rate', icon: <TrendingUp size={24} />, gradient: 'from-[#2b2d72] to-[#1e3a8a]' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#2b2d72] to-[#1e3a8a] relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
          {stats.map(s => (
            <div
              key={s.label}
              className="flex items-center gap-4 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-7 transition-all duration-300 cursor-default group hover:scale-105 shadow-lg"
            >
              <div className={`bg-gradient-to-br ${s.gradient} rounded-xl p-3.5 flex-shrink-0 shadow-lg`}>
                <span className="text-white">{s.icon}</span>
              </div>
              <div>
                <div className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold text-white leading-none mb-1">{s.number}</div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold leading-tight">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CountryGrid ─────────────────────────────────────────────────────────────

function CountryGrid() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="countries">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2b2d72] rounded-full px-4 py-1.5 text-xs font-extrabold mb-3 uppercase tracking-wide">
            <Globe size={12} /> 25+ Study Destinations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#2b2d72] mb-3 leading-tight">Choose Your Dream Destination</h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expert guidance for every country — from university selection to visa approval and accommodation
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {COUNTRIES.map(c => (
            <a
              key={c.name}
              href={c.href}
              className="group flex flex-col items-center gap-3 p-5 bg-white hover:bg-[#2b2d72] rounded-2xl border border-gray-100 hover:border-[#2b2d72] transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-white rounded-full flex items-center justify-center text-[32px] shadow-sm transition-all duration-200">
                {c.flag}
              </div>
              <div className="text-center">
                <div className="text-sm font-extrabold text-gray-900 group-hover:text-white transition-colors leading-tight">{c.name}</div>
                <div className="text-xs sm:text-[11px] text-gray-500 group-hover:text-white/70 mt-0.5 transition-colors">{c.desc}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#countries"
            className="inline-flex items-center gap-2 bg-[#2b2d72] hover:bg-[#1e206b] text-white px-8 py-3.5 rounded-xl font-extrabold text-[14px] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            View All Countries <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── WhyChooseUsSection ───────────────────────────────────────────────────────

function WhyChooseUsSection({ onEnquiryClick }: { onEnquiryClick: () => void }) {
  const reasons = [
    { icon: <Shield size={22} />, title: 'ISO Certified Consultancy', desc: 'Accredited and verified with a decade-long track record of measurable student success.', color: 'text-[#2b2d72] bg-blue-50' },
    { icon: <Award size={22} />, title: 'Expert Counselors', desc: 'Our team has placed students in 25+ countries across the world\'s most sought-after universities.', color: 'text-[#2b2d72] bg-blue-50' },
    { icon: <CheckCircle size={22} />, title: '99% Visa Success Rate', desc: 'Industry-leading approval rates backed by our battle-tested visa specialists and SOP writers.', color: 'text-[#2b2d72] bg-blue-50' },
    { icon: <Zap size={22} />, title: 'End-to-End Support', desc: 'From course selection to landing in your dream country — every step covered, zero surprises.', color: 'text-[#2b2d72] bg-blue-50' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2b2d72] rounded-full px-4 py-1.5 text-xs font-extrabold mb-3 uppercase tracking-wide">
            <Award size={12} /> Our Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#2b2d72] mb-3 leading-tight">Why 15,000+ Students Trust Us</h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Honey Translations combines deep expertise, personalised care, and proven systems to make your study abroad dream a reality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(r => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-[#2b2d72]/10 hover:-translate-y-1.5 hover:border-[#2b2d72]/30 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${r.color}`}>
                {r.icon}
              </div>
              <h3 className="font-extrabold text-gray-900 mb-2 text-sm sm:text-base leading-snug">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onEnquiryClick}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-extrabold text-[14px] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Start Your Journey <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── CtaSection ───────────────────────────────────────────────────────────────

function CtaSection({ onEnquiryClick }: { onEnquiryClick: () => void }) {
  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden"
      id="contact"
      style={{ background: 'linear-gradient(135deg, #2b2d72 0%, #1e3a8a 50%, #2b2d72 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
          <Globe size={30} className="text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-white mb-4 leading-tight">
          Ready to Begin Your
          <br className="hidden sm:block" />
          <span className="text-orange-400"> Study Abroad Journey?</span>
        </h2>
        <p className="text-white/70 text-sm sm:text-base lg:text-[15px] mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute counselling session with our experts. No commitment required — just expert, tailored advice to get you started.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onEnquiryClick}
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <MessageCircle size={18} /> Book Free Counselling
          </button>
          <a
            href="tel:+917299005577"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all hover:scale-105 active:scale-95"
          >
            <Phone size={18} /> +91&nbsp;7299005577
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FloatingEnquiryPill ──────────────────────────────────────────────────────

function FloatingEnquiryPill({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ animation: 'floatPill 3s ease-in-out infinite' }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white pl-5 pr-6 py-3.5 rounded-full shadow-2xl shadow-orange-500/40 font-extrabold text-[13px] transition-all hover:scale-105 active:scale-95 border border-orange-400/20"
    >
      <MessageCircle size={16} />
      Send Enquiry
    </button>
  );
}

// ─── HomePage (composed) ──────────────────────────────────────────────────────

function HomePage({ onEnquiryClick, onExpertClick }: { onEnquiryClick: () => void; onExpertClick: () => void }) {
  const [showBanner, setShowBanner] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const syncScrollFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (HOME_SECTION_SET.has(hash)) {
        window.requestAnimationFrame(() => {
          scrollToHomeSection(hash, 'smooth');
        });
      }
    };

    syncScrollFromHash();
    window.addEventListener('hashchange', syncScrollFromHash);
    return () => window.removeEventListener('hashchange', syncScrollFromHash);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + HOME_NAV_OFFSET + 120;
      let nextSection = 'home';

      for (const sectionId of HOME_SECTIONS) {
        const element = document.getElementById(sectionId);
        if (element && marker >= element.offsetTop) {
          nextSection = sectionId;
        }
      }

      setActivePage(nextSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {showBanner && <AlertBanner onDismiss={() => setShowBanner(false)} />}
      <Navigation onEnquiryClick={onEnquiryClick} activePage={activePage} />
      <HeroSection onEnquiryClick={onEnquiryClick} onExpertClick={onExpertClick} />
      <AboutSection />
      <TestimonialMarquee />
      <UniversityLogos />
      <StatsSection />
      <ServicesSection onEnquiryClick={onEnquiryClick} onExpertClick={onExpertClick} />
      <CountryGrid />
      <WhyChooseUsSection onEnquiryClick={onEnquiryClick} />
      <CtaSection onEnquiryClick={onEnquiryClick} />
      <Footer />
      <FloatingButtons onEnquiryClick={onEnquiryClick} />
      <FloatingEnquiryPill onClick={onEnquiryClick} />
    </div>
  );
}

// ─── App (routing hub) ────────────────────────────────────────────────────────

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Auto-trigger popup once per session
  useEffect(() => {
    if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return;

    if (!sessionStorage.getItem('hasSeenEnquiryPopup')) {
      const timer = setTimeout(() => {
        setIsEnquiryOpen(true);
        sessionStorage.setItem('hasSeenEnquiryPopup', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const h = () => setIsEnquiryOpen(true);
    window.addEventListener('openEnquiry', h);
    return () => window.removeEventListener('openEnquiry', h);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      const nextPage = getPageFromHash(hash);
      setCurrentPage(nextPage);

      if (hash && nextPage !== 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          const hash = href.substring(1);
          const page = getPageFromHash(hash);

          // If it's a different page route, navigate
          if (page !== 'home') {
            e.preventDefault();
            window.location.hash = hash;
            window.scrollTo(0, 0);
          }
          // If navigating to home from another page, always redirect to home
          else if (hash === 'home' || hash === '') {
            e.preventDefault();
            window.location.hash = 'home';
            scrollToHomeSection('home');
          }
          // If it's a section on the home page (services, about, contact, countries)
          else if (HOME_SECTION_SET.has(hash)) {
            e.preventDefault();
            const currentHash = window.location.hash.slice(1);
            const onHomePage = !currentHash || currentHash === 'home' || getPageFromHash(currentHash) === 'home';
            if (!onHomePage) {
              window.location.hash = hash;
            } else {
              scrollToHomeSection(hash);
            }
          }
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const enquiryModal = (
    <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
  );

  const contactModal = (
    <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
  );

  // Country & service page routing
  if (currentPage === 'canada') return <div className="min-h-screen bg-[#F0F4FF]"><CanadaPageAccordion />{enquiryModal}</div>;
  if (currentPage === 'uk') return <div className="min-h-screen bg-[#F0F4FF]"><UKPage />{enquiryModal}</div>;
  if (currentPage === 'usa') return <div className="min-h-screen bg-[#F0F4FF]"><USAPage />{enquiryModal}</div>;
  if (currentPage === 'australia') return <div className="min-h-screen bg-[#F0F4FF]"><AustraliaPage />{enquiryModal}</div>;
  if (currentPage === 'singapore') return <div className="min-h-screen bg-[#F0F4FF]"><SingaporePage />{enquiryModal}</div>;
  if (currentPage === 'germany') return <div className="min-h-screen bg-[#F0F4FF]"><GermanyPage />{enquiryModal}</div>;
  if (currentPage === 'france') return <div className="min-h-screen bg-[#F0F4FF]"><FrancePage />{enquiryModal}</div>;
  if (currentPage === 'india') return <div className="min-h-screen bg-[#F0F4FF]"><IndiaPage />{enquiryModal}</div>;
  if (currentPage === 'new-zealand') return <div className="min-h-screen bg-[#F0F4FF]"><NewZealandPage />{enquiryModal}</div>;
  if (currentPage === 'ireland') return <div className="min-h-screen bg-[#F0F4FF]"><IrelandPage />{enquiryModal}</div>;
  if (currentPage === 'europe') return <div className="min-h-screen bg-[#F0F4FF]"><EuropePage />{enquiryModal}</div>;
  if (currentPage === 'online-admission') return <div className="min-h-screen bg-white"><OnlineAdmissionPage />{enquiryModal}</div>;
  if (currentPage === 'campus-admission') return <div className="min-h-screen bg-white"><CampusAdmissionPage />{enquiryModal}</div>;
  if (currentPage === 'visa-assistance') return <div className="min-h-screen bg-white"><VisaAssistanceDetailPage />{enquiryModal}</div>;
  if (currentPage === 'university-admissions') return <div className="min-h-screen bg-white"><UniversityAdmissionsDetailPage />{enquiryModal}</div>;
  if (currentPage === 'scholarship-guidance') return <div className="min-h-screen bg-white"><ScholarshipGuidanceDetailPage />{enquiryModal}</div>;
  if (currentPage === 'ielts-test-prep') return <div className="min-h-screen bg-white"><IELTSTestPrepDetailPage />{enquiryModal}</div>;
  if (currentPage === 'career-counseling') return <div className="min-h-screen bg-white"><CareerCounselingPage />{enquiryModal}</div>;
  if (currentPage === 'india-admission') return <div className="min-h-screen bg-white"><IndiaAdmissionPage />{enquiryModal}</div>;
  if (currentPage === 'pre-departure') return <div className="min-h-screen bg-white"><PreDeparturePage />{enquiryModal}</div>;
  if (isUniversityDetailPage(currentPage)) {
    return <div className="min-h-screen bg-[#F0F4FF]"><UniversityDetailPage universityId={getUniversityIdFromHash(currentPage)} />{enquiryModal}</div>;
  }
  if (currentPage.startsWith('course-') || currentPage.startsWith('program-')) {
    return <div className="min-h-screen bg-[#F0F4FF]"><CourseDetailPage courseId={currentPage} />{enquiryModal}</div>;
  }

  return (
    <>
      <HomePage onEnquiryClick={() => setIsEnquiryOpen(true)} onExpertClick={() => setIsContactModalOpen(true)} />
      {enquiryModal}
      {contactModal}
    </>
  );
}
