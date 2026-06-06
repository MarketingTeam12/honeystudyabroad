import { X, GraduationCap, Plane, BookOpen, Languages, Award, Home, DollarSign, FileText, UserCheck, CheckCircle } from 'lucide-react';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    icon: any;
    description: string;
    features: string[];
  } | null;
}

const serviceDetailsData: Record<string, any> = {
  'University Selection & Admission': {
    fullDescription: 'Get personalized university recommendations based on your academic profile, career goals, budget, and preferences. Our experts guide you through the entire admission process.',
    keyFeatures: [
      'Personalized profile evaluation',
      'University shortlisting based on your goals',
      'Application form assistance',
      'Essay and SOP guidance',
      'Document preparation support',
      'Application tracking and follow-up',
    ],
    benefits: [
      'Save time with expert recommendations',
      'Increase admission chances',
      'Access to exclusive partnerships',
      'Complete application support',
    ],
    process: [
      'Initial consultation and profile assessment',
      'University shortlisting (5-10 universities)',
      'Application strategy planning',
      'Document preparation and review',
      'Application submission',
      'Follow-up until admission decision',
    ],
  },
  'Visa Assistance': {
    fullDescription: 'Complete visa application support with document preparation, interview coaching, and expert guidance to achieve 98% visa success rate.',
    keyFeatures: [
      'Document checklist and preparation',
      'DS-160/Visa application form filling',
      'Mock visa interview sessions',
      'Embassy appointment scheduling',
      'Post-visa guidance',
      'Visa rejection case handling',
    ],
    benefits: [
      '98% visa success rate',
      'Expert interview preparation',
      'Document verification',
      'Stress-free process',
    ],
    process: [
      'Document assessment and preparation',
      'Visa application form completion',
      'Fee payment assistance',
      'Mock interview sessions',
      'Pre-departure briefing',
      'Post-visa support',
    ],
  },
  'SOP & LOR Guidance': {
    fullDescription: 'Professional assistance in crafting compelling Statement of Purpose and Letters of Recommendation that make your application stand out.',
    keyFeatures: [
      'Personalized SOP writing guidance',
      'Multiple rounds of editing',
      'University-specific customization',
      'LOR template and guidance',
      'Expert review and feedback',
      'Plagiarism-free guarantee',
    ],
    benefits: [
      'Stand out from other applicants',
      'Professional quality documents',
      'Unlimited revisions',
      'University-specific formatting',
    ],
    process: [
      'Understanding your background and goals',
      'Brainstorming and outlining',
      'First draft creation',
      'Expert review and feedback',
      'Revisions and finalization',
      'Final approval and submission',
    ],
  },
  'IELTS/TOEFL Coaching': {
    fullDescription: 'Comprehensive test preparation with expert trainers, mock tests, and personalized study plans to achieve your target score.',
    keyFeatures: [
      'Experienced native English trainers',
      'Unlimited mock tests',
      'Personalized study plans',
      'Speaking practice sessions',
      'Writing feedback and correction',
      'Score improvement guarantee',
    ],
    benefits: [
      'Achieve 7+ band in IELTS',
      '100+ in TOEFL',
      'Flexible batch timings',
      'Online and offline options',
    ],
    process: [
      'Diagnostic test and assessment',
      'Personalized study plan',
      'Module-wise training',
      'Regular mock tests',
      'Performance analysis',
      'Final exam preparation',
    ],
  },
  'Scholarship Support': {
    fullDescription: 'Identify and apply for merit-based and need-based scholarships to reduce your study abroad costs significantly.',
    keyFeatures: [
      'Scholarship database access',
      'Eligibility assessment',
      'Application assistance',
      'Essay and document support',
      'Application tracking',
      'Multiple scholarship applications',
    ],
    benefits: [
      'Reduce tuition costs by 30-100%',
      'Access to exclusive scholarships',
      'Expert application support',
      'Higher chances of success',
    ],
    process: [
      'Scholarship search and matching',
      'Eligibility verification',
      'Application preparation',
      'Essay writing support',
      'Document submission',
      'Follow-up and confirmation',
    ],
  },
  'Accommodation Support': {
    fullDescription: 'Find safe, affordable, and convenient housing options near your university campus with our accommodation support service.',
    keyFeatures: [
      'On-campus housing applications',
      'Off-campus apartment search',
      'Homestay arrangements',
      'Shared accommodation options',
      'Lease agreement review',
      'Move-in support',
    ],
    benefits: [
      'Safe and verified options',
      'Budget-friendly choices',
      'Near campus locations',
      'Hassle-free booking',
    ],
    process: [
      'Understanding preferences and budget',
      'Shortlisting accommodation options',
      'Virtual tours and reviews',
      'Booking and payment support',
      'Lease agreement assistance',
      'Move-in coordination',
    ],
  },
  'Education Loan Assistance': {
    fullDescription: 'Connect with multiple banks and NBFCs for education loans with competitive interest rates and flexible repayment options.',
    keyFeatures: [
      'Multiple lender options',
      'Loan comparison and selection',
      'Document preparation',
      'Application submission',
      'Loan approval support',
      'Disbursement assistance',
    ],
    benefits: [
      'Loans up to 100% tuition',
      'Low interest rates (8-12%)',
      'Flexible repayment options',
      'Quick approval process',
    ],
    process: [
      'Loan requirement assessment',
      'Lender comparison and selection',
      'Document preparation',
      'Loan application submission',
      'Follow-up for approval',
      'Disbursement coordination',
    ],
  },
  'Document Translation': {
    fullDescription: 'Certified translation of academic transcripts, degrees, and legal documents in 100+ languages for visa and university applications.',
    keyFeatures: [
      'Certified translations',
      'Notarization available',
      '100+ languages',
      'Fast turnaround (24-48 hours)',
      'University-accepted format',
      'Delivery worldwide',
    ],
    benefits: [
      'Officially certified',
      'Accepted by universities',
      'Fast delivery',
      'Affordable pricing',
    ],
    process: [
      'Document submission',
      'Language and requirement verification',
      'Professional translation',
      'Quality check and review',
      'Certification and notarization',
      'Delivery to your address',
    ],
  },
  'Document Attestation': {
    fullDescription: 'Complete attestation services for educational certificates including MEA, HRD, and embassy legalization for study abroad.',
    keyFeatures: [
      'MEA attestation',
      'HRD verification',
      'Embassy legalization',
      'Apostille services',
      'End-to-end support',
      'Doorstep pickup and delivery',
    ],
    benefits: [
      'Legally valid documents',
      'Hassle-free process',
      'Fast processing',
      'Expert guidance',
    ],
    process: [
      'Document collection',
      'Notary attestation',
      'HRD/SDM attestation',
      'MEA attestation',
      'Embassy attestation',
      'Document delivery',
    ],
  },
};

export function ServiceDetails({ isOpen, onClose, service }: ServiceDetailsProps) {
  if (!isOpen || !service) return null;

  const details = serviceDetailsData[service.title];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl">{service.title}</h2>
              <p className="text-blue-100 mt-1">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Full Description */}
          <div>
            <h3 className="text-2xl mb-3 text-[#1f2150]">Overview</h3>
            <p className="text-[#5a5c8e] text-lg leading-relaxed">{details.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl mb-4 text-[#1f2150]">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.keyFeatures.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-[#f5f5fb] p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#2b2d72] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3d3f7a]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl mb-4 text-[#1f2150]">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-200">
                  <Award className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#3d3f7a]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl mb-4 text-[#1f2150]">Our Process</h3>
            <div className="space-y-3">
              {details.process.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-4 bg-white border border-[#d0d0e8] p-4 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-[#3d3f7a] pt-1">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl mb-3">Ready to Get Started?</h3>
            <p className="text-orange-100 mb-6">
              Let our experts guide you through {service.title.toLowerCase()}
            </p>
            <button
              onClick={onClose}
              className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-[#f5f5fb] transition-all font-semibold"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
