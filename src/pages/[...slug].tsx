import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { SeoHead, buildBreadcrumbSchema, buildFaqSchema, buildOrganizationSchema, resolveSiteUrl } from "@/components/SeoHead";
import { AustraliaPage } from "@/app/components/AustraliaPage";
import { CampusAdmissionPage } from "@/app/components/CampusAdmissionPage";
import { CareerCounselingPage } from "@/app/components/CareerCounselingPage";
import { CanadaPageAccordion } from "@/app/components/CanadaPageAccordion";
import { CityLandingPage } from "@/app/components/CityLandingPage";
import { EuropePage } from "@/app/components/EuropePage";
import { FrancePage } from "@/app/components/FrancePage";
import { GermanyPage } from "@/app/components/GermanyPage";
import { IELTSTestPrepDetailPage } from "@/app/components/IELTSTestPrepDetailPage";
import { IndiaAdmissionPage } from "@/app/components/IndiaAdmissionPage";
import { IrelandPage } from "@/app/components/IrelandPage";
import { NewZealandPage } from "@/app/components/NewZealandPage";
import { OnlineAdmissionPage } from "@/app/components/OnlineAdmissionPage";
import { PreDeparturePage } from "@/app/components/PreDeparturePage";
import { ScholarshipGuidanceDetailPage } from "@/app/components/ScholarshipGuidanceDetailPage";
import { SingaporePage } from "@/app/components/SingaporePage";
import { UKPage } from "@/app/components/UKPage";
import { UniversityAdmissionsDetailPage } from "@/app/components/UniversityAdmissionsDetailPage";
import { USAPage } from "@/app/components/USAPage";
import { VisaAssistanceDetailPage } from "@/app/components/VisaAssistanceDetailPage";
import { getCityPageByRoute } from "@/lib/city-pages";
import { getMarketingPageBySlug, type MarketingPageSlug } from "@/lib/marketing-pages";
import type { CityLandingPageRecord } from "@/types/city-pages";

type CityPageProps = {
  siteUrl: string;
  currentPath: string;
  page: CityLandingPageRecord | null;
  marketingSlug?: MarketingPageSlug | null;
  errorMessage?: string | null;
};

function renderMarketingPage(slug: MarketingPageSlug) {
  switch (slug) {
    case "usa":
      return <div className="min-h-screen bg-[#F0F4FF]"><USAPage /></div>;
    case "uk":
      return <div className="min-h-screen bg-[#F0F4FF]"><UKPage /></div>;
    case "canada":
      return <div className="min-h-screen bg-[#F0F4FF]"><CanadaPageAccordion /></div>;
    case "australia":
      return <div className="min-h-screen bg-[#F0F4FF]"><AustraliaPage /></div>;
    case "singapore":
      return <div className="min-h-screen bg-[#F0F4FF]"><SingaporePage /></div>;
    case "germany":
      return <div className="min-h-screen bg-[#F0F4FF]"><GermanyPage /></div>;
    case "france":
      return <div className="min-h-screen bg-[#F0F4FF]"><FrancePage /></div>;
    case "new-zealand":
      return <div className="min-h-screen bg-[#F0F4FF]"><NewZealandPage /></div>;
    case "ireland":
      return <div className="min-h-screen bg-[#F0F4FF]"><IrelandPage /></div>;
    case "europe":
      return <div className="min-h-screen bg-[#F0F4FF]"><EuropePage /></div>;
    case "india-admission":
      return <div className="min-h-screen bg-white"><IndiaAdmissionPage /></div>;
    case "visa-assistance":
      return <div className="min-h-screen bg-white"><VisaAssistanceDetailPage /></div>;
    case "university-admissions":
      return <div className="min-h-screen bg-white"><UniversityAdmissionsDetailPage /></div>;
    case "scholarship-guidance":
      return <div className="min-h-screen bg-white"><ScholarshipGuidanceDetailPage /></div>;
    case "ielts-test-prep":
      return <div className="min-h-screen bg-white"><IELTSTestPrepDetailPage /></div>;
    case "online-admission":
      return <div className="min-h-screen bg-white"><OnlineAdmissionPage /></div>;
    case "campus-admission":
      return <div className="min-h-screen bg-white"><CampusAdmissionPage /></div>;
    case "career-counseling":
      return <div className="min-h-screen bg-white"><CareerCounselingPage /></div>;
    case "pre-departure":
      return <div className="min-h-screen bg-white"><PreDeparturePage /></div>;
    default:
      return null;
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const rawSlug = context.params?.slug;
  const slugParts = Array.isArray(rawSlug) ? rawSlug : rawSlug ? [rawSlug] : [];
  const siteUrl = resolveSiteUrl({
    host: context.req.headers.host,
    protocol: context.req.headers["x-forwarded-proto"],
  });
  const currentPath = `/${slugParts.join("/")}`;

  if (slugParts.length === 0) {
    return {
      notFound: true,
    };
  }

  const slug = slugParts[slugParts.length - 1]?.trim();

  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    if (slugParts.length === 1) {
      const marketingPage = getMarketingPageBySlug(slug);
      if (marketingPage) {
        return {
          props: {
            siteUrl,
            currentPath: marketingPage.path,
            page: null,
            marketingSlug: marketingPage.slug,
          } satisfies CityPageProps,
        };
      }

      const page = await getCityPageByRoute({ slug, host: context.req.headers.host });

      if (!page) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          siteUrl,
          currentPath,
          page,
        } satisfies CityPageProps,
      };
    }

    if (slugParts.length === 2) {
      const city = slugParts[0]?.trim();
      const page = await getCityPageByRoute({ city, slug, host: context.req.headers.host });

      if (!page) {
        return {
          notFound: true,
        };
      }

      return {
        redirect: {
          destination: `/${encodeURIComponent(slug)}`,
          permanent: true,
        },
      };
    }

    return {
      notFound: true,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "We could not load this city page right now. Please try again shortly.";

    return {
      props: {
        siteUrl,
        currentPath,
        page: null,
        errorMessage: message,
      } satisfies CityPageProps,
    };
  }
}

export default function SlugPage({
  page,
  marketingSlug,
  siteUrl,
  currentPath,
  errorMessage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (marketingSlug) {
    const marketingPage = getMarketingPageBySlug(marketingSlug);

    if (!marketingPage) {
      return null;
    }

    return (
      <>
        <SeoHead
          title={marketingPage.title}
          description={marketingPage.description}
          path={marketingPage.path}
          siteUrl={siteUrl}
          keywords={marketingPage.keywords}
          structuredData={[
            buildOrganizationSchema(siteUrl),
            buildBreadcrumbSchema(siteUrl, [
              { name: "Home", path: "/" },
              { name: marketingPage.title, path: marketingPage.path },
            ]),
          ]}
        />
        {renderMarketingPage(marketingSlug)}
      </>
    );
  }

  if (!page) {
    return (
      <>
        <SeoHead
          title="City Page Unavailable"
          description="This city service page is temporarily unavailable. Please contact Honey Translation Services for assistance."
          path={currentPath}
          siteUrl={siteUrl}
          noIndex
        />
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
          <div className="max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-[#2b2d72]">Unavailable</div>
            <h1 className="mt-4 text-3xl font-black text-[#18214d]">This city page could not be loaded</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {errorMessage || "Please try again later or contact Honey Translations directly for support."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+917299005577"
                className="rounded-2xl bg-[#2b2d72] px-6 py-3 text-sm font-extrabold text-white"
              >
                Call Support
              </a>
              <a
                href="mailto:salesteam@honeytranslations.com"
                className="rounded-2xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  const faqItems = [
    { question: page.faq_q1.trim(), answer: page.faq_a1.trim() },
    { question: page.faq_q2.trim(), answer: page.faq_a2.trim() },
    { question: page.faq_q3.trim(), answer: page.faq_a3.trim() },
  ].filter((item) => item.question && item.answer);
  const pageTitle = page.page_title.trim() || page.hero_h1.trim() || "City Landing Page";
  const pageDescription =
    page.meta_desc.trim() ||
    page.hero_p.trim() ||
    `Explore trusted support from Honey Translation Services in ${page.city.trim() || "your city"}.`;

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path={currentPath}
        siteUrl={siteUrl}
        imagePath={page.hero_image_url || undefined}
        keywords={[
          page.city.trim(),
          page.area.trim(),
          page.slug.trim(),
          "translation services",
          "document support",
        ].filter(Boolean)}
        structuredData={[
          buildOrganizationSchema(siteUrl),
          buildBreadcrumbSchema(siteUrl, [
            { name: "Home", path: "/" },
            { name: pageTitle, path: currentPath },
          ]),
          ...(faqItems.length > 0 ? [buildFaqSchema(faqItems)] : []),
        ]}
      />
      <CityLandingPage page={page} />
    </>
  );
}
