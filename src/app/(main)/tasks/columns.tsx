"use client"

/*
  Column definitions for the Tasks DataTable

  - Defines the visible columns and how to render each cell
  - Adds `filterFn` for `status` and `priority` so they accept array-based
    filter values (multi-select)
*/

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"
import { ArrowUp, ArrowDown, Clock, RefreshCw, CheckCircle, XCircle, Minus, CircleOff, Circle } from "lucide-react"

export type Data = {
  task: string
  title: string
  status: "In Progress" | "Done" | "Failed" | "Cancelled" | "Todo"
  priority: "Low" | "Medium" | "High"
}

export const columns: ColumnDef<Data>[] = [
  {
    id: "select",
    // selection column: renders a checkbox in the header (select all) and per-row
    // checkboxes for row selection
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="cursor-pointer"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="cursor-pointer"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "task",
    header: "Task",
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    )
    ,
    // support multi-select filtering: filterValue can be an array of allowed values
    filterFn: (row, columnId, filterValue: unknown) => {
      const rowValue = row.getValue(columnId) as string
      if (filterValue == null) return true
      if (Array.isArray(filterValue)) {
        if (filterValue.length === 0) return true
        return filterValue.includes(rowValue)
      }
      // fallback to equality
      return String(filterValue) === String(rowValue)
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as Data['status']

      let Icon = Clock

      switch (status) {
        case "In Progress":
          Icon = RefreshCw
          break
        case "Done":
          Icon = CheckCircle
          break
        case "Failed":
          Icon = XCircle
          break
          case "Cancelled":
          Icon = CircleOff
          break
          case "Todo":
          Icon = Circle
          break
      }

      return (
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{status}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    )
    ,
    // support multi-select filtering: filterValue can be an array of allowed values
    filterFn: (row, columnId, filterValue: unknown) => {
      const rowValue = row.getValue(columnId) as string
      if (filterValue == null) return true
      if (Array.isArray(filterValue)) {
        if (filterValue.length === 0) return true
        return filterValue.includes(rowValue)
      }
      // fallback to equality
      return String(filterValue) === String(rowValue)
    },
    cell: ({ row }) => {
      const priority = row.getValue("priority") as Data['priority']

      let Icon = Minus

      switch (priority) {
        case "High":
          Icon = ArrowUp
          break
        case "Medium":
          Icon = Minus
          break
        case "Low":
          Icon = ArrowDown
          break
      }

      return (
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{priority}</span>
        </div>
      )
    }
  },
]