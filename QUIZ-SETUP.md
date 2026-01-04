# Quiz Feature Documentation

## Overview

The homeschool quiz is a lead generation tool that segments visitors by their primary concern and delivers personalized book recommendations and free resources.

## Structure

### Pages
- **`/quiz`** - Main quiz landing page and questionnaire (8 questions)
- **`/quiz/result/newbie`** - Result page for "The Newbie Navigator"
- **`/quiz/result/social`** - Result page for "The Socializer"
- **`/quiz/result/budget`** - Result page for "The Budget Boss"

### Quiz Flow
1. User lands on quiz page with value proposition
2. User answers 8 questions
3. Scoring logic determines primary concern
4. User is redirected to personalized result page
5. User enters email to receive:
   - Personalized action plan
   - Free book chapter (path-specific)
   - Downloadable PDF guide

## Scoring Logic

The quiz calculates scores across three categories:
- **Budget concerns** - Triggers on cost/affordability answers
- **Socialization concerns** - Triggers on social/friendships answers
- **Getting Started concerns** - Triggers on overwhelm/qualification answers

The category with the highest score determines the result. Ties default to "Newbie Navigator."

## Current Status

✅ **Complete:**
- Quiz page with 8 questions
- Scoring logic
- Three result pages with personalized content
- Email capture form (frontend only)
- Hidden from search engines (`noindex, nofollow`)
- Not linked in navigation menu

⚠️ **Needs Integration:**
- Email service provider (ConvertKit, Mailchimp, etc.)
- Email automation sequences
- PDF download links
- Book chapter download links
- Analytics tracking

## Email Integration (TODO)

### Recommended Setup: ConvertKit

1. **Create ConvertKit Forms:**
   - Form for Newbie Navigator path
   - Form for Socializer path
   - Form for Budget Boss path

2. **Create Tags:**
   - `quiz_taker`
   - `result_newbie` / `result_socializer` / `result_budget`
   - `book_interested`
   - `bundle_interested`

3. **Update Form Handler:**
   Replace the current `handleSubmit` function in `/app/quiz/result/[type]/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Send to ConvertKit API
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        type, // newbie, social, or budget
      }),
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Subscription error:', error);
  }
};
```

4. **Create API Route:**
Create `/app/api/subscribe/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, type } = await request.json();
  
  // ConvertKit API integration
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = process.env[`CONVERTKIT_FORM_${type.toUpperCase()}`];
  
  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email,
        tags: [`quiz_taker`, `result_${type}`],
      }),
    }
  );
  
  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
```

5. **Environment Variables:**
Add to `.env.local`:
```
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_NEWBIE=form_id
CONVERTKIT_FORM_SOCIAL=form_id
CONVERTKIT_FORM_BUDGET=form_id
```

## Email Sequences

See `homeschool_quiz_framework.md` for complete email sequence content:
- **Email 1:** Immediate delivery (path-specific)
- **Email 2:** 2 days later (path-specific story)
- **Email 3:** 5 days later (all paths - book bundle offer)
- **Email 4:** 7 days later (final email)

## PDF Lead Magnets

Create these PDFs and host them (or use ConvertKit's built-in file delivery):

1. **"Your First 30 Days of Homeschooling: A Simple Checklist"**
   - For Newbie Navigator path
   - 1-page checklist format

2. **"5 Myths About Homeschool Socialization"**
   - For Socializer path
   - Myth/truth format with personal stories

3. **"The $0 Homeschool Start"**
   - For Budget Boss path
   - Resource list and inventory checklist

## Analytics to Track

Consider adding Google Analytics or similar to track:
- Quiz starts
- Quiz completions (completion rate)
- Drop-off by question
- Most common result type
- Email capture rate
- Time spent on result pages

## Making the Quiz Public

When ready to launch:

1. Update `/app/quiz/layout.tsx` to remove `noindex, nofollow`
2. Add quiz link to navigation menu (optional)
3. Share direct link: `https://yourdomain.com/quiz`
4. Promote on social media, blog posts, etc.

## Testing

Access the quiz at: `http://localhost:3000/quiz`

Test each result path:
- Answer questions favoring budget concerns → Budget Boss
- Answer questions favoring social concerns → Socializer
- Answer questions favoring getting started → Newbie Navigator

## Notes

- Quiz is fully functional on the frontend
- Backend integration required for email capture to work
- All content is based on the comprehensive framework in `homeschool_quiz_framework.md`
- Design matches the clean, minimal aesthetic of the main site





