"use client"

import { useState } from "react"
import { Users, UserPlus, FileUp, FileText, Bell, ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dummy data for reminders
const reminders = Array.from({ length: 11 }, (_, i) => ({
  name: "Sharma",
  reminder: "Project discusation",
}))

export default function RemainderPage() {
  const [currentMonth, setCurrentMonth] = useState("May")
  const [currentYear, setCurrentYear] = useState("2025")
  const [selectedDay, setSelectedDay] = useState(18)
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>(["Sharma", "Sharma"])
  const [reminderText, setReminderText] = useState("")

  // Generate calendar days
  const daysInMonth = 31 // Simplified for demo
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Days of the week
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  const handlePrevMonth = () => {
    // Logic to go to previous month
  }

  const handleNextMonth = () => {
    // Logic to go to next month
  }

  const handleDayClick = (day: number) => {
    setSelectedDay(day)
  }

  const handleRemoveEmployee = (employee: string) => {
    setSelectedEmployees(selectedEmployees.filter((emp) => emp !== employee))
  }

  const handleAddReminder = () => {
    console.log("Adding reminder:", {
      date: `${selectedDay} ${currentMonth}, ${currentYear}`,
      employees: selectedEmployees,
      reminder: reminderText,
    })
    // Logic to add reminder
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Employee List
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add Employee
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FileUp className="h-4 w-4" />
          File Upload
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Update News
        </Button>
        <Button variant="default" className="flex items-center gap-2 bg-black text-white">
          <Bell className="h-4 w-4" />
          Remainder
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {currentMonth} {currentYear}
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select value={currentMonth} onValueChange={setCurrentMonth}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={currentYear} onValueChange={setCurrentYear}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {["2023", "2024", "2025", "2026"].map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-7 border-b">
              {daysOfWeek.map((day) => (
                <div key={day} className="p-2 text-center font-medium">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {days.map((day) => (
                <button
                  key={day}
                  className={`aspect-square p-2 text-center hover:bg-gray-100 ${
                    day === selectedDay ? "bg-blue-700 text-white hover:bg-blue-800" : ""
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border bg-gray-100">
            <div className="grid grid-cols-2 gap-4 p-4 font-medium">
              <div>Name</div>
              <div>Remainder</div>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {reminders.map((reminder, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 border-t border-gray-200 bg-white p-4">
                  <div>{reminder.name}</div>
                  <div>{reminder.reminder}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-md bg-gray-100 p-4">
        <div className="text-lg font-bold">
          {selectedDay} {currentMonth}, {currentYear}
        </div>
        <Button variant="outline" className="ml-2 bg-black text-white">
          <Plus className="mr-1 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedEmployees.map((employee, index) => (
          <div key={index} className="flex items-center gap-1 rounded-md bg-gray-200 px-2 py-1">
            <span>{employee}</span>
            <Button variant="ghost" size="icon" className="h-4 w-4 p-0" onClick={() => handleRemoveEmployee(employee)}>
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Input Remainder</h3>
        <Textarea
          placeholder="Input text......."
          className="min-h-[100px]"
          value={reminderText}
          onChange={(e) => setReminderText(e.target.value)}
        />
        <div className="flex justify-center">
          <Button className="bg-black px-8 py-2 text-white" onClick={handleAddReminder}>
            Set
          </Button>
        </div>
      </div>
    </div>
  )
}
