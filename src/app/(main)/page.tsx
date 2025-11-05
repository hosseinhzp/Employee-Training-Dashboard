import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, ArrowRight, BarChart3, BookOpen, BookOpenText, ChartLine, Clock, Clock3, CreditCard, DollarSign, Ellipsis, GraduationCap, HeartPulse, User, User2, Users } from "lucide-react";
import { AppBarChart } from "@/components/AppBarChart";
import { AppAreaChart } from "@/components/AppAreaChart";
import { Progress } from "@/components/ui/progress"
import { AppPieChart } from "@/components/AppPieChart";
import { AppRadarChart } from "@/components/AppRadarChart";
import { AppCalendar } from "@/components/AppCalendar";

const MetricCard = ({
  title,
  Icon,
  value,
  description,
}: {
  title: string
  Icon?: React.ElementType
  value: React.ReactNode
  description?: string
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {Icon ? <CardAction>{<Icon />}</CardAction> : null}
    </CardHeader>
    <CardContent>
      <p>{value}</p>
      {description ? <CardDescription>{description}</CardDescription> : null}
    </CardContent>
  </Card>
)

const RecentTrainingItem = ({
  name,
  email,
  amount,
}: {
  name: string
  email: string
  amount: string
}) => (
  <CardContent>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
      <span className="rounded-full flex items-center justify-center h-9 w-9 bg-muted shrink-0">PF</span>
      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
          <div className="flex flex-col">
            <h1 className="text-sm font-medium truncate">{name}</h1>
            <p className="text-xs text-muted-foreground break-words">{email}</p>
          </div>
          <div className="mt-1 md:mt-0 md:ml-4 flex-shrink-0">
            <h1 className="text-sm">{amount}</h1>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
)

const ProgressRow = ({ label, value, right }: { label: string; value: number; right: React.ReactNode }) => (
  <CardContent>
    <h1 className="text-xs text-gray-400">{label}</h1>
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <Progress value={value} className="w-full" />
      </div>
      <span className="text-sm font-medium">{right}</span>
    </div>
  </CardContent>
)

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-4 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <Tabs defaultValue="Overview">
        <TabsList className="inline-flex space-x-2 mb-4">
          <TabsTrigger value="Overview" className="cursor-pointer">Overview</TabsTrigger>
          <TabsTrigger value="Analytics" className="cursor-pointer">Analytics</TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="Overview">
          {/* Top metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard title="Employees" Icon={Users} value="637" description="+53 from last month" />
            <MetricCard title="Trainers" Icon={GraduationCap} value="412" description="+21 from last month" />
            <MetricCard title="Active Courses" Icon={BookOpenText} value="40" description="+12% from last month" />
            <MetricCard title="Training Hours Logged" Icon={Clock3} value="32K" description="+201 since last hour" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

            <AppBarChart/>
            <AppRadarChart/>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Check your events and tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <AppCalendar />
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Course Completions</CardTitle>
                <CardDescription>
                  265 courses completed this month.
                </CardDescription>
              </CardHeader>
              {/* Recent completions list */}
              {[
                { name: "Emma Lopez", email: "emma.lopez@company.com", amount: "Leadership Basics" },
                { name: "James Lee", email: "james.lee@company.com", amount: "Time Management" },
                { name: "Sophia Brown", email: "sophia.brown@company.com", amount: "Advanced Excel" },
                { name: "Liam Johnson", email: "liam.johnson@company.com", amount: "Project Communication" },
                { name: "Emma Davis", email: "emma.davis@company.com", amount: "Customer Service Skills" },
                { name: "Olivia Martinez", email: "olivia.martinez@company.com", amount: "Conflict Resolution" },
              ].map((item, i) => (
                <RecentTrainingItem key={i} {...item} />
              ))}
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Top Training Departments</CardTitle>
                  <CardAction><Ellipsis /></CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <CardDescription>Department</CardDescription>
                    <CardDescription>Hours Trained</CardDescription>
                  </div>
                </CardContent>

                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between font-light">
                      <span>Engineering</span>
                      <span>5.2K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Sales</span>
                      <span>3.8K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Human Resources</span>
                      <span>2.6K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Customer Support</span>
                      <span>1.9K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Marketing</span>
                      <span>1.3K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Operations</span>
                      <span>982</span>
                    </div>

                    <div className="flex justify-center mt-7">
                      <Button>
                        <span>Department Reports</span>
                        <ArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Top Training Courses</CardTitle>
                  <CardAction><Ellipsis /></CardAction>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between">
                    <CardDescription>Course</CardDescription>
                    <CardDescription>Enrollments</CardDescription>
                  </div>
                </CardContent>

                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between font-light">
                      <span>Leadership Fundamentals</span>
                      <span>5.2K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Effective Communication</span>
                      <span>3.8K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Time Management Mastery</span>
                      <span>2.9K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Technical Onboarding</span>
                      <span>1.7K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Workplace Safety</span>
                      <span>1.3K</span>
                    </div>
                    <div className="flex justify-between font-light mt-4">
                      <span>Advanced Problem Solving</span>
                      <span>980</span>
                    </div>

                    <div className="flex justify-center mt-7">
                      <Button>
                        <span>Course Reports</span>
                        <ArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
              <div className="sm:col-span-2 lg:col-span-1">
                <AppPieChart />
              </div>
          </div>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="Analytics">
          <div className="space-y-4">
            <AppAreaChart/>
            
            {/* Bottom metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Training Hours</CardTitle>
                  <CardAction><Clock /></CardAction>
                </CardHeader>
                <CardContent>
                  <p>12,480</p>
                  <CardDescription>+8.2% vs last month</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Learners</CardTitle>
                  <CardAction><Users /></CardAction>
                </CardHeader>
                <CardContent>
                  <p>313</p>
                  <CardDescription>+5.8% vs last month</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Courses Completed</CardTitle>
                  <CardAction><BookOpen /></CardAction>
                </CardHeader>
                <CardContent>
                  <p>752</p>
                  <CardDescription>+12.1% vs last month</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avg. Assessment Score</CardTitle>
                  <CardAction><BarChart3 /></CardAction>
                </CardHeader>
                <CardContent>
                  <p>87%</p>
                  <CardDescription>+3.4% vs last month</CardDescription>
                </CardContent>
              </Card>
            </div>


            {/* PROGRESS CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
              {/* Left Card */}
              <Card className="col-span-1 lg:col-span-4 gap-3">
                <CardHeader>
                  <CardTitle>Department Training Progress</CardTitle>
                  <CardDescription className="-mt-2 text-sm text-gray-400">
                    Percentage of employees completing their assigned courses
                  </CardDescription>
                </CardHeader>
                <ProgressRow label="Engineering" value={82} right={"82"} />
                <ProgressRow label="Sales" value={100} right={"238"} />
                <ProgressRow label="Human Resources" value={64} right={"64"} />
                <ProgressRow label="Marketing" value={52} right={"52"} />
              </Card>

              {/* Right Card */}
              <Card className="col-span-1 lg:col-span-3 gap-3">
                <CardHeader>
                  <CardTitle>Learning Methods</CardTitle>
                  <CardDescription className="-mt-2 text-sm text-gray-400">
                    How employees engage with training materials
                  </CardDescription>
                </CardHeader>
                <ProgressRow label="Online Modules" value={74} right={"74%"} />
                <ProgressRow label="Workshops" value={22} right={"22%"} />
                <ProgressRow label="1-on-1 Coaching" value={4} right={"4%"} />
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}
