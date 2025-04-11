import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  PhoneCall,
  AlertTriangle,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: "Emergency Hotline",
      content: "1-800-EMERGENCY",
      description: "24/7 Emergency Support",
    },
    {
      icon: <Mail className="h-6 w-6 text-green-500" />,
      title: "Email",
      content: "help@rescuenova.com",
      description: "Response within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      title: "Main Office",
      content: "123 Emergency Ave, Safety City",
      description: "Open Monday - Friday",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      title: "Global Support",
      content: "International Assistance",
      description: "Multiple languages supported",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Emergency Banner */}
      <Card className="bg-red-50 dark:bg-red-900/20 mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-4" />
              <div>
                <h2 className="text-xl font-bold">Emergency?</h2>
                <p className="text-red-600 dark:text-red-400">Call our 24/7 Emergency Hotline</p>
              </div>
            </div>
            <Button size="lg" variant="destructive">
              <PhoneCall className="mr-2 h-4 w-4" />
              1-800-EMERGENCY
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactInfo.map((info, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                  {info.icon}
                </div>
                <h3 className="font-semibold mt-4 mb-2">{info.title}</h3>
                <p className="text-lg mb-2">{info.content}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {info.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form and Office Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe your inquiry in detail..."
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Office Hours and Additional Info */}
        <Card>
          <CardHeader>
            <CardTitle>Office Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Monday - Friday</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Saturday</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Sunday</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h4 className="font-semibold mb-4">Additional Contact Methods</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-3 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Live Chat</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Available 24/7</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Start Live Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <Card>
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
          <CardDescription>Visit our main office</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map will be embedded here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;