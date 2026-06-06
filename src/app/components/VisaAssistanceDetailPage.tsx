import { ServiceDetailPage } from './ServiceDetailPage';
import {
  User,
  Building2,
  FileText,
  Plane,
  Shield,
  Clock,
  Award,
  TrendingUp,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react';

export function VisaAssistanceDetailPage() {
  const visaService = {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    subtitle: 'Expert Visa Support',
    summary: 'End-to-end visa processing with document preparation, application tracking, and interview coaching. Our expert team ensures a smooth visa journey with an industry-leading 98% success rate across all countries.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format&q=80',
    journeySteps: [
      {
        icon: <User size={28} />,
        label: 'Profile Assessment',
        description: 'Comprehensive review of your academic and financial documents',
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <Building2 size={28} />,
        label: 'University Confirmation',
        description: 'Secure admission letter and I-20/CAS from your chosen university',
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <FileText size={28} />,
        label: 'Document Preparation',
        description: 'Complete visa forms, SOP, financial proofs, and supporting documents',
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <Plane size={28} />,
        label: 'Visa Approval',
        description: 'Interview coaching, application submission, and visa collection',
        color: 'bg-violet-50 text-violet-600'
      }
    ],
    features: [
      {
        icon: <FileText size={28} />,
        title: 'Document Preparation',
        description: 'Complete assistance with visa application forms and supporting documents',
        bullets: [
          'DS-160, DS-260, VAF forms',
          'Financial documentation review',
          'Academic certificates verification',
          'Passport validity check',
          'Travel insurance arrangement'
        ],
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <Shield size={28} />,
        title: 'SOP & LOR Writing',
        description: 'Professional statement of purpose and letter of recommendation drafting',
        bullets: [
          'Personalized SOP writing',
          'Multiple revision rounds',
          'Country-specific format',
          'Embassy guidelines compliance',
          'Strong intent demonstration'
        ],
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <CheckCircle size={28} />,
        title: 'Interview Coaching',
        description: 'Mock interviews and comprehensive preparation for visa interviews',
        bullets: [
          '3+ mock interview sessions',
          'Common questions practice',
          'Body language training',
          'Confidence building exercises',
          'Post-interview feedback'
        ],
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <Globe size={28} />,
        title: 'Application Tracking',
        description: 'Real-time status updates and proactive follow-ups with embassies',
        bullets: [
          'Online portal access',
          'SMS & email notifications',
          'Embassy appointment booking',
          'Biometric scheduling',
          'Passport tracking'
        ],
        color: 'bg-violet-50 text-violet-600'
      },
      {
        icon: <Clock size={28} />,
        title: 'Fast-Track Processing',
        description: 'Expedited visa processing for urgent travel requirements',
        bullets: [
          'Priority appointment slots',
          'Emergency visa assistance',
          'Express document verification',
          '48-hour turnaround available',
          'Dedicated case manager'
        ],
        color: 'bg-rose-50 text-rose-600'
      },
      {
        icon: <Award size={28} />,
        title: 'Rejection Handling',
        description: 'Expert guidance for visa rejection cases and reapplication support',
        bullets: [
          'Rejection reason analysis',
          'Reapplication strategy',
          'Appeal letter drafting',
          'Additional document guidance',
          'Second-attempt success focus'
        ],
        color: 'bg-amber-50 text-amber-600'
      }
    ],
    stats: [
      { number: '98%', label: 'Visa Success Rate', icon: <TrendingUp size={24} /> },
      { number: '15,000+', label: 'Visas Processed', icon: <Users size={24} /> },
      { number: '25+', label: 'Countries Covered', icon: <Globe size={24} /> },
      { number: '100%', label: 'Document Accuracy', icon: <CheckCircle size={24} /> }
    ],
    testimonial: {
      name: 'Rahul Verma',
      country: 'UK',
      university: "King's College London",
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80',
      rating: 5,
      text: 'The visa assistance team made my UK student visa process incredibly smooth. My visa was approved in just 3 weeks! The interview coaching and document preparation were exceptional.',
      flag: '🇬🇧'
    },
    ctaText: 'Ready to start your visa application process?'
  };

  return <ServiceDetailPage service={visaService} />;
}
