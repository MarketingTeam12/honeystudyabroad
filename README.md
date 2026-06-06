
  # Study Abroad Website

  This project now runs on Next.js using the Pages Router, while preserving the existing client-side study-abroad experience.

  The original design source is available at https://www.figma.com/design/nbumCbIqrbjCGjyychiwOP/Study-Abroad-Website.

  ## Running the code

  Run `npm install` to install the dependencies.

  Run `npm run dev` to start the Next.js development server.

  Run `npm run build` to create a production build.

  ## City landing pages

  Create a `.env.local` file from `.env.example` to enable the MySQL-backed city landing pages.

  The app reads city landing page content from the `pages` table with these columns:
  `city`, `area`, `slug`, `page_title`, `meta_desc`, `hero_promo`, `hero_h1`, `hero_p`, `faq_q1`, `faq_a1`, `faq_q2`, `faq_a2`, `faq_q3`, `faq_a3`, `updated_at`.

  For the generated hero image on city landing pages, the app will also use the first available optional column from:
  `hero_image`, `service_image`, `image_url`, `banner_image`, or `featured_image`.

  If your `pages` table contains multiple websites or languages, you can scope queries with:
  `CITY_PAGES_WEBSITE_ID`, `CITY_PAGES_LANGUAGE_CODE`, and `CITY_PAGES_WEBSITE_DOMAIN`.
  
