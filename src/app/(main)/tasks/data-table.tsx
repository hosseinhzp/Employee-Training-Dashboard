"use client"

/*
  DataTable (client)

  Responsibilities:
  - Render a searchable, sortable table using @tanstack/react-table
  - Provide multi-select dropdown filters for Status and Priority
  - Render pagination controls and a column visibility dropdown

  Implementation notes:
  - The table instance is created with local state (sorting, filters, visibility)
  - Column filter logic is defined in `columns.tsx` so this component focuses on UI
*/

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SortDesc, RefreshCw, CheckCircle, XCircle, ArrowUp, ArrowDown, Minus, CircleOff, Circle } from "lucide-react"
import PaginationComponent from "./pagination"
import SelectionToolbar from "@/components/ui/selection-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [statusFilter, setStatusFilter] = React.useState<string[]>(() => [])
  const [priorityFilter, setPriorityFilter] = React.useState<string[]>(() => [])

    /* UI filter state (multi-select)
       - statusFilter: selected status values (e.g. ["In Progress", "Done"])
       - priorityFilter: selected priority values (e.g. ["High"]) */
  const toggle = (arr: string[], val: string) => {
    if (arr.includes(val)) return arr.filter((v) => v !== val)
    return [...arr, val]
  }
  // helper to compute counts for each value (counts are from the provided `data` prop)
  const getCount = (key: string, val: string) => {
    try {
      return (data as any[]).filter((d) => d?.[key] === val).length
    } catch {
      return 0
    }
  }

  // map status -> icon component
  const statusIcon = (s: string) => {
    switch (s) {
      case "In Progress":
        return <RefreshCw className="w-4 h-4 text-gray-400" />
      case "Done":
        return <CheckCircle className="w-4 h-4 text-gray-400" />
      case "Failed":
        return <XCircle className="w-4 h-4 text-gray-400" />
      case "Cancelled":
        return <CircleOff className="w-4 h-4 text-gray-400" />
      case "Todo":
        return <Circle className="w-4 h-4 text-gray-400" />
      default:
        return null
    }
  }

  // map priority -> icon component
  const priorityIcon = (p: string) => {
    switch (p) {
      case "High":
        return <ArrowUp className="w-4 h-4 text-gray-400" />
      case "Medium":
        return <Minus className="w-4 h-4 text-gray-400" />
      case "Low":
        return <ArrowDown className="w-4 h-4 text-gray-400" />
      default:
        return null
    }
  }
  const [sorting, setSorting] = React.useState<SortingState>([])
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const selectedCount = Object.keys(rowSelection).length

  const handleDelete = () => {
    if (!selectedCount) return
    if (!confirm(`Delete ${selectedCount} selected task(s)?`)) return
    // Placeholder: wire to backend or state update
    console.log("Deleting rows:", Object.keys(rowSelection))
    setRowSelection({})
  }

  const handleUpdatePriority = (priority: "Low" | "Medium" | "High") => {
    if (!selectedCount) return
    // Placeholder: wire to backend or state update
    console.log("Update priority to", priority, "for:", Object.keys(rowSelection))
    setRowSelection({})
  }

  const handleUpdateStatus = (
    status: "In Progress" | "Done" | "Failed" | "Cancelled" | "Todo"
  ) => {
    if (!selectedCount) return
    // Placeholder: wire to backend or state update
    console.log("Update status to", status, "for:", Object.keys(rowSelection))
    setRowSelection({})
  }

  const handleCloseSelection = () => setRowSelection({})

  return (
    <div>
      <div className="flex items-center py-4">
        {/* Search input: filters tasks by title (updates table column filter) */}
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {/* Status filter dropdown (multi-select) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {[
              "In Progress",
              "Done",
              "Failed",
              "Cancelled",
              "Todo",
            ].map((s) => (
              <DropdownMenuItem
                key={s}
                onClick={() => {
                  const next = toggle(statusFilter, s)
                  setStatusFilter(next)
                  table.getColumn("status")?.setFilterValue(next)
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={statusFilter.includes(s)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => {
                        const next = toggle(statusFilter, s)
                        setStatusFilter(next)
                        table.getColumn("status")?.setFilterValue(next)
                      }}
                      aria-label={`Filter status ${s}`}
                      className="cursor-pointer"
                    />
                    {statusIcon(s)}
                    <span className="ml-1">{s}</span>
                  </div>
                  <span className="ml-4 text-sm text-muted-foreground">{getCount("status", s)}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Priority filter dropdown (multi-select) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Priority
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {["Low", "Medium", "High"].map((p) => (
              <DropdownMenuItem
                key={p}
                onClick={() => {
                  const next = toggle(priorityFilter, p)
                  setPriorityFilter(next)
                  table.getColumn("priority")?.setFilterValue(next)
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={priorityFilter.includes(p)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => {
                        const next = toggle(priorityFilter, p)
                        setPriorityFilter(next)
                        table.getColumn("priority")?.setFilterValue(next)
                      }}
                        aria-label={`Filter priority ${p}`}
                        className="cursor-pointer"
                    />
                    {priorityIcon(p)}
                    <span className="ml-1">{p}</span>
                  </div>
                  <span className="ml-4 text-sm text-muted-foreground">{getCount("priority", p)}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <SortDesc />
              <span>View</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: boolean | undefined) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Table: header, body and empty-state rendering */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Selection toolbar moved below the table (compact) */}
      {selectedCount > 0 && (
        <SelectionToolbar
          selectedCount={selectedCount}
          onDelete={handleDelete}
          onUpdatePriority={handleUpdatePriority}
          onUpdateStatus={handleUpdateStatus}
          onClose={handleCloseSelection}
        />
      )}

      <div className="flex items-center justify-end space-x-2 py-4">
        <PaginationComponent table={table} />
      </div>
    </div>
  )
}