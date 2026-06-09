import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Clock, FileText, Mail, MessageCircle, Phone, Quote, Search, ShieldCheck, Star } from "lucide-react";

import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { brandLogoPaths } from "@/app/data/logos";
import type { CityLandingPageRecord } from "@/types/city-pages";

type CityLandingPageProps = {
  page: CityLandingPageRecord;
};

type FaqItem = {
  question: string;
  answer: string;
};

type BrandLogoItem = {
  name: string;
  src?: string | null;
  slotClass?: string;
  imageClassName?: string;
  render?: () => JSX.Element;
};

const TRUSTED_BRANDS: BrandLogoItem[] = [
  {
    name: "DBS Bank",
    src: brandLogoPaths.dbsBank,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]",
  },
  {
    name: "Fratelli",
    src: brandLogoPaths.fratelli,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]",
  },
  {
    name: "Muthoot Finance",
    src: brandLogoPaths.muthootFinance,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]",
  },
  {
    name: "Surveyors",
    src: brandLogoPaths.surveyors,
    slotClass: "w-[128px] sm:w-[146px] lg:w-[164px]",
    imageClassName: "max-h-[60px] sm:max-h-[68px] lg:max-h-[76px]",
  },
  {
    name: "ARC",
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    render: () => (
      <div className="flex h-[52px] w-[92px] items-center justify-center overflow-hidden rounded-full sm:h-[58px] sm:w-[102px] lg:h-[64px] lg:w-[112px]">
        <img
          src={brandLogoPaths.arc ?? ""}
          alt="ARC"
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.35] object-contain object-center"
        />
      </div>
    ),
  },
  {
    name: "Saint-Gobain",
    src: brandLogoPaths.saintGobain,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]",
  },
  {
    name: "LRK",
    src: brandLogoPaths.lrk,
    slotClass: "w-[128px] sm:w-[146px] lg:w-[164px]",
    imageClassName: "max-h-[58px] sm:max-h-[64px] lg:max-h-[72px]",
  },
  {
    name: "Aachi",
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    render: () => (
      <div className="flex h-[52px] w-[96px] items-center justify-center overflow-hidden sm:h-[58px] sm:w-[108px] lg:h-[64px] lg:w-[118px]">
        <img
          src={brandLogoPaths.aachi ?? ""}
          alt="Aachi"
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.18] object-contain object-center"
        />
      </div>
    ),
  },
  {
    name: "The New India Assurance Company Limited",
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    render: () => (
      <div className="flex h-[52px] w-[92px] items-center justify-start overflow-hidden sm:h-[58px] sm:w-[102px] lg:h-[64px] lg:w-[112px]">
        <img
          src={brandLogoPaths.theNewIndiaAssuranceCompanyLimited ?? ""}
          alt="The New India Assurance Company Limited"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-left"
        />
      </div>
    ),
  },
  {
    name: "STAR Health Insurance",
    src: brandLogoPaths.starHealthInsurance,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]",
  },
  {
    name: "TVS",
    src: brandLogoPaths.tvs,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]",
  },
  {
    name: "Bright Light Society",
    src: brandLogoPaths.brightLightSociety,
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    imageClassName: "max-h-[44px] sm:max-h-[48px] lg:max-h-[54px]",
  },
  {
    name: "Growth Hackers",
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    render: () => (
      <svg viewBox="0 0 180 100" className="h-[48px] w-auto sm:h-[52px] lg:h-[58px]">
        <path d="M36 28c0-11 8-19 20-19 11 0 18 5 21 14h-14c-1-2-4-4-7-4-6 0-10 4-10 10 0 7 4 11 11 11 5 0 9-2 11-6H54V26h27v7c-1 7-7 18-25 18-13 0-20-9-20-23Z" fill="#111111" />
        <path d="M88 10h14v15l11-8 12-9v39h-14V31l-10 8-13 10V10Z" fill="#36A3FF" />
        <text x="90" y="78" textAnchor="middle" fill="#111111" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">GROWTH HACKERS</text>
      </svg>
    ),
  },
  {
    name: "HP Identity",
    slotClass: "w-[110px] sm:w-[130px] lg:w-[150px]",
    render: () => (
      <svg viewBox="0 0 170 95" className="h-[48px] w-auto sm:h-[52px] lg:h-[58px]">
        <path d="M44 17c-10 2-18 10-20 20 2 12 11 21 22 24-6-5-10-12-10-21s3-16 8-23Z" fill="#E53935" />
        <ellipse cx="72" cy="35" rx="34" ry="22" fill="#1E88E5" stroke="#90CAF9" strokeWidth="2" />
        <path d="M101 17c8 4 14 11 16 20-2 12-9 20-19 24 5-5 8-12 8-21 0-9-2-16-5-23Z" fill="#E53935" />
        <text x="72" y="42" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="700" fontFamily="Georgia, serif">HP</text>
        <text x="72" y="71" textAnchor="middle" fill="#2E5C86" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif">HP VALVES &amp; FITTINGS</text>
        <text x="72" y="81" textAnchor="middle" fill="#2E5C86" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif">INDIA PVT. LTD.</text>
      </svg>
    ),
  },
];

function buildFaqItems(page: CityLandingPageRecord): FaqItem[] {
  const items = [
    { question: page.faq_q1, answer: page.faq_a1 },
    { question: page.faq_q2, answer: page.faq_a2 },
    { question: page.faq_q3, answer: page.faq_a3 },
  ];

  return items.filter((item) => item.question.trim() && item.answer.trim());
}

function buildLocationLabel(page: CityLandingPageRecord) {
  const parts = [page.area.trim(), page.city.trim()].filter(Boolean);
  return parts.join(", ");
}

function buildProcessSteps(page: CityLandingPageRecord, locationLabel: string) {
  const serviceLabel = page.hero_h1.trim() || page.page_title.trim() || "our service";
  const supportLocation = locationLabel || page.city.trim() || "your location";

  return [
    {
      title: "Share your requirement",
      text: `Tell us what you need for ${serviceLabel.toLowerCase()} and the timeline you are targeting in ${supportLocation}.`,
      icon: MessageCircle,
    },
    {
      title: "Document review",
      text: "We review the file type, language pair, formatting needs, and any certification or attestation requirements.",
      icon: Search,
    },
    {
      title: "Expert processing",
      text: "Our team handles translation, quality checks, and compliance steps with clear communication throughout.",
      icon: FileText,
    },
    {
      title: "Delivery and support",
      text: "Receive the final output on time with follow-up help for corrections, submission, or clarification if needed.",
      icon: ShieldCheck,
    },
  ];
}

function buildTestimonials(page: CityLandingPageRecord, locationLabel: string) {
  const cityName = page.city.trim() || "Chennai";
  const areaName = page.area.trim() || "local clients";
  const serviceLabel = page.hero_h1.trim() || page.page_title.trim() || "translation support";

  return [
    {
      name: "Priya S.",
      role: `${cityName} Student Applicant`,
      quote: `The team made my ${serviceLabel.toLowerCase()} process simple and fast. Everything was explained clearly and delivered on time.`,
    },
    {
      name: "Arun K.",
      role: `${areaName} Working Professional`,
      quote: "I needed clean, accurate documents for an urgent submission. The response was quick, professional, and completely reliable.",
    },
    {
      name: "Nandhini R.",
      role: `${cityName} Business Client`,
      quote: "Communication was smooth from start to finish. The final output looked polished and was ready to use without extra follow-up.",
    },
  ];
}

function buildTranslatedDocuments() {
  return [
    "Birth Certificates",
    "Marriage Certificates",
    "Degree Certificates",
    "Mark Sheets",
    "Passports",
    "Visa Documents",
    "Legal Agreements",
    "Medical Reports",
    "Bank Statements",
    "Business Contracts",
    "Police Clearance Certificates",
    "Affidavits",
  ];
}

function TrustedBrandsCarousel() {
  const doubledBrands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="overflow-hidden bg-white py-8 sm:py-10">
      <div className="relative">
        <div className="mx-auto w-full overflow-hidden bg-white py-4 sm:py-5 ">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white via-white to-transparent sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white via-white to-transparent sm:w-12" />

          <div className="min-h-[200px] flex items-center gap-1 animate-marquee will-change-transform px-1 sm:gap-2 sm:px-2 lg:gap-4 lg:px-3" style={{ width: "max-content" }}>
          {doubledBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={`group flex h-[74px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[1rem] px-1 sm:h-[82px] sm:px-2 lg:h-[90px] lg:px-2 ${brand.slotClass ?? "w-[110px] sm:w-[130px] lg:w-[150px]"}`}
              aria-label={brand.name}
            >
              <div className="flex w-full origin-center items-center justify-center transition duration-300 group-hover:scale-[1.03]">
                {brand.src ? (
                  <img
                    src={brand.src}
                    alt={brand.name}
                    loading="lazy"
                    decoding="async"
                    className={`h-auto w-auto max-w-full object-contain object-center ${brand.imageClassName ?? "max-h-[52px] sm:max-h-[58px] lg:max-h-[64px]"}`}
                  />
                ) : brand.render ? (
                  brand.render()
                ) : (
                  <span className="text-xl font-semibold tracking-[0.18em] text-slate-800">{brand.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export function CityLandingPage({ page }: CityLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const faqItems = buildFaqItems(page);
  const title = page.hero_h1.trim() || page.page_title.trim() || "Professional Translation Services";
  const locationLabel = buildLocationLabel(page);
  const defaultPageParagraph =
    "Honey Translation Services provides accurate, timely, and professional support for personal, legal, and business document needs. Our team focuses on quality, confidentiality, and dependable service so you can move forward with confidence.";
  const heroSummary = defaultPageParagraph;
  const heroImageUrl = page.hero_image_url?.trim() || "";
  const processSteps = buildProcessSteps(page, locationLabel);
  const testimonials = buildTestimonials(page, locationLabel);
  const translatedDocuments = buildTranslatedDocuments();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Service enquiry - ${title}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || "Not specified"}
Location: ${locationLabel || "Not specified"}
Message: ${formData.message || "No additional message"}`;

    window.location.href = `mailto:salesteam@honeytranslations.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation onEnquiryClick={() => {}} activePage="services" />

      <main className="pt-[72px]">
        <section className="bg-[#EEF4FF] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                {page.hero_promo.trim() ? (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#2b2d72] shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {page.hero_promo}
                  </div>
                ) : null}

                <h1 className="mb-5 text-2xl font-extrabold leading-tight text-[#2b2d72] sm:text-3xl lg:text-4xl xl:text-5xl">
                  {title}
                </h1>

                {heroSummary ? (
                  <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {heroSummary}
                  </p>
                ) : null}

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-extrabold text-white shadow-md transition-all hover:bg-orange-600 hover:shadow-lg"
                  >
                    Request Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border-4 border-[#2b2d72] shadow-2xl">
                  {heroImageUrl ? (
                    <img
                      src={heroImageUrl}
                      alt={title}
                      className="h-[320px] w-full object-cover sm:h-[400px]"
                    />
                  ) : (
                    <div className="flex h-[320px] items-center justify-center bg-gradient-to-br from-[#dbe8ff] via-white to-[#fff3dd] p-8 text-center text-sm font-semibold text-slate-500 sm:h-[400px]">
                      Service image will appear here once it is available in the page data.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustedBrandsCarousel />

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-[#eef4ff] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2b2d72]">
              Documents We Translate
            </div>
            <h2 className="text-2xl font-black text-[#18214d] sm:text-3xl">We translate a wide range of personal, academic, legal, and business documents</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Accurate translation support for everyday submissions, official processes, higher education, immigration, and professional documentation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {translatedDocuments.map((document) => (
                <div
                  key={document}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#2b2d72] shadow-sm">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-[#18214d]">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2b2d72] shadow-sm">
                Our Process
              </div>
              <h2 className="mt-5 text-3xl font-black text-[#18214d] sm:text-4xl">Our Working Process</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                A simple, transparent workflow for professionals, students, and businesses.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2b2d72]">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-black text-[#94a3b8]">0{index + 1}</div>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#18214d]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-[#d9e6ff] bg-gradient-to-br from-[#f4f8ff] via-white to-[#fff7eb] p-8 shadow-[0_16px_40px_rgba(43,45,114,0.08)]">
              <div className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2b2d72] shadow-sm">
                Why choose us
              </div>
              <h2 className="text-2xl font-black text-[#18214d] sm:text-3xl">Trusted support for your translation needs</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {defaultPageParagraph}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Certified translation support",
                  "Clear timelines and updates",
                  "Professional formatting",
                  "Responsive client assistance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-sm">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#2b2d72]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-bold text-[#18214d]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Fast turnaround",
                  text: "Clear delivery timelines with responsive communication from enquiry to completion.",
                  accent: "from-[#eef4ff] to-white",
                },
                {
                  title: "Professional quality",
                  text: "Business-ready output for personal, legal, and commercial use cases.",
                  accent: "from-[#fff7eb] to-white",
                },
                {
                  title: "Location-focused service",
                  text: locationLabel
                    ? `Tailored content and service positioning for ${locationLabel}.`
                    : "Tailored content and service positioning for your target audience.",
                  accent: "from-[#f3fdf6] to-white",
                },
                {
                  title: "Direct support",
                  text: "Call, email, or WhatsApp the team directly for quotes and next steps.",
                  accent: "from-[#f8f5ff] to-white",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-[1.5rem] border border-slate-200 bg-gradient-to-br ${item.accent} p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1`}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2b2d72] shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-black text-[#2b2d72]">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-[#eef4ff] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2b2d72]">
                Testimonials
              </div>
              <h2 className="mt-5 text-3xl font-black text-[#18214d] sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Trusted by clients who need timely, accurate, and dependable support.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={`${item.name}-${item.role}`} className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-7 shadow-sm">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-[#2b2d72]" />
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={`${item.name}-star-${index}`} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-slate-600">"{item.quote}"</p>
                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <div className="text-base font-black text-[#18214d]">{item.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {faqItems.length > 0 ? (
          <section className="bg-slate-50/80 py-16 lg:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2b2d72] shadow-sm">
                  FAQ
                </div>
                <h2 className="mt-5 text-3xl font-black text-[#18214d] sm:text-4xl">Frequently asked questions</h2>
              </div>

              <div className="mt-10 space-y-4">
                {faqItems.map((item, index) => (
                  <div key={`${item.question}-${index}`} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50"
                    >
                      <h3 className="text-lg font-black text-[#2b2d72]">{item.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-[#2b2d72] transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden px-6 transition-all duration-300 ${
                        openFaq === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section id="contact-form" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#000000] sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-base text-[#000000] sm:text-lg">
              Fill out the form below and our team will contact you within 24 hours.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2b2d72] to-[#1a1d4a] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                  Start Your Journey
                  <br />
                  Today
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-9 text-white/90">
                  Get in touch with our expert team for personalized guidance on {locationLabel || title}.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    { icon: Phone, label: "Call Us", value: "+91 72990 05577", href: "tel:+917299005577" },
                    { icon: Mail, label: "Email Us", value: "salesteam@honeytranslations.com", href: "mailto:salesteam@honeytranslations.com" },
                    { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9 AM - 7 PM", href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-xl font-semibold text-white transition hover:text-white/80">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xl font-semibold text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="https://wa.me/917299005577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-extrabold text-white transition hover:brightness-105"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-black">Request Free Consultation</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/60 outline-none transition focus:border-white/40"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/60 outline-none transition focus:border-white/40"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/60 outline-none transition focus:border-white/40"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-white/40"
                  >
                    <option value="" className="text-slate-900">Select Service Needed</option>
                    <option value="Certified Translation" className="text-slate-900">Certified Translation</option>
                    <option value="Legal Translation" className="text-slate-900">Legal Translation</option>
                    <option value="Educational Documents" className="text-slate-900">Educational Documents</option>
                    <option value="Business Translation" className="text-slate-900">Business Translation</option>
                    <option value="Other" className="text-slate-900">Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message (Optional)"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/60 outline-none transition focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-lg font-extrabold text-[#2b2d72] transition hover:shadow-2xl"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
