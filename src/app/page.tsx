import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, HeartPulse, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4 mt-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                  <CardAction><DollarSign /></CardAction>
                </CardHeader>
                <CardContent>
                  <p>$45,231.89</p>
                  <CardDescription>+20.1% from last month</CardDescription>
                </CardContent>
              </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscriptions</CardTitle>
                <CardAction><Users /></CardAction>
              </CardHeader>
              <CardContent>
                <p>+2350</p>
                <CardDescription>+180.1% from last month</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales</CardTitle>
                <CardAction><CreditCard /></CardAction>
              </CardHeader>
              <CardContent>
                <p>+12,234</p>
                <CardDescription>+19% from last month</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Now</CardTitle>
                <CardAction><Heart /></CardAction>
              </CardHeader>
              <CardContent>
                <p>+573</p>
                <CardDescription>+201 since last hour</CardDescription>
              </CardContent>
            </Card>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
            <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
          </div>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="Analytics">
          <div className="space-y-4">
            <div className="bg-primary-foreground p-6 rounded-lg">Analytics Chart 1 (placeholder)</div>
            <div className="bg-primary-foreground p-6 rounded-lg">Analytics Chart 2 (placeholder)</div>
            <div className="bg-primary-foreground p-4 rounded-lg">Additional analytics widgets can go here.</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
