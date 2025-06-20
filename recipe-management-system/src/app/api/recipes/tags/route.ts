import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://dummyjson.com/recipes/tags');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}
