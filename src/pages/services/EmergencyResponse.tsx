import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  PhoneCall, 
  Clock, 
  MapPin,
  Users,
  Truck,
  Radio,
  Shield
} from "lucide-react";

const EmergencyResponse = () => {
  const responseTypes = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "Disaster Response",
      description: "Immediate response to natural and man-made disasters with specialized equipment and trained personnel."
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Rescue Operations",
      description: "Professional rescue teams equipped to handle various emergency situations and complex rescue operations."
    },
    {
      icon: <Radio className="h-6 w-6 text-green-500" />,
      title: "Emergency Communications",
      description: "Advanced communication systems ensuring seamless coordination during emergencies."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Evacuation Support",
      description: "Organized evacuation planning and execution during emergency situations."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Emergency Call",
      description: "Contact our 24/7 emergency hotline for immediate assistance."
    },
    {
      number: "02",
      title: "Assessment",
      description: "Rapid situation assessment by our emergency response team."
    },
    {
      number: "03",
      title: "Deployment",
      description: "Immediate deployment of appropriate response units."
    },
    {
      number: "04",
      title: "Response",
      description: "Professional emergency response and situation management."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Emergency Contact Banner */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <PhoneCall className="h-8 w-8 text-red-500 mr-4" />
            <div>
              <h2 className="text-xl font-bold">Emergency Hotline</h2>
              <p className="text-red-600 dark:text-red-400">Available 24/7</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button size="lg" variant="destructive">
              Call Emergency
            </Button>
            <Button size="lg" variant="outline">
              Request Help Online
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Emergency Response Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responseTypes.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Response Process */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Response Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Our Emergency Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Round-the-clock emergency response services
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-semibold mb-2">Fast Response Time</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Quick deployment to emergency locations
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-semibold mb-2">Expert Teams</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Highly trained emergency response professionals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default EmergencyResponse;