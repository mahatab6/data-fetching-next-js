import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // JWT token from cookies/session
  const token = await getToken({ req });

  // User is not logged in
  if (!token) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  // Example: only admin can access /dashboard
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");
  const isAdminUser = token?.role === "admin";

  if (isAdminSpecificRoute && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url)); // redirect to home
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/post/:path*"], // যেই routes protect করতে চাও
};
