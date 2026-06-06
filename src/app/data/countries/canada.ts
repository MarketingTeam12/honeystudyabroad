import {
  FileText,
  CheckCircle,
  Plane,
  Users,
  Calendar,
  Award
} from 'lucide-react';

export const canadaData = {
  name: 'Canada',
  flag: '🇨🇦',
  heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&h=600&fit=crop',
  tagline: 'Top universities, PR opportunities & world-class education',
  description: 'Canada is one of the top study destinations globally, known for its high-quality education, multicultural environment, and post-study immigration pathways. Canadian degrees are globally recognised and institutions offer state-of-the-art facilities. With affordable tuition compared to the US and UK, it is an excellent choice for international students seeking value and quality.',
  welcomeText: 'Canada welcomes 800,000+ international students every year.',

  universities: [
    {
      name: 'University of Toronto',
      ranking: 'QS #25',
      tuition: 'CAD 45,000 - 55,000',
      programs: ['Engineering', 'Business', 'Computer Science'],
    },
    {
      name: 'UBC Vancouver',
      ranking: 'QS #34',
      tuition: 'CAD 40,000 - 50,000',
      programs: ['Sciences', 'Arts', 'Business'],
    },
    {
      name: 'McGill University',
      ranking: 'QS #46',
      tuition: 'CAD 35,000 - 45,000',
      programs: ['Medicine', 'Law', 'Engineering'],
    },
    {
      name: 'University of Waterloo',
      ranking: 'Top for Engineering & CS',
      tuition: 'CAD 40,000 - 52,000',
      programs: ['Computer Science', 'Engineering', 'Mathematics'],
    },
    {
      name: 'McMaster University',
      ranking: 'Renowned for Health Sciences',
      tuition: 'CAD 35,000 - 45,000',
      programs: ['Health Sciences', 'Engineering', 'Business'],
    },
    {
      name: 'University of Alberta',
      ranking: 'Strong research focus',
      tuition: 'CAD 30,000 - 40,000',
      programs: ['Research', 'Engineering', 'Sciences'],
    },
  ],

  keyHighlights: [
    {
      icon: '💰',
      title: 'Affordable tuition',
      description: 'Lower costs than US/UK',
    },
    {
      icon: '💼',
      title: 'Work 20 hrs/week',
      description: 'Part-time work allowed',
    },
    {
      icon: '🏠',
      title: 'PR opportunities',
      description: 'Pathway to residency',
    },
    {
      icon: '🏆',
      title: 'Top-ranked unis',
      description: 'World-class education',
    },
  ],

  tuitionRange: {
    undergraduate: 'CAD 15,000 - 35,000/year',
    postgraduate: 'CAD 18,000 - 50,000/year',
  },

  livingCost: {
    accommodation: '$600 - $1,500',
    food: '$250 - $500',
    transport: '$80 - $150',
    utilities: '$100 - $200',
    entertainment: '$150 - $300',
    total: '$1,180 - $2,650/month',
  },

  visaSteps: [
    {
      step: 'Get your offer letter',
      duration: '2-6 months',
      icon: FileText,
      description: 'Receive acceptance from a Canadian DLI'
    },
    {
      step: 'Create a GCKey account',
      duration: '1 day',
      icon: Users,
      description: 'Register on IRCC portal for online application'
    },
    {
      step: 'Submit documents',
      duration: '1-2 weeks',
      icon: CheckCircle,
      description: 'Upload all required documents and pay fees'
    },
    {
      step: 'Receive study permit',
      duration: '4-8 weeks',
      icon: Plane,
      description: 'Get decision and travel to Canada'
    },
  ],

  prInfo: {
    available: true,
    duration: '1-3 years pathway',
    details: 'Post-Graduation Work Permit (PGWP) allows 8 months to 3 years of work. After 1 year of skilled work, eligible for Express Entry PR through Canadian Experience Class.',
  },

  workRights: {
    during: '20 hours/week off-campus',
    after: 'PGWP: 8 months - 3 years',
  },

  coursesAvailable: [
    'Engineering',
    'Business & MBA',
    'Healthcare',
    'Computer Science',
    'Arts & Design',
    'Law',
  ],

  scholarships: [
    {
      name: 'Vanier Canada Graduate Scholarships',
      amount: 'CAD 50,000/year',
      eligibility: 'PhD students with leadership',
    },
    {
      name: 'Lester B. Pearson Scholarships',
      amount: 'Full Tuition + Living',
      eligibility: 'Outstanding international students at UofT',
    },
    {
      name: 'University-specific Awards',
      amount: 'CAD 5,000 - 20,000',
      eligibility: 'Merit-based, varies by institution',
    },
    {
      name: 'Ontario Graduate Scholarship',
      amount: 'CAD 15,000',
      eligibility: 'Graduate students in Ontario',
    },
  ],

  intakes: [
    {
      season: 'Fall (Main)',
      deadline: 'January - April',
      startDate: 'September',
    },
    {
      season: 'Winter',
      deadline: 'August - October',
      startDate: 'January',
    },
    {
      season: 'Summer',
      deadline: 'November - February',
      startDate: 'May',
    },
  ],

  jobOpportunities: {
    averageSalary: 'CAD 50,000 - 75,000/year',
    topSectors: ['Tech', 'Healthcare', 'Engineering', 'Finance', 'Hospitality'],
  },

  testimonials: [
    {
      name: 'Priya S.',
      location: 'Chennai',
      university: 'University of Toronto',
      text: 'The PGWP helped me gain Canadian work experience and I applied for PR within 2 years of graduation. Best decision ever!',
      year: 'Class of 2023',
    },
    {
      name: 'Rahul M.',
      location: 'Bengaluru',
      university: 'UBC Vancouver',
      text: 'Affordable education, welcoming culture, and amazing career opportunities. Canada exceeded all my expectations!',
      year: 'Class of 2024',
    },
  ],

  faqs: [
    {
      question: 'How much does it cost to study in Canada?',
      answer: 'Undergraduate programs cost CAD 15,000-35,000/year and postgraduate programs cost CAD 18,000-50,000/year. Living expenses are around CAD 12,000-25,000/year depending on the city.',
    },
    {
      question: 'Can I work while studying in Canada?',
      answer: 'Yes, international students can work up to 20 hours/week off-campus during semesters and full-time during scheduled breaks without a separate work permit.',
    },
    {
      question: 'What is PGWP and how does it help with PR?',
      answer: 'Post-Graduation Work Permit allows you to work in Canada for 8 months to 3 years after graduation. After 1 year of skilled work, you can apply for permanent residency through Express Entry.',
    },
    {
      question: 'Which cities are best for international students?',
      answer: 'Toronto, Vancouver, Montreal, Ottawa, and Calgary are popular choices. They offer great universities, multicultural communities, and job opportunities.',
    },
  ],
};
