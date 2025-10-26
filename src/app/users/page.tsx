import { columns, Data } from "./columns"
import { DataTable } from "./data-table"
import { UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import UserForm from "@/components/users/UserForm"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

async function getData(): Promise<Data[]> {
  return [
    { username: "sophia.mills", name: "Sophia Mills", email: "sophia.mills@brightonmail.com", phone: "+44 7911 123456", role: "Cashier" },
    { username: "oliver.khan", name: "Oliver Khan", email: "oliver.khan@brooklynmail.com", phone: "+1 347 555 0182", role: "Admin" },
    { username: "eva.kuhn", name: "Eva Kühn", email: "eva.kuhn@berlinpost.de", phone: "+49 30 901820", role: "SuperAdmin" },
    { username: "liam.bradley", name: "Liam Bradley", email: "liam.bradley@dublincorp.ie", phone: "+353 87 234 5678", role: "Manager" },
    { username: "amelie.rousseau", name: "Amélie Rousseau", email: "amelie.rousseau@parismail.fr", phone: "+33 6 12 34 56 78", role: "Admin" },
    { username: "noah.berg", name: "Noah Berg", email: "noah.berg@stockholmmail.se", phone: "+46 8 123 45 67", role: "SuperAdmin" },
    { username: "mia.pereira", name: "Mia Pereira", email: "mia.pereira@lisbonnet.pt", phone: "+351 91 234 5678", role: "Cashier" },
    { username: "hugo.silva", name: "Hugo Silva", email: "hugo.silva@lisbontech.pt", phone: "+351 21 555 0123", role: "Admin" },
    { username: "emma.ross", name: "Emma Ross", email: "emma.ross@sydneymail.au", phone: "+61 2 9123 4567", role: "SuperAdmin" },
    { username: "lucas.moreno", name: "Lucas Moreno", email: "lucas.moreno@madridmail.es", phone: "+34 612 345 678", role: "Cashier" },
    { username: "ava.rodriguez", name: "Ava Rodríguez", email: "ava.rodriguez@barcelonamail.es", phone: "+34 618 234 901", role: "Admin" },
    { username: "mateo.castro", name: "Mateo Castro", email: "mateo.castro@buenosmail.ar", phone: "+54 9 11 3456 7890", role: "Manager" },
    { username: "isla.murphy", name: "Isla Murphy", email: "isla.murphy@dublinmail.ie", phone: "+353 1 555 0199", role: "Admin" },
    { username: "olivia.nordin", name: "Olivia Nordin", email: "olivia.nordin@oslomail.no", phone: "+47 22 34 56 78", role: "Cashier" },
    { username: "ethan.hart", name: "Ethan Hart", email: "ethan.hart@torontomail.ca", phone: "+1 416 555 2671", role: "Manager" },
  ]
}

export default async function TasksPage() {
  const data = await getData()

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">User List</h1>
          <p className="text-md text-gray-400">Manage your users and their roles here.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <span>Add User</span>
              <UserPlus />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create new user here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <UserForm />
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}