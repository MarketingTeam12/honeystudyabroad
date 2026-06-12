import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import StudyAbroadApp from '@/app/App';
import { SeoHead, buildOrganizationSchema, buildWebsiteSchema, resolveSiteUrl } from "@/components/SeoHead";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      siteUrl: resolveSiteUrl({
        host: context.req.headers.host,
        protocol: context.req.headers["x-forwarded-proto"],
      }),
    },
  };
}

export default function HomePage({ siteUrl }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <SeoHead
        title="Honey Study Abroad"
        description="Honey Translation Services helps students with study abroad admissions, visa assistance, scholarships, counselling, and country-specific application support."
        path="/"
        siteUrl={siteUrl}
        keywords={[
          "study abroad consultant",
          "student visa assistance",
          "university admissions guidance",
          "scholarship counselling",
          "study abroad consultancy",
        ]}
        structuredData={[
          buildOrganizationSchema(siteUrl),
          buildWebsiteSchema(siteUrl),
        ]}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MP3J3QNH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <StudyAbroadApp />
    </>
  );
}
