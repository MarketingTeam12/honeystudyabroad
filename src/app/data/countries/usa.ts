import {
  FileText,
  CheckCircle,
  Plane,
  Users,
  Calendar,
  Award
} from 'lucide-react';

export const usaData = {
  name: 'USA',
  flag: '🇺🇸',
  heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920&h=600&fit=crop',
  tagline: 'Land of Opportunities',
  description: 'Experience world-class education at top-ranked universities with cutting-edge research facilities, diverse campus culture, and endless career opportunities in the global business hub.',

  universities: [
    {
      name: 'MIT',
      ranking: 'QS #1',
      tuition: '$55,000 - $60,000',
      programs: ['Engineering', 'Computer Science', 'Business'],
    },
    {
      name: 'Harvard University',
      ranking: 'QS #3',
      tuition: '$54,000 - $58,000',
      programs: ['Law', 'Medicine', 'Business'],
    },
    {
      name: 'Stanford University',
      ranking: 'QS #5',
      tuition: '$56,000 - $62,000',
      programs: ['Technology', 'AI/ML', 'Entrepreneurship'],
    },
    {
      name: 'UC Berkeley',
      ranking: 'QS #27',
      tuition: '$45,000 - $50,000',
      programs: ['Engineering', 'Data Science', 'Business'],
    },
    {
      name: 'Columbia University',
      ranking: 'QS #23',
      tuition: '$60,000 - $65,000',
      programs: ['Journalism', 'Business', 'International Relations'],
    },
    {
      name: 'Yale University',
      ranking: 'QS #16',
      tuition: '$59,000 - $63,000',
      programs: ['Law', 'Drama', 'Political Science'],
    },
  ],

  tuitionRange: {
    undergraduate: '$30,000 - $70,000/year',
    postgraduate: '$35,000 - $80,000/year',
  },

  livingCost: {
    accommodation: '$800 - $2,000',
    food: '$300 - $600',
    transport: '$100 - $200',
    utilities: '$150 - $250',
    entertainment: '$200 - $400',
    total: '$1,550 - $3,450/month',
  },

  visaSteps: [
    { step: 'University Admission', duration: '2-6 months', icon: FileText },
    { step: 'I-20 Form Received', duration: '2-4 weeks', icon: CheckCircle },
    { step: 'SEVIS Fee Payment', duration: '1 day', icon: Award },
    { step: 'DS-160 Form Submission', duration: '1-2 days', icon: FileText },
    { step: 'Visa Interview', duration: '2-4 weeks', icon: Users },
    { step: 'Visa Approval', duration: '5-10 days', icon: Plane },
  ],

  prInfo: {
    available: true,
    duration: '5-7 years pathway',
    details: 'H1B work visa can lead to Green Card through employer sponsorship. EB-2 and EB-3 categories available for skilled workers.',
  },

  workRights: {
    during: '20 hours/week on-campus',
    after: 'OPT: 12 months (36 months for STEM)',
  },

  scholarships: [
    {
      name: 'Fulbright Scholarship',
      amount: 'Full Tuition',
      eligibility: 'Outstanding academic merit',
    },
    {
      name: 'Merit-Based Aid',
      amount: '$10,000 - $30,000',
      eligibility: 'High GPA & test scores',
    },
    {
      name: 'Need-Based Aid',
      amount: '$5,000 - $50,000',
      eligibility: 'Financial need proof',
    },
    {
      name: 'Athletic Scholarships',
      amount: 'Varies',
      eligibility: 'Sports excellence',
    },
    {
      name: 'Graduate Assistantships',
      amount: 'Tuition waiver + stipend',
      eligibility: 'Graduate students',
    },
    {
      name: 'Diversity Scholarships',
      amount: '$5,000 - $25,000',
      eligibility: 'Underrepresented groups',
    },
  ],

  intakes: [
    {
      season: 'Fall (Main)',
      deadline: 'January - March',
      startDate: 'August - September',
    },
    {
      season: 'Spring',
      deadline: 'September - October',
      startDate: 'January - February',
    },
    {
      season: 'Summer',
      deadline: 'February - March',
      startDate: 'May - June',
    },
  ],

  jobOpportunities: {
    averageSalary: '$65,000 - $85,000/year',
    topSectors: ['Tech', 'Finance', 'Healthcare', 'Consulting', 'Engineering'],
  },

  testimonials: [
    {
      name: 'Priya Sharma',
      university: 'Stanford University',
      text: 'The OPT extension helped me land a job at Google. The career support at Stanford was phenomenal!',
      year: 'Class of 2023',
    },
    {
      name: 'Raj Patel',
      university: 'MIT',
      text: 'Best decision ever! World-class research facilities and amazing networking opportunities.',
      year: 'Class of 2024',
    },
    {
      name: 'Ananya Reddy',
      university: 'Columbia University',
      text: 'New York City offers endless internship opportunities. I got placed at Goldman Sachs!',
      year: 'Class of 2023',
    },
  ],

  faqs: [
    {
      question: 'What is the minimum IELTS score required for US universities?',
      answer: 'Most universities require a minimum IELTS score of 6.5-7.0 overall, with no band less than 6.0. Top universities may require 7.0-7.5. Some universities also accept TOEFL (minimum 80-100).',
    },
    {
      question: 'Can I work while studying in the USA?',
      answer: 'Yes, F-1 visa holders can work on-campus for up to 20 hours per week during semesters and full-time during breaks. After the first year, you may be eligible for CPT (Curricular Practical Training) for off-campus work related to your major.',
    },
    {
      question: 'What is OPT and how long can I work after graduation?',
      answer: 'Optional Practical Training (OPT) allows you to work in the US for 12 months after graduation. STEM graduates get a 24-month extension, totaling 36 months of work authorization.',
    },
    {
      question: 'How much bank balance is required for a US student visa?',
      answer: 'You need to show funds covering tuition fees + living expenses for at least one year. Typically $50,000-$80,000 depending on the university and location. This includes tuition, accommodation, and personal expenses.',
    },
    {
      question: 'Is health insurance mandatory for international students?',
      answer: 'Yes, most universities require health insurance. Costs range from $1,500-$3,000 per year. Some universities offer their own plans, or you can purchase private insurance that meets university requirements.',
    },
    {
      question: 'Can I get permanent residency (Green Card) after studying in the USA?',
      answer: 'Yes, you can pursue a Green Card through employment. After OPT, you can apply for H1B work visa through employer sponsorship. After working on H1B for several years, your employer can sponsor you for a Green Card through EB-2 or EB-3 categories.',
    },
  ],
};
