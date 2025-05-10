"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Task {
  id: number
  name: string
  responsible1: string
  responsible2: string
  subContractor: string
  labour: string
  material: string
}

export default function EstimatePage() {
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      name: "",
      responsible1: "",
      responsible2: "",
      subContractor: "",
      labour: "",
      material: "",
    },
  ])
  const [estimateCount, setEstimateCount] = useState(1)

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: "",
        responsible1: "",
        responsible2: "",
        subContractor: "",
        labour: "",
        material: "",
      },
    ])
  }

  const addEstimate = () => {
    setEstimateCount(estimateCount + 1)
    // Logic to add another estimate form would go here
  }

  const handleTaskChange = (id: number, field: keyof Task, value: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, [field]: value }
        }
        return task
      }),
    )
  }

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Create Estimate</h1>
      </div>

      <div className="mb-6">
        <p className="mb-4 text-lg font-medium">Enter information for the 1st Estimate.</p>

        <div className="rounded border border-gray-200 p-4">
          <div className="mb-6">
            <label htmlFor="description" className="mb-2 block font-medium">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Type Estimate description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {tasks.map((task) => (
            <div key={task.id} className="mb-6">
              <h3 className="mb-4 font-medium">{task.id}st Task Information</h3>

              <div className="mb-4">
                <label htmlFor={`task-name-${task.id}`} className="mb-2 block font-medium">
                  Task Name
                </label>
                <Input
                  id={`task-name-${task.id}`}
                  placeholder="Type Task Name"
                  value={task.name}
                  onChange={(e) => handleTaskChange(task.id, "name", e.target.value)}
                />
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor={`responsible1-${task.id}`} className="mb-2 block font-medium">
                    Responsible (Person 1)
                  </label>
                  <Input
                    id={`responsible1-${task.id}`}
                    placeholder="Type Responsible Person 1"
                    value={task.responsible1}
                    onChange={(e) => handleTaskChange(task.id, "responsible1", e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor={`responsible2-${task.id}`} className="mb-2 block font-medium">
                    Responsible (Person 2)
                  </label>
                  <Input
                    id={`responsible2-${task.id}`}
                    placeholder="Type Responsible Person 2"
                    value={task.responsible2}
                    onChange={(e) => handleTaskChange(task.id, "responsible2", e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor={`subcontractor-${task.id}`} className="mb-2 block font-medium">
                  Sub Contractor
                </label>
                <Select
                  value={task.subContractor}
                  onValueChange={(value) => handleTaskChange(task.id, "subContractor", value)}
                >
                  <SelectTrigger id={`subcontractor-${task.id}`} className="w-full">
                    <SelectValue placeholder="Sub Contractor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contractor1">Contractor 1</SelectItem>
                    <SelectItem value="contractor2">Contractor 2</SelectItem>
                    <SelectItem value="contractor3">Contractor 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <label htmlFor={`labour-${task.id}`} className="mb-2 block font-medium">
                  Labour
                </label>
                <Select value={task.labour} onValueChange={(value) => handleTaskChange(task.id, "labour", value)}>
                  <SelectTrigger id={`labour-${task.id}`} className="w-full">
                    <SelectValue placeholder="Labour" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="labour1">Labour 1</SelectItem>
                    <SelectItem value="labour2">Labour 2</SelectItem>
                    <SelectItem value="labour3">Labour 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <label htmlFor={`material-${task.id}`} className="mb-2 block font-medium">
                  Material
                </label>
                <Select value={task.material} onValueChange={(value) => handleTaskChange(task.id, "material", value)}>
                  <SelectTrigger id={`material-${task.id}`} className="w-full">
                    <SelectValue placeholder="Material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="material1">Material 1</SelectItem>
                    <SelectItem value="material2">Material 2</SelectItem>
                    <SelectItem value="material3">Material 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <Button onClick={addTask} className="flex items-center gap-1 rounded-md bg-black px-4 py-2 text-white">
              <Plus className="h-4 w-4" />
              Add another Task
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={addEstimate} className="flex items-center gap-1 rounded-md bg-black px-4 py-2 text-white">
          <Plus className="h-4 w-4" />
          Add another Estimate
        </Button>
      </div>
    </div>
  )
}
