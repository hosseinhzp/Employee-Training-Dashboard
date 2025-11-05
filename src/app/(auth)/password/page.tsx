import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="max-w-md mx-auto w-full min-h-0 lg:min-h-screen pt-6 px-4">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8 lg:mb-20">
        <BreadcrumbList>
          <BreadcrumbSeparator reversed />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Back to dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Top */}
      <div className="mx-auto flex w-full max-w-md flex-col justify-center">
        <div className="mb-5 sm:mb-8">
          <h1 className="text-4xl font-bold">Forgot Your Password?</h1>
          <p className="text-sm text-muted-foreground mt-3">
            Enter the email address linked to your account, and we'll send you a
            link to reset your password.
          </p>
        </div>
      </div>

      {/* Reset Form */}
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
