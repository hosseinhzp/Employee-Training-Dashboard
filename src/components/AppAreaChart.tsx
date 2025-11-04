"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Smooth area chart for employee training analytics"

const chartData = [
  { month: "January", newEmployees: 120, experienced: 200 },
  { month: "February", newEmployees: 160, experienced: 210 },
  { month: "March", newEmployees: 190, experienced: 230 },
  { month: "April", newEmployees: 175, experienced: 260 },
  { month: "May", newEmployees: 220, experienced: 280 },
  { month: "June", newEmployees: 240, experienced: 300 },
]

const chartConfig = {
  newEmployees: {
    label: "New Employees",
    color: "var(--chart-3)",
  },
  experienced: {
    label: "Experienced Employees",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function AppAreaChart() {
  return (
    <Card className="h-120 overflow-hidden">
      <CardHeader>
        <CardTitle>Employee Training Progress</CardTitle>
        <CardDescription>
          Training hours comparison (Jan – Jun 2025)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="h-full aspect-auto">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              left: -10,
              right: 12,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={4}
              label={{
                value: "Training Hours",
                angle: -90,
                position: "insideLeft",
                offset: 0,
                style: { textAnchor: "middle", fill: "#888", fontSize: 12 },
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Area
              dataKey="newEmployees"
              type="monotone"
              fill="var(--color-newEmployees)"
              fillOpacity={0.4}
              stroke="var(--color-newEmployees)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="experienced"
              type="monotone"
              fill="var(--color-experienced)"
              fillOpacity={0.4}
              stroke="var(--color-experienced)"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Training hours increased by 12.5% <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
