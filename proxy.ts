import { clerkMiddleware } from "@clerk/nextjs/server"

// Runs Clerk on every request so auth state is available everywhere.
// All routes stay public; add createRouteMatcher + auth.protect() to lock any down.
export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
