"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

// Dummy user data
const userData = {
  id: 1,
  name: "Devid Jhon",
  position: "Team Lead",
  immigrationStatus: "Work Permit",
  immigrationExpirationDate: "N/A",
  email: "devidjond45@gmail.com",
  phone: "+990 3343 7865",
  address: "13th Street, 47 W 13th St, New York",
  avatar: "/person-with-glasses.png",
}

export default function ProfilePage() {
  const [user, setUser] = useState(userData)

  useEffect(() => {
    // In a real app, you would fetch the user data
    // For now, we'll just use the dummy data
  }, [])

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Profile</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
            <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
          </div>
          <h2 className="mb-1 text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.position}</p>
        </div>

        <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <Link href="/employee-portal/profile/edit">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-1 font-medium text-gray-500">Immigration Status:</h3>
                <p>{user.immigrationStatus}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-gray-500">Employment Position:</h3>
                <p>Project Manager Operations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-1 font-medium text-gray-500">Immigration Expiration Date:</h3>
                <p>{user.immigrationExpirationDate}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-gray-500">Email Address:</h3>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-1 font-medium text-gray-500">Phone Number:</h3>
                <p>{user.phone}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-gray-500">Address:</h3>
                <p>{user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
