import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const role = request.cookies.get("role")?.value as string;

  const publicPaths = ["/log-in"];
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  if (!role && !isPublicPath) {
    return NextResponse.redirect(new URL("/log-in", request.url));
  }

  const rolePaths: Record<string, string> = {
    hr: "/hr",
    ceo: "/ceo",
    teamlead: "/team-lead",
  };

  if (request.nextUrl.pathname === "/") {
    const redirectPath = rolePaths[role];
    if (redirectPath) {
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  if (role in rolePaths && request.nextUrl.pathname !== rolePaths[role]) {
    return NextResponse.redirect(new URL(rolePaths[role], request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
