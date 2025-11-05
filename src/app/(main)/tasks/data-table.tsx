"use client";

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
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SortDesc,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  Minus,
} from "lucide-react";
import PaginationComponent from "./pagination";
import SelectionToolbar from "@/components/ui/selection-toolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [statusFilter, setStatusFilter] = React.useState<string[]>(() => []);

  const statusOptions = React.useMemo(
    () => ["Assigned", "In Progress", "Completed", "Overdue", "Cancelled"],
    [],
  );

  const statusCounts = React.useMemo(() => {
    const map: Record<string, number> = {};
    try {
      (data as Record<string, unknown>[]).forEach((d) => {
        const v = String((d as Record<string, unknown>)?.status ?? "");
        map[v] = (map[v] || 0) + 1;
      });
    } catch {
      // ignore
    }
    return map;
  }, [data]);

  const statusIcon = (s: string) => {
    switch (s) {
      case "In Progress":
        return <RefreshCw className="w-4 h-4 text-gray-400" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-gray-400" />;
      case "Overdue":
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
      case "Cancelled":
        return <XCircle className="w-4 h-4 text-gray-400" />;
      case "Assigned":
        return <Minus className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
  });

  const selectedCount = Object.keys(rowSelection).length;

  const handleDelete = React.useCallback(() => {
    if (!selectedCount) return;
    if (!confirm(`Delete ${selectedCount} selected task(s)?`)) return;
    // Placeholder: wire to backend or state update
    console.log("Deleting rows:", Object.keys(rowSelection));
    setRowSelection({});
  }, [selectedCount, rowSelection]);

  const handleUpdateStatus = React.useCallback(
    (
      status: "Assigned" | "In Progress" | "Completed" | "Overdue" | "Cancelled",
    ) => {
      if (!selectedCount) return;
      // Placeholder: wire to backend or state update
      console.log("Update training status to", status, "for:", Object.keys(rowSelection));
      setRowSelection({});
    },
    [selectedCount, rowSelection],
  );

  const handleCloseSelection = React.useCallback(() => setRowSelection({}), []);

  // Toggle a status filter value and apply it to the table column
  const toggleStatusFilter = React.useCallback(
    (s: string) => {
      setStatusFilter((prev) => {
        const next = prev.includes(s) ? prev.filter((v) => v !== s) : [...prev, s];
        table.getColumn("status")?.setFilterValue(next);
        return next;
      });
    },
    [table],
  );

  return (
    <div>
      <div className="flex items-center py-4">
        {/* Search input: filters courses or assignee (updates table column filter) */}
        <Input
          placeholder="Filter courses or assignee..."
          value={(table.getColumn("course")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            // apply filter to course and assignee for better discoverability
            table.getColumn("course")?.setFilterValue(event.target.value);
            table.getColumn("assignee")?.setFilterValue(event.target.value);
          }}
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
            {statusOptions.map((s) => (
              <DropdownMenuItem key={s} onClick={() => toggleStatusFilter(s)}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={statusFilter.includes(s)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => toggleStatusFilter(s)}
                      aria-label={`Filter status ${s}`}
                      className="cursor-pointer"
                    />
                    {statusIcon(s)}
                    <span className="ml-1">{s}</span>
                  </div>
                  <span className="ml-4 text-sm text-muted-foreground">
                    {statusCounts[s] ?? 0}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Priority not used for training assignments */}
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
              .filter((column) => column.getCanHide())
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
                );
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
                            header.getContext(),
                          )}
                    </TableHead>
                  );
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
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
          onUpdateStatus={handleUpdateStatus}
          onClose={handleCloseSelection}
        />
      )}

      <div className="flex items-center justify-end space-x-2 py-4">
        <PaginationComponent table={table} />
      </div>
    </div>
  );
}
