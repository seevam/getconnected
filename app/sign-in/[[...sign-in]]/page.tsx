import type { Metadata } from "next"
import { SignIn } from "@clerk/nextjs"

export const metadata: Metadata = { title: "Sign In" }

export default function SignInPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4">
      <SignIn />
    </div>
  )
}
