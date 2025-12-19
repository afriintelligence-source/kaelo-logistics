import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const BASIN_FORM_ID = '319dc21d4bb4';
  const BASIN_URL = `https://usebasin.com/f/${BASIN_FORM_ID}`;

  try {
    const body = await request.json();

    const response = await fetch(BASIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Basin Error:', response.status, errorText);
        return NextResponse.json({ error: `Basin submission failed: ${response.statusText}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
