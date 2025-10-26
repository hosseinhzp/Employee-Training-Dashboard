"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldContent, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { DialogClose } from "@/components/ui/dialog"

export default function UserForm() {
  const [values, setValues] = React.useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    role: "",
  })

  const [errors, setErrors] = React.useState<Partial<Record<string, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((s) => ({ ...s, [name]: value }))
    setErrors((s) => ({ ...s, [name]: undefined }))
  }

  const handleSelectChange = (value: string) => {
    setValues((s) => ({ ...s, role: value }))
    setErrors((s) => ({ ...s, role: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<string, string>> = {}
    if (!values.name.trim()) next.name = "Name is required."
    if (!values.username.trim()) next.username = "Username is required."
    if (!values.email.trim()) next.email = "Email is required."
    if (!values.phone.trim()) next.phone = "Phone is required."
    if (!values.role || !values.role.trim()) next.role = "Role is required."
    return next
  }

  const handleSave = (e?: React.FormEvent) => {
    e?.preventDefault()
    const next = validate()
    setErrors(next)
    const hasErrors = Object.keys(next).length > 0
    if (!hasErrors) {
      // success placeholder
      console.log("Saved user", values)
      // Optionally clear or close dialog. We keep dialog open for now.
      // You can wrap the Save button with DialogClose if you prefer automatic close on success.
      alert("Saved (mock)")
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <Field orientation="horizontal" className="gap-6">
        <FieldLabel className="w-[110px]">Name</FieldLabel>
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
          <FieldError className="mt-1 text-sm text-destructive">{errors.name}</FieldError>
        </FieldContent>
      </Field>

      <Field orientation="horizontal" className="gap-6">
        <FieldLabel className="w-[110px]">Username</FieldLabel>
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
          <FieldError className="mt-1 text-sm text-destructive">{errors.username}</FieldError>
        </FieldContent>
      </Field>

      <Field orientation="horizontal" className="gap-6">
        <FieldLabel className="w-[110px]">Email</FieldLabel>
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
          <FieldError className="mt-1 text-sm text-destructive">{errors.email}</FieldError>
        </FieldContent>
      </Field>

      <Field orientation="horizontal" className="gap-6">
        <FieldLabel className="w-[110px]">Phone</FieldLabel>
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
          <FieldError className="mt-1 text-sm text-destructive">{errors.phone}</FieldError>
        </FieldContent>
      </Field>

      <Field orientation="horizontal" className="gap-6">
        <FieldLabel className="w-[110px]">Role</FieldLabel>
        <FieldContent className="flex flex-col">
          <Select onValueChange={handleSelectChange} value={values.role}>
            <SelectTrigger className="w-full sm:w-[300px]" aria-invalid={!!errors.role}>
              <SelectValue placeholder="Select role..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
              <SelectItem value="Cashier">Cashier</SelectItem>
              <SelectItem value="SuperAdmin">SuperAdmin</SelectItem>
            </SelectContent>
          </Select>
          <FieldError className="mt-1 text-sm text-destructive">{errors.role}</FieldError>
        </FieldContent>
      </Field>

      <div className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <Button type="button" onClick={handleSave}>Save changes</Button>
      </div>
    </form>
  )
}
