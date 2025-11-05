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

export default function TaskForm() {
  const { values, setValues, errors, setErrors, handleChange, setFieldValue } =
    useForm({
      course: "",
      assignee: "",
      dueDate: "",
      hours: "",
      status: "Assigned",
    });

  const handleSelectChange = React.useCallback((value: string) => {
    setFieldValue("status", value);
  }, [setFieldValue]);

  const validate = () => {
    const next: Partial<Record<string, string>> = {};
    if (!values.course.trim()) next.course = "Course is required.";
    if (!values.assignee.trim()) next.assignee = "Assignee is required.";
    if (!values.dueDate.trim()) next.dueDate = "Due date is required.";
    if (!values.hours.trim() || Number(values.hours) <= 0)
      next.hours = "Estimated hours must be > 0";
    return next;
  };

  const handleSave = (e?: React.FormEvent) => {
    e?.preventDefault();
    const next = validate();
    setErrors(next);
    const hasErrors = Object.keys(next).length > 0;
    if (!hasErrors) {
      // success placeholder: wire to backend as needed
      console.log("Assigned training (mock)", values);
      alert("Assigned (mock)");
    }
  };

  return (
    // give the form an id so the SheetFooter can submit it from outside
    <form id="assign-training-form" onSubmit={handleSave} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-4 items-center">
        <label className="text-left sm:text-right pr-2 sm:pr-4 text-sm font-medium">
          Course
        </label>
        <div className="flex flex-col">
          <Input
            id="task-course"
            name="course"
            placeholder="e.g. React Fundamentals"
            className="w-full"
            value={values.course}
            onChange={handleChange}
            aria-invalid={!!errors.course}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.course}
          </FieldError>
        </div>

        <label className="text-left sm:text-right pr-2 sm:pr-4 text-sm font-medium">
          Assignee
        </label>
        <div className="flex flex-col">
          <Input
            id="task-assignee"
            name="assignee"
            placeholder="Employee name"
            className="w-full"
            value={values.assignee}
            onChange={handleChange}
            aria-invalid={!!errors.assignee}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.assignee}
          </FieldError>
        </div>

        <label className="text-left sm:text-right pr-2 sm:pr-4 text-sm font-medium">
          Due date
        </label>
        <div className="flex flex-col">
          <Input
            id="task-due"
            name="dueDate"
            type="date"
            className="w-full"
            value={values.dueDate}
            onChange={handleChange}
            aria-invalid={!!errors.dueDate}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.dueDate}
          </FieldError>
        </div>

        <label className="text-left sm:text-right pr-2 sm:pr-4 text-sm font-medium">
          Hours
        </label>
        <div className="flex flex-col">
          <Input
            id="task-hours"
            name="hours"
            type="number"
            min={0}
            placeholder="Estimated hours"
            className="w-full"
            value={values.hours}
            onChange={handleChange}
            aria-invalid={!!errors.hours}
          />
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.hours}
          </FieldError>
        </div>

        <label className="text-left sm:text-right pr-2 sm:pr-4 text-sm font-medium">
          Status
        </label>
        <div className="flex flex-col">
          <Select onValueChange={handleSelectChange} value={values.status}>
            <SelectTrigger className="w-full" aria-invalid={!!errors.status}>
              <SelectValue placeholder="Select status..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Assigned">Assigned</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Overdue">Overdue</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <FieldError className="mt-1 text-sm text-destructive">
            {errors.status}
          </FieldError>
        </div>
      </div>
      {/* Assign button will live in the SheetFooter (outside the form) via form id submit; keep form minimal */}
    </form>
  );
}
