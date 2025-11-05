"use client";

import React, { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "@/hooks/useForm";

type FormState = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { values: form, errors, setErrors, handleChange } = useForm({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = useCallback(() => {
    const e: Partial<FormState> = {};
    if (!form.email) e.email = "Email is required";
    else if (!emailRegex.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6)
      e.password = "Password must be at least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.email, form.password, setErrors]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setSuccess(null);
      if (!validate()) return;
      setLoading(true);
      try {
        // Frontend-only: simulate network request
        await new Promise((r) => setTimeout(r, 800));
        // In a real app, replace with your auth call (fetch/axios/next-auth)
        setSuccess("Signed in (simulated).");
        console.log("Login payload:", form);
      } catch (err) {
        setErrors({ password: "Network error. Try again." });
      } finally {
        setLoading(false);
      }
    },
    [form, validate, setErrors],
  );

  return (
    <form onSubmit={handleSubmit} className="mt-6" noValidate>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="m@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-pressed={showPassword}
              className="text-sm text-muted-foreground hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            required
          />
          {errors.password && (
            <p id="password-error" className="text-sm text-red-600">
              {errors.password}
            </p>
          )}
        </div>

        <a
          href="/password"
          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
        >
          Forgot your password?
        </a>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </Button>

        {success && (
          <p className="text-sm text-green-600 text-center">{success}</p>
        )}

        <span className="mt-3 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </span>
      </div>
    </form>
  );
}
