import { ServiceDetailPage } from './ServiceDetailPage';
import {
  User,
  Search,
  FileText,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Globe,
  DollarSign,
  BookOpen,
  Target,
  Shield
} from 'lucide-react';

export function ScholarshipGuidanceDetailPage() {
  const scholarshipService = {
    id: 'scholarship-guidance',
    title: 'Scholarship Guidance',
    subtitle: 'Financial Aid Support',
    summary: 'Comprehensive scholarship assistance to help you secure merit-based, need-based, and country-specific scholarships. We guide you through identifying opportunities, crafting applications, and maximizing your financial aid potential.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&auto=format&q=80',
    journeySteps: [
      {
        icon: <User size={28} />,
        label: 'Profile Assessment',
        description: 'Analyze your academic profile, achievements, and financial need',
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <Search size={28} />,
        label: 'Scholarship Search',
        description: 'Identify suitable scholarships from our database of 500+ opportunities',
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <FileText size={28} />,
        label: 'Application Preparation',
        description: 'Draft compelling essays, SOPs, and prepare required documentation',
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <Award size={28} />,
        label: 'Award Confirmation',
        description: 'Submit applications and secure scholarship awards',
        color: 'bg-violet-50 text-violet-600'
      }
    ],
    features: [
      {
        icon: <Search size={28} />,
        title: 'Scholarship Database Access',
        description: 'Exclusive access to comprehensive scholarship opportunities worldwide',
        bullets: [
          '500+ scholarship listings',
          'Merit-based scholarships',
          'Need-based financial aid',
          'Country-specific awards',
          'University-specific funding'
        ],
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <Target size={28} />,
        title: 'Eligibility Assessment',
        description: 'Expert evaluation of your eligibility for various scholarship programs',
        bullets: [
          'Academic profile analysis',
          'GPA requirements check',
          'Extracurricular evaluation',
          'Financial need assessment',
          'Eligibility matching algorithm'
        ],
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <FileText size={28} />,
        title: 'Essay & SOP Writing',
        description: 'Professional assistance with scholarship essays and statements',
        bullets: [
          'Scholarship-specific essays',
          'Personal statement drafting',
          'Achievement highlighting',
          'Motivational letter writing',
          'Unlimited revisions'
        ],
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <DollarSign size={28} />,
        title: 'Financial Aid Counseling',
        description: 'Complete guidance on financial aid forms and documentation',
        bullets: [
          'FAFSA form assistance',
          'CSS Profile support',
          'Income tax documentation',
          'Bank statement guidance',
          'Sponsorship letter drafting'
        ],
        color: 'bg-violet-50 text-violet-600'
      },
      {
        icon: <BookOpen size={28} />,
        title: 'Application Tracking',
        description: 'Monitor all scholarship applications and deadlines systematically',
        bullets: [
          'Deadline management',
          'Application status tracking',
          'Interview preparation',
          'Follow-up coordination',
          'Award negotiation support'
        ],
        color: 'bg-rose-50 text-rose-600'
      },
      {
        icon: <Shield size={28} />,
        title: 'Government Scholarships',
        description: 'Specialized guidance for government-funded scholarship programs',
        bullets: [
          'Fulbright Scholarship (USA)',
          'Chevening Scholarship (UK)',
          'Australia Awards',
          'DAAD Scholarships (Germany)',
          'Commonwealth Scholarships'
        ],
        color: 'bg-amber-50 text-amber-600'
      }
    ],
    stats: [
      { number: '₹40Cr+', label: 'Scholarships Secured', icon: <Award size={24} /> },
      { number: '500+', label: 'Scholarship Programs', icon: <Search size={24} /> },
      { number: '75%', label: 'Students Receive Aid', icon: <TrendingUp size={24} /> },
      { number: '25+', label: 'Countries Covered', icon: <Globe size={24} /> }
    ],
    testimonial: {
      name: 'Aisha Mohammed',
      country: 'USA',
      university: 'New York University',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=80',
      rating: 5,
      text: 'Got into NYU with a $15,000 partial scholarship! The scholarship guidance team helped me identify opportunities I never knew existed. Their essay support was exceptional.',
      flag: '🇺🇸'
    },
    ctaText: 'Ready to explore scholarship opportunities?'
  };

  return <ServiceDetailPage service={scholarshipService} />;
}
