export interface CityLandingPageRecord {
  id?: number;
  updated_at?: string | null;
  city: string;
  area: string;
  slug: string;
  hero_image_url?: string;
  page_title: string;
  meta_desc: string;
  hero_promo: string;
  hero_h1: string;
  hero_p: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
}

export type CityLandingPageSummary = Pick<
  CityLandingPageRecord,
  "city" | "area" | "slug" | "page_title" | "meta_desc"
>;
