import type { Metadata } from "next"
import { SignUp } from "@clerk/nextjs"

export const metadata: Metadata = { title: "Sign Up" }

export default function SignUpPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4">
      <SignUp />
    </div>
  )
}
