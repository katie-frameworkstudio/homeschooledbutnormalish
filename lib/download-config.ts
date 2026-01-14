/**
 * Download configuration for quiz outcome PDFs
 * These URLs can be used in ConvertKit email sequences
 */

export type QuizType = 'budget' | 'social' | 'newbie';
export type QuizV2Type = 'looks' | 'cost' | 'social';

export const SHOW_DIRECT_DOWNLOADS = true; // Set to true to show download buttons on result pages

export const DOWNLOAD_URLS = {
  budget: {
    plan: '/downloads/budget-action-plan.pdf',
    chapter: '/downloads/homeschooling-on-a-budget-first-chapter.pdf',
  },
  social: {
    plan: '/downloads/socialized-homeschooling-guide.pdf',
    chapter: '/downloads/homeschooled-and-socialized-first-chapter.pdf',
  },
  newbie: {
    plan: '/downloads/homeschooling-101-guide.pdf',
    chapter: '/downloads/homeschooling-101-first-chapter.pdf',
  },
} as const;

// Quiz V2 download URLs (maps to same resources as v1)
export const DOWNLOAD_URLS_V2 = {
  looks: {
    plan: '/downloads/homeschooling-101-guide.pdf',
    chapter: '/downloads/homeschooling-101-first-chapter.pdf',
  },
  cost: {
    plan: '/downloads/budget-action-plan.pdf',
    chapter: '/downloads/homeschooling-on-a-budget-first-chapter.pdf',
  },
  social: {
    plan: '/downloads/socialized-homeschooling-guide.pdf',
    chapter: '/downloads/homeschooled-and-socialized-first-chapter.pdf',
  },
} as const;

/**
 * Get download URLs for a specific quiz type
 */
export function getDownloadUrls(type: QuizType) {
  return DOWNLOAD_URLS[type];
}

/**
 * Get download URLs for quiz v2 types
 */
export function getDownloadUrlsV2(type: QuizV2Type) {
  return DOWNLOAD_URLS_V2[type];
}

/**
 * Get full URLs for ConvertKit (requires NEXT_PUBLIC_SITE_URL)
 */
export function getFullDownloadUrls(type: QuizType) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homeschooledbutnormalish.com';
  const urls = DOWNLOAD_URLS[type];

  return {
    plan: `${baseUrl}${urls.plan}`,
    chapter: `${baseUrl}${urls.chapter}`,
  };
}

/**
 * Get full URLs for ConvertKit for quiz v2
 */
export function getFullDownloadUrlsV2(type: QuizV2Type) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homeschooledbutnormalish.com';
  const urls = DOWNLOAD_URLS_V2[type];

  return {
    plan: `${baseUrl}${urls.plan}`,
    chapter: `${baseUrl}${urls.chapter}`,
  };
}
