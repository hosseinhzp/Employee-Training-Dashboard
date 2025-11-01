"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    if (!email) {
      setError("Email is required")
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email")
      return
    }

    setLoading(true)
    try {
      // Frontend-only: simulate sending reset link
      await new Promise((r) => setTimeout(r, 700))
      setSuccess("If that email exists, a reset link has been sent (simulated).")
      console.log("Reset password requested for:", email)
    } catch (err) {
      setError("Network error. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6" noValidate>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="reset-email">Email</Label>
          <Input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-invalid={!!error}
            aria-describedby={error ? "reset-error" : undefined}
            required
          />
          {error && <p id="reset-error" className="text-sm text-red-600">{error}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending…" : "Send Reset Link"}
        </Button>

        {success && <p className="text-sm text-green-600 text-center">{success}</p>}

        <span className="mt-3 text-center">Wait, I remember my password... <a href="/login" className="text-blue-500 hover:underline">Click here</a></span>
      </div>
    </form>
  )
}
