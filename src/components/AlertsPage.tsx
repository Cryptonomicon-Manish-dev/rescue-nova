
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellRing, AlertTriangle, MapPin, Shield, Calendar, Clock, Info, Bell, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Alert {
  id: number;
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  type: "flood" | "fire" | "earthquake" | "tornado" | "hurricane" | "other";
  location: string;
  date: string;
  time: string;
  status: "active" | "resolved" | "monitoring";
  actions?: string[];
}

const alertsData: Alert[] = [
  {
    id: 1,
    title: "Flash Flood Warning",
    description: "Heavy rainfall causing rapid flooding in low-lying areas. Evacuate immediately if in affected zones.",
    severity: "high",
    type: "flood",
    location: "Downtown River Basin",
    date: "April 10, 2025",
    time: "10:30 AM",
    status: "active",
    actions: ["Evacuate Zones A & B", "Close Downtown Bridge", "Activate Emergency Shelters"]
  },
  {
    id: 2,
    title: "Wildfire Alert",
    description: "Rapidly spreading wildfire approaching western suburbs. Prepare for possible evacuation.",
    severity: "critical",
    type: "fire",
    location: "Western Highland Forests",
    date: "April 10, 2025",
    time: "08:15 AM",
    status: "active",
    actions: ["Prepare for Evacuation", "Assemble Emergency Kit", "Monitor Official Channels"]
  },
  {
    id: 3,
    title: "Earthquake Aftershock Warning",
    description: "Significant aftershocks expected following yesterday's 6.2 magnitude earthquake.",
    severity: "medium",
    type: "earthquake",
    location: "Citywide",
    date: "April 9, 2025",
    time: "3:45 PM",
    status: "monitoring",
    actions: ["Avoid Damaged Buildings", "Be Prepared for Aftershocks", "Check Gas Lines"]
  },
  {
    id: 4,
    title: "Tornado Watch",
    description: "Conditions favorable for tornado formation in the next 3-5 hours.",
    severity: "medium",
    type: "tornado",
    location: "Eastern Counties",
    date: "April 8, 2025",
    time: "5:20 PM",
    status: "resolved",
    actions: ["Watch for Changing Weather", "Review Shelter Plans", "Secure Loose Objects"]
  },
  {
    id: 5,
    title: "Hurricane Approaching",
    description: "Category 3 hurricane expected to make landfall within 48 hours. Begin preparations now.",
    severity: "high",
    type: "hurricane",
    location: "Coastal Regions",
    date: "April 7, 2025",
    time: "11:00 AM",
    status: "active",
    actions: ["Board Windows", "Stock Supplies", "Review Evacuation Routes"]
  }
];

const severityColors = {
  low: "bg-blue-500 hover:bg-blue-600",
  medium: "bg-yellow-500 hover:bg-yellow-600",
  high: "bg-orange-500 hover:bg-orange-600",
  critical: "bg-red-500 hover:bg-red-600"
};

const statusColors = {
  active: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  monitoring: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
};

const AlertsPage: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState("all");

  const filteredAlerts = alertsData.filter(alert => {
    // Filter by tab
    if (activeTab !== "all" && alert.status !== activeTab) {
      return false;
    }
    
    // Filter by severity
    if (selectedSeverity !== "all" && alert.severity !== selectedSeverity) {
      return false;
    }
    
    // Filter by search
    if (searchQuery && 
      !alert.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !alert.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !alert.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const toggleNotification = () => {
    setNotificationsEnabled(!notificationsEnabled);
    toast({
      title: notificationsEnabled 
        ? "Notifications disabled" 
        : "Notifications enabled",
      description: notificationsEnabled 
        ? "You will no longer receive alert notifications." 
        : "You will now receive important alert notifications.",
    });
  };

  const subscribeToAlert = (alertId: number) => {
    toast({
      title: "Alert Subscribed",
      description: "You will receive updates about this alert.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <BellRing className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          Disaster Alerts
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Stay informed about active disasters and emergency situations
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Bell className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold">Alert Notifications</h3>
                  <p className="opacity-90">Receive critical updates about emergency situations</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    id="notifications" 
                    checked={notificationsEnabled}
                    onCheckedChange={toggleNotification}
                  />
                  <Label htmlFor="notifications" className="text-white">
                    {notificationsEnabled ? "Enabled" : "Disabled"}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-3">
          <p className="text-sm text-blue-100">
            {notificationsEnabled 
              ? "You will receive alerts for all critical emergencies in your area." 
              : "Warning: You will not be notified of emergencies."
            }
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[280px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search alerts by title, description, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="w-full sm:w-auto">
          <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
            <SelectTrigger className="min-w-[180px]">
              <SelectValue placeholder="Filter by severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">All Alerts</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6">
          {filteredAlerts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredAlerts.map((alert) => (
                <Card key={alert.id} className="overflow-hidden border-l-4" style={{
                  borderLeftColor: alert.severity === 'critical' ? '#ef4444' : 
                                  alert.severity === 'high' ? '#f97316' : 
                                  alert.severity === 'medium' ? '#eab308' : '#3b82f6'
                }}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className={`h-5 w-5 ${
                          alert.severity === 'critical' ? 'text-red-500' : 
                          alert.severity === 'high' ? 'text-orange-500' : 
                          alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                        }`} />
                        <CardTitle className="text-xl">{alert.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${statusColors[alert.status]}`}>
                          {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                        </Badge>
                        <Badge className={`${severityColors[alert.severity]} text-white`}>
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)} Severity
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {alert.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{alert.date}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                    
                    {alert.actions && alert.actions.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-1.5">
                          <Info className="h-4 w-4" />
                          Recommended Actions:
                        </h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                          {alert.actions.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t pt-4 bg-gray-50 dark:bg-gray-800/30">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => subscribeToAlert(alert.id)}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Subscribe
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No alerts found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                There are no alerts matching your current filters.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlertsPage;
