
import React, { useState } from "react";
import { User, Calendar, Ruler, Heart, Droplets, Info, MapPin, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export const PersonRegistration: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    skinTone: "",
    bloodGroup: "",
    location: "",
    status: "safe",
    contactNumber: "",
    additionalInfo: "",
    image: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setFormData({
            ...formData,
            image: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Person Registered",
      description: `${formData.name} has been registered successfully.`,
    });
    // Reset form
    setFormData({
      name: "",
      age: "",
      gender: "",
      height: "",
      skinTone: "",
      bloodGroup: "",
      location: "",
      status: "safe",
      contactNumber: "",
      additionalInfo: "",
      image: "",
    });
  };

  return (
    <Card className="border-0 shadow-md bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Register a Person
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Basic Information
              </h4>
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                  Full Name*
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-gray-700 dark:text-gray-300">
                    <Calendar className="inline mr-1 h-4 w-4" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-gray-700 dark:text-gray-300">
                    Gender
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange("gender", value)}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="height" className="text-gray-700 dark:text-gray-300">
                  <Ruler className="inline mr-1 h-4 w-4" />
                  Height
                </Label>
                <Input
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="e.g. 5'10''"
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Physical Characteristics & Medical Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Physical & Medical Details
              </h4>
              
              <div className="space-y-2">
                <Label htmlFor="skinTone" className="text-gray-700 dark:text-gray-300">
                  Skin Tone
                </Label>
                <Select
                  value={formData.skinTone}
                  onValueChange={(value) => handleSelectChange("skinTone", value)}
                >
                  <SelectTrigger id="skinTone">
                    <SelectValue placeholder="Select skin tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="olive">Olive</SelectItem>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bloodGroup" className="text-gray-700 dark:text-gray-300">
                  <Droplets className="inline mr-1 h-4 w-4" />
                  Blood Group
                </Label>
                <Select
                  value={formData.bloodGroup}
                  onValueChange={(value) => handleSelectChange("bloodGroup", value)}
                >
                  <SelectTrigger id="bloodGroup">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image" className="text-gray-700 dark:text-gray-300">
                  Photo
                </Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
                {formData.image && (
                  <div className="mt-2 rounded-md overflow-hidden w-24 h-24">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact & Status Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Location & Status
              </h4>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">
                  Last Known Location*
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter last known location"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status" className="text-gray-700 dark:text-gray-300">
                  <AlertCircle className="inline mr-1 h-4 w-4" />
                  Current Status
                </Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleSelectChange("status", value)}
                >
                  <SelectTrigger id="status" className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="safe">Safe</SelectItem>
                    <SelectItem value="missing">Missing</SelectItem>
                    <SelectItem value="in-danger">In Danger</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact & Additional Info
              </h4>
              
              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-gray-700 dark:text-gray-300">
                  Contact Number
                </Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter contact number"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-gray-700 dark:text-gray-300">
                  <Info className="inline mr-1 h-4 w-4" />
                  Additional Information
                </Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Any additional information such as clothing description, medical conditions, etc."
                  className="w-full min-h-[100px]"
                />
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Register Person
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
