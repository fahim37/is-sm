"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Dummy user data
const userData = {
  id: 1,
  name: "Devid Jhon",
  email: "devidjond45@gmail.com",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  avatar: "/person-with-glasses.png",
}

export default function EditProfilePage() {
  const [user, setUser] = useState(userData)
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to the server
    console.log("Form submitted:", user)
    setIsEditing(false)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the password data to the server
    console.log("Password changed:", {
      currentPassword: user.currentPassword,
      newPassword: user.newPassword,
      confirmPassword: user.confirmPassword,
    })
    setIsChangingPassword(false)
  }

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Edit Profile</h1>
      </div>

      <Link href="/employee-portal/profile" className="mb-4 flex items-center text-gray-600 hover:text-black">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
            <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
          </div>
          <h2 className="mb-4 text-xl font-bold">Your Photo</h2>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Edit className="h-4 w-4" />
            Edit Image
          </Button>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-1"
              >
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block font-medium">
                    Full Name
                  </label>
                  <Input id="name" name="name" value={user.name} onChange={handleInputChange} disabled={!isEditing} />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block font-medium">
                    Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                {isEditing && (
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-black text-white">
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Change password</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsChangingPassword(!isChangingPassword)}
                className="flex items-center gap-1"
              >
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="mb-1 block font-medium">
                    Current Password
                  </label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={user.currentPassword}
                    onChange={handleInputChange}
                    disabled={!isChangingPassword}
                    placeholder="••••••••••••"
                  />
                </div>

                <div>
                  <label htmlFor="newPassword" className="mb-1 block font-medium">
                    New Password
                  </label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={user.newPassword}
                    onChange={handleInputChange}
                    disabled={!isChangingPassword}
                    placeholder="••••••••••••"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-1 block font-medium">
                    Confirm New Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={user.confirmPassword}
                    onChange={handleInputChange}
                    disabled={!isChangingPassword}
                    placeholder="••••••••••••"
                  />
                </div>

                {isChangingPassword && (
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-black text-white">
                      Change Password
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
