"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

// Store distribution data
const storeData = [
  { name: "Store_4", value: 20.2 },
  { name: "Store_3", value: 21.1 },
  { name: "Store_2", value: 19.7 },
  { name: "Store_1", value: 19.9 },
  { name: "Store_5", value: 18.8 },
]

// Colors for pie chart
const COLORS = ["#0088FE", "#00C4D4", "#00FF00", "#FFFF00", "#FF00FF"]

// Forecast vs Actual data
const forecastData = Array.from({ length: 365 }, (_, i) => ({
  date: new Date(2023, 0, i + 1).toISOString().split("T")[0],
  actual: Math.random() * 800 + 200,
  forecast: 550 + Math.random() * 50,
}))

// Monthly average sales data
const monthlyData = [
  { month: "Jan", sales: 556 },
  { month: "Feb", sales: 522 },
  { month: "Mar", sales: 562 },
  { month: "Apr", sales: 563 },
  { month: "May", sales: 573 },
  { month: "Jun", sales: 545 },
  { month: "Jul", sales: 549 },
  { month: "Aug", sales: 523 },
  { month: "Sep", sales: 557 },
  { month: "Oct", sales: 525 },
  { month: "Nov", sales: 521 },
  { month: "Dec", sales: 537 },
]

// Box plot data
const boxPlotData = [
  { month: "Jan", min: 100, q1: 350, median: 580, q3: 750, max: 980 },
  { month: "Feb", min: 120, q1: 280, median: 520, q3: 770, max: 990 },
  { month: "Mar", min: 110, q1: 320, median: 580, q3: 780, max: 990 },
  { month: "Apr", min: 100, q1: 380, median: 540, q3: 780, max: 990 },
  { month: "May", min: 110, q1: 420, median: 580, q3: 750, max: 990 },
  { month: "Jun", min: 120, q1: 280, median: 550, q3: 790, max: 990 },
  { month: "Jul", min: 110, q1: 320, median: 560, q3: 770, max: 980 },
  { month: "Aug", min: 100, q1: 310, median: 500, q3: 730, max: 980 },
  { month: "Sep", min: 120, q1: 330, median: 580, q3: 780, max: 980 },
  { month: "Oct", min: 110, q1: 310, median: 510, q3: 750, max: 980 },
  { month: "Nov", min: 100, q1: 290, median: 520, q3: 710, max: 970 },
  { month: "Dec", min: 110, q1: 320, median: 530, q3: 760, max: 990 },
]

// Histogram data
const histogramData = Array.from({ length: 40 }, (_, i) => ({
  range: -400 + i * 20,
  frequency: Math.floor(Math.exp(-(i - 20) * (i - 20) / 100) * 400),
}))

// Heatmap data
const generateHeatmapData = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const months = Array.from({ length: 12 }, (_, i) => i + 1)

  return months.map(month => ({
    month,
    ...days.reduce((acc, day) => ({
      ...acc,
      [day]: 400 + Math.random() * 300
    }), {} as Record<string, number>)
  }))
}

const heatmapData = generateHeatmapData()

const getColor = (value: number) => {
  const minValue = 400;
  const maxValue = 700;
  const hue = ((value - minValue) / (maxValue - minValue)) * 120; // 0 to 120 (red to green)
  return `hsl(${hue}, 70%, 50%)`;
};

export default function SalesDashboard() {
  return (
    <div className="grid gap-4 p-4">
      {/* Forecast vs Actual */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Sales Forecast vs Actual</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              actual: {
                label: "Actual Sales",
                color: "hsl(var(--chart-1))",
              },
              forecast: {
                label: "Forecasted Sales",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer>
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="actual" stroke="var(--color-actual)" dot={false} />
                <Line type="monotone" dataKey="forecast" stroke="var(--color-forecast)" strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Store Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Store-wise Sales Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={storeData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {storeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Average Sales */}
      <Card>
        <CardHeader>
          <CardTitle>Average Sales by Month</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sales: {
                label: "Sales",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[500, 580]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="var(--color-sales)"
                  dot={{ fill: "var(--color-sales)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Forecast Error Histogram */}
      <Card>
        <CardHeader>
          <CardTitle>Forecast Error Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              frequency: {
                label: "Frequency",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer>
              <BarChart data={histogramData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="frequency" fill="var(--color-frequency)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Monthly Distribution Box Plot */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Sales Distribution by Month</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              boxplot: {
                label: "Sales Range",
                color: "hsl(var(--chart-5))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer>
              <BarChart data={boxPlotData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="median" fill="var(--color-boxplot)" />
                {/* Whiskers */}
                <Line type="monotone" dataKey="max" stroke="var(--color-boxplot)" />
                <Line type="monotone" dataKey="min" stroke="var(--color-boxplot)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Heatmap */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Sales Heatmap by Day and Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
              <div key={day} className="text-center text-sm font-medium">
                {day}
              </div>
            ))}
            {heatmapData.flatMap(monthData =>
              ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                <div
                  key={`${monthData.month}-${day}`}
                  className="aspect-square rounded"
                  style={{
                    backgroundColor: getColor(monthData[day as keyof typeof monthData]),
                  }}
                />
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
