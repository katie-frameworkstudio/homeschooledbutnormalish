# ConvertKit Download URLs

Use these URLs in your ConvertKit email sequences. They will redirect to the appropriate PDFs.

## Configuration

Make sure to set `NEXT_PUBLIC_SITE_URL` in your `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://homeschooledbutnormalish.com
```

## Download URLs for Email Sequences

### Budget Outcome

**Action Plan:**
```
https://homeschooledbutnormalish.com/downloads/budget-action-plan.pdf
```

**First Chapter:**
```
https://homeschooledbutnormalish.com/downloads/homeschooling-on-a-budget-first-chapter.pdf
```

---

### Social Outcome

**Socialization Guide:**
```
https://homeschooledbutnormalish.com/downloads/socialized-homeschooling-guide.pdf
```

**First Chapter:**
```
https://homeschooledbutnormalish.com/downloads/homeschooled-and-socialized-first-chapter.pdf
```

---

### Newbie Outcome

**Getting Started Guide:**
```
https://homeschooledbutnormalish.com/downloads/homeschooling-101-guide.pdf
```

**First Chapter:**
```
https://homeschooledbutnormalish.com/downloads/homeschooling-101-first-chapter.pdf
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

| URL | Description |
|-----|-------------|
| `/downloads/budget-action-plan.pdf` | Budget Boss Action Plan |
| `/downloads/homeschooling-on-a-budget-first-chapter.pdf` | Homeschooling on a Budget - First Chapter |
| `/downloads/socialized-homeschooling-guide.pdf` | Socialized Homeschooling Guide |
| `/downloads/homeschooled-and-socialized-first-chapter.pdf` | Homeschooled and Socialized - First Chapter |
| `/downloads/homeschooling-101-guide.pdf` | Homeschooling 101 Getting Started Guide |
| `/downloads/homeschooling-101-first-chapter.pdf` | Homeschooling 101 - First Chapter |

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
