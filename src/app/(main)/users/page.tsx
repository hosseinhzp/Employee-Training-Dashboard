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
    { username: "sophia.mills", name: "Sophia Mills", email: "sophia.mills@brightonmail.com", phone: "+44 7911 123456", role: "Employee", department: "Sales", trainingProgress: 20, completedTrainings: 1, lastTrainingDate: "2025-08-10", certifications: ["ISO Sec"] },
    { username: "oliver.khan", name: "Oliver Khan", email: "oliver.khan@brooklynmail.com", phone: "+1 347 555 0182", role: "Manager", department: "Engineering", trainingProgress: 65, completedTrainings: 3, lastTrainingDate: "2025-10-15", certifications: [] },
    { username: "eva.kuhn", name: "Eva Kühn", email: "eva.kuhn@berlinpost.de", phone: "+49 30 901820", role: "HR", department: "Security", trainingProgress: 100, completedTrainings: 7, lastTrainingDate: "2025-09-02", certifications: ["Privacy"] },
    { username: "liam.bradley", name: "Liam Bradley", email: "liam.bradley@dublincorp.ie", phone: "+353 87 234 5678", role: "Manager", department: "Product", trainingProgress: 40, completedTrainings: 2, lastTrainingDate: "2025-07-20", certifications: [] },
    { username: "amelie.rousseau", name: "Amélie Rousseau", email: "amelie.rousseau@parismail.fr", phone: "+33 6 12 34 56 78", role: "Employee", department: "Design", trainingProgress: 85, completedTrainings: 4, lastTrainingDate: "2025-10-01", certifications: ["UX"] },
    { username: "noah.berg", name: "Noah Berg", email: "noah.berg@stockholmmail.se", phone: "+46 8 123 45 67", role: "Admin", department: "Ops", trainingProgress: 100, completedTrainings: 10, lastTrainingDate: "2025-09-30", certifications: ["Infra"] },
    { username: "mia.pereira", name: "Mia Pereira", email: "mia.pereira@lisbonnet.pt", phone: "+351 91 234 5678", role: "Employee", department: "Support", trainingProgress: 5, completedTrainings: 0, lastTrainingDate: "", certifications: [] },
    { username: "hugo.silva", name: "Hugo Silva", email: "hugo.silva@lisbontech.pt", phone: "+351 21 555 0123", role: "Employee", department: "Engineering", trainingProgress: 55, completedTrainings: 2, lastTrainingDate: "2025-10-20", certifications: [] },
    { username: "emma.ross", name: "Emma Ross", email: "emma.ross@sydneymail.au", phone: "+61 2 9123 4567", role: "Employee", department: "Security", trainingProgress: 100, completedTrainings: 6, lastTrainingDate: "2025-09-05", certifications: ["Sec"] },
    { username: "lucas.moreno", name: "Lucas Moreno", email: "lucas.moreno@madridmail.es", phone: "+34 612 345 678", role: "Employee", department: "Sales", trainingProgress: 30, completedTrainings: 1, lastTrainingDate: "2025-08-01", certifications: [] },
    { username: "ava.rodriguez", name: "Ava Rodríguez", email: "ava.rodriguez@barcelonamail.es", phone: "+34 618 234 901", role: "HR", department: "HR", trainingProgress: 75, completedTrainings: 5, lastTrainingDate: "2025-10-10", certifications: ["HR"] },
    { username: "mateo.castro", name: "Mateo Castro", email: "mateo.castro@buenosmail.ar", phone: "+54 9 11 3456 7890", role: "Manager", department: "Sales", trainingProgress: 50, completedTrainings: 2, lastTrainingDate: "2025-08-25", certifications: [] },
    { username: "isla.murphy", name: "Isla Murphy", email: "isla.murphy@dublinmail.ie", phone: "+353 1 555 0199", role: "Employee", department: "Finance", trainingProgress: 90, completedTrainings: 6, lastTrainingDate: "2025-09-20", certifications: ["Fin"] },
    { username: "olivia.nordin", name: "Olivia Nordin", email: "olivia.nordin@oslomail.no", phone: "+47 22 34 56 78", role: "Employee", department: "Support", trainingProgress: 15, completedTrainings: 0, lastTrainingDate: "2025-07-05", certifications: [] },
    { username: "ethan.hart", name: "Ethan Hart", email: "ethan.hart@torontomail.ca", phone: "+1 416 555 2671", role: "Manager", department: "Engineering", trainingProgress: 70, completedTrainings: 4, lastTrainingDate: "2025-10-12", certifications: [] },
    { username: "olivia.sanders", name: "Olivia Sanders", email: "olivia.sanders@londonmail.co.uk", phone: "+44 20 7946 0958", role: "Employee", department: "Marketing", trainingProgress: 10, completedTrainings: 0, lastTrainingDate: "", certifications: [] },
    { username: "li.chen", name: "Li Chen", email: "li.chen@shanghaimail.cn", phone: "+86 21 5555 1234", role: "Employee", department: "Engineering", trainingProgress: 45, completedTrainings: 1, lastTrainingDate: "2025-08-12", certifications: [] },
    { username: "noor.al-hassan", name: "Noor Al-Hassan", email: "noor.alhassan@dubaimail.ae", phone: "+971 4 123 4567", role: "Employee", department: "Customer Success", trainingProgress: 5, completedTrainings: 0, lastTrainingDate: "", certifications: [] },
    { username: "carlos.ramos", name: "Carlos Ramos", email: "carlos.ramos@riomail.br", phone: "+55 21 99999 8888", role: "Employee", department: "Sales", trainingProgress: 60, completedTrainings: 2, lastTrainingDate: "2025-09-10", certifications: [] },
    { username: "lara.bakker", name: "Lara Bakker", email: "lara.bakker@amstermail.nl", phone: "+31 20 123 4567", role: "Manager", department: "Design", trainingProgress: 80, completedTrainings: 3, lastTrainingDate: "2025-09-30", certifications: [] },
    { username: "samuel.park", name: "Samuel Park", email: "samuel.park@seoulmail.kr", phone: "+82 2 3456 7890", role: "Employee", department: "Engineering", trainingProgress: 35, completedTrainings: 1, lastTrainingDate: "2025-07-22", certifications: [] },
    { username: "greta.nielsen", name: "Greta Nielsen", email: "greta.nielsen@copenhagencorp.dk", phone: "+45 33 12 34 56", role: "HR", department: "HR", trainingProgress: 95, completedTrainings: 8, lastTrainingDate: "2025-10-05", certifications: ["Onboarding"] },
    { username: "omar.hassan", name: "Omar Hassan", email: "omar.hassan@cairo-tech.eg", phone: "+20 2 2794 1234", role: "Employee", department: "Ops", trainingProgress: 25, completedTrainings: 1, lastTrainingDate: "2025-08-18", certifications: [] },
    { username: "emma.jones", name: "Emma Jones", email: "emma.jones@liverpoolmail.uk", phone: "+44 151 555 0199", role: "Employee", department: "Support", trainingProgress: 50, completedTrainings: 2, lastTrainingDate: "2025-09-01", certifications: [] },
    { username: "michael.cho", name: "Michael Cho", email: "michael.cho@seoulmail.kr", phone: "+82 2 555 0199", role: "Admin", department: "Security", trainingProgress: 100, completedTrainings: 12, lastTrainingDate: "2025-09-15", certifications: ["Sec", "Infra"] },
    { username: "nina.schmidt", name: "Nina Schmidt", email: "nina.schmidt@berlinpost.de", phone: "+49 30 555 0199", role: "Employee", department: "Finance", trainingProgress: 15, completedTrainings: 0, lastTrainingDate: "", certifications: [] },
  ]
}

export default async function TasksPage() {
  const data = await getData()

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">User List</h1>
          <p className="text-md text-gray-400">Manage your users and monitor training progress and certifications.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <span>Add User</span>
              <UserPlus />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-50 dark:bg-gray-900">
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