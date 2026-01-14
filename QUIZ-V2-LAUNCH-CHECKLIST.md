# Quiz V2 Launch Checklist

## ConvertKit Setup

- [ ] Verify all 3 form UIDs are correctly embedded
  - looks: f42ab6bdb2
  - cost: dd7bff15fa
  - social: 1eaae2c5fd
- [ ] Set up email sequences for each result type with PDF delivery links
- [ ] Add tags to segment subscribers by result type (looks, cost, social)
- [ ] Test form submissions and confirm emails are delivered with correct PDFs

## Meta Ads

- [ ] Create ad creative for quiz intro (The Homeschool Big 3)
  - Recommended sizes: 1080x1080 square and 1200x628 landscape
- [ ] Create result-specific ad creatives for retargeting (looks, cost, social outcomes)
- [ ] Set up Custom Audiences for each quiz result type (based on URL visited)
  - /quiz/v2/result/looks
  - /quiz/v2/result/cost
  - /quiz/v2/result/social
- [ ] Create ad copy highlighting the 3 questions:
  - What does it actually look like day to day?
  - How much does it really cost?
  - Will my kid be weird?
- [ ] Verify Meta Pixel is tracking quiz completion and Lead events on result pages

## Testing

- [ ] Complete full quiz flow from intro through all 7 questions to each result type
- [ ] Verify all 3 result pages load correctly (looks, cost, social)
- [ ] Submit email on each result page and confirm ConvertKit form submission
- [ ] Click download buttons and verify PDFs download correctly
- [ ] Test mobile responsiveness on all quiz pages (intro, questions, results)

## Content Review

- [ ] Review all result page copy for accuracy and brand voice
- [ ] Verify PDF resources exist and match descriptions (6 PDFs total):
  - [ ] homeschooling-101-guide.pdf
  - [ ] homeschooling-101-first-chapter.pdf
  - [ ] budget-action-plan.pdf
  - [ ] homeschooling-on-a-budget-first-chapter.pdf
  - [ ] socialized-homeschooling-guide.pdf
  - [ ] homeschooled-and-socialized-first-chapter.pdf

## Launch Preparation

- [ ] Update main site navigation to include link to /quiz/v2
- [ ] Decide if /quiz/v2 should become the primary /quiz or remain as v2
- [ ] Set up analytics goals/events for quiz starts and completions
- [ ] Create social media posts announcing the new quiz

---

## Quiz URLs

**Main Quiz:** https://homeschooledbutnormalish.com/quiz/v2

**Result Pages:**
- https://homeschooledbutnormalish.com/quiz/v2/result/looks
- https://homeschooledbutnormalish.com/quiz/v2/result/cost
- https://homeschooledbutnormalish.com/quiz/v2/result/social

---

## Notes

- All ConvertKit forms use the same UIDs as the original quiz for consistency
- Meta Pixel tracking is already integrated on result pages
- Download buttons are currently enabled (controlled by `SHOW_DIRECT_DOWNLOADS` in `lib/download-config.ts`)
