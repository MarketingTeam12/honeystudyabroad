export type MarketingPageSlug =
  | "usa"
  | "uk"
  | "canada"
  | "australia"
  | "singapore"
  | "germany"
  | "france"
  | "new-zealand"
  | "ireland"
  | "europe"
  | "india-admission"
  | "visa-assistance"
  | "university-admissions"
  | "scholarship-guidance"
  | "ielts-test-prep"
  | "online-admission"
  | "campus-admission"
  | "career-counseling"
  | "pre-departure";

export type MarketingPageConfig = {
  slug: MarketingPageSlug;
  path: `/${MarketingPageSlug}`;
  title: string;
  description: string;
  keywords: string[];
};

export const COUNTRY_PAGES = [
  {
    slug: "usa",
    path: "/usa",
    title: "Study in USA Consultant | Admissions, Visa & Scholarships",
    description:
      "Get expert guidance to study in the USA with university shortlisting, applications, visa support, scholarships, and pre-departure counselling.",
    keywords: ["study in usa", "usa student visa", "usa admissions consultant", "scholarships in usa"],
  },
  {
    slug: "uk",
    path: "/uk",
    title: "Study in UK Consultant | Admissions, Visa & Scholarships",
    description:
      "Explore UK universities with expert support for admissions, student visas, scholarships, SOP guidance, and complete study abroad planning.",
    keywords: ["study in uk", "uk student visa", "uk admissions consultant", "scholarships in uk"],
  },
  {
    slug: "canada",
    path: "/canada",
    title: "Study in Canada Consultant | Admissions, Visa & PR Pathways",
    description:
      "Plan your study in Canada journey with support for admissions, visa filing, scholarships, college selection, and post-study opportunities.",
    keywords: ["study in canada", "canada student visa", "canada admissions consultant", "canada pr pathway"],
  },
  {
    slug: "australia",
    path: "/australia",
    title: "Study in Australia Consultant | Admissions & Visa Support",
    description:
      "Get personalized help for studying in Australia, including course selection, university applications, visa assistance, and scholarships.",
    keywords: ["study in australia", "australia student visa", "australia admissions consultant", "australia scholarships"],
  },
  {
    slug: "singapore",
    path: "/singapore",
    title: "Study in Singapore Consultant | Admissions & Visa Guidance",
    description:
      "Apply to top Singapore universities with expert guidance for admissions, student visas, profile building, and scholarships.",
    keywords: ["study in singapore", "singapore admissions consultant", "singapore student visa", "nus admissions"],
  },
  {
    slug: "germany",
    path: "/germany",
    title: "Study in Germany Consultant | Public Universities & Visa Support",
    description:
      "Get end-to-end guidance for studying in Germany, including public university applications, blocked account support, and visa processing.",
    keywords: ["study in germany", "germany student visa", "germany admissions consultant", "public universities in germany"],
  },
  {
    slug: "france",
    path: "/france",
    title: "Study in France Consultant | Admissions, Campus France & Visa",
    description:
      "Receive expert help for studying in France with course selection, applications, Campus France guidance, and student visa support.",
    keywords: ["study in france", "campus france", "france student visa", "france admissions consultant"],
  },
  {
    slug: "new-zealand",
    path: "/new-zealand",
    title: "Study in New Zealand Consultant | Admissions & Student Visa",
    description:
      "Plan your education in New Zealand with help for university admissions, visa filing, scholarships, and long-term career pathways.",
    keywords: ["study in new zealand", "new zealand student visa", "new zealand admissions consultant", "study abroad new zealand"],
  },
  {
    slug: "ireland",
    path: "/ireland",
    title: "Study in Ireland Consultant | Admissions, Visa & Scholarships",
    description:
      "Find the right university in Ireland with expert support for admissions, student visa processing, scholarships, and career planning.",
    keywords: ["study in ireland", "ireland student visa", "ireland admissions consultant", "ireland scholarships"],
  },
  {
    slug: "europe",
    path: "/europe",
    title: "Study in Europe Consultant | Multi-Country Admissions Support",
    description:
      "Compare top Europe study destinations and get expert support for admissions, visas, scholarships, and university applications.",
    keywords: ["study in europe", "europe admissions consultant", "europe student visa", "study abroad europe"],
  },
] satisfies MarketingPageConfig[];

export const SERVICE_PAGES = [
  {
    slug: "india-admission",
    path: "/india-admission",
    title: "India Admission Guidance | College Applications & Counselling",
    description:
      "Get personalized India admission support for college selection, application guidance, documentation, and career counselling.",
    keywords: ["india admission guidance", "college admissions india", "admission counsellor", "higher education india"],
  },
  {
    slug: "visa-assistance",
    path: "/visa-assistance",
    title: "Student Visa Assistance | Documentation, SOP & Interview Support",
    description:
      "Improve your visa success rate with expert support for documentation, financial proofs, SOP review, and visa interview preparation.",
    keywords: ["student visa assistance", "visa documentation", "visa interview support", "study abroad visa consultant"],
  },
  {
    slug: "university-admissions",
    path: "/university-admissions",
    title: "University Admissions Guidance | Applications, SOP & Profile Support",
    description:
      "Apply with confidence using expert guidance for university shortlisting, application strategy, SOPs, LORs, and admissions planning.",
    keywords: ["university admissions guidance", "study abroad applications", "sop guidance", "admissions consultant"],
  },
  {
    slug: "scholarship-guidance",
    path: "/scholarship-guidance",
    title: "Scholarship Guidance | Financial Aid & Merit Funding Support",
    description:
      "Discover scholarships and funding options with expert support for shortlisting, application strategy, essays, and documentation.",
    keywords: ["scholarship guidance", "study abroad scholarships", "financial aid support", "scholarship consultant"],
  },
  {
    slug: "ielts-test-prep",
    path: "/ielts-test-prep",
    title: "IELTS and Test Prep Guidance | Language & Entrance Exam Support",
    description:
      "Prepare for IELTS and other study abroad exams with expert coaching, structured preparation guidance, and score improvement strategies.",
    keywords: ["ielts coaching", "test prep guidance", "toefl gre gmat prep", "study abroad exam support"],
  },
  {
    slug: "online-admission",
    path: "/online-admission",
    title: "Online Admission Support | Digital Applications & Documentation",
    description:
      "Complete online university applications correctly with expert help for portals, document uploads, fee payments, and tracking.",
    keywords: ["online admission support", "digital university application", "application portal help", "study abroad online application"],
  },
  {
    slug: "campus-admission",
    path: "/campus-admission",
    title: "Campus Admission Support | University Applications & Enrollment",
    description:
      "Receive end-to-end campus admission support for course selection, application filing, offer follow-up, and final enrollment steps.",
    keywords: ["campus admission support", "university enrollment support", "college application help", "admission consultant"],
  },
  {
    slug: "career-counseling",
    path: "/career-counseling",
    title: "Career Counselling for Study Abroad | Profile & Course Planning",
    description:
      "Clarify your study abroad plan with expert career counselling, profile evaluation, course selection, and long-term planning support.",
    keywords: ["career counselling study abroad", "course selection guidance", "profile evaluation", "education counselling"],
  },
  {
    slug: "pre-departure",
    path: "/pre-departure",
    title: "Pre-Departure Guidance | Travel, Accommodation & Student Readiness",
    description:
      "Prepare for your move abroad with expert pre-departure guidance covering travel, accommodation, documents, and student readiness.",
    keywords: ["pre departure guidance", "student travel preparation", "study abroad checklist", "international student support"],
  },
] satisfies MarketingPageConfig[];

export const MARKETING_PAGES = [...COUNTRY_PAGES, ...SERVICE_PAGES] satisfies MarketingPageConfig[];

export function getMarketingPageBySlug(slug: string) {
  return MARKETING_PAGES.find((page) => page.slug === slug) ?? null;
}
