import { useState } from 'react';
import {
  ArrowLeft, MapPin, DollarSign, Calendar, GraduationCap,
  Globe, Building2, Menu, X, ChevronDown, Clock
} from 'lucide-react';
import { getUniversityBySlug, DEFAULT_UNIVERSITY } from '../data/universityData';
import honeyLogo from '../../imports/Artboard_1_copy_1.png';

interface UniversityDetailProps {
  universityId: string;
}

export function UniversityDetailPage({ universityId }: UniversityDetailProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const university = getUniversityBySlug(universityId) || DEFAULT_UNIVERSITY;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img
                src={honeyLogo.src}
                alt="Honey Translation Services"
                className="h-10 sm:h-11 w-auto object-contain"
                style={{ maxWidth: '200px' }}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-sm text-gray-600 hover:text-[#2b2d72] font-medium transition-colors">Home</a>
              <a href="#about" className="text-sm text-gray-600 hover:text-[#2b2d72] font-medium transition-colors">About</a>
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-sm text-gray-600 hover:text-[#2b2d72] font-medium transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <a href="#university-admissions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2b2d72]">University Admissions</a>
                    <a href="#visa-assistance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2b2d72]">Visa Assistance</a>
                    <a href="#campus-admission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2b2d72]">Campus Admission</a>
                    <a href="#online-admission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2b2d72]">Online Admission</a>
                  </div>
                )}
              </div>
              <a href="#contact" className="text-sm text-gray-600 hover:text-[#2b2d72] font-medium transition-colors">Contact</a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openEnquiry'))}
                className="bg-[#2b2d72] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#1e2050] transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-2">
              <a href="#home" className="block text-sm text-gray-700 hover:text-[#2b2d72] py-2">Home</a>
              <a href="#about" className="block text-sm text-gray-700 hover:text-[#2b2d72] py-2">About</a>
              <a href="#contact" className="block text-sm text-gray-700 hover:text-[#2b2d72] py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Back Button */}
      <div className="pt-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2b2d72] font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Universities
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">

          {/* University Header Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="relative h-48">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-white mb-2">
                  {university.rank}
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">{university.name}</h1>
                <div className="flex items-center gap-3 text-white/90 text-sm">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4" />
                    <span>{university.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

            {/* Tuition Fees */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-[#2b2d72]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-medium mb-1">Tuition Fees (Approx.)</div>
                  <div className="text-base font-bold text-[#2b2d72]">
                    {university.courses.length > 0 ? university.courses[0].tuition : 'Contact for details'}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost of Living */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-medium mb-1">Cost of Living (Approx.)</div>
                  <div className="text-base font-bold text-gray-900">
                    {university.costOfLiving}
                  </div>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-medium mb-1">Duration</div>
                  <div className="text-base font-bold text-gray-900">
                    {university.courses.length > 0 ? university.courses[0].duration : 'N/A'}
                  </div>
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-medium mb-1">Country</div>
                  <div className="text-base font-bold text-gray-900">
                    {university.country}
                  </div>
                </div>
              </div>
            </div>

            {/* Intakes */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 md:col-span-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-medium mb-2">Intake</div>
                  <div className="flex flex-wrap gap-2">
                    {university.intakes.length > 0 ? (
                      university.intakes.map((intake, idx) => (
                        <div key={idx} className="bg-indigo-50 px-3 py-1.5 rounded-md">
                          <span className="text-sm font-semibold text-indigo-900">{intake.semester}</span>
                          <span className="text-xs text-indigo-600 ml-2">({intake.months})</span>
                        </div>
                      ))
                    ) : (
                      <span className="text-sm text-gray-600">Contact for intake details</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          {university.overview && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-lg font-bold text-[#2b2d72] mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                University Overview
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{university.overview}</p>
            </div>
          )}

          {/* Popular Courses */}
          {university.courses.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-lg font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Popular Courses
              </h2>
              <div className="space-y-3">
                {university.courses.map((course, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:border-[#2b2d72] transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{course.name}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                          <span>{course.type}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 px-3 py-1.5 rounded-md">
                        <div className="text-xs font-semibold text-[#2b2d72]">{course.tuition}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#2b2d72] to-[#1e40af] rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Apply?</h3>
            <p className="text-white/80 text-sm mb-6">Get expert guidance for your application</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openEnquiry'))}
              className="bg-white text-[#2b2d72] px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              Start Your Application
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
