"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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

export const description = "Employee training distribution by course type";

const chartData = [
  { category: "Technical", hours: 320, fill: "var(--color-technical)" },
  { category: "Soft Skills", hours: 260, fill: "var(--color-soft)" },
  { category: "Leadership", hours: 190, fill: "var(--color-leadership)" },
  { category: "Compliance", hours: 140, fill: "var(--color-compliance)" },
  { category: "Other", hours: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  hours: {
    label: "Training Hours",
  },
  technical: {
    label: "Technical",
    color: "var(--chart-1)",
  },
  soft: {
    label: "Soft Skills",
    color: "var(--chart-2)",
  },
  leadership: {
    label: "Leadership",
    color: "var(--chart-3)",
  },
  compliance: {
    label: "Compliance",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function AppPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Training Hours Distribution</CardTitle>
        <CardDescription>January – June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="hours"
              nameKey="category"
              innerRadius={60}
              strokeWidth={4}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Participation up by 8.6% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Training hours split by category
        </div>
      </CardFooter>
    </Card>
  );
}
