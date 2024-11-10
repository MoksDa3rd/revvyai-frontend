"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function BillingInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "NG",
    email: "",
    confirmEmail: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <Button variant="ghost" className="mb-8" asChild>
          <a href="/Dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go back
          </a>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Billing Information</h1>

        <form className="space-y-6">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white"
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white"
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <div className="flex gap-2">
                <Select defaultValue="NG">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Country">
                      <span className="flex items-center gap-2">
                        <span className="text-xl">🇳🇬</span>
                        <span>+234</span>
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NG">
                      <span className="flex items-center gap-2">
                        <span className="text-xl">🇳🇬</span>
                        <span>+234</span>
                      </span>
                    </SelectItem>
                    {/* Add more country options as needed */}
                  </SelectContent>
                </Select>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="flex-1 bg-white"
                  placeholder="805 604 2384"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="NG">
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country">
                    <span className="flex items-center gap-2">
                      <span className="text-xl">🇳🇬</span>
                      <span>Nigeria</span>
                    </span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NG">
                    <span className="flex items-center gap-2">
                      <span className="text-xl">🇳🇬</span>
                      <span>Nigeria</span>
                    </span>
                  </SelectItem>
                  {/* Add more country options as needed */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white"
              />
            </div>

            <div>
              <Label htmlFor="confirmEmail">Confirm Email</Label>
              <Input
                id="confirmEmail"
                name="confirmEmail"
                type="email"
                value={formData.confirmEmail}
                onChange={handleChange}
                className="bg-white"
              />
            </div>
          </div>

          <Button className="w-full">Continue</Button>
        </form>
      </div>
    </div>
  )
}
