import { useState } from 'react';
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
  Send
} from 'lucide-react';

export function CanadaPagePremium() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I am interested in studying in Canada. Please guide me.');
    window.open(`https://wa.me/917299005577?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Canada Study Abroad Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse Interest: ${formData.course}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${subject}&body=${body}`;
  };

  const universities = [
    {
      name: 'University of Toronto',
      rank: 'QS #25',
      location: 'Toronto, ON',
      tuition: 'CAD 45,000 - 55,000',
      programs: ['Engineering', 'Business', 'Computer Science', 'Medicine'],
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop'
    },
    {
      name: 'University of British Columbia',
      rank: 'QS #34',
      location: 'Vancouver, BC',
      tuition: 'CAD 40,000 - 50,000',
      programs: ['Sciences', 'Arts', 'Business', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop'
    },
    {
      name: 'McGill University',
      rank: 'QS #46',
      location: 'Montreal, QC',
      tuition: 'CAD 35,000 - 45,000',
      programs: ['Medicine', 'Law', 'Engineering', 'Arts'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop'
    },
    {
      name: 'University of Waterloo',
      rank: 'Top for Tech',
      location: 'Waterloo, ON',
      tuition: 'CAD 40,000 - 52,000',
      programs: ['Computer Science', 'Engineering', 'Mathematics'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      name: 'McMaster University',
      rank: 'Top for Health Sci',
      location: 'Hamilton, ON',
      tuition: 'CAD 35,000 - 45,000',
      programs: ['Health Sciences', 'Engineering', 'Business'],
      image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400&h=300&fit=crop'
    },
    {
      name: 'University of Alberta',
      rank: 'Top Research Uni',
      location: 'Edmonton, AB',
      tuition: 'CAD 30,000 - 40,000',
      programs: ['Research', 'Engineering', 'Sciences', 'Business'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop'
    }
  ];

  const admissionRequirements = [
    { title: 'Academic Transcripts', desc: '10th, 12th & Bachelor\'s degree marks', icon: FileText },
    { title: 'English Proficiency', desc: 'IELTS 6.5+ or TOEFL 90+', icon: Globe },
    { title: 'SOP & LORs', desc: 'Statement of Purpose + 2-3 recommendation letters', icon: Award },
    { title: 'Financial Proof', desc: 'Show CAD 20,000+ in bank account', icon: DollarSign }
  ];

  const visaSteps = [
    { step: 'Get Admission Letter', duration: '2-6 months', desc: 'Apply and receive offer from a DLI' },
    { step: 'GCKey Registration', duration: '1 day', desc: 'Create account on IRCC portal' },
    { step: 'Document Submission', duration: '1-2 weeks', desc: 'Upload documents & pay visa fee' },
    { step: 'Biometrics', duration: '1 week', desc: 'Visit VAC for fingerprints & photo' },
    { step: 'Study Permit Approval', duration: '4-8 weeks', desc: 'Receive decision and travel' }
  ];

  const scholarships = [
    { name: 'Vanier Canada Graduate Scholarships', amount: 'CAD 50,000/year', for: 'PhD students' },
    { name: 'Lester B. Pearson Scholarship', amount: 'Full Tuition + Living', for: 'UofT International Students' },
    { name: 'University Merit Awards', amount: 'CAD 5,000 - 20,000', for: 'High academic achievers' },
    { name: 'Ontario Graduate Scholarship', amount: 'CAD 15,000', for: 'Graduate students in Ontario' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Chennai, India',
      university: 'University of Toronto',
      course: 'MBA',
      text: 'The PGWP program helped me gain 3 years of Canadian work experience. I applied for PR and got it within 18 months. Canada truly welcomes skilled immigrants!',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      location: 'Mumbai, India',
      university: 'UBC Vancouver',
      course: 'Computer Science',
      text: 'Best decision ever! Affordable education, multicultural environment, and amazing job opportunities. I landed a job at a top tech company right after graduation.',
      rating: 5
    },
    {
      name: 'Ananya Desai',
      location: 'Bangalore, India',
      university: 'Waterloo',
      course: 'Engineering',
      text: 'Waterloo\'s co-op program gave me real work experience while studying. The quality of education and support for international students is outstanding!',
      rating: 5
    }
  ];

  const faqs = [
    {
      q: 'How much does it cost to study in Canada?',
      a: 'Tuition fees range from CAD 15,000 to 55,000 per year depending on the program and university. Living expenses are around CAD 12,000-25,000 per year. Cities like Toronto and Vancouver are more expensive than smaller cities.'
    },
    {
      q: 'Can I work while studying in Canada?',
      a: 'Yes! International students can work up to 20 hours per week off-campus during semesters and full-time during scheduled breaks. No separate work permit is needed - it\'s included in your study permit.'
    },
    {
      q: 'What is PGWP and how does it help with PR?',
      a: 'Post-Graduation Work Permit (PGWP) allows you to work in Canada for 8 months to 3 years after graduation, depending on your program length. After gaining 1 year of skilled work experience, you can apply for permanent residency through Express Entry - Canadian Experience Class.'
    },
    {
      q: 'How long does the visa process take?',
      a: 'Study permit processing typically takes 4-8 weeks from the date of application. However, it\'s recommended to apply at least 3-4 months before your program start date to account for any delays.'
    },
    {
      q: 'Do I need IELTS for Canada?',
      a: 'Yes, most Canadian universities require English proficiency tests. IELTS (minimum 6.5 overall) or TOEFL (minimum 90) are widely accepted. Some universities also accept PTE, Duolingo, or their own English placement tests.'
    },
    {
      q: 'Is PR possible after studying in Canada?',
      a: 'Yes! Canada has one of the most immigrant-friendly policies. Through PGWP, you can work for up to 3 years. After gaining 1 year of skilled work experience, you can apply for PR through Express Entry, Provincial Nominee Programs, or Canadian Experience Class with high success rates.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4FF] to-white">
      {/* Premium Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-[#E5E9F2] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-[22px] font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                StudyAbroad Pro
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'home';
                }}
                className="text-[#64748B] hover:text-[#1E40AF] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#countries"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'home';
                  setTimeout(() => {
                    document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-[#64748B] hover:text-[#1E40AF] font-medium text-[15px] transition-colors cursor-pointer"
              >
                Countries
              </a>
              <span className="text-[#1E40AF] font-bold text-[15px]">Canada</span>
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all"
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
            href="#countries"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'home';
              setTimeout(() => {
                document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#1E40AF] text-[14px] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Countries
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#60A5FA]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E5E9F2] mb-6 shadow-sm">
                <span className="text-3xl">🍁</span>
                <span className="text-[#1E40AF] text-[14px] font-bold">Premium Study Destination</span>
              </div>

              {/* Heading */}
              <h1 className="text-[58px] font-bold bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent mb-6 leading-tight">
                Study in Canada
              </h1>

              {/* Subtext */}
              <p className="text-[#475569] text-[20px] leading-relaxed mb-8">
                World-class education, affordable tuition, and a clear pathway to permanent residency. Canada welcomes <span className="font-bold text-[#1E40AF]">800,000+</span> international students every year.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-[28px] font-bold text-[#1E40AF]">26</div>
                  <div className="text-[#64748B] text-[13px]">Top Universities</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-[28px] font-bold text-[#1E40AF]">3 Yrs</div>
                  <div className="text-[#64748B] text-[13px]">Work Permit</div>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-[#E5E9F2]">
                  <div className="text-[28px] font-bold text-[#1E40AF]">98%</div>
                  <div className="text-[#64748B] text-[13px]">Visa Success</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-xl font-semibold text-[16px] hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1"
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

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop"
                  alt="Canadian University Campus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/40 to-transparent"></div>
              </div>
              {/* Floating Tags */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E40AF]">Top Ranked</div>
                    <div className="text-[#64748B] text-[13px]">QS World Rankings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              WORLD-CLASS INSTITUTIONS
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Top Universities in Canada
            </h2>
            <p className="text-[#64748B] text-[18px] max-w-3xl mx-auto">
              Study at globally recognized institutions with cutting-edge research and industry connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E5E9F2] hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-[#1E40AF] font-bold text-[13px]">{uni.rank}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-bold text-[#0F172A] mb-2">{uni.name}</h3>
                  <div className="flex items-center gap-2 text-[#64748B] text-[14px] mb-4">
                    <Globe className="w-4 h-4" />
                    {uni.location}
                  </div>
                  <div className="flex items-center gap-2 text-[#1E40AF] text-[14px] font-semibold mb-4">
                    <DollarSign className="w-4 h-4" />
                    {uni.tuition}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.slice(0, 3).map((prog, idx) => (
                      <span
                        key={idx}
                        className="text-[12px] px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E40AF] font-medium"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              APPLICATION PROCESS
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Admission Requirements
            </h2>
            <p className="text-[#64748B] text-[18px]">
              Essential documents needed for your Canadian university application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionRequirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-[#E5E9F2] hover:border-[#3B82F6] transition-all hover:shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">{req.title}</h3>
                  <p className="text-[#64748B] text-[14px]">{req.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              STEP-BY-STEP GUIDE
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Student Visa Process
            </h2>
            <p className="text-[#64748B] text-[18px]">
              Simple and transparent visa application journey
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#1E40AF] hidden lg:block"></div>

            <div className="space-y-8">
              {visaSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#E5E9F2] hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-[18px]">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">{step.step}</h3>
                        <p className="text-[#64748B] text-[14px] mb-2">{step.desc}</p>
                        <div className="flex items-center gap-2 text-[#1E40AF] text-[13px] font-medium">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              FUNDING OPPORTUNITIES
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-[#64748B] text-[18px]">
              Reduce your study costs with these scholarship opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0F172A] mb-3">{scholarship.name}</h3>
                <div className="text-[#1E40AF] font-bold text-[18px] mb-2">{scholarship.amount}</div>
                <p className="text-[#64748B] text-[13px]">For: {scholarship.for}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              BUDGET PLANNING
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Tuition Fees & Cost of Living
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tuition */}
            <div className="bg-gradient-to-br from-[#EFF6FF] to-white rounded-2xl p-8 border border-[#E5E9F2]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0F172A]">Annual Tuition Fees</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">Undergraduate Programs</span>
                  <span className="font-bold text-[#1E40AF]">CAD 15,000 - 35,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">Postgraduate Programs</span>
                  <span className="font-bold text-[#1E40AF]">CAD 18,000 - 50,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">MBA Programs</span>
                  <span className="font-bold text-[#1E40AF]">CAD 30,000 - 65,000</span>
                </div>
              </div>
            </div>

            {/* Living Cost */}
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-8 border border-[#E5E9F2]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0F172A]">Monthly Living Costs</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">Accommodation</span>
                  <span className="font-bold text-[#10B981]">CAD 600 - 1,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">Food & Groceries</span>
                  <span className="font-bold text-[#10B981]">CAD 250 - 500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">Transportation</span>
                  <span className="font-bold text-[#10B981]">CAD 80 - 150</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-[#64748B]">Other Expenses</span>
                  <span className="font-bold text-[#10B981]">CAD 250 - 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work & PR Opportunities */}
      <section className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-[13px] mb-4">
              CAREER OPPORTUNITIES
            </div>
            <h2 className="text-[42px] font-bold text-white mb-4">
              Work Rights & PR Pathway
            </h2>
            <p className="text-white/90 text-[18px] max-w-3xl mx-auto">
              Canada offers excellent opportunities for international students to work and settle permanently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-[#1E40AF]" />
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">Part-Time Work</h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-4">
                Work up to 20 hours/week off-campus during semesters and full-time during breaks. No separate work permit needed!
              </p>
              <div className="text-[#F59E0B] font-bold text-[16px]">CAD 15-20/hour average</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <Plane className="w-7 h-7 text-[#1E40AF]" />
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">PGWP</h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-4">
                Post-Graduation Work Permit allows you to work in Canada for up to 3 years after completing your studies.
              </p>
              <div className="text-[#F59E0B] font-bold text-[16px]">8 months - 3 years validity</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#1E40AF]" />
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">PR Pathway</h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-4">
                After 1 year of skilled work experience, apply for permanent residency through Express Entry with high success rates.
              </p>
              <div className="text-[#F59E0B] font-bold text-[16px]">1-2 years to PR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Student Testimonials
            </h2>
            <p className="text-[#64748B] text-[18px]">
              Hear from students who made Canada their second home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-[#E5E9F2] hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#475569] text-[15px] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-[20px]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-[#64748B] text-[13px]">{testimonial.location}</div>
                    <div className="text-[#1E40AF] text-[13px] font-medium">
                      {testimonial.course} • {testimonial.university}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full text-[#1E40AF] font-semibold text-[13px] mb-4">
              GOT QUESTIONS?
            </div>
            <h2 className="text-[42px] font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E5E9F2] overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-semibold text-[#0F172A] text-[16px] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#64748B] transition-transform flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#64748B] text-[15px] leading-relaxed border-t border-[#E5E9F2] pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-[42px] font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-[18px]">
              Fill out the form and our expert counselors will contact you within 24 hours
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2 text-[14px]">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-[14px]">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2 text-[14px]">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-[14px]">Course Interest</label>
                <input
                  type="text"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="e.g., MBA, Engineering"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-2 text-[14px]">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                placeholder="Tell us about your study abroad plans..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-[#1E40AF] rounded-xl font-bold text-[16px] hover:bg-[#F8FAFC] transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <div className="absolute w-16 h-16 bg-[#25D366] rounded-full animate-ping opacity-30"></div>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-2 bg-[#0F172A] text-white rounded-lg text-[13px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
            Chat with Expert
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-[#0F172A]"></div>
          </div>
        </button>
      </div>

      {/* Enquiry Popup */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-[#64748B] text-[20px]">×</span>
            </button>

            <div className="mb-6">
              <h3 className="text-[28px] font-bold text-[#0F172A] mb-2">Send Enquiry</h3>
              <p className="text-[#64748B] text-[15px]">
                Our expert counselors will contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2 text-[14px]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E9F2] focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2 text-[14px]">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E9F2] focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2 text-[14px]">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E9F2] focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2 text-[14px]">Course Interest</label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E9F2] focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="e.g., MBA, Engineering"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0F172A] font-medium mb-2 text-[14px]">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E9F2] focus:border-[#3B82F6] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your study abroad plans..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-xl font-bold text-[16px] hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
