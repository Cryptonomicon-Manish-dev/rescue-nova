import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PersonFinder from "@/components/PersonFinder";
import AlertsPage from "@/components/AlertsPage";
import EducationalResources from "@/components/EducationalResources";
import PredictionDashboard from "@/components/PredictionDashboard";

const statsData = [
  { label: "Active Alerts", value: "8", change: "+2", changeType: "negative" },
  { label: "People Safe", value: "458", change: "+24", changeType: "positive" },
  { label: "Missing Persons", value: "23", change: "-5", changeType: "positive" },
  { label: "Rescue Teams", value: "35", change: "+10", changeType: "positive" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="container mx-auto p-4">
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  <Badge variant={stat.changeType === "positive" ? "default" : "destructive"}>
                    {stat.change}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="finder">Person Finder</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="space-y-4">
              <PredictionDashboard />
            </TabsContent>
            <TabsContent value="alerts" className="space-y-4">
              <AlertsPage />
            </TabsContent>
            <TabsContent value="finder" className="space-y-4">
              <PersonFinder />
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <EducationalResources />
            </TabsContent>
          </Tabs>
        </div>
    </main>
  );
};

export default Index;
