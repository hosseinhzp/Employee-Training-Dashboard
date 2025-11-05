"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldLabel,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";

export default function AddressForm() {
  const [values, setValues] = React.useState({
    country: "",
    state: "",
    zip: "",
    taxId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };
  const handleSave = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Saved address (mock)", values);
    alert("Saved (mock)");
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Country
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="country"
            placeholder="USA"
            className="w-full sm:w-[300px]"
            value={values.country}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          State
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="state"
            placeholder="Massachusetts"
            className="w-full sm:w-[300px]"
            value={values.state}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          Zip Code
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="zip"
            placeholder="02115"
            className="w-full sm:w-[300px]"
            value={values.zip}
            onChange={handleChange}
          />
        </FieldContent>
      </Field>

      <Field orientation="responsive" className="gap-2 sm:gap-3">
        <FieldLabel className="w-[110px] text-left sm:text-right">
          TAX ID
        </FieldLabel>
        <FieldContent className="flex flex-col">
          <Input
            name="taxId"
            placeholder="987-65-4321"
            className="w-full sm:w-[300px]"
            value={values.taxId}
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
