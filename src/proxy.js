import { NextResponse } from 'next/server';
import { auth } from './lib/auth';

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/all-pets/:path*',
    '/dashboard',
    '/dashboard/my-listings',
    '/dashboard/my-requests',
    '/dashboard/add-pet',
    '/dashboard/update-pet/:path*',
  ],
};