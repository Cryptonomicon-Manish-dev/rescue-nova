
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Bookmark, FileText, Video, Download, Info, Users, Heart, Clock, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: "guide" | "video" | "article" | "checklist";
  imageUrl: string;
  readTime?: string;
  videoLength?: string;
  popularity: "beginner" | "intermediate" | "advanced";
  url: string;
}

const resourcesData: Resource[] = [
  {
    id: 1,
    title: "Emergency Preparedness Kit Guide",
    description: "Learn how to assemble a comprehensive emergency kit for various disaster scenarios.",
    category: "guide",
    imageUrl: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "15 mins",
    popularity: "beginner",
    url: "#emergency-kit"
  },
  {
    id: 2,
    title: "Flood Safety & Evacuation Procedures",
    description: "Critical flood safety measures and step-by-step evacuation protocols for high-risk areas.",
    category: "checklist",
    imageUrl: "https://images.unsplash.com/photo-1499334758287-dc8133b315e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "10 mins",
    popularity: "beginner",
    url: "#flood-safety"
  },
  {
    id: 3,
    title: "How to Secure Your Home Before a Hurricane",
    description: "Expert guidance on protecting your property and securing vulnerable areas before hurricane impact.",
    category: "video",
    imageUrl: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoLength: "18:24",
    popularity: "intermediate",
    url: "#hurricane-prep"
  },
  {
    id: 4,
    title: "Psychological First Aid for Disaster Survivors",
    description: "Learn psychological first aid techniques to support disaster survivors experiencing trauma and stress.",
    category: "article",
    imageUrl: "https://images.unsplash.com/photo-1541976589050-984894bb9603?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "25 mins",
    popularity: "advanced",
    url: "#psychological-aid"
  },
  {
    id: 5,
    title: "Wildfire Prevention and Home Defense",
    description: "Comprehensive strategies to create defensible space around your property and reduce wildfire risk.",
    category: "guide",
    imageUrl: "https://images.unsplash.com/photo-1602449627130-7b949a49af20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "20 mins",
    popularity: "intermediate",
    url: "#wildfire-defense"
  },
  {
    id: 6,
    title: "Earthquake Safety: Drop, Cover, Hold On",
    description: "Expert demonstration of proper earthquake safety techniques and indoor/outdoor protocols.",
    category: "video",
    imageUrl: "https://images.unsplash.com/photo-1584266311998-7865ad7de542?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoLength: "12:51",
    popularity: "beginner",
    url: "#earthquake-safety"
  },
  {
    id: 7,
    title: "Climate Change and Disaster Frequency",
    description: "Research-based analysis of climate change impacts on natural disaster frequency and intensity.",
    category: "article",
    imageUrl: "https://images.unsplash.com/photo-1589139507225-8ba2d1d9e58e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "30 mins",
    popularity: "advanced",
    url: "#climate-disasters"
  },
  {
    id: 8,
    title: "Community Disaster Response Planning",
    description: "Guide for neighborhood leaders to develop and implement community-based disaster response plans.",
    category: "checklist",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "15 mins",
    popularity: "intermediate",
    url: "#community-planning"
  }
];

const categoryIcons = {
  guide: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  article: <BookOpen className="h-5 w-5" />,
  checklist: <FileText className="h-5 w-5" />
};

const categoryColors = {
  guide: "bg-blue-500 hover:bg-blue-600",
  video: "bg-red-500 hover:bg-red-600",
  article: "bg-purple-500 hover:bg-purple-600",
  checklist: "bg-green-500 hover:bg-green-600"
};

const popularityColors = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
};

const EducationalResources: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredResources = resourcesData.filter(resource => {
    // Filter by tab
    if (activeTab !== "all" && resource.category !== activeTab) {
      return false;
    }
    
    // Filter by search
    if (searchQuery && 
      !resource.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !resource.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const handleBookmark = (id: number) => {
    toast({
      title: "Resource Bookmarked",
      description: "This resource has been added to your bookmarks."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          Educational Resources
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Learn about disaster preparedness, response, and recovery
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Informed, Stay Safe</h3>
              <p className="opacity-90 mb-4">
                Browse our collection of expert resources to help you prepare for and respond to disasters effectively.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-white text-indigo-700 hover:bg-indigo-100">
                  <Download className="h-4 w-4 mr-2" />
                  Download Emergency Guide
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community Training
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="article">Articles</TabsTrigger>
            <TabsTrigger value="checklist">Checklists</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <TabsContent value={activeTab} className="mt-0">
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={resource.imageUrl} 
                    alt={resource.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className={`absolute top-3 right-3 ${categoryColors[resource.category]}`}>
                    <div className="flex items-center gap-1.5">
                      {categoryIcons[resource.category]}
                      <span>{resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}</span>
                    </div>
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="mb-3 text-gray-600 dark:text-gray-400 line-clamp-2">
                    {resource.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="flex items-center gap-1.5">
                      {resource.readTime ? (
                        <>
                          <Clock className="h-3 w-3" />
                          <span>{resource.readTime}</span>
                        </>
                      ) : resource.videoLength ? (
                        <>
                          <Video className="h-3 w-3" />
                          <span>{resource.videoLength}</span>
                        </>
                      ) : null}
                    </Badge>
                    <Badge className={`${popularityColors[resource.popularity]}`}>
                      {resource.popularity.charAt(0).toUpperCase() + resource.popularity.slice(1)}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => handleBookmark(resource.id)}>
                    <Bookmark className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Resource
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No resources found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We couldn't find any resources matching your current filters.
            </p>
          </div>
        )}
      </TabsContent>

      <div className="flex justify-center mt-8">
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 max-w-xl w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Heart className="h-5 w-5 text-red-500" />
              Volunteer Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Help your community prepare for and recover from disasters by joining our volunteer network.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Register as Volunteer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationalResources;
