"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Dummy data for notifications
const notificationsData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem ex, maximus nec malesuada vitae, vestibulum sed ipsum. Sed nec magna at ex mattis tempor. Integer vehicula mollis egestas. Vivamus est leo, vestibulum sed suscipit molestie, tristique at dolor. Quisque ac molestie urna. Proin varius condimentum rhoncus. Aliquam erat volutpat nunc.",
  time: "1hr ago",
  read: false,
}))

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData)

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Notifications</h1>
      </div>

      <div className="mb-4 flex justify-end">
        <Button variant="outline" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative rounded-lg border p-4 ${
              notification.read ? "border-gray-200 bg-white" : "border-gray-300 bg-gray-50"
            }`}
          >
            <div className="pr-8">
              <p className="text-gray-700">{notification.message}</p>
              <div className="mt-2 text-sm text-gray-500">{notification.time}</div>
            </div>
            <div className="absolute right-2 top-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {!notification.read && (
                    <DropdownMenuItem onClick={() => markAsRead(notification.id)}>Mark as read</DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
