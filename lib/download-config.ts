/**
 * Download configuration for quiz outcome PDFs
 * These URLs can be used in ConvertKit email sequences
 */

export type QuizType = 'budget' | 'social' | 'newbie';

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

/**
 * Get download URLs for a specific quiz type
 */
export function getDownloadUrls(type: QuizType) {
  return DOWNLOAD_URLS[type];
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
