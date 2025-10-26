"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Trash, ArrowUp, CheckSquare, X, Users as UsersIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface SelectionToolbarProps {
  selectedCount: number
  onDelete: () => void
  onUpdatePriority?: (priority: "Low" | "Medium" | "High") => void
  onUpdateStatus?: (
    status: "In Progress" | "Done" | "Failed" | "Cancelled" | "Todo"
  ) => void
  onUpdateRole?: (role: "Cashier" | "Manager" | "Admin" | "SuperAdmin") => void
  onClose: () => void
}

export default function SelectionToolbar({
  selectedCount,
  onDelete,
  onUpdatePriority,
  onUpdateStatus,
  onUpdateRole,
  onClose,
}: SelectionToolbarProps) {
  return (
  <div className="mt-4 flex justify-center">
      <div className="inline-flex items-center gap-1 rounded-sm border bg-muted p-1 text-sm">
        <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium">{selectedCount}</div>
        {onUpdatePriority && (
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Update priority"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent sideOffset={4}>Update priority</TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end">
              {( ["Low", "Medium", "High"] as const ).map((p) => (
                <DropdownMenuItem key={p} className="text-sm hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => onUpdatePriority(p)}>
                  {p}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {onUpdateStatus && (
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Update status"
                  >
                    <CheckSquare className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent sideOffset={4}>Update status</TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end">
              {( ["In Progress", "Done", "Failed", "Cancelled", "Todo"] as const ).map((s) => (
                <DropdownMenuItem key={s} className="text-sm hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => onUpdateStatus(s)}>
                  {s}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {onUpdateRole && (
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Update role"
                  >
                    <UsersIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent sideOffset={4}>Update role</TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end">
              {( ["Cashier", "Manager", "Admin", "SuperAdmin"] as const ).map((r) => (
                <DropdownMenuItem key={r} className="text-sm hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => onUpdateRole(r)}>
                  {r}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive" onClick={onDelete} className="h-8 w-8 p-0 flex items-center justify-center hover:bg-red-600/10 transition-colors" aria-label="Delete selected">
              <Trash className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Delete</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" onClick={onClose} className="h-8 w-8 p-0 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Close selection">
              <X className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Close</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
