import { useState, useRef, useEffect } from 'react';
import { getUniversityDetailUrl } from '../utils/universityUtils';
import { goToCountries, goToHome } from '../utils/rootNavigation';
import { getCommonsImageUrl } from '../utils/imageUtils';
import { HeaderBrandLogo } from './HeaderBrandLogo';
import { CountryAdmissionTimeline } from './CountryAdmissionTimeline';
import { CountryApplicationModal } from './CountryApplicationModal';
import {
  ArrowLeft,
  MessageCircle,
  GraduationCap,
  FileText,
  DollarSign,
  Home,
  Briefcase,
  Award,
  CheckCircle,
  Users,
  Calendar,
  Plane,
  ChevronDown,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Send,
  BookOpen,
  Shield,
  Zap,
  Target,
  Heart,
  MapPin,
  AlertCircle,
  FileCheck,
  Building,
  Monitor,
  Laptop,
  Activity,
  Stethoscope,
  Code,
  BarChart3,
  Scale,
  Newspaper,
  Users2,
  Wallet,
  Plus,
  Minus,
  FileSpreadsheet,
  TrendingDown,
  Briefcase as BriefcaseIcon,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

type AccordionSection = 'document-checklist' | 'admission-process' | 'visa-process' | 'intakes' | 'cost-living' | 'faq' | 'funds-requirement' | 'ielts-waiver' | 'offer-letter' | 'ug-pg-admission' | 'law-admission' | 'ihs' | null;

export function UKPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<AccordionSection>(null);
  const [showAllUniversities, setShowAllUniversities] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsServicesOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleAccordion = (section: AccordionSection) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
      setTimeout(() => {
        const element = document.getElementById(`accordion-${section}`);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleScholarshipClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I am interested in studying in UK. Please guide me.');
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('UK Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validation logic
    if (name === 'name') {
      // Only allow letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return; // Don't update if invalid
      }
    }

    if (name === 'phone') {
      // Only allow numbers
      if (!/^[0-9]*$/.test(value)) {
        return; // Don't update if invalid
      }
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

    // Phone validation
    if (formData.phone.replace(/[\s\-+]/g, '').length < 10) {
      setErrors({ ...errors, phone: 'Please enter a valid phone number' });
      return;
    }

    const subject = encodeURIComponent('UK Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const whyUKPoints = [
    {
      icon: Award,
      title: 'World-Leading Education',
      desc: 'Home to Oxford, Cambridge & world-renowned universities',
      color: 'from-[#2b2d72] to-[#2b2d72]'
    },
    {
      icon: Clock,
      title: 'Shorter Degrees',
      desc: '3-year bachelor\'s & 1-year master\'s programs',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Briefcase,
      title: 'Work Opportunities',
      desc: '2-year post-study work visa for all graduates',
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      desc: 'UK degrees recognized worldwide',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      icon: Users,
      title: 'Multicultural Hub',
      desc: 'Students from 200+ countries',
      color: 'from-[#EC4899] to-[#DB2777]'
    },
    {
      icon: Target,
      title: 'Research Excellence',
      desc: 'World-class research facilities',
      color: 'from-[#06B6D4] to-[#0891B2]'
    }
  ];

  const popularCourses = [
    {
      name: 'Business Management',
      icon: Briefcase,
      color: 'from-[#2b2d72] to-[#2b2d72]',
      searchUrl: 'https://www.google.com/search?q=Business+Management+courses+in+UK'
    },
    {
      name: 'Computer Science',
      icon: Code,
      color: 'from-[#10B981] to-[#059669]',
      searchUrl: 'https://www.google.com/search?q=Computer+Science+courses+in+UK'
    },
    {
      name: 'Data Science',
      icon: BarChart3,
      color: 'from-[#F59E0B] to-[#D97706]',
      searchUrl: 'https://www.google.com/search?q=Data+Science+courses+in+UK'
    },
    {
      name: 'Global Business',
      icon: Globe,
      color: 'from-[#EC4899] to-[#DB2777]',
      searchUrl: 'https://www.google.com/search?q=Global+Business+courses+in+UK'
    },
    {
      name: 'Engineering & Technology',
      icon: Award,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      searchUrl: 'https://www.google.com/search?q=Engineering+Technology+courses+in+UK'
    },
    {
      name: 'Nursing',
      icon: Stethoscope,
      color: 'from-[#06B6D4] to-[#0891B2]',
      searchUrl: 'https://www.google.com/search?q=Nursing+courses+in+UK'
    },
    {
      name: 'Law',
      icon: Scale,
      color: 'from-[#F97316] to-[#EA580C]',
      searchUrl: 'https://www.google.com/search?q=Law+courses+in+UK'
    },
    {
      name: 'Media & Communication',
      icon: Newspaper,
      color: 'from-[#EF4444] to-[#DC2626]',
      searchUrl: 'https://www.google.com/search?q=Media+Communication+courses+in+UK'
    },
    {
      name: 'Social Sciences',
      icon: Users2,
      color: 'from-[#6366F1] to-[#4F46E5]',
      searchUrl: 'https://www.google.com/search?q=Social+Sciences+courses+in+UK'
    },
    {
      name: 'Finance',
      icon: Wallet,
      color: 'from-[#14B8A6] to-[#0D9488]',
      searchUrl: 'https://www.google.com/search?q=Finance+courses+in+UK'
    }
  ];

  const documentChecklist = [
    { doc: 'Passport', icon: '📘', desc: 'Valid for entire study duration', gradient: 'from-[#2b2d72] to-[#2b2d72]' },
    { doc: 'Mark Sheets', icon: '📜', desc: 'All academic transcripts', gradient: 'from-[#10B981] to-[#059669]' },
    { doc: 'SOP', icon: '✍️', desc: 'Statement of Purpose', gradient: 'from-[#F59E0B] to-[#D97706]' },
    { doc: 'LORs - 2', icon: '📝', desc: 'Two recommendation letters', gradient: 'from-[#8B5CF6] to-[#7C3AED]' },
    { doc: 'IELTS/TOEFL', icon: '🗣️', desc: 'English proficiency test', gradient: 'from-[#EC4899] to-[#DB2777]' },
    { doc: 'Transcripts', icon: '📊', desc: 'Official academic records', gradient: 'from-[#06B6D4] to-[#0891B2]' },
    { doc: 'Resume', icon: '📄', desc: 'Updated CV with experience', gradient: 'from-[#F97316] to-[#EA580C]' },
    { doc: 'Qualification Check', icon: '✅', desc: 'NARIC/ENIC verification', gradient: 'from-[#EF4444] to-[#DC2626]' },
    { doc: 'Portfolio', icon: '🎨', desc: 'For design-related courses', gradient: 'from-[#6366F1] to-[#4F46E5]' }
  ];

  const visaSteps = [
    {
      step: 'Receive CAS',
      duration: '2-4 weeks',
      icon: FileText,
      description: 'Get Confirmation of Acceptance for Studies from university'
    },
    {
      step: 'Complete IHS Payment',
      duration: '1 day',
      icon: DollarSign,
      description: 'Pay Immigration Health Surcharge (£470/year)'
    },
    {
      step: 'Submit Visa Application',
      duration: '1 week',
      icon: FileCheck,
      description: 'Apply online and book biometrics appointment'
    },
    {
      step: 'Biometrics Appointment',
      duration: '1 day',
      icon: Users,
      description: 'Attend visa application centre for fingerprints'
    },
    {
      step: 'Receive Decision',
      duration: '3 weeks',
      icon: CheckCircle,
      description: 'Get visa decision and collect passport'
    },
    {
      step: 'Travel to UK',
      duration: '—',
      icon: Plane,
      description: 'Arrive before course start date'
    }
  ];

  const intakes = [
    {
      name: 'September Intake',
      season: '🍂 Fall',
      popular: 'Most Popular',
      applicationPeriod: 'November - July',
      startDate: 'September',
      advantages: ['Maximum course options', 'Best scholarship opportunities', 'Main intake for most universities'],
      color: 'from-[#DC2626] to-[#B91C1C]'
    },
    {
      name: 'January Intake',
      season: '❄️ Winter',
      popular: 'Second Popular',
      applicationPeriod: 'August - November',
      startDate: 'January',
      advantages: ['Good course availability', 'Less competition', 'Quick admission process'],
      color: 'from-[#2b2d72] to-[#2b2d72]'
    },
    {
      name: 'May Intake',
      season: '🌸 Summer',
      popular: 'Limited Options',
      applicationPeriod: 'February - April',
      startDate: 'May',
      advantages: ['Specific programs only', 'Smaller batch size', 'Faster processing'],
      color: 'from-[#10B981] to-[#059669]'
    }
  ];

  const fundsRequirement = {
    london: [
      { type: 'Tuition Fee (1st year)', amount: '£10,000 - £38,000' },
      { type: 'Living Costs (9 months)', amount: '£1,334/month × 9 = £12,006' },
      { type: 'Total for London', amount: '£22,006 - £50,006' }
    ],
    outsideLondon: [
      { type: 'Tuition Fee (1st year)', amount: '£10,000 - £38,000' },
      { type: 'Living Costs (9 months)', amount: '£1,023/month × 9 = £9,207' },
      { type: 'Total Outside London', amount: '£19,207 - £47,207' }
    ]
  };

  const costBreakdown = {
    tuition: [
      { type: 'Undergraduate Programs', cost: '£10,000 - £26,000/year' },
      { type: 'Postgraduate Programs', cost: '£12,000 - £38,000/year' },
      { type: 'MBA Programs', cost: '£15,000 - £50,000/year' }
    ],
    living: [
      { type: 'Accommodation', cost: '£500 - £1,200/month' },
      { type: 'Food & Groceries', cost: '£150 - £300/month' },
      { type: 'Transportation', cost: '£50 - £150/month' },
      { type: 'Other Expenses', cost: '£200 - £400/month' }
    ]
  };

  const scholarships = [
    {
      name: 'Chevening Scholarships',
      amount: 'Full Tuition + Living',
      eligibility: 'Outstanding emerging leaders worldwide',
      icon: '🏆',
      sectionId: 'chevening-scholarship'
    },
    {
      name: 'Commonwealth Scholarships',
      amount: 'Full Funding',
      eligibility: 'Students from Commonwealth countries',
      icon: '🌍',
      sectionId: 'commonwealth-scholarship'
    },
    {
      name: 'GREAT Scholarships',
      amount: '£10,000 minimum',
      eligibility: 'Students from selected countries',
      icon: '💎',
      sectionId: 'great-scholarship'
    },
    {
      name: 'University-Specific Awards',
      amount: '£2,000 - £15,000',
      eligibility: 'Merit-based, varies by institution',
      icon: '🎓',
      sectionId: 'university-scholarship'
    }
  ];

  const ieltsWaiverOptions = [
    {
      title: 'Medium of Instruction (MOI)',
      description: 'If you completed your previous education in English medium',
      requirements: ['MOI certificate from university', 'Valid for most UK universities', 'Must cover all years of study']
    },
    {
      title: 'Previous Study in English-speaking Country',
      description: 'Studied in UK, USA, Canada, Australia, or New Zealand',
      requirements: ['Proof of previous study', 'Usually 2+ years required', 'Accepted by most institutions']
    },
    {
      title: 'University Pre-sessional English',
      description: 'Complete university\'s own English language course',
      requirements: ['4-12 weeks duration', 'Assessment at end of course', 'Direct pathway to degree']
    },
    {
      title: 'Alternative Tests',
      description: 'PTE, Duolingo, or other approved tests',
      requirements: ['Check university requirements', 'Varies by institution', 'Some accept lower scores']
    }
  ];

  const offerLetterTypes = [
    {
      type: 'Conditional Offer',
      icon: '📋',
      color: 'from-[#F59E0B] to-[#D97706]',
      description: 'Offer subject to meeting specific conditions',
      conditions: ['Pending final grades', 'English test scores', 'Document verification', 'Academic requirements']
    },
    {
      type: 'Unconditional Offer',
      icon: '✅',
      color: 'from-[#10B981] to-[#059669]',
      description: 'Guaranteed admission - all requirements met',
      conditions: ['All documents verified', 'Academic requirements met', 'English proficiency confirmed', 'Ready to proceed']
    },
    {
      type: 'CAS (Confirmation of Acceptance)',
      icon: '🎓',
      color: 'from-[#2b2d72] to-[#2b2d72]',
      description: 'Final document needed for visa application',
      conditions: ['Issued after accepting offer', 'Required for Student Visa', 'Contains CAS number', 'Valid for 6 months']
    }
  ];

  const ugPgAdmissionProcess = [
    {
      stage: 'Research & Selection',
      duration: '1-2 months',
      ugSteps: ['Research universities & courses', 'Check entry requirements', 'Prepare for UCAS application', 'Gather required documents'],
      pgSteps: ['Research universities & programs', 'Check specific course requirements', 'Identify scholarship opportunities', 'Prepare application materials']
    },
    {
      stage: 'Application Submission',
      duration: '1-2 weeks',
      ugSteps: ['Complete UCAS application', 'Write personal statement', 'Submit academic transcripts', 'Pay application fee (£27)'],
      pgSteps: ['Direct university application', 'Submit CV/Resume', 'Write statement of purpose', 'Provide 2 LORs']
    },
    {
      stage: 'Offer & Acceptance',
      duration: '4-8 weeks',
      ugSteps: ['Receive offers (conditional/unconditional)', 'Accept firm & insurance choice', 'Meet conditions if applicable', 'Confirm final place'],
      pgSteps: ['Receive offer letter', 'Accept offer', 'Pay deposit if required', 'Request CAS']
    },
    {
      stage: 'Visa Application',
      duration: '3-4 weeks',
      ugSteps: ['Receive CAS', 'Pay IHS (£470/year)', 'Submit visa application', 'Attend biometrics'],
      pgSteps: ['Receive CAS', 'Pay IHS (£470/year)', 'Submit visa application', 'Attend biometrics']
    }
  ];

  const lawAdmissionProcess = [
    {
      step: 'Choose Law Degree Type',
      description: 'Decide between LLB (undergraduate) or LLM/MA Law (postgraduate)',
      requirements: ['LLB: 3 years, qualifying law degree', 'LLM: 1 year, requires law/related degree', 'MA Law: Conversion course for non-law graduates']
    },
    {
      step: 'Meet Academic Requirements',
      description: 'High academic standards required for UK law schools',
      requirements: ['UG: A-levels AAA-AAB or equivalent', 'PG: First class or 2:1 degree', 'International: 65-75% minimum']
    },
    {
      step: 'English Proficiency',
      description: 'Higher IELTS scores typically required',
      requirements: ['IELTS 7.0-7.5 overall', 'Minimum 6.5-7.0 in each band', 'Or equivalent TOEFL/PTE']
    },
    {
      step: 'Application Materials',
      description: 'Comprehensive documentation needed',
      requirements: ['Strong personal statement', '2 academic references', 'CV highlighting achievements', 'Writing samples (for LLM)']
    },
    {
      step: 'Additional Tests',
      description: 'Some universities require entrance exams',
      requirements: ['LNAT (for some UG programs)', 'University-specific tests', 'Interview (if shortlisted)']
    }
  ];

  const ihsInformation = {
    overview: 'Immigration Health Surcharge (IHS) provides access to NHS services during your stay in the UK.',
    amount: '£470 per year for students',
    coverage: [
      'GP (General Practitioner) consultations',
      'Hospital treatments',
      'Emergency services (A&E)',
      'Mental health services',
      'Maternity services'
    ],
    notCovered: [
      'Prescriptions (£9.65 per item)',
      'Dental treatment (charges apply)',
      'Eye tests and glasses',
      'Some specialist treatments'
    ],
    payment: [
      'Pay when applying for visa',
      'Calculated automatically in visa application',
      'For 3-year course: £470 × 3 = £1,410',
      'Non-refundable if visa rejected'
    ]
  };

  const faqs = [
    {
      q: 'How much does it cost to study in UK?',
      a: 'Tuition fees range from £10,000 to £38,000 per year depending on the program. Living expenses are around £9,000-£12,000 per year depending on the city.'
    },
    {
      q: 'Can I work while studying in UK?',
      a: 'Yes! International students can work up to 20 hours per week during term time and full-time during holidays.'
    },
    {
      q: 'What is the Graduate Route visa?',
      a: 'The Graduate Route allows international students to stay in the UK for 2 years (3 years for PhD graduates) after completing their degree to work or look for work.'
    },
    {
      q: 'Do I need IELTS for UK universities?',
      a: 'Most universities require IELTS (6.5-7.0) or equivalent TOEFL/PTE scores. Some may waive this if you studied in English medium.'
    },
    {
      q: 'Which intake is best for UK?',
      a: 'September (Fall) intake is the most popular with maximum course options and scholarship opportunities.'
    }
  ];

  const universities = [
    {
      name: 'University of Oxford',
      rank: 'QS #2',
      location: 'Oxford, England',
      tuition: '£26,000 - £38,000',
      programs: ['Law', 'Medicine', 'Business', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ox.ac.uk'
    },
    {
      name: 'University of Cambridge',
      rank: 'QS #3',
      location: 'Cambridge, England',
      tuition: '£24,000 - £36,000',
      programs: ['Sciences', 'Engineering', 'Computer Science', 'Mathematics'],
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.cam.ac.uk'
    },
    {
      name: 'Imperial College London',
      rank: 'QS #6',
      location: 'London, England',
      tuition: '£32,000 - £37,000',
      programs: ['Engineering', 'Medicine', 'Business', 'Sciences'],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.imperial.ac.uk'
    },
    {
      name: 'UCL (University College London)',
      rank: 'QS #8',
      location: 'London, England',
      tuition: '£24,000 - £34,000',
      programs: ['Architecture', 'Law', 'Medicine', 'Arts'],
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ucl.ac.uk'
    },
    {
      name: 'University of Edinburgh',
      rank: 'QS #22',
      location: 'Edinburgh, Scotland',
      tuition: '£22,000 - £32,000',
      programs: ['Medicine', 'Business', 'Engineering', 'Law'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.ed.ac.uk'
    },
    {
      name: 'University of Manchester',
      rank: 'QS #27',
      location: 'Manchester, England',
      tuition: '£20,000 - £28,000',
      programs: ['Business', 'Engineering', 'Computer Science', 'Medicine'],
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.manchester.ac.uk'
    },
    {
      name: 'King\'s College London',
      rank: 'QS #35',
      location: 'London, England',
      tuition: '£24,000 - £32,000',
      programs: ['Medicine', 'Law', 'Business', 'Dentistry'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://www.kcl.ac.uk'
    },
    {
      name: 'London School of Economics',
      rank: 'QS #45',
      location: 'London, England',
      tuition: '£22,000 - £30,000',
      programs: ['Economics', 'Finance', 'Business', 'Law'],
      image: getCommonsImageUrl('View of London School of Economics from Houghton Street - geograph.org.uk - 5495370.jpg'),
      website: 'https://www.lse.ac.uk'
    },
    {
      name: 'University of Warwick',
      rank: 'QS #67',
      location: 'Coventry, England',
      tuition: '£20,000 - £27,000',
      programs: ['Business', 'Engineering', 'Computer Science', 'Mathematics'],
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&auto=format&q=85',
      website: 'https://warwick.ac.uk'
    }
  ];

  const testimonials = [
    {
      name: 'Ananya Reddy',
      location: 'Hyderabad, India',
      university: 'Imperial College London',
      course: 'Data Science',
      text: 'The 2-year Graduate Route visa is amazing! I got a job at a top tech firm right after my master\'s program.',
      rating: 5
    },
    {
      name: 'Rohan Kapoor',
      location: 'Delhi, India',
      university: 'University of Manchester',
      course: 'Business Management',
      text: 'UK education is world-class. The 1-year master\'s program saved me time and money while giving me global exposure.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-[#E5E9F2] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[92px]">
            <button type="button" onClick={goToHome} className="flex items-center group">
              <HeaderBrandLogo className="group-hover:scale-105 transition-transform" />
            </button>
            <div className="flex items-center gap-8">
              <a
                href="/#home"
                onClick={(e) => {
                  e.preventDefault();
                  goToHome();
                }}
                className="text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="/#countries"
                onClick={(e) => {
                  e.preventDefault();
                  goToCountries();
                }}
                className="text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Countries
              </a>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#2b2d72] font-medium text-[15px] transition-colors cursor-pointer"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E5E9F2] overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-2 max-h-[80vh] overflow-y-auto">
                    <button
                      onClick={() => scrollToSection('why-uk')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Globe className="w-4 h-4" />
                      Why Study in UK
                    </button>
                    <button
                      onClick={() => scrollToSection('popular-courses')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <BookOpen className="w-4 h-4" />
                      Popular Courses
                    </button>
                    <button
                      onClick={() => scrollToSection('top-universities')}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Top Universities
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('ielts-waiver');
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <CheckCircle className="w-4 h-4" />
                      IELTS Waiver Options
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('offer-letter');
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <FileText className="w-4 h-4" />
                      Types of Offer Letter
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('ug-pg-admission');
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Users className="w-4 h-4" />
                      UG & PG Admission Process
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('law-admission');
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Scale className="w-4 h-4" />
                      Law Admission Process
                    </button>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        toggleAccordion('ihs');
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE] text-gray-600 hover:text-[#2b2d72] font-medium text-[14px] transition-all flex items-center gap-3"
                    >
                      <Shield className="w-4 h-4" />
                      Immigration Health Surcharge
                    </button>
                  </div>
                </div>
              </div>

              
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Link */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-[#E5E9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="/#countries"
            onClick={(e) => {
              e.preventDefault();
              goToCountries();
            }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2b2d72] text-[14px] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Countries
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#60A5FA]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full border border-[#E5E9F2] mb-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="UK Flag"
                  className="w-8 h-6 object-cover rounded shadow-sm"
                />
                <span className="text-[#2b2d72] text-[14px] font-bold">World-Class Education Hub</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://flagcdn.com/w320/gb.png"
                  alt="United Kingdom Flag"
                  className="w-16 h-11 object-cover rounded-md shadow-lg border-2 border-white/50"
                />
                <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[58px] font-bold bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
                  Study in UK
                </h1>
              </div>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                Home to Oxford & Cambridge. World-renowned universities, shorter degree durations, and a <span className="font-bold text-[#2b2d72]">2-year Graduate Route visa</span> for all international students.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">18</div>
                  <div className="text-gray-600 text-[13px]">Top 100 Unis</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">2 Yrs</div>
                  <div className="text-gray-600 text-[13px]">Work Visa</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-2xl sm:text-[28px] font-bold text-[#2b2d72]">1 Year</div>
                  <div className="text-gray-600 text-[13px]">Master's</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
                  alt="UK University Campus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in UK */}
      <section id="why-uk" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              TOP BENEFITS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] leading-tight mb-4">
              Why Study in UK?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              The UK offers exceptional advantages for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUKPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-6 border border-[#E5E9F2] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="top-universities" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              WORLD-CLASS INSTITUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] leading-tight mb-4">
              Top Universities in UK
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click on any university to visit their official website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllUniversities ? universities : universities.slice(0, 3)).map((uni, index) => (
              <a
                key={index}
                href={getUniversityDetailUrl(uni.name)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E5E9F2] hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-[#2b2d72] font-bold text-[13px]">{uni.rank}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                      <span className="text-[#2b2d72] font-bold text-[14px] flex items-center gap-2">
                        Visit Website
                        <Globe className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-2 group-hover:text-[#2b2d72] transition-colors">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-[14px] mb-4">
                    <MapPin className="w-4 h-4" />
                    {uni.location}
                  </div>
                  <div className="flex items-center gap-2 text-[#2b2d72] text-[14px] font-semibold mb-4">
                    <DollarSign className="w-4 h-4" />
                    {uni.tuition}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.slice(0, 3).map((prog, idx) => (
                      <span
                        key={idx}
                        className="text-[12px] px-3 py-1 rounded-full bg-[#EEF4FF] text-[#2b2d72] font-medium group-hover:bg-gradient-to-r group-hover:from-[#1E40AF] group-hover:to-[#3B82F6] group-hover:text-white transition-all"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {universities.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllUniversities(!showAllUniversities)}
                className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 mx-auto hover:-translate-y-1"
              >
                {showAllUniversities ? (
                  <>
                    <Minus className="w-5 h-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Show More Universities ({universities.length - 3} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Courses */}
      <section id="popular-courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              IN-DEMAND PROGRAMS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] leading-tight mb-4">
              Popular Courses in UK
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click on any course to explore programs and universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {(showAllCourses ? popularCourses : popularCourses.slice(0, 5)).map((course, index) => {
              const Icon = course.icon;
              return (
                <a
                  key={index}
                  href={course.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 border-2 border-[#E5E9F2] hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white group-hover:text-[#2b2d72] transition-colors" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#2b2d72] group-hover:text-white transition-colors mb-2">
                      {course.name}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white/90 text-[12px] flex items-center gap-1">
                        Explore Programs
                        <Globe className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {popularCourses.length > 5 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllCourses(!showAllCourses)}
                className="group px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 mx-auto hover:-translate-y-1"
              >
                {showAllCourses ? (
                  <>
                    <Minus className="w-5 h-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Show More Courses ({popularCourses.length - 5} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              FINANCIAL AID
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] leading-tight mb-4">
              Scholarships for UK
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Financial support opportunities for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                onClick={() => handleScholarshipClick(scholarship.sectionId)}
                className="group bg-white rounded-2xl p-6 border-2 border-[#E5E9F2] hover:border-[#1E40AF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">{scholarship.icon}</div>
                  <h3 className="text-[18px] font-bold text-[#2b2d72] mb-2 text-center group-hover:text-[#2b2d72] transition-colors">{scholarship.name}</h3>
                  <div className="text-center mb-3">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-full text-[13px] font-bold group-hover:from-[#1E40AF] group-hover:to-[#3B82F6] transition-all">
                      {scholarship.amount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[13px] text-center leading-relaxed mb-3">{scholarship.eligibility}</p>
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#2b2d72] text-[12px] font-bold flex items-center justify-center gap-1">
                      Learn More
                      <ChevronDown className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              ESSENTIAL INFORMATION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] leading-tight mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click on any section below to explore detailed information
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {/* Document Checklist Accordion */}
            <div
              id="accordion-document-checklist"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('document-checklist')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'document-checklist'
                      ? 'bg-gradient-to-br from-[#2b2d72] to-[#2b2d72]'
                      : 'bg-[#EEF4FF]'
                  }`}>
                    <FileText className={`w-7 h-7 ${activeAccordion === 'document-checklist' ? 'text-white' : 'text-[#2b2d72]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Document Checklist</h3>
                    <p className="text-gray-600 text-[14px]">Essential documents for UK application</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'document-checklist' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'document-checklist' ? (
                    <Minus className="w-6 h-6 text-[#2b2d72]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'document-checklist' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {documentChecklist.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-center mb-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="text-[14px] font-bold text-[#2b2d72] mb-1">{item.doc}</h4>
                          <p className="text-gray-600 text-[12px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* UK Visa Process Accordion */}
            <div
              id="accordion-visa-process"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('visa-process')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'visa-process'
                      ? 'bg-gradient-to-br from-[#10B981] to-[#059669]'
                      : 'bg-[#ECFDF5]'
                  }`}>
                    <Plane className={`w-7 h-7 ${activeAccordion === 'visa-process' ? 'text-white' : 'text-[#10B981]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">UK Visa Process</h3>
                    <p className="text-gray-600 text-[14px]">Step-by-step student visa timeline</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'visa-process' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'visa-process' ? (
                    <Minus className="w-6 h-6 text-[#10B981]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'visa-process' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="space-y-4 mt-6">
                    {visaSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl p-5 border border-[#E5E9F2] hover:shadow-lg transition-all"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-[18px] font-bold text-[#2b2d72]">{step.step}</h4>
                              <span className="text-[#10B981] font-bold text-[13px] bg-[#ECFDF5] px-3 py-1 rounded-full">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-gray-600 text-[14px] leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Funds Requirement Accordion */}
            <div
              id="accordion-funds-requirement"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('funds-requirement')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'funds-requirement'
                      ? 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]'
                      : 'bg-[#FEF3C7]'
                  }`}>
                    <Wallet className={`w-7 h-7 ${activeAccordion === 'funds-requirement' ? 'text-white' : 'text-[#F59E0B]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Funds Requirement</h3>
                    <p className="text-gray-600 text-[14px]">Financial proof for UK student visa</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'funds-requirement' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'funds-requirement' ? (
                    <Minus className="w-6 h-6 text-[#F59E0B]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'funds-requirement' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-xl p-6 border border-[#E5E9F2]">
                      <h4 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <Building className="w-6 h-6 text-[#F59E0B]" />
                        Studying in London
                      </h4>
                      <div className="space-y-3">
                        {fundsRequirement.london.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 text-[14px]">{item.type}</span>
                            <span className="font-bold text-[#F59E0B]">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#ECFDF5] to-white rounded-xl p-6 border border-[#E5E9F2]">
                      <h4 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-[#10B981]" />
                        Outside London
                      </h4>
                      <div className="space-y-3">
                        {fundsRequirement.outsideLondon.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 text-[14px]">{item.type}</span>
                            <span className="font-bold text-[#10B981]">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#EEF4FF] rounded-xl border border-[#BFDBFE]">
                    <p className="text-[#2b2d72] text-[14px] font-medium">
                      💡 <strong>Note:</strong> Funds must be in your account for at least 28 consecutive days before applying for visa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intakes Accordion */}
            <div
              id="accordion-intakes"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('intakes')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'intakes'
                      ? 'bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED]'
                      : 'bg-[#F5F3FF]'
                  }`}>
                    <Calendar className={`w-7 h-7 ${activeAccordion === 'intakes' ? 'text-white' : 'text-[#8B5CF6]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Intakes in UK</h3>
                    <p className="text-gray-600 text-[14px]">University admission timelines</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'intakes' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'intakes' ? (
                    <Minus className="w-6 h-6 text-[#8B5CF6]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'intakes' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {intakes.map((intake, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#E5E9F2]"
                      >
                        <div className={`bg-gradient-to-br ${intake.color} p-6 text-white`}>
                          <div className="text-3xl mb-2">{intake.season.split(' ')[0]}</div>
                          <h4 className="text-lg sm:text-xl font-bold mb-2">{intake.name}</h4>
                          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[12px] font-semibold">
                            {intake.popular}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <div className="text-gray-600 text-[13px] mb-1">Application Period</div>
                            <div className="text-[#2b2d72] font-bold">{intake.applicationPeriod}</div>
                          </div>
                          <div className="mb-4">
                            <div className="text-gray-600 text-[13px] mb-1">Start Date</div>
                            <div className="text-[#2b2d72] font-bold">{intake.startDate}</div>
                          </div>
                          <div className="space-y-2">
                            {intake.advantages.map((adv, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                                <span className="text-gray-600 text-[13px]">{adv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost of Living Accordion */}
            <div
              id="accordion-cost-living"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('cost-living')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'cost-living'
                      ? 'bg-gradient-to-br from-[#EC4899] to-[#DB2777]'
                      : 'bg-[#FCE7F3]'
                  }`}>
                    <DollarSign className={`w-7 h-7 ${activeAccordion === 'cost-living' ? 'text-white' : 'text-[#EC4899]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Cost of Living & Tuition</h3>
                    <p className="text-gray-600 text-[14px]">Budget planning for studying in UK</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'cost-living' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'cost-living' ? (
                    <Minus className="w-6 h-6 text-[#EC4899]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'cost-living' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gradient-to-br from-[#EFF6FF] to-white rounded-xl p-6 border border-[#E5E9F2]">
                      <h4 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-[#2b2d72]" />
                        Annual Tuition Fees
                      </h4>
                      <div className="space-y-3">
                        {costBreakdown.tuition.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 text-[14px]">{item.type}</span>
                            <span className="font-bold text-[#2b2d72]">{item.cost}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-xl p-6 border border-[#E5E9F2]">
                      <h4 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <Home className="w-6 h-6 text-[#10B981]" />
                        Monthly Living Costs
                      </h4>
                      <div className="space-y-3">
                        {costBreakdown.living.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 text-[14px]">{item.type}</span>
                            <span className="font-bold text-[#10B981]">{item.cost}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IELTS Waiver Options Accordion */}
            <div
              id="accordion-ielts-waiver"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('ielts-waiver')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'ielts-waiver'
                      ? 'bg-gradient-to-br from-[#10B981] to-[#059669]'
                      : 'bg-[#ECFDF5]'
                  }`}>
                    <CheckCircle className={`w-7 h-7 ${activeAccordion === 'ielts-waiver' ? 'text-white' : 'text-[#10B981]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">IELTS Waiver Options</h3>
                    <p className="text-gray-600 text-[14px]">Alternatives to IELTS requirement</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'ielts-waiver' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'ielts-waiver' ? (
                    <Minus className="w-6 h-6 text-[#10B981]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'ielts-waiver' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {ieltsWaiverOptions.map((option, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl p-6 border border-[#E5E9F2] hover:shadow-lg transition-all"
                      >
                        <h4 className="text-[18px] font-bold text-[#2b2d72] mb-3">{option.title}</h4>
                        <p className="text-gray-600 text-[14px] mb-4">{option.description}</p>
                        <div className="space-y-2">
                          {option.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-[13px]">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Offer Letter Accordion */}
            <div
              id="accordion-offer-letter"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('offer-letter')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'offer-letter'
                      ? 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]'
                      : 'bg-[#FEF3C7]'
                  }`}>
                    <FileText className={`w-7 h-7 ${activeAccordion === 'offer-letter' ? 'text-white' : 'text-[#F59E0B]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Types of Offer Letter</h3>
                    <p className="text-gray-600 text-[14px]">Understanding different offer types</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'offer-letter' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'offer-letter' ? (
                    <Minus className="w-6 h-6 text-[#F59E0B]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'offer-letter' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {offerLetterTypes.map((offer, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E5E9F2]"
                      >
                        <div className={`bg-gradient-to-br ${offer.color} p-6 text-white text-center`}>
                          <div className="text-4xl mb-2">{offer.icon}</div>
                          <h4 className="text-[20px] font-bold">{offer.type}</h4>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 text-[14px] mb-4">{offer.description}</p>
                          <div className="space-y-2">
                            {offer.conditions.map((condition, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-[13px]">{condition}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* UG & PG Admission Process Accordion */}
            <div
              id="accordion-ug-pg-admission"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('ug-pg-admission')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'ug-pg-admission'
                      ? 'bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED]'
                      : 'bg-[#F5F3FF]'
                  }`}>
                    <Users className={`w-7 h-7 ${activeAccordion === 'ug-pg-admission' ? 'text-white' : 'text-[#8B5CF6]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">UG & PG Admission Process</h3>
                    <p className="text-gray-600 text-[14px]">Step-by-step admission guide</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'ug-pg-admission' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'ug-pg-admission' ? (
                    <Minus className="w-6 h-6 text-[#8B5CF6]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'ug-pg-admission' ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="space-y-6 mt-6">
                    {ugPgAdmissionProcess.map((process, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl p-6 border border-[#E5E9F2]"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg sm:text-xl font-bold text-[#2b2d72]">{process.stage}</h4>
                          <span className="text-[#8B5CF6] font-bold text-[13px] bg-[#F5F3FF] px-3 py-1 rounded-full">
                            {process.duration}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-bold text-[#2b2d72] mb-3 text-[16px]">Undergraduate (UG)</h5>
                            <div className="space-y-2">
                              {process.ugSteps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 text-[13px]">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-bold text-[#10B981] mb-3 text-[16px]">Postgraduate (PG)</h5>
                            <div className="space-y-2">
                              {process.pgSteps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 text-[13px]">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Law Admission Process Accordion */}
            <div
              id="accordion-law-admission"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('law-admission')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'law-admission'
                      ? 'bg-gradient-to-br from-[#EC4899] to-[#DB2777]'
                      : 'bg-[#FCE7F3]'
                  }`}>
                    <Scale className={`w-7 h-7 ${activeAccordion === 'law-admission' ? 'text-white' : 'text-[#EC4899]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Law Admission Process</h3>
                    <p className="text-gray-600 text-[14px]">Specialized requirements for law programs</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'law-admission' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'law-admission' ? (
                    <Minus className="w-6 h-6 text-[#EC4899]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'law-admission' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="space-y-4 mt-6">
                    {lawAdmissionProcess.map((process, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl p-5 border border-[#E5E9F2]"
                      >
                        <h4 className="text-[18px] font-bold text-[#2b2d72] mb-3">{process.step}</h4>
                        <p className="text-gray-600 text-[14px] mb-4">{process.description}</p>
                        <div className="space-y-2">
                          {process.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-[13px]">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Immigration Health Surcharge Accordion */}
            <div
              id="accordion-ihs"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('ihs')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'ihs'
                      ? 'bg-gradient-to-br from-[#F97316] to-[#EA580C]'
                      : 'bg-[#FFF7ED]'
                  }`}>
                    <Shield className={`w-7 h-7 ${activeAccordion === 'ihs' ? 'text-white' : 'text-[#F97316]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">Immigration Health Surcharge</h3>
                    <p className="text-gray-600 text-[14px]">NHS healthcare access for students</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'ihs' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'ihs' ? (
                    <Minus className="w-6 h-6 text-[#F97316]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 'ihs' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="mt-6 space-y-6">
                    <div className="bg-gradient-to-br from-[#EFF6FF] to-white rounded-xl p-6 border border-[#E5E9F2]">
                      <h4 className="text-lg sm:text-xl font-bold text-[#2b2d72] mb-3">Overview</h4>
                      <p className="text-gray-600 text-[15px] mb-4">{ihsInformation.overview}</p>
                      <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-xl font-bold text-[18px]">
                        {ihsInformation.amount}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-xl p-6 border border-[#E5E9F2]">
                        <h4 className="text-[18px] font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#10B981]" />
                          What's Covered
                        </h4>
                        <div className="space-y-2">
                          {ihsInformation.coverage.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-[14px]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-xl p-6 border border-[#E5E9F2]">
                        <h4 className="text-[18px] font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-[#EF4444]" />
                          Not Covered
                        </h4>
                        <div className="space-y-2">
                          {ihsInformation.notCovered.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-[14px]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-xl p-6 border border-[#E5E9F2]">
                      <h4 className="text-[18px] font-bold text-[#2b2d72] mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-[#F59E0B]" />
                        Payment Information
                      </h4>
                      <div className="space-y-2">
                        {ihsInformation.payment.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-[14px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div
              id="accordion-faq"
              className="bg-white rounded-2xl border-2 border-[#E5E9F2] overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleAccordion('faq')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeAccordion === 'faq'
                      ? 'bg-gradient-to-br from-[#06B6D4] to-[#0891B2]'
                      : 'bg-[#CFFAFE]'
                  }`}>
                    <AlertCircle className={`w-7 h-7 ${activeAccordion === 'faq' ? 'text-white' : 'text-[#06B6D4]'}`} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#2b2d72]">FAQ</h3>
                    <p className="text-gray-600 text-[14px]">Frequently asked questions</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeAccordion === 'faq' ? 'rotate-180' : ''}`}>
                  {activeAccordion === 'faq' ? (
                    <Minus className="w-6 h-6 text-[#06B6D4]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeAccordion === 'faq' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
                <div className="p-6 pt-0 border-t border-[#E5E9F2]">
                  <div className="space-y-4 mt-6">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl p-5 border border-[#E5E9F2]"
                      >
                        <h5 className="font-bold text-[#2b2d72] mb-2 text-[16px]">{faq.q}</h5>
                        <p className="text-gray-600 text-[14px] leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CountryAdmissionTimeline countryName="UK" sectionId="admission-process" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EEF4FF] rounded-full text-[#2b2d72] font-semibold text-[13px] mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2b2d72] leading-tight mb-4">
              Student Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E5E9F2] hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2b2d72] to-[#2b2d72] rounded-full flex items-center justify-center text-white font-bold text-[20px]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#2b2d72]">{testimonial.name}</div>
                    <div className="text-gray-600 text-[13px]">{testimonial.location}</div>
                    <div className="text-[#2b2d72] text-[13px] font-medium">
                      {testimonial.course} • {testimonial.university}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Detail Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Chevening Scholarship */}
          <div id="chevening-scholarship" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-3xl p-8 border-2 border-[#E5E9F2] shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🏆</div>
                <div>
                  <h3 className="text-[32px] font-bold text-[#2b2d72]">Chevening Scholarships</h3>
                  <p className="text-[#2b2d72] font-bold text-[18px]">Full Tuition + Living Expenses</p>
                </div>
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Chevening Scholarships are the UK government's global scholarship programme, funded by the Foreign, Commonwealth and Development Office (FCDO) and partner organisations. The scholarships support study at UK universities – mostly one-year Master's degrees.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Coverage</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Full tuition fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Monthly living stipend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Return airfare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Additional grants & allowances</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Eligibility</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Citizen of Chevening-eligible country</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Bachelor's degree (2:1 or equivalent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">2+ years work experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Leadership potential</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Commonwealth Scholarship */}
          <div id="commonwealth-scholarship" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-3xl p-8 border-2 border-[#E5E9F2] shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🌍</div>
                <div>
                  <h3 className="text-[32px] font-bold text-[#2b2d72]">Commonwealth Scholarships</h3>
                  <p className="text-[#10B981] font-bold text-[18px]">Full Funding Package</p>
                </div>
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Commonwealth Scholarships are for talented individuals with the potential to make a positive impact on the global stage. Funded by the UK Foreign, Commonwealth & Development Office (FCDO), these scholarships enable students from across the Commonwealth to pursue Master's and PhD degrees in the UK.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Approved airfare to/from UK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Tuition & examination fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Stipend (living allowance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Thesis grant (if applicable)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Commonwealth citizen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">From low or middle income country</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Upper second-class honours degree</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Not currently studying in developed country</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* GREAT Scholarship */}
          <div id="great-scholarship" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-[#EFF6FF] to-white rounded-3xl p-8 border-2 border-[#E5E9F2] shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">💎</div>
                <div>
                  <h3 className="text-[32px] font-bold text-[#2b2d72]">GREAT Scholarships</h3>
                  <p className="text-[#2b2d72] font-bold text-[18px]">£10,000 Minimum Award</p>
                </div>
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                GREAT Scholarships offer students from 15 countries the opportunity to have £10,000 towards their tuition fees for a wide range of one-year taught postgraduate courses. The scholarships are jointly funded by the UK government's GREAT Britain Campaign and the British Council with participating UK higher education institutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Award Details</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Minimum £10,000 towards tuition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">For one-year Master's programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Available across various subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">45+ participating universities</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Eligible Countries</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Bangladesh, China, Egypt, Ghana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">India, Indonesia, Kenya, Malaysia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Mexico, Nigeria, Pakistan, Thailand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[14px]">Turkey, Vietnam, & more</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* University-Specific Awards */}
          <div id="university-scholarship" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-3xl p-8 border-2 border-[#E5E9F2] shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🎓</div>
                <div>
                  <h3 className="text-[32px] font-bold text-[#2b2d72]">University-Specific Awards</h3>
                  <p className="text-[#F59E0B] font-bold text-[18px]">£2,000 - £15,000</p>
                </div>
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Many UK universities offer their own scholarships and bursaries for international students. These awards vary by institution and are typically merit-based, though some consider financial need. Check directly with your chosen universities for specific opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Merit-Based</h4>
                  <p className="text-gray-600 text-[14px] mb-3">Awards for academic excellence</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">High GPA requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">Test scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">Previous achievements</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Subject-Specific</h4>
                  <p className="text-gray-600 text-[14px] mb-3">Departmental scholarships</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">STEM programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">Business schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">Research fields</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E9F2]">
                  <h4 className="font-bold text-[#2b2d72] mb-3 text-[18px]">Regional Awards</h4>
                  <p className="text-gray-600 text-[14px] mb-3">Country/region specific</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">India scholarships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">Africa programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[13px]">Asia-Pacific awards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b2d72] to-[#1a1d4a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get in touch with our expert counselors for personalized guidance on studying in the UK.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, text: '+91 72990 05577', label: 'Call Us' },
                  { icon: Mail, text: 'salesteam@honeytranslations.com', label: 'Email Us' },
                  { icon: Clock, text: 'Mon - Sat: 9 AM - 7 PM', label: 'Working Hours' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">{item.label}</p>
                      <p className="font-semibold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/917299005577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Request Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all"
                  >
                    <option value="" className="text-gray-900">Select Course Interest</option>
                    <option value="Business" className="text-gray-900">Business Management</option>
                    <option value="Engineering" className="text-gray-900">Engineering</option>
                    <option value="IT" className="text-gray-900">Information Technology</option>
                    <option value="Finance" className="text-gray-900">Finance & Banking</option>
                    <option value="Other" className="text-gray-900">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message (Optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-[#2b2d72] rounded-xl font-bold hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917299005577"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      <CountryApplicationModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        countryName="UK"
        mode="apply"
      />
    </div>
  );
}




