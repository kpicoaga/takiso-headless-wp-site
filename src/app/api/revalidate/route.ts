import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const slug = request.nextUrl.searchParams.get('slug');

  // Check secret matches
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  if (!slug) {
    return NextResponse.json({ message: 'Missing slug param' }, { status: 400 });
  }

  try {
    // Revalidate the specific page
    revalidatePath(`/${slug}`);
    revalidateTag('pages');
    return NextResponse.json({ revalidated: true, slug });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}
