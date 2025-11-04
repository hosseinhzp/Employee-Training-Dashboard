import { columns, Data } from "./columns"
import { DataTable } from "./data-table"
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
  return [
    { task: "TASK_001", title: "Design login and registration pages", status: "Todo", priority: "High" },
    { task: "TASK_002", title: "Implement user authentication", status: "In Progress", priority: "Medium" },
    { task: "TASK_003", title: "Set up role-based access control", status: "Failed", priority: "Low" },
    { task: "TASK_004", title: "Create dashboard analytics widgets", status: "Done", priority: "High" },
    { task: "TASK_005", title: "Integrate third-party payment API", status: "In Progress", priority: "Medium" },
    { task: "TASK_006", title: "Implement responsive layout", status: "Todo", priority: "Low" },
    { task: "TASK_007", title: "Add notifications and real-time alerts", status: "Done", priority: "High" },
    { task: "TASK_008", title: "Build tasks CRUD endpoints", status: "Failed", priority: "Medium" },
    { task: "TASK_009", title: "Optimize database queries", status: "In Progress", priority: "Low" },
    { task: "TASK_010", title: "Write unit and integration tests", status: "Todo", priority: "High" },
    { task: "TASK_011", title: "Configure CI/CD pipeline", status: "Done", priority: "Medium" },
    { task: "TASK_012", title: "Implement file upload and storage", status: "Failed", priority: "Low" },
    { task: "TASK_013", title: "Improve application performance", status: "In Progress", priority: "Medium" },
    { task: "TASK_014", title: "Implement input validation and sanitization", status: "Todo", priority: "High" },
    { task: "TASK_015", title: "Deploy to staging environment", status: "Done", priority: "Low" },
  ]
}

export default async function TasksPage() {
  const data = await getData()

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        {/* Page header: title and description */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <p className="text-md text-gray-400">Manage your tasks efficiently</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <span>Create</span>
              <Plus />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-gray-50 dark:bg-gray-900">
            <SheetHeader>
              <SheetTitle>Create Task</SheetTitle>
              <SheetDescription>
                Add a new task by providing necessary info. Click save when you're done.
              </SheetDescription>
            </SheetHeader>

            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Title</Label>
                <Input id="sheet-demo-name" placeholder="Enter a title" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Status</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select dropdown" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Done">Done</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                      <SelectItem value="Todo">Todo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Priority</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">High</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Medium</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Low</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>

          </SheetContent>
        </Sheet>
      </div>
      {/* Data table: passes columns definition and data array to the client component */}
      <DataTable columns={columns} data={data} />
    </div>
  )
}