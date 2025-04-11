import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  HeartPulse, 
  Phone, 
  HelpCircle, 
  Shield, 
  Users,
  MapPin,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Emergency Response",
      description: "24/7 rapid emergency response services with real-time coordination and support.",
      link: "/services/emergency-response"
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-green-500" />,
      title: "Medical Support",
      description: "Immediate medical assistance and coordination with healthcare facilities.",
      link: "/services/medical-support"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance and guidance for emergencies.",
      link: "/services/support"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Disaster Management",
      description: "Comprehensive disaster preparedness and management services.",
      link: "/services/disaster-management"
    },
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Our services are available round the clock, ensuring help is always at hand."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Wide Coverage",
      description: "Operating across multiple regions with local response teams."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Teams",
      description: "Highly trained professionals ready to respond to any situation."
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Comprehensive Support",
      description: "Full range of emergency and support services under one roof."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive emergency response and support services designed to ensure community safety and rapid assistance.
        </p>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                {service.icon}
                <div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Why Choose Our Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-blue-50 dark:bg-blue-900/20">
        <CardContent className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Need Emergency Assistance?</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Our emergency response team is available 24/7 to help you.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="destructive">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Call
            </Button>
            <Button size="lg" variant="outline">
              <HelpCircle className="mr-2 h-4 w-4" />
              Get Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;