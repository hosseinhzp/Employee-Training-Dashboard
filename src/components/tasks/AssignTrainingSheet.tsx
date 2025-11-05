"use client";

import * as React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskForm from "@/components/tasks/TaskForm";

export default function AssignTrainingSheet() {
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTimeout(() => {
        const el = document.querySelector(
          '[data-slot="sheet-content"]',
        ) as HTMLElement | null;
        if (el) {
          const rect = el.getBoundingClientRect();
          console.log("[OverlayLogger] Assign Training sheet opened", {
            rect,
            className: el.className,
          });
        } else {
          console.log(
            "[OverlayLogger] Assign Training sheet opened — sheet-content element not found",
          );
        }
      }, 150);
    }
  };

  return (
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button>
          <span>Assign Training</span>
          <Plus />
        </Button>
      </SheetTrigger>
      {/* force centered panel by overriding side-specific sheet classes with inset-0 m-auto h-auto */}
      <SheetContent className="inset-0 m-auto h-auto w-[95%] sm:w-[540px] max-w-md bg-gray-50 dark:bg-gray-900 max-h-[90vh] overflow-auto p-4 sm:p-6">
        <SheetHeader className="gap-1">
          <SheetTitle>Assign Training</SheetTitle>
          <SheetDescription>
            Assign a course to an employee and set due date / estimated hours.
          </SheetDescription>
        </SheetHeader>

        <div className="px-4">
          <TaskForm />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Button form="assign-training-form" type="submit">
            Assign
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
