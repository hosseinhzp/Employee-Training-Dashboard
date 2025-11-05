"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import UserForm from "@/components/users/UserForm";

export default function AddUserDialog() {
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTimeout(() => {
        const el = document.querySelector(
          '[data-slot="dialog-content"]',
        ) as HTMLElement | null;
        if (el) {
          const rect = el.getBoundingClientRect();
          console.log("[OverlayLogger] Add User dialog opened", {
            rect,
            className: el.className,
          });
        } else {
          console.log(
            "[OverlayLogger] Add User dialog opened — dialog-content element not found",
          );
        }
      }, 150);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <span>Add User</span>
          <UserPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[100%] sm:w-[720px] max-w-full bg-gray-50 dark:bg-gray-900 max-h-[90vh] overflow-auto p-4 sm:p-6">
        <DialogHeader className="gap-1">
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Create new user here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
}
