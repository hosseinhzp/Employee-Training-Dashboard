"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldContent } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { DialogClose } from "@/components/ui/dialog"

export default function ProfileForm() {
  const [values, setValues] = React.useState({
    displayName: "",
    jobTitle: "",
    location: "",
    facebook: "",
    x: "",
    github: "",
    instagram: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleSave = (e?: React.FormEvent) => {
    e?.preventDefault()
    console.log("Saved profile (mock)", values)
    alert("Saved (mock)")
  }

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">Display name</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="displayName" placeholder="Emma Lopez" className="w-full sm:w-[300px]" value={values.displayName} onChange={handleChange} />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">Job title</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="jobTitle" placeholder="Product Designer" className="w-full sm:w-[300px]" value={values.jobTitle} onChange={handleChange} />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">Location</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="location" placeholder="Boston, MA" className="w-full sm:w-[300px]" value={values.location} onChange={handleChange} />
        </FieldContent>
      </Field>

      <hr />

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">Facebook</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="facebook" placeholder="https://facebook.com/yourprofile" className="w-full sm:w-[300px]" value={values.facebook} onChange={handleChange} />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">X (Twitter)</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="x" placeholder="https://x.com/yourprofile" className="w-full sm:w-[300px]" value={values.x} onChange={handleChange} />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">GitHub</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="github" placeholder="https://github.com/yourprofile" className="w-full sm:w-[300px]" value={values.github} onChange={handleChange} />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">Instagram</FieldLabel>
        <FieldContent className="flex flex-col">
          <Input name="instagram" placeholder="https://instagram.com/yourprofile" className="w-full sm:w-[300px]" value={values.instagram} onChange={handleChange} />
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
