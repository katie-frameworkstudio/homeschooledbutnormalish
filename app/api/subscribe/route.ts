import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, type } = await request.json();
    
    console.log('Received subscription request:', { email, type });

    if (!email || !type) {
      console.log('Validation failed: missing email or type');
      return NextResponse.json(
        { error: 'Email and type are required' },
        { status: 400 }
      );
    }

    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit credentials not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Determine the appropriate tag based on quiz result
    const resultTag = `result_${type}`;
    
    console.log('Attempting to subscribe with:', {
      formId: CONVERTKIT_FORM_ID,
      email: email,
      tags: [resultTag, 'quiz_taker']
    });
    
    // Subscribe to ConvertKit form - uses api_key not api_secret for public form submissions
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
          fields: {
            quiz_result: type
          }
        }),
      }
    );

    const data = await response.json();
    
    console.log('ConvertKit API response:', { status: response.status, data });

    if (!response.ok) {
      console.error('ConvertKit API error:', data);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: response.status }
      );
    }

    console.log('Successfully subscribed to ConvertKit:', data);
    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed to ConvertKit',
      subscriber: data.subscription
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

