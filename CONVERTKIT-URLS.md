# ConvertKit Download URLs

Use these URLs in your ConvertKit email sequences. They will redirect to the appropriate PDFs.

## Configuration

Make sure to set `NEXT_PUBLIC_SITE_URL` in your `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://homeschooledbutnormalish.com
```

## Download URLs for Email Sequences

### Budget Outcome

**Action Plan (Lead Magnet):**
```
https://homeschooledbutnormalish.com/downloads/budget-lead-magnet.pdf
```

**First Chapter:**
```
https://homeschooledbutnormalish.com/downloads/budget-first-chapter.pdf
```

---

### Social Outcome

**Action Plan (Lead Magnet):**
```
https://homeschooledbutnormalish.com/downloads/social-lead-magnet.pdf
```

**First Chapter:**
```
https://homeschooledbutnormalish.com/downloads/social-first-chapter.pdf
```

---

### Newbie Outcome

**Action Plan (Lead Magnet):**
```
https://homeschooledbutnormalish.com/downloads/newbie-lead-magnet.pdf
```

**First Chapter:**
```
https://homeschooledbutnormalish.com/downloads/newbie-first-chapter.pdf
```

---

## How It Works

1. **Quiz Submission:** User takes quiz → result is "budget", "social", or "newbie"
2. **Email Capture:** User enters email on `/quiz/result/{type}` page
3. **ConvertKit API:** Email is sent to ConvertKit with `quiz_result` field set to the type
4. **Automation:** ConvertKit automation triggers based on `quiz_result` field value
5. **Email Sequence:** Automation sends emails with the appropriate download links above
6. **Download:** When user clicks link, they're redirected to the PDF

## ConvertKit Setup

In ConvertKit, create automations that trigger when:
- `quiz_result` = "budget" → Send budget sequence
- `quiz_result` = "social" → Send social sequence
- `quiz_result` = "newbie" → Send newbie sequence

Each sequence should include emails with the corresponding download links.

## File Mapping

The download URLs point directly to these PDF files:

| URL | PDF File | Original Filename |
|-----|----------|-------------------|
| `/downloads/budget-lead-magnet.pdf` | `Budget_Boss_Lead_Magnet.pdf` | Budget Boss Lead Magnet |
| `/downloads/budget-first-chapter.pdf` | `Homeschooling on a budget - Introduction.pdf` | Homeschooling on a budget - Introduction |
| `/downloads/social-lead-magnet.pdf` | `Socialized_Lead_Magnet.pdf` | Socialized Lead Magnet |
| `/downloads/social-first-chapter.pdf` | `Homeschooled and Socialized - Intorduction.pdf` | Homeschooled and Socialized - Introduction |
| `/downloads/newbie-lead-magnet.pdf` | `Homeschooling 101_Magnet.pdf` | Homeschooling 101 Magnet |
| `/downloads/newbie-first-chapter.pdf` | `Homeschooling 101 - Introduction.pdf` | Homeschooling 101 - Introduction |

## Benefits of This Approach

1. **Simple & Reliable:** Direct PDF links work with static export builds
2. **Fast Delivery:** No server-side redirects needed
3. **Stable URLs:** File names won't change, safe to use in email sequences
4. **Easy Management:** Replace PDFs by uploading new files with same names
5. **Compatible:** Works with Next.js static export (`output: 'export'`)

## Optional: Direct Download Buttons

To show download buttons on the result pages (in addition to email delivery), set in `lib/download-config.ts`:

```typescript
export const SHOW_DIRECT_DOWNLOADS = true;
```

Default is `false` to encourage email capture.
