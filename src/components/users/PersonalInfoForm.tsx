"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldContent } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";

export default function PersonalInfoForm() {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };

  const handleSave = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Saved personal info (mock)", values);
    alert("Saved (mock)");
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          First Name
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="firstName"
            placeholder="Emma"
            className="w-full sm:w-[300px]"
            value={values.firstName}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Last Name
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="lastName"
            placeholder="Lopez"
            className="w-full sm:w-[300px]"
            value={values.lastName}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Email
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="email"
            type="email"
            placeholder="emma.lopez@example.com"
            className="w-full sm:w-[300px]"
            value={values.email}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Phone
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="phone"
            inputMode="tel"
            placeholder="+1 (617) 555-0142"
            className="w-full sm:w-[300px]"
            value={values.phone}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Department
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="department"
            placeholder="Product"
            className="w-full sm:w-[300px]"
            value={values.department}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

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
