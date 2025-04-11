import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, UserRound, MapPin, Clock, BadgeAlert, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PersonCard } from "@/components/PersonCard";
import { PersonRegistration } from "@/components/PersonRegistration";

export interface Person {
  id: string;
  name: string;
  age: number;
  gender: string;
  lastSeen: string;
  location: string;
  status: "safe" | "missing" | "found" | "injured";
  contact?: string;
  notes?: string;
  image?: string;
}

const peopleData: Person[] = [
  {
    id: "1",
    name: "John Smith",
    age: 42,
    gender: "Male",
    lastSeen: "2025-04-09 14:30",
    location: "Downtown River District, Block 4",
    status: "missing",
    contact: "555-123-4567",
    notes: "Last seen wearing a blue jacket and jeans. Has a medical condition requiring medication.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    age: 35,
    gender: "Female",
    lastSeen: "2025-04-09 15:45",
    location: "Eastside Apartment Complex",
    status: "safe",
    contact: "555-987-6543",
    notes: "Evacuated to Highland Shelter. Has two children with her.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: "3",
    name: "David Chen",
    age: 28,
    gender: "Male",
    lastSeen: "2025-04-09 12:15",
    location: "Central Business District, Office Tower B",
    status: "injured",
    contact: "555-456-7890",
    notes: "Sustained minor injuries. Currently at Memorial Hospital.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: "4",
    name: "Priya Patel",
    age: 31,
    gender: "Female",
    lastSeen: "2025-04-09 16:30",
    location: "Riverside Shopping Mall",
    status: "found",
    contact: "555-789-0123",
    notes: "Found at Western Emergency Shelter. Reunited with family.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: "5",
    name: "Michael Johnson",
    age: 52,
    gender: "Male",
    lastSeen: "2025-04-09 13:00",
    location: "Northern Residential Area, Pine Street",
    status: "missing",
    contact: "555-234-5678",
    notes: "Has a service dog with him. May be seeking shelter with neighbors.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: "6",
    name: "Sarah Williams",
    age: 26,
    gender: "Female",
    lastSeen: "2025-04-09 11:20",
    location: "University Campus, Science Building",
    status: "safe",
    contact: "555-345-6789",
    notes: "Evacuated to University Shelter. Working as a volunteer.",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: "7",
    name: "James Wilson",
    age: 45,
    gender: "Male",
    lastSeen: "2025-04-09 10:15",
    location: "Harbor District, Dock 7",
    status: "found",
    contact: "555-456-7890",
    notes: "Found at Eastern Medical Center. Being treated for dehydration.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: "8",
    name: "Aisha Mohammed",
    age: 33,
    gender: "Female",
    lastSeen: "2025-04-09 09:30",
    location: "Southern Community Center",
    status: "injured",
    contact: "555-567-8901",
    notes: "Moderate injuries. Being treated at Southern Hospital.",
    image: "https://randomuser.me/api/portraits/women/37.jpg"
  }
];

const PersonFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [activeTab, setActiveTab] = useState("find");

  const filteredPeople = peopleData.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = !statusFilter || person.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    missing: peopleData.filter(p => p.status === "missing").length,
    safe: peopleData.filter(p => p.status === "safe").length,
    found: peopleData.filter(p => p.status === "found").length,
    injured: peopleData.filter(p => p.status === "injured").length,
  };

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(status === "all" ? undefined : status);
  };

  const handleViewDetails = (person: Person) => {
    setSelectedPerson(person);
  };

  const handleCloseDetails = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <UserRound className="h-6 w-6 mr-2 text-blue-600" />
            People Finder
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Search for people affected by disasters or register someone you're looking for
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="find">
            <Search className="h-4 w-4 mr-2" />
            Find Person
          </TabsTrigger>
          <TabsTrigger value="register">
            <UserRound className="h-4 w-4 mr-2" />
            Register Person
          </TabsTrigger>
        </TabsList>

        <TabsContent value="find" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-4 gap-3">
              <Card className="bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col items-center justify-center text-center">
                  <BadgeAlert className="h-8 w-8 mb-2 text-red-500" />
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">Missing</p>
                  <p className="text-2xl font-bold text-red-700 dark:text-red-300">{statusCounts.missing}</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col items-center justify-center text-center">
                  <Shield className="h-8 w-8 mb-2 text-green-500" />
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">Safe</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">{statusCounts.safe}</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col items-center justify-center text-center">
                  <UserRound className="h-8 w-8 mb-2 text-blue-500" />
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Found</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{statusCounts.found}</p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200 dark:bg-amber-900/10 dark:border-amber-800">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col items-center justify-center text-center">
                  <BadgeAlert className="h-8 w-8 mb-2 text-amber-500" />
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Injured</p>
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">{statusCounts.injured}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Search Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name-search">Search by name or location</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="name-search"
                      placeholder="Search..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status-filter">Filter by status</Label>
                  <Select onValueChange={handleStatusFilterChange} defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="missing">Missing</SelectItem>
                      <SelectItem value="safe">Safe</SelectItem>
                      <SelectItem value="found">Found</SelectItem>
                      <SelectItem value="injured">Injured</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="flex items-center space-x-2">
                  <Switch id="urgent" />
                  <Label htmlFor="urgent">Urgent cases only</Label>
                </div>
                {statusFilter === "missing" && (
                  <Alert variant="destructive" className="mt-4">
                    <BadgeAlert className="h-4 w-4" />
                    <AlertTitle>Critical Priority</AlertTitle>
                    <AlertDescription>
                      Missing persons require immediate attention. If you have any information, please contact authorities.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            <div className="md:col-span-3 space-y-4">
              {selectedPerson ? (
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{selectedPerson.name}</CardTitle>
                        <CardDescription>
                          {selectedPerson.age} years old • {selectedPerson.gender}
                        </CardDescription>
                      </div>
                      <Badge className={
                        selectedPerson.status === "missing" ? "bg-red-500" :
                        selectedPerson.status === "safe" ? "bg-green-500" :
                        selectedPerson.status === "found" ? "bg-blue-500" :
                        "bg-amber-500"
                      }>
                        {selectedPerson.status.charAt(0).toUpperCase() + selectedPerson.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-square rounded-md overflow-hidden mb-4">
                          <img 
                            src={selectedPerson.image || "https://via.placeholder.com/150"} 
                            alt={selectedPerson.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-sm">Last Known Location</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedPerson.location}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-gray-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-sm">Last Seen</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedPerson.lastSeen}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <div>
                          <h4 className="font-medium mb-1">Contact Information</h4>
                          <p className="text-gray-600 dark:text-gray-400">{selectedPerson.contact || "No contact information available"}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Notes</h4>
                          <p className="text-gray-600 dark:text-gray-400">{selectedPerson.notes || "No additional notes"}</p>
                        </div>
                        <Separator />
                        <div className="pt-2">
                          <h4 className="font-medium mb-2">Report Update</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Button variant="outline">I Have Information</Button>
                            <Button>Report Sighting</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" onClick={handleCloseDetails}>
                      Back to List
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPeople.length > 0 ? (
                      filteredPeople.map((person) => (
                        <PersonCard 
                          key={person.id} 
                          person={person} 
                          onClick={() => handleViewDetails(person)} 
                        />
                      ))
                    ) : (
                      <div className="col-span-full p-8 text-center">
                        <p className="text-lg text-gray-500">No people found matching your search criteria.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <PersonRegistration />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonFinder;
