"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"
import { ArrowUp, ArrowDown, Clock, RefreshCw, CheckCircle, XCircle, Minus, CircleOff, Circle, CreditCard, UserCheck, Users, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export type Data = {
  username: string
  name: string
  email: string
  phone?: string
  role: "Employee" | "Manager" | "HR" | "Admin"
  department?: string
  trainingProgress?: number // 0-100
  completedTrainings?: number
  lastTrainingDate?: string // ISO
}

export const columns: ColumnDef<Data>[] = [
  {
    id: "select",
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
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
  },
  {
    accessorKey: "trainingProgress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Training" />
    ),
    cell: ({ row }) => {
      const p = (row.getValue("trainingProgress") as number) ?? 0
      return (
        <div className="w-36">
          <Progress value={p} />
          <div className="text-xs text-muted-foreground mt-1">{p}%</div>
        </div>
      )
    }
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
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
      const role = row.getValue("role") as Data['role']

      let Icon = Clock

      switch (role) {
        case "Employee":
          Icon = Users
          break
        case "Manager":
          Icon = Users
          break
        case "Admin":
          Icon = UserCheck
          break
        case "HR":
          Icon = Shield
          break
      }

      return (
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{role}</span>
        </div>
      )
    }
  },
]