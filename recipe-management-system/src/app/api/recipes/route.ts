import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch('https://dummyjson.com/recipes/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create recipe' },
      { status: 500 }
    );
  }
}
