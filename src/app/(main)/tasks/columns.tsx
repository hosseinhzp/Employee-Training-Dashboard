"use client";

/*
  Column definitions for the Tasks DataTable

  - Defines the visible columns and how to render each cell
  - Adds `filterFn` for `status` and `priority` so they accept array-based
    filter values (multi-select)
*/

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  AlertCircle,
  Minus,
} from "lucide-react";

export type Data = {
  id: string;
  course: string;
  assignee: string;
  dueDate: string; // ISO date
  status: "Assigned" | "In Progress" | "Completed" | "Overdue" | "Cancelled";
  progress: number; // 0-100
  hours: number;
};

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
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "course",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Course" />
    ),
  },
  {
    accessorKey: "assignee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assignee" />
    ),
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Due" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("dueDate") as string;
      return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    // support multi-select filtering: filterValue can be an array of allowed values
    filterFn: (row, columnId, filterValue: unknown) => {
      const rowValue = row.getValue(columnId) as string;
      if (filterValue == null) return true;
      if (Array.isArray(filterValue)) {
        if (filterValue.length === 0) return true;
        return filterValue.includes(rowValue);
      }
      return String(filterValue) === String(rowValue);
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as Data["status"];

      let Icon = Clock;

      switch (status) {
        case "In Progress":
          Icon = RefreshCw;
          break;
        case "Completed":
          Icon = CheckCircle;
          break;
        case "Overdue":
          Icon = AlertCircle;
          break;
        case "Cancelled":
          Icon = XCircle;
          break;
        case "Assigned":
          Icon = Minus;
          break;
      }

      return (
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    cell: ({ row }) => {
      const p = row.getValue("progress") as number;
      return <div className="text-sm">{p}%</div>;
    },
  },
  {
    accessorKey: "hours",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hours" />
    ),
    cell: ({ row }) => <div className="text-sm">{row.getValue("hours")}h</div>,
  },
];
