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
  XCircle,
  ArrowUp,
  ArrowDown,
  Minus,
  CircleOff,
  Circle,
  CreditCard,
  Users,
  UserCheck,
  Shield,
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
  const [roleFilter, setRoleFilter] = React.useState<string[]>(() => []);

  const toggle = (arr: string[], val: string) => {
    if (arr.includes(val)) return arr.filter((v) => v !== val);
    return [...arr, val];
  };

  const getCount = (key: string, val: string) => {
    try {
      return (data as any[]).filter((d) => d?.[key] === val).length;
    } catch {
      return 0;
    }
  };

  // map status -> icon component
  const roleIcon = (r: string) => {
    switch (r) {
      case "Employee":
        return <Users className="w-4 h-4 text-gray-400" />;
      case "Manager":
        return <Users className="w-4 h-4 text-gray-400" />;
      case "Admin":
        return <UserCheck className="w-4 h-4 text-gray-400" />;
      case "HR":
        return <Shield className="w-4 h-4 text-gray-400" />;
      default:
        return null;
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

  const handleDelete = () => {
    if (!selectedCount) return;
    if (!confirm(`Delete ${selectedCount} selected user(s)?`)) return;
    // Placeholder: wire to backend or state update
    console.log("Deleting rows:", Object.keys(rowSelection));
    setRowSelection({});
  };

  const handleUpdateRole = (
    status: "Employee" | "Manager" | "HR" | "Admin",
  ) => {
    if (!selectedCount) return;
    // Placeholder: wire to backend or state update
    console.log("Update status to", status, "for:", Object.keys(rowSelection));
    setRowSelection({});
  };

  const handleCloseSelection = () => setRowSelection({});

  return (
    <div>
      <div className="flex items-center py-4">
        {/* Search input: filters users by name (updates table column filter) */}
        <Input
          placeholder="Filter Users..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {/* Status filter dropdown (multi-select) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Role
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {["Employee", "Manager", "HR", "Admin"].map((r) => (
              <DropdownMenuItem
                key={r}
                onClick={() => {
                  const next = toggle(roleFilter, r);
                  setRoleFilter(next);
                  table.getColumn("role")?.setFilterValue(next);
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={roleFilter.includes(r)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => {
                        const next = toggle(roleFilter, r);
                        setRoleFilter(next);
                        table.getColumn("role")?.setFilterValue(next);
                      }}
                      aria-label={`Filter role ${r}`}
                      className="cursor-pointer"
                    />
                    {roleIcon(r)}
                    <span className="ml-1">{r}</span>
                  </div>
                  <span className="ml-4 text-sm text-muted-foreground">
                    {getCount("role", r)}
                  </span>
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
          onUpdateRole={handleUpdateRole}
          onClose={handleCloseSelection}
        />
      )}

      <div className="flex items-center justify-end space-x-2 py-4">
        <PaginationComponent table={table} />
      </div>
    </div>
  );
}
