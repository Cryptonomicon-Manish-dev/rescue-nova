
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart2, TrendingUp, Droplets, Flame, Cloud, Wind, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Disaster prediction data
const floodData = [
  { month: 'Jan', probability: 10 },
  { month: 'Feb', probability: 15 },
  { month: 'Mar', probability: 25 },
  { month: 'Apr', probability: 60 },
  { month: 'May', probability: 75 },
  { month: 'Jun', probability: 55 },
  { month: 'Jul', probability: 30 },
  { month: 'Aug', probability: 20 },
  { month: 'Sep', probability: 35 },
  { month: 'Oct', probability: 40 },
  { month: 'Nov', probability: 20 },
  { month: 'Dec', probability: 5 },
];

const fireData = [
  { month: 'Jan', probability: 5 },
  { month: 'Feb', probability: 8 },
  { month: 'Mar', probability: 15 },
  { month: 'Apr', probability: 30 },
  { month: 'May', probability: 45 },
  { month: 'Jun', probability: 80 },
  { month: 'Jul', probability: 90 },
  { month: 'Aug', probability: 85 },
  { month: 'Sep', probability: 60 },
  { month: 'Oct', probability: 30 },
  { month: 'Nov', probability: 10 },
  { month: 'Dec', probability: 5 },
];

const earthquakeData = [
  { month: 'Jan', probability: 20 },
  { month: 'Feb', probability: 18 },
  { month: 'Mar', probability: 22 },
  { month: 'Apr', probability: 25 },
  { month: 'May', probability: 18 },
  { month: 'Jun', probability: 15 },
  { month: 'Jul', probability: 17 },
  { month: 'Aug', probability: 20 },
  { month: 'Sep', probability: 23 },
  { month: 'Oct', probability: 25 },
  { month: 'Nov', probability: 22 },
  { month: 'Dec', probability: 20 },
];

const disasterDistribution = [
  { name: 'Floods', value: 35, color: '#3b82f6' },
  { name: 'Fires', value: 25, color: '#ef4444' },
  { name: 'Earthquakes', value: 20, color: '#8b5cf6' },
  { name: 'Storms', value: 15, color: '#64748b' },
  { name: 'Other', value: 5, color: '#6b7280' },
];

const weatherData = [
  { day: '04/04', temperature: 72, rainfall: 0.2, humidity: 65 },
  { day: '04/05', temperature: 68, rainfall: 0.5, humidity: 72 },
  { day: '04/06', temperature: 75, rainfall: 0.0, humidity: 58 },
  { day: '04/07', temperature: 80, rainfall: 0.0, humidity: 60 },
  { day: '04/08', temperature: 82, rainfall: 0.0, humidity: 55 },
  { day: '04/09', temperature: 78, rainfall: 1.2, humidity: 80 },
  { day: '04/10', temperature: 79, rainfall: 2.5, humidity: 85 },
  { day: '04/11', temperature: 82, rainfall: 3.8, humidity: 90 },
  { day: '04/12', temperature: 77, rainfall: 1.5, humidity: 82 },
  { day: '04/13', temperature: 74, rainfall: 0.8, humidity: 75 },
];

// High-risk area data
const highRiskAreas = [
  { id: 1, name: 'Downtown River Basin', risk: 'Flooding', level: 'high', affectedPopulation: '15,000+' },
  { id: 2, name: 'Western Forest Region', risk: 'Wildfire', level: 'critical', affectedPopulation: '8,000+' },
  { id: 3, name: 'Eastern Hills', risk: 'Landslide', level: 'medium', affectedPopulation: '3,500+' },
  { id: 4, name: 'Coastal Strip', risk: 'Storm Surge', level: 'high', affectedPopulation: '12,000+' },
  { id: 5, name: 'Northern District', risk: 'Earthquake', level: 'medium', affectedPopulation: '25,000+' },
];

const PredictionDashboard: React.FC = () => {
  const { toast } = useToast();
  const [timeFrame, setTimeFrame] = React.useState("monthly");

  const runAnalysis = () => {
    toast({
      title: "Analysis Running",
      description: "Prediction models are being updated with latest data.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Disaster Prediction Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            AI-powered predictions for potential natural disasters
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={runAnalysis} className="bg-blue-600 hover:bg-blue-700">
            <TrendingUp className="h-4 w-4 mr-2" />
            Run Analysis
          </Button>
        </div>
      </div>

      {/* High-Risk Areas Alert */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200 dark:from-amber-950/30 dark:to-orange-950/30 dark:border-orange-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center text-amber-900 dark:text-amber-300">
            <AlertCircle className="h-5 w-5 mr-2 text-amber-500" />
            High-Risk Areas Requiring Attention
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-orange-200 dark:border-orange-800/50">
                  <th className="pb-2 font-medium text-amber-800 dark:text-amber-300">Area</th>
                  <th className="pb-2 font-medium text-amber-800 dark:text-amber-300">Risk Type</th>
                  <th className="pb-2 font-medium text-amber-800 dark:text-amber-300">Level</th>
                  <th className="pb-2 font-medium text-amber-800 dark:text-amber-300">Population</th>
                </tr>
              </thead>
              <tbody>
                {highRiskAreas.map((area) => (
                  <tr key={area.id} className="border-b border-orange-100 dark:border-orange-900/20">
                    <td className="py-2 text-amber-900 dark:text-amber-200">{area.name}</td>
                    <td className="py-2 text-amber-900 dark:text-amber-200">{area.risk}</td>
                    <td className="py-2">
                      <Badge className={
                        area.level === 'critical' 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : area.level === 'high' 
                            ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      }>
                        {area.level.charAt(0).toUpperCase() + area.level.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-2 text-amber-900 dark:text-amber-200">{area.affectedPopulation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium flex items-center">
                <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                Flood Risk
              </CardTitle>
              <Badge className="bg-blue-500 hover:bg-blue-600">75% Probability</Badge>
            </div>
            <CardDescription>
              Predicted flood risk for the next 12 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={floodData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={(value) => `${value}%`} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Probability']}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="probability" 
                    stroke="#3b82f6" 
                    fill="#3b82f6"
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium flex items-center">
                <Flame className="h-5 w-5 mr-2 text-red-500" />
                Fire Risk
              </CardTitle>
              <Badge className="bg-red-500 hover:bg-red-600">90% Probability</Badge>
            </div>
            <CardDescription>
              Predicted wildfire risk for the next 12 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={fireData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={(value) => `${value}%`} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Probability']}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="probability" 
                    stroke="#ef4444" 
                    fill="#ef4444"
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium flex items-center">
                <Wind className="h-5 w-5 mr-2 text-purple-500" />
                Earthquake Risk
              </CardTitle>
              <Badge className="bg-purple-500 hover:bg-purple-600">25% Probability</Badge>
            </div>
            <CardDescription>
              Predicted earthquake risk for the next 12 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={earthquakeData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={(value) => `${value}%`} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Probability']}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="probability" 
                    stroke="#8b5cf6" 
                    fill="#8b5cf6"
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart2 className="h-5 w-5 mr-2 text-blue-500" />
              Disaster Type Distribution
            </CardTitle>
            <CardDescription>
              Historical breakdown of disaster frequency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={disasterDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {disasterDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Frequency']}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem' 
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <Cloud className="h-5 w-5 mr-2 text-blue-500" />
              Weather Trends
            </CardTitle>
            <CardDescription>
              Recent and forecasted weather patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weatherData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem' 
                    }} 
                  />
                  <Legend />
                  <Line 
                    yAxisId="left" 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#ef4444" 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="rainfall" 
                    stroke="#3b82f6" 
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="humidity" 
                    stroke="#8b5cf6" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictionDashboard;
