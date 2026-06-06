import { ServiceDetailPage } from './ServiceDetailPage';
import {
  Building2,
  BookOpen,
  CheckCircle,
  Award,
  TrendingUp,
  Globe,
  FileText,
  Target,
  Briefcase,
  Star,
} from 'lucide-react';

export function CampusAdmissionPage() {
  const campusService = {
    id: 'campus-admission',
    title: 'Campus Admission',
    subtitle: 'On-Campus University Enrollment',
    summary:
      'Get expert guidance for full-time campus admissions at India\'s top universities — IITs, NITs, IIMs, AIIMS, and 600+ premier institutions. We handle everything from entrance exam strategy to final seat confirmation, so you walk onto campus ready to thrive.',
    heroImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&auto=format&q=80',
    journeySteps: [
      {
        icon: <Target size={28} />,
        label: 'Course & College Selection',
        description:
          'We analyze your profile, interests, and entrance scores to shortlist the best-fit campus programs',
        color: 'bg-blue-50 text-[#2b2d72]',
      },
      {
        icon: <FileText size={28} />,
        label: 'Application Preparation',
        description:
          'Complete guidance on application forms, document checklists, SOP drafting, and submission',
        color: 'bg-orange-50 text-orange-600',
      },
      {
        icon: <Star size={28} />,
        label: 'Counseling & Seat Allotment',
        description:
          'Strategic choice-filling during JoSAA / state counseling rounds to maximize your preferred seat',
        color: 'bg-emerald-50 text-emerald-600',
      },
      {
        icon: <CheckCircle size={28} />,
        label: 'Enrollment & Onboarding',
        description:
          'Document verification, fee payment, hostel booking, and campus onboarding support',
        color: 'bg-violet-50 text-violet-600',
      },
    ],
    features: [
      {
        icon: <Target size={28} />,
        title: 'Course & University Shortlisting',
        description:
          'Data-driven shortlisting of campuses that match your rank, stream, and career goals',
        bullets: [
          'Rank-based college probability analysis',
          'Stream and specialization matching',
          'NIRF ranking & placement record review',
          'Location, fees, and hostel availability check',
          'Safety, dream, and reach college strategy',
        ],
        color: 'bg-blue-50 text-[#2b2d72]',
      },
      {
        icon: <FileText size={28} />,
        title: 'Application & Document Support',
        description:
          'Error-free form filling, document formatting, and deadline management',
        bullets: [
          'JOSAA / CSAB / state counseling registration',
          'Certificate attestation guidance',
          'Category and domicile document prep',
          'Online portal submission walkthrough',
          'Deadline calendar and reminders',
        ],
        color: 'bg-orange-50 text-orange-600',
      },
      {
        icon: <Award size={28} />,
        title: 'Entrance Exam Strategy',
        description:
          'Personalized preparation roadmaps for JEE, NEET, CAT, CLAT, CUET, and more',
        bullets: [
          'Exam-specific study plans',
          'Mock test analysis and feedback',
          'Weak-area coaching referrals',
          'Attempt strategy and time management',
          'Previous year paper walkthroughs',
        ],
        color: 'bg-emerald-50 text-emerald-600',
      },
      {
        icon: <BookOpen size={28} />,
        title: 'Counseling Round Guidance',
        description:
          'Expert support during every round of centralized and state-level counseling',
        bullets: [
          'Choice-filling strategy sessions',
          'Freeze, float, and slide decisions',
          'Seat upgrade tracking',
          'State quota vs all-India seat analysis',
          'Real-time counseling round monitoring',
        ],
        color: 'bg-violet-50 text-violet-600',
      },
      {
        icon: <Briefcase size={28} />,
        title: 'Scholarship & Fee Assistance',
        description:
          'Identify and apply for merit, need-based, and government scholarship schemes',
        bullets: [
          'Central & state scholarship database',
          'SC/ST/OBC/EWS fee waiver support',
          'Education loan guidance',
          'Application essay assistance',
          'Scholarship renewal reminders',
        ],
        color: 'bg-rose-50 text-rose-600',
      },
      {
        icon: <Globe size={28} />,
        title: 'Post-Admission Onboarding',
        description:
          'Smooth transition from offer letter to first day on campus',
        bullets: [
          'Hostel & accommodation support',
          'Orientation schedule guidance',
          'Document verification checklist',
          'Campus facilities overview',
          'Student community introductions',
        ],
        color: 'bg-amber-50 text-amber-600',
      },
    ],
    stats: [
      { number: '3,800+', label: 'Campus Admissions Secured', icon: <TrendingUp size={24} /> },
      { number: '600+', label: 'Partner Institutions', icon: <Building2 size={24} /> },
      { number: '98%', label: 'Seat Confirmation Rate', icon: <CheckCircle size={24} /> },
      { number: '₹25Cr+', label: 'Scholarships Facilitated', icon: <Award size={24} /> },
    ],
    testimonial: {
      name: 'Arjun Mehta',
      country: 'India',
      university: 'NIT Trichy',
      photo:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format&q=80',
      rating: 5,
      text: "Honey Translations helped me navigate JoSAA counseling with incredible precision. Their choice-filling strategy got me into NIT Trichy CSE — my first preference — in Round 1 itself. I couldn't have done it without their expert guidance.",
      flag: '🇮🇳',
    },
    ctaText: 'Ready to secure your campus seat at a top university?',
  };

  return <ServiceDetailPage service={campusService} />;
}
