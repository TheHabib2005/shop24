import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("auth_token");

  // // List of paths that do not require authentication
  // const publicPaths = ["/signup", "/login", "/verifyEmail"];

  // // Check if the requested path is public
  // const isPublicPath = publicPaths.some((path) => {
  //   const regex = new RegExp(`^${path.replace("*", ".*")}$`);
  //   return regex.test(request.nextUrl.pathname);
  // });

  // // If the path is public, allow the request to proceed
  // if (isPublicPath) {
  //   return NextResponse.next();
  // }

  // // If the token does not exist, redirect to the login page
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // If the token exists, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"], // Protect all routes except for static files and favicon
};
