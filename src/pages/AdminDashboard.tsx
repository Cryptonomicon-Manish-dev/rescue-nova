import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Users,
  Bell,
  Settings,
  Shield,
  UserCheck,
  AlertTriangle,
  BarChart,
  Map,
} from "lucide-react";

// Mock data
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin", status: "active" },
  // Add more mock users
];

const mockStats = {
  totalUsers: 1245,
  activeAlerts: 8,
  resolvedAlerts: 156,
  responseTeams: 12,
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <h3 className="text-2xl font-bold">{mockStats.totalUsers}</h3>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Alerts</p>
                  <h3 className="text-2xl font-bold">{mockStats.activeAlerts}</h3>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Resolved Alerts</p>
                  <h3 className="text-2xl font-bold">{mockStats.resolvedAlerts}</h3>
                </div>
                <Shield className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Response Teams</p>
                  <h3 className="text-2xl font-bold">{mockStats.responseTeams}</h3>
                </div>
                <UserCheck className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>System Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">
                  <BarChart className="mr-2 h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="users">
                  <Users className="mr-2 h-4 w-4" />
                  Users
                </TabsTrigger>
                <TabsTrigger value="alerts">
                  <Bell className="mr-2 h-4 w-4" />
                  Alerts
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Activity Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle>System Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">Activity chart will be displayed here</p>
                    </CardContent>
                  </Card>

                  {/* Recent Events */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          <p>Event logs will be displayed here</p>
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="users" className="space-y-4">
                <div className="flex justify-between items-center">
                  <Input placeholder="Search users..." className="max-w-sm" />
                  <Button>
                    <Users className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>
                
                <div className="border rounded-lg">
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Role</div>
                    <div>Status</div>
                  </div>
                  {mockUsers.map((user) => (
                    <div key={user.id} className="grid grid-cols-4 gap-4 p-4 border-b last:border-0">
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                      <div>
                        <Badge variant={user.role === "admin" ? "destructive" : "default"}>
                          {user.role}
                        </Badge>
                      </div>
                      <div>
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="alerts" className="space-y-4">
                <div className="flex justify-between items-center">
                  <Input placeholder="Search alerts..." className="max-w-sm" />
                  <Button variant="destructive">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Create Alert
                  </Button>
                </div>
                {/* Alert management interface */}
                <Card>
                  <CardContent className="p-4">
                    <p>Alert management interface will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>System Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Notification Settings</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">Email Configuration</Button>
                        <Button variant="outline">SMS Configuration</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Security Settings</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">Access Control</Button>
                        <Button variant="outline">API Keys</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">System Maintenance</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">Backup Data</Button>
                        <Button variant="outline">System Logs</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;