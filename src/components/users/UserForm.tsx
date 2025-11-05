"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DialogClose } from "@/components/ui/dialog";
import { useForm } from "@/hooks/useForm";

export default function UserForm() {
  const { values, setValues, errors, setErrors, handleChange, setFieldValue } =
    useForm({
      name: "",
      username: "",
      email: "",
      phone: "",
      role: "",
      department: "",
      manager: "",
    });

  const handleSelectChange = React.useCallback((value: string) => {
    setFieldValue("role", value);
  }, [setFieldValue]);

  const validate = () => {
    const next: Partial<Record<string, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.username.trim()) next.username = "Username is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    if (!values.phone.trim()) next.phone = "Phone is required.";
    if (!values.role || !values.role.trim()) next.role = "Role is required.";
    // newly added fields should be required as well
    if (!values.department || !values.department.trim())
      next.department = "Department is required.";
    if (!values.manager || !values.manager.trim())
      next.manager = "Manager is required.";
    // certifications field removed
    return next;
  };

  const handleSave = (e?: React.FormEvent) => {
    e?.preventDefault();
    const next = validate();
    setErrors(next);
    const hasErrors = Object.keys(next).length > 0;
    if (!hasErrors) {
      // success placeholder
      console.log("Saved user", values);
      // Optionally clear or close dialog. We keep dialog open for now.
      // You can wrap the Save button with DialogClose if you prefer automatic close on success.
      alert("Saved (mock)");
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Name
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            id="user-name"
            name="name"
            placeholder="John Doe"
            className="w-full sm:w-[300px]"
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.name}
          </FieldError>
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Username
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            id="user-username"
            name="username"
            placeholder="John_Doe"
            className="w-full sm:w-[300px]"
            value={values.username}
            onChange={handleChange}
            aria-invalid={!!errors.username}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.username}
          </FieldError>
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Email
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            id="user-email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            className="w-full sm:w-[300px]"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.email}
          </FieldError>
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Phone
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            id="user-phone"
            name="phone"
            inputMode="tel"
            placeholder="+1 555 123 4567"
            className="w-full sm:w-[300px]"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.phone}
          </FieldError>
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Role
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Select onValueChange={handleSelectChange} value={values.role}>
            <SelectTrigger
              className="w-full sm:w-[300px]"
              aria-invalid={!!errors.role}
            >
              <SelectValue placeholder="Select role..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
              <SelectItem value="Employee">Employee</SelectItem>
              <SelectItem value="HR">HR</SelectItem>
            </SelectContent>
          </Select>
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.role}
          </FieldError>
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Department
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            id="user-department"
            name="department"
            placeholder="e.g. Engineering"
            className="w-full sm:w-[300px]"
            value={values.department}
            onChange={handleChange}
            aria-invalid={!!errors.department}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.department}
          </FieldError>
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-6">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Manager
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            id="user-manager"
            name="manager"
            placeholder="Manager name"
            className="w-full sm:w-[300px]"
            value={values.manager}
            onChange={handleChange}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.manager}
          </FieldError>
        </FieldContent>
      </Field>

      {/* Certifications removed */}

      <div className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <Button type="button" onClick={handleSave}>
          Save changes
        </Button>
      </div>
    </form>
  );
}
