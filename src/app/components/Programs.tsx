import { FileText, Clock, Award, GraduationCap, Plane, Home, DollarSign, BookOpen, Languages, FileCheck, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { ServiceDetails } from './ServiceDetails';

const studyAbroadServices = [
  {
    icon: GraduationCap,
    title: 'University Selection & Admission',
    description: 'Personalized university matching based on your profile, career goals, and budget.',
    features: ['Profile Evaluation', 'Application Support', 'Essay Guidance'],
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Plane,
    title: 'Visa Assistance',
    description: 'Complete visa application support with document preparation and interview coaching.',
    features: ['Document Checklist', 'Interview Prep', '98% Success Rate'],
    color: 'from-purple-600 to-purple-700',
  },
  {
    icon: BookOpen,
    title: 'SOP & LOR Guidance',
    description: 'Expert assistance in crafting compelling Statement of Purpose and Letters of Recommendation.',
    features: ['Professional Writers', 'Unlimited Revisions', 'University-Specific'],
    color: 'from-green-600 to-green-700',
  },
  {
    icon: Languages,
    title: 'IELTS/TOEFL Coaching',
    description: 'Comprehensive test preparation to achieve your target score for admission.',
    features: ['Expert Trainers', 'Mock Tests', 'Score Guarantee'],
    color: 'from-orange-600 to-orange-700',
  },
  {
    icon: Award,
    title: 'Scholarship Support',
    description: 'Identify and apply for scholarships to reduce your study abroad costs.',
    features: ['Scholarship Search', 'Application Help', 'Merit-Based'],
    color: 'from-pink-600 to-pink-700',
  },
  {
    icon: Home,
    title: 'Accommodation Support',
    description: 'Find safe and affordable housing near your university campus.',
    features: ['On-Campus Options', 'Homestays', 'Shared Apartments'],
    color: 'from-indigo-600 to-indigo-700',
  },
  {
    icon: DollarSign,
    title: 'Education Loan Assistance',
    description: 'Connect with banks and financial institutions for education loans.',
    features: ['Low Interest Rates', 'Quick Processing', 'Multiple Lenders'],
    color: 'from-teal-600 to-teal-700',
  },
  {
    icon: FileText,
    title: 'Document Translation',
    description: 'Certified translation of academic and legal documents in 100+ languages.',
    features: ['Certified Translation', 'Fast Delivery', 'Notarization'],
    color: 'from-cyan-600 to-cyan-700',
  },
  {
    icon: UserCheck,
    title: 'Document Attestation',
    description: 'Apostille and embassy attestation services for your educational certificates.',
    features: ['MEA Attestation', 'HRD Verification', 'Embassy Legalization'],
    color: 'from-red-600 to-red-700',
  },
];

export function Programs() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8e8f5] text-[#1f2150] px-4 py-2 rounded-full text-sm mb-4">
            Complete Support
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1f2150] font-extrabold">
            Our Services
          </h2>
          <p className="text-xl text-[#5a5c8e] max-w-2xl mx-auto">
            End-to-end support for your international education journey - from selection to settlement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyAbroadServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl mb-3 text-[#1f2150] font-bold">{service.title}</h3>
                <p className="text-[#5a5c8e] mb-4">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#3d3f7a]">
                      <div className="w-1.5 h-1.5 bg-[#2b2d72] rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 w-full bg-gradient-to-r from-gray-100 to-gray-200 text-[#3d3f7a] py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all"
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#consultation" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
            Book Free Consultation
          </a>
        </div>
      </div>

      <ServiceDetails
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
    </>
  );
}
