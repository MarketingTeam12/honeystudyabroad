import { ServiceDetailPage } from './ServiceDetailPage';
import {
  User,
  BookOpen,
  FileText,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Headphones,
  MessageCircle,
  PenTool,
  Target,
  Video
} from 'lucide-react';

export function IELTSTestPrepDetailPage() {
  const ieltsService = {
    id: 'ielts-test-prep',
    title: 'IELTS / Test Preparation',
    subtitle: 'Expert Test Coaching',
    summary: 'Comprehensive IELTS, TOEFL, GRE, GMAT, and other standardized test preparation with expert trainers, mock tests, and personalized coaching to help you achieve your target scores for university admissions.',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop&auto=format&q=80',
    journeySteps: [
      {
        icon: <User size={28} />,
        label: 'Diagnostic Test',
        description: 'Assess your current proficiency level across all modules',
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <Target size={28} />,
        label: 'Personalized Plan',
        description: 'Create customized study plan based on target scores',
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <BookOpen size={28} />,
        label: 'Module Training',
        description: 'Intensive training in Listening, Reading, Writing, Speaking',
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <CheckCircle size={28} />,
        label: 'Mock Tests',
        description: 'Full-length practice tests and performance evaluation',
        color: 'bg-violet-50 text-violet-600'
      }
    ],
    features: [
      {
        icon: <Headphones size={28} />,
        title: 'Listening Module',
        description: 'Comprehensive listening skills training with various accents',
        bullets: [
          'British & American accents',
          'Note-taking techniques',
          'Multiple-choice strategies',
          'Map & diagram labeling',
          '50+ practice tests'
        ],
        color: 'bg-blue-50 text-[#2b2d72]'
      },
      {
        icon: <BookOpen size={28} />,
        title: 'Reading Module',
        description: 'Advanced reading comprehension and speed reading techniques',
        bullets: [
          'Skimming & scanning practice',
          'Paragraph matching',
          'True/False/Not Given',
          'Summary completion',
          'Time management strategies'
        ],
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: <PenTool size={28} />,
        title: 'Writing Module',
        description: 'Expert guidance for Task 1 and Task 2 writing excellence',
        bullets: [
          'Graph & chart description',
          'Essay structure & planning',
          'Academic vocabulary building',
          'Grammar correction',
          'One-on-one feedback'
        ],
        color: 'bg-emerald-50 text-emerald-600'
      },
      {
        icon: <MessageCircle size={28} />,
        title: 'Speaking Module',
        description: 'Interactive speaking practice with certified trainers',
        bullets: [
          'Part 1, 2, 3 practice',
          'Fluency & coherence training',
          'Pronunciation improvement',
          'Topic-based discussions',
          'Mock interview sessions'
        ],
        color: 'bg-violet-50 text-violet-600'
      },
      {
        icon: <Video size={28} />,
        title: 'Online Classes',
        description: 'Flexible online and offline batch options',
        bullets: [
          'Live interactive classes',
          'Recorded session access',
          'Weekend batches available',
          'One-on-one coaching',
          'Study material included'
        ],
        color: 'bg-rose-50 text-rose-600'
      },
      {
        icon: <Award size={28} />,
        title: 'GRE/GMAT/TOEFL Prep',
        description: 'Complete preparation for other standardized tests',
        bullets: [
          'GRE Verbal & Quant',
          'GMAT preparation',
          'TOEFL iBT coaching',
          'SAT/ACT guidance',
          'PTE Academic support'
        ],
        color: 'bg-amber-50 text-amber-600'
      }
    ],
    stats: [
      { number: '7.5+', label: 'Average IELTS Score', icon: <TrendingUp size={24} /> },
      { number: '5,000+', label: 'Students Trained', icon: <Users size={24} /> },
      { number: '95%', label: 'Success Rate', icon: <CheckCircle size={24} /> },
      { number: '100+', label: 'Mock Tests Available', icon: <FileText size={24} /> }
    ],
    testimonial: {
      name: 'Karthik Reddy',
      country: 'Australia',
      university: 'University of Melbourne',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format&q=80',
      rating: 5,
      text: 'Scored 8.0 in IELTS after just 6 weeks of preparation! The speaking practice sessions and writing feedback were incredibly helpful. Highly recommend their test prep program.',
      flag: '🇦🇺'
    },
    ctaText: 'Ready to ace your IELTS/test preparation?'
  };

  return <ServiceDetailPage service={ieltsService} />;
}
