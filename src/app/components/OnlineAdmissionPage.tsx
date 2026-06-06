import { ServiceDetailPage } from './ServiceDetailPage';
import {
  Laptop,
  FileText,
  CheckCircle,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Users,
  Building2,
  Shield,
} from 'lucide-react';

export function OnlineAdmissionPage() {
  const onlineService = {
    id: 'online-admission',
    title: 'Online Admission',
    subtitle: 'Remote Admission Support',
    summary:
      'Apply to UGC-approved online degree programs from India\'s top universities without stepping into an office. Our counselors guide you through every digital step — program selection, document upload, fee payment, and LMS access — so your education begins without friction, wherever you are.',
    heroImage:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop&auto=format&q=80',
    journeySteps: [
      {
        icon: <Laptop size={28} />,
        label: 'Program Discovery',
        description:
          'We match your qualifications, goals, and budget to the right UGC-approved online program',
        color: 'bg-blue-50 text-[#2b2d72]',
      },
      {
        icon: <FileText size={28} />,
        label: 'Digital Application',
        description:
          'Guided form filling, document scanning tips, and step-by-step portal submission assistance',
        color: 'bg-orange-50 text-orange-600',
      },
      {
        icon: <Shield size={28} />,
        label: 'Verification & Approval',
        description:
          'We follow up with the university to track document review, eligibility clearance, and offer letter',
        color: 'bg-emerald-50 text-emerald-600',
      },
      {
        icon: <CheckCircle size={28} />,
        label: 'Enrollment & LMS Access',
        description:
          'Fee payment guidance, LMS login setup, and orientation support so you can start learning',
        color: 'bg-violet-50 text-violet-600',
      },
    ],
    features: [
      {
        icon: <Laptop size={28} />,
        title: 'Online Program Shortlisting',
        description:
          'Identify the best UGC-DEB approved online degree perfectly matched to your profile',
        bullets: [
          'MBA, BBA, BCA, MCA, B.Com, M.Com & more',
          'NAAC A+ accredited university selection',
          'Fee vs. quality comparison',
          'Specialization and elective analysis',
          'Duration and semester structure review',
        ],
        color: 'bg-blue-50 text-[#2b2d72]',
      },
      {
        icon: <FileText size={28} />,
        title: 'Digital Document Preparation',
        description:
          'Perfect your digital document package before you submit to avoid rejection',
        bullets: [
          'Document scanning and formatting guidance',
          'File size and format compliance check',
          'Certificate legalization assistance',
          'Gap year explanation letters',
          'Application form review before submission',
        ],
        color: 'bg-orange-50 text-orange-600',
      },
      {
        icon: <Users size={28} />,
        title: 'Remote Counseling Sessions',
        description:
          'One-on-one video sessions with our expert counselors from wherever you are',
        bullets: [
          'Video call counseling via Zoom / Meet',
          'WhatsApp-based real-time support',
          'Personalized program comparison sessions',
          'Career path and ROI discussions',
          'Weekend and evening slots available',
        ],
        color: 'bg-emerald-50 text-emerald-600',
      },
      {
        icon: <BookOpen size={28} />,
        title: 'Application & Portal Support',
        description:
          'Step-by-step guidance through university portals to ensure zero errors',
        bullets: [
          'University portal registration walkthrough',
          'Form completion and review',
          'Application fee payment support',
          'Entrance test preparation (if applicable)',
          'Offer letter follow-up coordination',
        ],
        color: 'bg-violet-50 text-violet-600',
      },
      {
        icon: <Award size={28} />,
        title: 'Scholarship & Fee Planning',
        description:
          'Maximize savings through scholarships, EMI plans, and need-based fee waivers',
        bullets: [
          'Early bird scholarship identification',
          'Merit-based fee waiver applications',
          'EMI and installment planning',
          'Education loan document guidance',
          'Government scholarship scheme referrals',
        ],
        color: 'bg-rose-50 text-rose-600',
      },
      {
        icon: <Globe size={28} />,
        title: 'Post-Enrollment Support',
        description:
          'Get settled into your LMS and learning routine with our ongoing support',
        bullets: [
          'LMS login and portal orientation',
          'Study schedule and time management tips',
          'Assignment submission guidance',
          'Exam registration support',
          'Peer community introductions',
        ],
        color: 'bg-amber-50 text-amber-600',
      },
    ],
    stats: [
      { number: '5,200+', label: 'Online Admissions Facilitated', icon: <TrendingUp size={24} /> },
      { number: '120+', label: 'University Partners', icon: <Building2 size={24} /> },
      { number: '97%', label: 'Application Success Rate', icon: <CheckCircle size={24} /> },
      { number: '50%', label: 'Average Fee Savings vs Campus', icon: <Award size={24} /> },
    ],
    testimonial: {
      name: 'Sneha Iyer',
      country: 'India',
      university: 'Symbiosis Online MBA',
      photo:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=80',
      rating: 5,
      text: "I was working full-time and had no idea how to apply for an online MBA. Honey Translations handled every step — program shortlisting, document upload, fee payment — all over WhatsApp. I got enrolled in Symbiosis in just 10 days. Absolutely seamless!",
      flag: '🇮🇳',
    },
    ctaText: 'Ready to start your online learning journey today?',
  };

  return <ServiceDetailPage service={onlineService} />;
}
