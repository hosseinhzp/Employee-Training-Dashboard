import { columns, Data } from "./columns"
import { DataTable } from "./data-table"
import TaskForm from "@/components/tasks/TaskForm"
import AssignTrainingSheet from "@/components/tasks/AssignTrainingSheet"
import { Plus } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

/*
  Tasks page
  - getData(): mocked data provider returning an array of tasks
  - Default export renders page header and the DataTable component
  Keep this file lean: the table logic lives in `data-table.tsx` and the
  column configuration lives in `columns.tsx`.
*/

async function getData(): Promise<Data[]> {
  // larger sample set so table spans multiple pages (default page size ~10)
  const items: Data[] = [
    { id: "T-001", course: "Security Awareness", assignee: "Sophia Mills", dueDate: "2025-12-01", status: "Assigned", progress: 0, hours: 1 },
    { id: "T-002", course: "React Fundamentals", assignee: "Oliver Khan", dueDate: "2025-11-20", status: "In Progress", progress: 45, hours: 8 },
    { id: "T-003", course: "Data Privacy", assignee: "Eva Kühn", dueDate: "2025-10-10", status: "Completed", progress: 100, hours: 2 },
    { id: "T-004", course: "Accessibility Basics", assignee: "Liam Bradley", dueDate: "2025-11-30", status: "Assigned", progress: 0, hours: 3 },
    { id: "T-005", course: "Testing Best Practices", assignee: "Amélie Rousseau", dueDate: "2025-11-05", status: "Overdue", progress: 60, hours: 4 },
    { id: "T-006", course: "Onboarding 101", assignee: "Mia Pereira", dueDate: "2025-11-15", status: "In Progress", progress: 20, hours: 2 },
    { id: "T-007", course: "Performance Optimization", assignee: "Hugo Silva", dueDate: "2025-12-10", status: "Assigned", progress: 0, hours: 6 },
    { id: "T-008", course: "Unit Testing", assignee: "Liam Bradley", dueDate: "2025-11-25", status: "In Progress", progress: 50, hours: 5 },
    { id: "T-009", course: "API Security", assignee: "Oliver Khan", dueDate: "2025-11-12", status: "Completed", progress: 100, hours: 3 },
    { id: "T-010", course: "UX Basics", assignee: "Amélie Rousseau", dueDate: "2025-12-05", status: "Assigned", progress: 0, hours: 4 },
    { id: "T-011", course: "Docker Essentials", assignee: "Noah Berg", dueDate: "2025-11-18", status: "In Progress", progress: 30, hours: 6 },
    { id: "T-012", course: "Kubernetes Intro", assignee: "Noah Berg", dueDate: "2025-12-20", status: "Assigned", progress: 0, hours: 10 },
    { id: "T-013", course: "Data Modeling", assignee: "Lucas Moreno", dueDate: "2025-11-22", status: "In Progress", progress: 70, hours: 7 },
    { id: "T-014", course: "Customer Support Training", assignee: "Mia Pereira", dueDate: "2025-11-08", status: "Overdue", progress: 40, hours: 2 },
    { id: "T-015", course: "Leadership Basics", assignee: "Liam Bradley", dueDate: "2025-12-15", status: "Assigned", progress: 0, hours: 6 },
    { id: "T-016", course: "Compliance Overview", assignee: "Eva Kühn", dueDate: "2025-10-02", status: "Completed", progress: 100, hours: 2 },
    { id: "T-017", course: "Logging & Monitoring", assignee: "Hugo Silva", dueDate: "2025-11-28", status: "In Progress", progress: 55, hours: 4 },
    { id: "T-018", course: "CI/CD Fundamentals", assignee: "Oliver Khan", dueDate: "2025-12-01", status: "Assigned", progress: 0, hours: 5 },
    { id: "T-019", course: "Network Security", assignee: "Noah Berg", dueDate: "2025-11-02", status: "Completed", progress: 100, hours: 3 },
    { id: "T-020", course: "Product Management 101", assignee: "Isla Murphy", dueDate: "2025-11-30", status: "Assigned", progress: 0, hours: 8 },
    { id: "T-021", course: "Effective Communication", assignee: "Ava Rodríguez", dueDate: "2025-11-14", status: "In Progress", progress: 25, hours: 2 },
    { id: "T-022", course: "Time Management", assignee: "Mateo Castro", dueDate: "2025-11-21", status: "Assigned", progress: 0, hours: 1 },
    { id: "T-023", course: "Advanced React", assignee: "Oliver Khan", dueDate: "2025-12-07", status: "Assigned", progress: 0, hours: 12 },
    { id: "T-024", course: "SQL Performance", assignee: "Lucas Moreno", dueDate: "2025-11-11", status: "Overdue", progress: 70, hours: 6 },
    { id: "T-025", course: "Accessibility Advanced", assignee: "Amélie Rousseau", dueDate: "2025-12-02", status: "Assigned", progress: 0, hours: 3 },
    { id: "T-026", course: "Encryption Basics", assignee: "Eva Kühn", dueDate: "2025-10-28", status: "Completed", progress: 100, hours: 2 },
    { id: "T-027", course: "Incident Response", assignee: "Noah Berg", dueDate: "2025-11-09", status: "In Progress", progress: 35, hours: 5 },
    { id: "T-028", course: "Service Design", assignee: "Isla Murphy", dueDate: "2025-12-12", status: "Assigned", progress: 0, hours: 6 },
    { id: "T-029", course: "Mentoring 101", assignee: "Liam Bradley", dueDate: "2025-11-29", status: "In Progress", progress: 10, hours: 2 },
    { id: "T-030", course: "Security Deep Dive", assignee: "Eva Kühn", dueDate: "2025-11-06", status: "In Progress", progress: 80, hours: 8 },
  ]

  return items
}

export default async function TasksPage() {
  const data = await getData()

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3 sm:gap-0">
        {/* Page header: title and description */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Training Assignments</h1>
          <p className="text-md text-gray-400">Manage employee training assignments and progress</p>
        </div>
        {/* instrumented sheet that logs size/placement on open */}
        <AssignTrainingSheet />
      </div>
      {/* Data table: passes columns definition and data array to the client component */}
      <DataTable columns={columns} data={data} />
    </div>
  )
}