import { useState } from 'react';
import {
  ArrowRight,
  Home,
  Clock,
  DollarSign,
  CheckCircle,
  Award,
  Briefcase,
  BookOpen,
  Users,
  TrendingUp,
  FileText,
  X,
  Calendar
} from 'lucide-react';

interface CourseDetailPageProps {
  courseId: string;
}

export function CourseDetailPage({ courseId }: CourseDetailPageProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'm interested in ${courseDetails.title}.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const courseDatabase: { [key: string]: any } = {
    'online-mba': {
      title: 'Online MBA',
      fullName: 'Master of Business Administration (Online)',
      type: 'online',
      duration: '2 Years',
      fee: '₹1,00,000 - ₹3,00,000',
      mode: 'Online / Distance Learning',
      eligibility: {
        basic: 'Bachelor\'s degree in any discipline with minimum 50% marks (45% for reserved categories)',
        entrance: 'CAT/MAT/XAT/CMAT or university entrance test',
        workExp: '2-3 years work experience preferred for executive MBA',
        age: 'No upper age limit'
      },
      overview: 'Online MBA is a flexible two-year postgraduate program designed for working professionals who want to advance their careers without taking a break. Learn management fundamentals, leadership skills, and specialized knowledge in areas like Marketing, Finance, HR, and Operations.',
      specializations: ['Marketing', 'Finance', 'Human Resources', 'Operations Management', 'Business Analytics', 'International Business', 'Entrepreneurship', 'IT Management'],
      highlights: [
        '100% Online with live interactive sessions',
        'Learn from industry experts and experienced faculty',
        'Real-world case studies and business simulations',
        'Networking opportunities with professionals',
        'Placement assistance and career support',
        'Same degree value as regular MBA'
      ],
      curriculum: [
        { semester: 'Semester 1', subjects: ['Principles of Management', 'Managerial Economics', 'Business Communication', 'Accounting for Managers', 'Organizational Behavior'] },
        { semester: 'Semester 2', subjects: ['Marketing Management', 'Financial Management', 'Human Resource Management', 'Operations Management', 'Business Statistics'] },
        { semester: 'Semester 3', subjects: ['Strategic Management', 'Elective 1', 'Elective 2', 'Elective 3', 'Research Methodology'] },
        { semester: 'Semester 4', subjects: ['Business Analytics', 'Elective 4', 'Elective 5', 'Project Work/Dissertation', 'Leadership & Ethics'] }
      ],
      admissionProcess: [
        'Check eligibility criteria and entrance exam requirements',
        'Register on university portal and fill application form',
        'Upload academic documents and work experience certificates',
        'Pay application fee (₹500-₹2,000)',
        'Appear for entrance test or personal interview',
        'Merit list declaration based on exam scores',
        'Seat confirmation and semester fee payment',
        'Access to Learning Management System (LMS)'
      ],
      careerOpportunities: [
        { role: 'Business Analyst', salary: '₹4-8 LPA' },
        { role: 'Marketing Manager', salary: '₹6-12 LPA' },
        { role: 'Financial Analyst', salary: '₹5-10 LPA' },
        { role: 'HR Manager', salary: '₹5-9 LPA' },
        { role: 'Operations Manager', salary: '₹6-11 LPA' },
        { role: 'Product Manager', salary: '₹8-15 LPA' },
        { role: 'Business Consultant', salary: '₹7-14 LPA' },
        { role: 'Entrepreneur/Startup Founder', salary: 'Variable' }
      ],
      topUniversities: ['IGNOU', 'Symbiosis', 'Amity University', 'Manipal University', 'NMIMS', 'Jain University', 'Chandigarh University']
    },
    'online-bca': {
      title: 'Online BCA',
      fullName: 'Bachelor of Computer Applications (Online)',
      type: 'online',
      duration: '3 Years',
      fee: '₹60,000 - ₹1,50,000',
      mode: 'Online / Distance Learning',
      eligibility: {
        basic: '10+2 from recognized board with minimum 50% (any stream)',
        entrance: 'Merit-based or university entrance test',
        subjects: 'Mathematics at 10+2 level preferred but not mandatory',
        age: 'No upper age limit'
      },
      overview: 'Online BCA is a three-year undergraduate program that teaches programming, web development, database management, and software engineering. Perfect for students who want to enter the IT industry without traditional classroom constraints.',
      specializations: ['Web Development', 'Mobile App Development', 'Cloud Computing', 'Cyber Security', 'Data Science', 'AI & Machine Learning'],
      highlights: [
        'No prior coding experience required',
        'Practical labs and hands-on projects',
        'Industry-recognized certifications included',
        'Internship opportunities with IT companies',
        'Learn latest programming languages',
        'Pathway to MCA and higher studies'
      ],
      curriculum: [
        { semester: 'Year 1', subjects: ['C Programming', 'Digital Electronics', 'Computer Fundamentals', 'Mathematics', 'Communication Skills', 'Web Technologies'] },
        { semester: 'Year 2', subjects: ['Data Structures', 'Java Programming', 'Database Management', 'Operating Systems', 'Software Engineering', 'Python Programming'] },
        { semester: 'Year 3', subjects: ['Computer Networks', 'Cloud Computing', 'Mobile App Development', 'Cyber Security', 'AI Basics', 'Major Project'] }
      ],
      admissionProcess: [
        'Verify 10+2 qualification with required percentage',
        'Apply online on university admission portal',
        'Upload mark sheets, certificates, and ID proof',
        'Pay application fee',
        'Merit list or entrance test (if applicable)',
        'Document verification and admission confirmation',
        'Fee payment and LMS access'
      ],
      careerOpportunities: [
        { role: 'Software Developer', salary: '₹3-6 LPA' },
        { role: 'Web Developer', salary: '₹2.5-5 LPA' },
        { role: 'Mobile App Developer', salary: '₹3-7 LPA' },
        { role: 'Database Administrator', salary: '₹3-6 LPA' },
        { role: 'System Analyst', salary: '₹4-7 LPA' },
        { role: 'UI/UX Designer', salary: '₹3-6 LPA' },
        { role: 'IT Support Engineer', salary: '₹2-4 LPA' },
        { role: 'Data Analyst', salary: '₹3-6 LPA' }
      ],
      topUniversities: ['IGNOU', 'Sikkim Manipal University', 'Amity Online', 'LPU Distance Education', 'Chandigarh University']
    },
    'campus-btech': {
      title: 'B.Tech (Engineering)',
      fullName: 'Bachelor of Technology',
      type: 'campus',
      duration: '4 Years',
      fee: '₹2,00,000 - ₹8,00,000/year',
      mode: 'Full-time On-Campus',
      eligibility: {
        basic: '10+2 with Physics, Chemistry, Mathematics (PCM) with minimum 75% (50% for SC/ST/PwD)',
        entrance: 'JEE Main for NITs/IIITs/GFTIs, JEE Advanced for IITs',
        age: 'Maximum 25 years (30 years for reserved categories)',
        attempts: 'JEE Advanced: Maximum 2 attempts'
      },
      overview: 'B.Tech is a four-year undergraduate engineering program offered at prestigious institutions like IITs, NITs, and IIITs. The program combines theoretical knowledge with practical applications through labs, projects, and internships.',
      specializations: ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics & Communication', 'Chemical Engineering', 'Aerospace Engineering', 'Biotechnology'],
      highlights: [
        'World-class campus infrastructure and labs',
        'On-campus placements from top MNCs',
        'Research opportunities and publications',
        'International exchange programs',
        'Industry collaborations and internships',
        'Hostel facilities and extracurricular activities'
      ],
      curriculum: [
        { semester: 'Year 1', subjects: ['Engineering Mathematics I & II', 'Engineering Physics', 'Engineering Chemistry', 'Programming in C', 'Engineering Graphics', 'Communication Skills'] },
        { semester: 'Year 2', subjects: ['Data Structures', 'Digital Logic', 'Analog Electronics', 'Engineering Mathematics III', 'Technical Writing', 'Core Branch Subjects'] },
        { semester: 'Year 3', subjects: ['Advanced Core Subjects', 'Electives', 'Microprocessors', 'Design Projects', 'Industrial Training', 'Research Methodology'] },
        { semester: 'Year 4', subjects: ['Specialization Subjects', 'Open Electives', 'Major Project/Thesis', 'Seminar', 'Industry Internship'] }
      ],
      admissionProcess: [
        'Appear for JEE Main (for NITs/IIITs) or JEE Advanced (for IITs)',
        'Check results and All India Rank',
        'Register for JoSAA counselling (for centralized admissions)',
        'Fill choice preferences (up to 100 options)',
        'Seat allotment based on rank and category',
        'Accept allocated seat and pay seat acceptance fee',
        'Document verification at allocated institute',
        'Final admission and hostel allocation'
      ],
      careerOpportunities: [
        { role: 'Software Engineer', salary: '₹6-25 LPA' },
        { role: 'Mechanical Engineer', salary: '₹4-12 LPA' },
        { role: 'Data Scientist', salary: '₹8-20 LPA' },
        { role: 'Civil Engineer', salary: '₹3-10 LPA' },
        { role: 'Electronics Engineer', salary: '₹5-15 LPA' },
        { role: 'Product Manager', salary: '₹10-30 LPA' },
        { role: 'Research Scientist', salary: '₹8-18 LPA' },
        { role: 'Core Engineering Roles', salary: '₹5-15 LPA' }
      ],
      topUniversities: ['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur', 'NIT Trichy', 'NIT Surathkal', 'IIIT Hyderabad', 'BITS Pilani']
    },
    'campus-mbbs': {
      title: 'MBBS (Medical)',
      fullName: 'Bachelor of Medicine, Bachelor of Surgery',
      type: 'campus',
      duration: '5.5 Years (including 1 year internship)',
      fee: '₹50,000 - ₹25,00,000/year',
      mode: 'Full-time On-Campus',
      eligibility: {
        basic: '10+2 with Physics, Chemistry, Biology (PCB) with minimum 50% (40% for SC/ST/PwD)',
        entrance: 'NEET-UG (National Eligibility cum Entrance Test)',
        age: 'Minimum 17 years as of December 31st, Maximum 25 years (30 for reserved)',
        neet: 'NEET qualification mandatory for all medical admissions'
      },
      overview: 'MBBS is a 5.5-year undergraduate medical program that trains students to become doctors. The course includes 4.5 years of academic study followed by a compulsory 1-year rotating internship in hospitals.',
      specializations: ['General Medicine', 'General Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Orthopedics', 'Ophthalmology', 'ENT', 'Dermatology'],
      highlights: [
        'Clinical training in government/private hospitals',
        'Hands-on experience with real patients',
        'World-class medical infrastructure',
        'Expert faculty and senior doctors',
        'Rotating internship across departments',
        'Pathway to MD/MS specialization'
      ],
      curriculum: [
        { semester: 'Phase 1 (1.5 years)', subjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Community Medicine', 'Foundation Course'] },
        { semester: 'Phase 2 (1.5 years)', subjects: ['Pathology', 'Pharmacology', 'Microbiology', 'Forensic Medicine', 'Community Medicine'] },
        { semester: 'Phase 3 (1.5 years)', subjects: ['Medicine', 'Surgery', 'Obstetrics & Gynecology', 'Pediatrics', 'Orthopedics', 'ENT', 'Ophthalmology', 'Psychiatry'] },
        { semester: 'Internship (1 year)', subjects: ['Rotating internship across Medicine, Surgery, OBG, Pediatrics, and other departments'] }
      ],
      admissionProcess: [
        'Appear for NEET-UG examination',
        'Check NEET results and All India Rank',
        'Register for MCC counselling (for AIIMS/central seats) or state counselling',
        'Pay registration fee and security deposit',
        'Fill choice preferences for colleges',
        'Attend document verification (online/offline)',
        'Seat allotment in multiple rounds',
        'Join allocated medical college within deadline'
      ],
      careerOpportunities: [
        { role: 'Junior Resident Doctor', salary: '₹60,000-80,000/month' },
        { role: 'Medical Officer (Govt)', salary: '₹50,000-70,000/month' },
        { role: 'General Physician', salary: '₹40,000-1,00,000/month' },
        { role: 'Hospital Administrator', salary: '₹4-8 LPA' },
        { role: 'Medical Consultant', salary: '₹6-15 LPA' },
        { role: 'Private Practice', salary: 'Variable (₹50,000-5,00,000+/month)' },
        { role: 'After MD/MS Specialization', salary: '₹10-50 LPA+' }
      ],
      topUniversities: ['AIIMS Delhi', 'AIIMS Jodhpur', 'CMC Vellore', 'JIPMER Puducherry', 'King George Medical University', 'Maulana Azad Medical College', 'Grant Medical College']
    }
  };

  const courseDetails = courseDatabase[courseId] || {
    title: 'Course Not Found',
    fullName: '',
    type: 'online',
    duration: '',
    fee: '',
    overview: 'Course information not available.',
    specializations: [],
    highlights: [],
    curriculum: [],
    admissionProcess: [],
    careerOpportunities: [],
    topUniversities: []
  };

  const backPage = courseDetails.type === 'online' ? 'online-admission-page' : 'campus-admission-page';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2472] via-[#1A3A8F] to-[#0A2472]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A2472]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.location.hash = backPage}
              className="flex items-center gap-2 text-white hover:text-[#F4C430] transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-semibold">Back to {courseDetails.type === 'online' ? 'Online' : 'Campus'} Admission</span>
            </button>
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-[#F4C430] text-[#0A2472] px-6 py-2 rounded-lg hover:bg-white transition-all font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="inline-flex items-center gap-2 bg-[#F4C430]/20 text-[#F4C430] px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              {courseDetails.type === 'online' ? 'Online Course' : 'Campus Course'}
            </div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">{courseDetails.fullName}</h1>
            <p className="text-xl text-white/80 mb-8">{courseDetails.overview}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <Clock className="w-6 h-6 text-[#F4C430] mb-2" />
                <div className="text-white/60 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold">{courseDetails.duration}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <DollarSign className="w-6 h-6 text-[#F4C430] mb-2" />
                <div className="text-white/60 text-sm mb-1">Fee Range</div>
                <div className="text-white font-semibold text-sm">{courseDetails.fee}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <BookOpen className="w-6 h-6 text-[#F4C430] mb-2" />
                <div className="text-white/60 text-sm mb-1">Mode</div>
                <div className="text-white font-semibold text-sm">{courseDetails.mode}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Award className="w-6 h-6 text-[#F4C430] mb-2" />
                <div className="text-white/60 text-sm mb-1">Degree Type</div>
                <div className="text-white font-semibold text-sm">{courseDetails.type === 'online' ? 'UGC Approved' : 'Regular Degree'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseDetails.eligibility && Object.entries(courseDetails.eligibility).map(([key, value], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="text-white/70 text-sm">{value as string}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Course Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseDetails.highlights.map((highlight: string, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-[#F4C430] hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F4C430] to-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#0A2472]" />
                  </div>
                  <p className="text-white text-sm leading-relaxed pt-1">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      {courseDetails.specializations.length > 0 && (
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Specializations Available</h2>
            <div className="flex flex-wrap gap-3">
              {courseDetails.specializations.map((spec: string, index: number) => (
                <span key={index} className="bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-full border border-white/20 hover:bg-[#1A73E8] hover:border-[#1A73E8] transition-all cursor-default">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Curriculum Overview</h2>
          <div className="space-y-4">
            {courseDetails.curriculum.map((item: any, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#F4C430]" />
                  {item.semester || item.year}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.subjects.map((subject: string, idx: number) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-white/80 text-sm">
                      • {subject}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Admission Process</h2>
          <div className="space-y-4">
            {courseDetails.admissionProcess.map((step: string, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 flex items-start gap-4 hover:bg-white/15 transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1A73E8] to-[#0D5DBD] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-white pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseDetails.careerOpportunities.map((career: any, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-[#F4C430] hover:-translate-y-2 transition-all">
                <Briefcase className="w-8 h-8 text-[#F4C430] mb-4" />
                <h3 className="text-xl text-white font-bold mb-2">{career.role}</h3>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <TrendingUp className="w-4 h-4 text-[#F4C430]" />
                  <span>{career.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      {courseDetails.topUniversities.length > 0 && (
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">Top Universities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courseDetails.topUniversities.map((uni: string, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all">
                  <Award className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">{uni}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] rounded-2xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl text-white mb-4 font-bold">Ready to Apply?</h3>
            <p className="text-white/90 text-lg mb-8">Get started with your {courseDetails.title} admission today</p>
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-white text-[#1A73E8] px-8 py-4 rounded-xl hover:bg-[#F4C430] hover:text-[#1C1C1C] transition-all font-bold text-lg inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl border border-blue-100">
            <button
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-4 right-4 text-[#0A2472] hover:text-red-600 hover:bg-red-50 rounded-lg p-1.5 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-[#0A2472] mb-2">Apply for {courseDetails.title}</h3>
            <p className="text-blue-600/70 text-sm mb-6">Fill in your details to start your application</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#0A2472] font-semibold mb-2 text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl text-[#0A2472] placeholder:text-blue-400/60 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-medium"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#0A2472] font-semibold mb-2 text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl text-[#0A2472] placeholder:text-blue-400/60 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-medium"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#0A2472] font-semibold mb-2 text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl text-[#0A2472] placeholder:text-blue-400/60 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-medium"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#0A2472] font-semibold mb-2 text-sm">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl text-[#0A2472] placeholder:text-blue-400/60 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 focus:outline-none transition-all bg-white/80 backdrop-blur-sm resize-none font-medium"
                  placeholder="Tell us about your background or questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0D5DBD] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
