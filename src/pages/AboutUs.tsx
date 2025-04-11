import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Globe, Award } from "lucide-react";

const AboutUs = () => {
  const missions = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Our Mission",
      description: "To provide rapid and effective emergency response services, ensuring community safety through advanced technology and dedicated support."
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Our Team",
      description: "A dedicated group of professionals including emergency responders, tech experts, and community coordinators working 24/7 to ensure public safety."
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      title: "Our Impact",
      description: "Serving communities worldwide with real-time disaster management, helping thousands of people annually through our emergency response network."
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: "Our Values",
      description: "Commitment to excellence, integrity in service, and unwavering dedication to community safety and emergency preparedness."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Rescue Nova</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Leading the way in emergency response and disaster management through innovative technology and dedicated service.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {missions.map((mission, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-3">
                {mission.icon}
                <CardTitle>{mission.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">{mission.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* History Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Founded in 2020, Rescue Nova emerged from a vision to revolutionize emergency response systems through technology. 
            What started as a small team of dedicated professionals has grown into a comprehensive emergency management platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Emergencies Handled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card>
        <CardHeader>
          <CardTitle>Leadership Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "John Smith", role: "Chief Executive Officer", image: "/placeholder.svg" },
              { name: "Sarah Johnson", role: "Emergency Response Director", image: "/placeholder.svg" },
              { name: "Michael Chen", role: "Technology Director", image: "/placeholder.svg" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;