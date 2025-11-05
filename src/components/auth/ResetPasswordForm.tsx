"use client";

import React, { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "@/hooks/useForm";

export default function ResetPasswordForm() {
  const { values, setFieldValue, setErrors } = useForm({ email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrors({});
      setSuccess(null);
      if (!values.email) {
        setErrors({ email: "Email is required" });
        return;
      }
      if (!emailRegex.test(values.email)) {
        setErrors({ email: "Enter a valid email" });
        return;
      }

      setLoading(true);
      try {
        // Frontend-only: simulate sending reset link
        await new Promise((r) => setTimeout(r, 700));
        setSuccess("If that email exists, a reset link has been sent (simulated).");
        console.log("Reset password requested for:", values.email);
      } catch (err) {
        setErrors({ email: "Network error. Try again." });
      } finally {
        setLoading(false);
      }
    },
    [values.email, setErrors],
  );

  return (
    <form onSubmit={handleSubmit} className="mt-6" noValidate>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="reset-email">Email</Label>
          <Input
            id="reset-email"
            type="email"
            value={values.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
            placeholder="Enter your email"
            aria-invalid={false}
            aria-describedby={undefined}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending…" : "Send Reset Link"}
        </Button>

        {success && (
          <p className="text-sm text-green-600 text-center">{success}</p>
        )}

        <span className="mt-3 text-center">
          Wait, I remember my password... <a href="/login" className="text-blue-500 hover:underline">Click here</a>
        </span>
      </div>
    </form>
  );
}
