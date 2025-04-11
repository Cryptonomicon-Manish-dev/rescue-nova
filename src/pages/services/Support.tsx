import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  LifeBuoy,
  MessageSquare,
  Phone,
  Mail,
  HelpCircle,
  FileText,
  Video,
  BookOpen,
} from "lucide-react";

const Support = () => {
  const supportChannels = [
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: "Phone Support",
      description: "24/7 emergency phone support for immediate assistance",
      action: "Call Now",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: "Live Chat",
      description: "Real-time chat support with our emergency response team",
      action: "Start Chat",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      title: "Email Support",
      description: "Send us detailed inquiries for non-emergency situations",
      action: "Send Email",
    },
    {
      icon: <Video className="h-6 w-6 text-red-500" />,
      title: "Video Consultation",
      description: "Schedule a video call with our emergency experts",
      action: "Book Session",
    },
  ];

  const resources = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentation",
      description: "Comprehensive guides and documentation",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Base",
      description: "Detailed articles and how-to guides",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      description: "Visual guides and training videos",
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "FAQs",
      description: "Frequently asked questions and answers",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Support Header */}
      <div className="text-center mb-12">
        <LifeBuoy className="h-12 w-12 mx-auto mb-4 text-blue-500" />
        <h1 className="text-4xl font-bold mb-4">24/7 Support Center</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get immediate assistance and support for all emergency-related queries. Our team is available round the clock to help you.
        </p>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {supportChannels.map((channel, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                {channel.icon}
                <h3 className="font-semibold mt-4 mb-2">{channel.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {channel.description}
                </p>
                <Button>{channel.action}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Send us a message and we'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe your issue in detail..."
                className="min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Help Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Self-Help Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold mt-4 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {resource.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;