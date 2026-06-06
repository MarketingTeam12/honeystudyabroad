import { ServiceDetailPage } from './ServiceDetailPage';
import {
  User,
  Building2,
  FileText,
  CheckCircle,
  Search,
  Award,
  TrendingUp,
  Users,
  Globe,
  Target,
  BookOpen,
  Briefcase
} from 'lucide-react';

export function UniversityAdmissionsDetailPage() {
  const admissionService = {
    id: 'university-admissions',
    title: 'University Admissions',
    subtitle: 'Top University Placements',
    summary: 'Expert guidance for securing admissions to top universities worldwide. We help you navigate the complex application process, craft compelling SOPs, and maximize scholarship opportunities with personalized support at every step.',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop&auto=format&q=85',
    journeySteps: [
      {
        icon: <User size={28} />,
        label: 'Profile Building',
        description: 'Analyze your academic profile and career goals to identify strengths',
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <Search size={28} />,
        label: 'University Shortlisting',
        description: 'Research and shortlist best-fit universities based on your profile',
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <FileText size={28} />,
        label: 'Application Submission',
        description: 'Prepare SOPs, LORs, and submit error-free applications',
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <CheckCircle size={28} />,
        label: 'Offer Acceptance',
        description: 'Evaluate offers, negotiate scholarships, and confirm enrollment',
        color: 'bg-violet-50 text-violet-600'
      }
    ],
    features: [
      {
        icon: <Target size={28} />,
        title: 'University Shortlisting',
        description: 'Strategic selection of universities matching your profile and aspirations',
        bullets: [
          'Profile-based university matching',
          '5-10 tailored recommendations',
          'Ranking and reputation analysis',
          'Acceptance probability assessment',
          'Location and safety research'
        ],
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <FileText size={28} />,
        title: 'SOP & Essay Writing',
        description: 'Compelling statements of purpose and application essays',
        bullets: [
          'University-specific SOP drafting',
          'Personal statement writing',
          'Essay brainstorming sessions',
          'Unlimited revisions',
          'Plagiarism-free guarantee'
        ],
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <Award size={28} />,
        title: 'Letter of Recommendation',
        description: 'Professional LOR guidance and template support',
        bullets: [
          'LOR format templates',
          'Recommender selection advice',
          '2-3 LOR drafts per application',
          'Professor/employer briefing',
          'Follow-up coordination'
        ],
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <BookOpen size={28} />,
        title: 'Application Review',
        description: 'Comprehensive application review before final submission',
        bullets: [
          'Document accuracy check',
          'Form completion verification',
          'Fee payment guidance',
          'Deadline management',
          'Portal submission support'
        ],
        color: 'bg-violet-50 text-violet-600'
      },
      {
        icon: <Briefcase size={28} />,
        title: 'Scholarship Assistance',
        description: 'Identify and apply for merit and need-based scholarships',
        bullets: [
          'Scholarship database access',
          'Eligibility assessment',
          'Application essay support',
          'Financial aid negotiation',
          '₹5-20 lakh scholarships possible'
        ],
        color: 'bg-rose-50 text-rose-600'
      },
      {
        icon: <Globe size={28} />,
        title: 'Interview Preparation',
        description: 'Mock interviews and preparation for university admission interviews',
        bullets: [
          'Common interview questions',
          'Subject-specific prep',
          'Video interview practice',
          'Body language coaching',
          'Real-time feedback'
        ],
        color: 'bg-amber-50 text-amber-600'
      }
    ],
    stats: [
      { number: '2,500+', label: 'Successful Admissions', icon: <TrendingUp size={24} /> },
      { number: '600+', label: 'University Partners', icon: <Building2 size={24} /> },
      { number: '25+', label: 'Countries Covered', icon: <Globe size={24} /> },
      { number: '₹40Cr+', label: 'Scholarships Secured', icon: <Award size={24} /> }
    ],
    testimonial: {
      name: 'Priya Sharma',
      country: 'Canada',
      university: 'University of Toronto',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format&q=80',
      rating: 5,
      text: "Got into University of Toronto with a partial scholarship! The entire admission process was seamless. The SOP they helped me craft was exceptional, and their university selection advice was spot-on.",
      flag: '🇨🇦'
    },
    ctaText: 'Ready to start your university application journey?'
  };

  return <ServiceDetailPage service={admissionService} />;
}
