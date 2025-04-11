import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, AlertTriangle, Bell, Filter, Search } from "lucide-react";

// Mock data for alerts
const mockAlerts = [
  {
    id: 1,
    type: "Flood",
    severity: "high",
    location: "River Valley Area",
    description: "Rising water levels due to heavy rainfall. Immediate evacuation required.",
    timestamp: "2024-04-10T15:30:00",
    status: "active",
  },
  {
    id: 2,
    type: "Fire",
    severity: "medium",
    location: "Downtown District",
    description: "Forest fire reported in nearby areas. Stay alert and ready for evacuation.",
    timestamp: "2024-04-10T14:45:00",
    status: "active",
  },
  // Add more mock alerts as needed
];

const Alerts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "default";
      default:
        return "default";
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
        {/* Header with Emergency Banner */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">Active Emergency Alerts</span>
            </div>
            <p className="mt-2 text-sm text-red-500">
              Multiple alerts are active in your area. Please stay vigilant and follow official instructions.
            </p>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search alerts..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Severities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Alerts Content */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Alerts</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {mockAlerts.map((alert) => (
                  <Card key={alert.id} className="relative overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 w-1 h-full ${
                        alert.severity === "high"
                          ? "bg-red-500"
                          : alert.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    />
                    <CardContent className="p-4 pl-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{alert.type}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{alert.location}</span>
                          </div>
                        </div>
                        <Badge variant={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="mt-2 text-gray-600">{alert.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {formatTimestamp(alert.timestamp)}
                        </span>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="active">
                {/* Filter and show only active alerts */}
                <p>Active alerts will be shown here</p>
              </TabsContent>

              <TabsContent value="resolved">
                {/* Filter and show only resolved alerts */}
                <p>Resolved alerts will be shown here</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Alert Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Configure how you want to receive alert notifications
              </p>
              <div className="flex space-x-4">
                <Button variant="outline">Configure Email Alerts</Button>
                <Button variant="outline">Configure SMS Alerts</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Alerts;