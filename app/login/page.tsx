"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authMethod, setAuthMethod] = useState<"email" | "phone" | null>(null)
  const [phone, setPhone] = useState("")

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login with email:", email, password)
  }

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login with phone:", phone)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/precast-logo.png"
              alt="PRECAST Engineering Institute"
              width={120}
              height={80}
              className="h-40 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#063591] mb-2">Welcome Back</h1>
          <p className="text-[#4a5568]">Sign in to your PRECAST account</p>
        </div>

        {/* Auth Card with Enhanced Shadow */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 border border-gray-100">
          {!authMethod ? (
            <>
              {/* Gmail Option - Prominent */}
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-gray-300 text-[#063591] rounded-lg hover:bg-gray-50 hover:shadow-lg transition-all font-medium mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </button>

              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Email and Phone Options */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setAuthMethod("email")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#063591] text-white rounded-lg hover:bg-[#052a6f] hover:shadow-lg transition-all font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Sign in with Email
                </button>

                <button
                  onClick={() => setAuthMethod("phone")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-[#063591] text-[#063591] rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Sign in with Phone
                </button>
              </div>

              <p className="text-center text-[#4a5568] text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#063591] font-semibold hover:underline">
                  Sign up
                </Link>
              </p>
            </>
          ) : authMethod === "email" ? (
            <>
              {/* Email Login Form */}
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#063591] mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#063591] focus:outline-none text-[#063591]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#063591] mb-2">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#063591] focus:outline-none text-[#063591]"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-sm text-[#4a5568]">Remember me</span>
                  </label>
                  <Link href="#" className="text-sm text-[#063591] hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#063591] hover:bg-[#052a6f] text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Sign In
                </Button>
              </form>

              <button
                onClick={() => setAuthMethod(null)}
                className="w-full mt-4 text-[#063591] text-sm font-medium hover:underline"
              >
                ← Back to options
              </button>
            </>
          ) : (
            <>
              {/* Phone Login Form */}
              <form onSubmit={handlePhoneLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#063591] mb-2">Phone Number</label>
                  <div className="flex gap-2">
                    <select className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#063591] focus:outline-none bg-white text-[#063591]">
                      <option>+1</option>
                      <option>+44</option>
                      <option>+91</option>
                      <option>+86</option>
                    </select>
                    <Input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#063591] focus:outline-none text-[#063591]"
                      required
                    />
                  </div>
                </div>

                <p className="text-xs text-[#4a5568]">We'll send you a verification code via SMS</p>

                <Button
                  type="submit"
                  className="w-full bg-[#063591] hover:bg-[#052a6f] text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Send Verification Code
                </Button>
              </form>

              <button
                onClick={() => setAuthMethod(null)}
                className="w-full mt-4 text-[#063591] text-sm font-medium hover:underline"
              >
                ← Back to options
              </button>
            </>
          )}
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#4a5568] text-xs">
          By signing in, you agree to our{" "}
          <Link href="#" className="underline hover:text-[#063591]">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline hover:text-[#063591]">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
