"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A multiple bar chart";
const chartData = [
  { month: "January", CoursesCompleted: 186, CoursesStarted: 80 },
  { month: "February", CoursesCompleted: 305, CoursesStarted: 200 },
  { month: "March", CoursesCompleted: 237, CoursesStarted: 120 },
  { month: "April", CoursesCompleted: 73, CoursesStarted: 190 },
  { month: "May", CoursesCompleted: 209, CoursesStarted: 130 },
  { month: "June", CoursesCompleted: 214, CoursesStarted: 140 },
  { month: "July", CoursesCompleted: 186, CoursesStarted: 80 },
  { month: "August", CoursesCompleted: 305, CoursesStarted: 200 },
  { month: "September", CoursesCompleted: 237, CoursesStarted: 120 },
  { month: "October", CoursesCompleted: 73, CoursesStarted: 190 },
  { month: "November", CoursesCompleted: 209, CoursesStarted: 130 },
  { month: "December", CoursesCompleted: 214, CoursesStarted: 140 },
];
const chartConfig = {
  CoursesCompleted: {
    label: "Courses Completed",
    color: "var(--chart-1)",
  },
  CoursesStarted: {
    label: "Courses Started",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
export function AppBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Training Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="CoursesCompleted"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="CoursesCompleted" fill="var(--color-cs)" radius={4} />
            <Bar dataKey="CoursesStarted" fill="var(--color-cc)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
