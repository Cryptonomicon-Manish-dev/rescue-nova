
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfoIcon, Clock, MapPin, Phone, User, Calendar, Ruler, Heart, Droplets } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Person {
  id: string;
  name: string;
  location: string;
  status: "safe" | "missing" | "found" | "injured";
  lastSeen: string;
  image?: string;
  age?: number;
  height?: string;
  gender?: string;
  skinTone?: string;
  bloodGroup?: string;
  contactNumber?: string;
  additionalInfo?: string;
  notes?: string;
  contact?: string;
}

interface PersonCardProps {
  person: Person;
  onClick?: () => void;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, onClick }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "safe":
        return <Badge className="bg-green-500 hover:bg-green-600">Safe</Badge>;
      case "missing":
        return <Badge className="bg-red-500 hover:bg-red-600">Missing</Badge>;
      case "found":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Found</Badge>;
      case "injured":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Injured</Badge>;
      default:
        return null;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border bg-white dark:bg-gray-800">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <Avatar className="h-32 w-32">
                <AvatarFallback className="bg-blue-500 text-white text-2xl">
                  {getInitials(person.name)}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
          <div className="absolute top-2 right-2">
            {getStatusBadge(person.status)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white truncate">
          {person.name}
        </h3>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3 text-sm">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{person.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {person.age && (
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{person.age} years</span>
            </div>
          )}
          
          {person.gender && (
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <User className="h-4 w-4 mr-1" />
              <span>{person.gender}</span>
            </div>
          )}
          
          {person.bloodGroup && (
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <Droplets className="h-4 w-4 mr-1" />
              <span>{person.bloodGroup}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mt-2">
          <Clock className="h-3 w-3 mr-1" />
          <span>Last seen: {person.lastSeen}</span>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm" className="w-full mt-4" onClick={onClick}>
              <InfoIcon className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{person.name}</DialogTitle>
              <DialogDescription>
                <div className="flex items-center gap-2 mt-1">
                  {getStatusBadge(person.status)}
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Last seen: {person.lastSeen}
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              {person.image && (
                <div className="mb-6 rounded-md overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-60 object-cover object-center"
                  />
                </div>
              )}
              
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Personal Information
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Age</p>
                  <p className="text-gray-800 dark:text-gray-100">{person.age || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                  <p className="text-gray-800 dark:text-gray-100">{person.gender || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Height</p>
                  <p className="text-gray-800 dark:text-gray-100">{person.height || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Skin Tone</p>
                  <p className="text-gray-800 dark:text-gray-100">{person.skinTone || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Blood Group</p>
                  <p className="text-gray-800 dark:text-gray-100">{person.bloodGroup || "Not specified"}</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Location & Contact
              </h4>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Last Known Location</p>
                  <p className="text-gray-800 dark:text-gray-100">{person.location}</p>
                </div>
                {person.contact && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Contact Number</p>
                    <p className="text-gray-800 dark:text-gray-100">{person.contact}</p>
                  </div>
                )}
              </div>
              
              {person.notes && (
                <>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Additional Information
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {person.notes}
                  </p>
                </>
              )}
              
              <div className="mt-6 flex justify-end space-x-2">
                <Button size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};
