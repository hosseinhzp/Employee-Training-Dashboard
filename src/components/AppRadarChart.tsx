"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, PolarRadiusAxis } from "recharts"

import {
  Card,
  CardContent,
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

export const description = "Employee skill performance radar chart comparing Q3 vs Q4"

const chartData = [
  { skill: "Communication", Q3: 72, Q4: 84 },
  { skill: "Leadership", Q3: 65, Q4: 78 },
  { skill: "Time Management", Q3: 80, Q4: 83 },
  { skill: "Problem Solving", Q3: 69, Q4: 74 },
  { skill: "Technical Skills", Q3: 88, Q4: 90 },
  { skill: "Adaptability", Q3: 70, Q4: 82 },
]

const chartConfig = {
  Q3: {
    label: "Q3",
    color: "var(--chart-1)",
  },
  Q4: {
    label: "Q4",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function AppRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Employee Skill Performance</CardTitle>
      </CardHeader>

      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-surface]:overflow-visible"
        >
          <RadarChart data={chartData} margin={{ top: 30, right: 30, bottom: 30, left: 30 }} outerRadius={100}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" tick={false} tickLine={false} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Radar
              name="Q3"
              dataKey="Q3"
              stroke="var(--color-Q3)"
              fill="var(--color-Q3)"
              fillOpacity={0.3}
              dot={{ r: 3, fillOpacity: 1 }}
            />
            <Radar
              name="Q4"
              dataKey="Q4"
              stroke="var(--color-Q4)"
              fill="var(--color-Q4)"
              fillOpacity={0.5}
              dot={{ r: 3, fillOpacity: 1 }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Skill performance up by 5.2% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Comparing Current Quarter (Q3) vs Previous Quarter (Q4)
        </div>
      </CardFooter>
    </Card>
  )
}
