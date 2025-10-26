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
import { Activity, ChartLine, Clock, CreditCard, DollarSign, HeartPulse, User, Users } from "lucide-react";
import { AppBarChart } from "@/components/AppBarChart";
import { AppAreaChart } from "@/components/AppAreaChart";
import { Progress } from "@/components/ui/progress"

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

const RecentSaleItem = ({
  name,
  email,
  amount,
}: {
  name: string
  email: string
  amount: string
}) => (
  <CardContent>
    <div className="flex items-center gap-4">
      <span className="rounded-full flex items-center justify-center h-9 w-9 bg-muted">PF</span>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col flex-1">
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
        <h1 className="ml-4">{amount}</h1>
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
        <Button>Download</Button>
      </div>
      <Tabs defaultValue="Overview">
        <TabsList className="inline-flex space-x-2 mb-4">
          <TabsTrigger value="Overview">Overview</TabsTrigger>
          <TabsTrigger value="Analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="Overview">
          {/* Top metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard title="Total Revenue" Icon={DollarSign} value="$45,231.89" description="+20.1% from last month" />
            <MetricCard title="Subscriptions" Icon={Users} value="+2350" description="+180.1% from last month" />
            <MetricCard title="Sales" Icon={CreditCard} value="+12,234" description="+19% from last month" />
            <MetricCard title="Active Now" Icon={HeartPulse} value="+573" description="+201 since last hour" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

            <AppBarChart/>
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              {/* Recent sales list */}
              {Array.from({ length: 5 }).map((_, i) => (
                <RecentSaleItem
                  key={i}
                  name="Olivia Martin"
                  email="olivia.martin@email.com"
                  amount="+$1,999.00"
                />
              ))}
            </Card>

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
                  <CardTitle>Total Clicks</CardTitle>
                  <CardAction><ChartLine /></CardAction>
                </CardHeader>
                <CardContent>
                  <p>1,248</p>
                  <CardDescription>+12.4% vs last week</CardDescription>
                </CardContent>
              </Card>
            <Card>
              <CardHeader>
                <CardTitle>Unique Visitors</CardTitle>
                <CardAction><User /></CardAction>
              </CardHeader>
              <CardContent>
                <p>832</p>
                <CardDescription>+5.8% vs last week</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bounce Rate</CardTitle>
                <CardAction><Activity /></CardAction>
              </CardHeader>
              <CardContent>
                <p>42%</p>
                <CardDescription>-3.2% vs last week</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Avg. Session</CardTitle>
                <CardAction><Clock /></CardAction>
              </CardHeader>
              <CardContent>
                <p>3m 24s</p>
                <CardDescription>+18s vs last week</CardDescription>
              </CardContent>
            </Card>
            </div>

            {/* PROGRESS CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
              <Card className="col-span-1 lg:col-span-4 gap-3">
                <CardHeader>
                  <CardTitle>Referrers</CardTitle>
                  <CardDescription className="-mt-2 text-sm text-gray-400">Top sources driving traffic</CardDescription>
                </CardHeader>
                <ProgressRow label="Direct" value={100} right={"512"} />
                <ProgressRow label="Product Hunt" value={45} right={"238"} />
                <ProgressRow label="Twitter" value={33} right={"174"} />
                <ProgressRow label="Blog" value={22} right={"104"} />
              </Card>

              <Card className="col-span-1 lg:col-span-3 gap-3">
                <CardHeader>
                  <CardTitle>Devices</CardTitle>
                  <CardDescription className="-mt-2 text-sm text-gray-400">How users access your app</CardDescription>
                </CardHeader>
                <ProgressRow label="Desktop" value={100} right={"74%"} />
                <ProgressRow label="Mobile" value={30} right={"22%"} />
                <ProgressRow label="Tablet" value={12} right={"4%"} />
              </Card>

            </div>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}
