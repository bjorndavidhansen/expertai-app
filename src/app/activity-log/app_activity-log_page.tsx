'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, Calendar, ChevronDown, Clock, Filter, Search } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for activity log
const activityLog = [
  { id: 1, action: "Completed thread", module: "Machine Learning Basics", thread: "Introduction to Neural Networks", timestamp: "2024-03-15T14:30:00Z" },
  { id: 2, action: "Started module", module: "Advanced JavaScript", thread: null, timestamp: "2024-03-14T10:15:00Z" },
  { id: 3, action: "Achieved milestone", module: "Web Development", thread: "Responsive Design Challenge", timestamp: "2024-03-13T16:45:00Z" },
  { id: 4, action: "Completed quiz", module: "Data Structures", thread: "Binary Trees Quiz", timestamp: "2024-03-12T11:20:00Z" },
  { id: 5, action: "Added note", module: "Machine Learning Basics", thread: "Supervised vs Unsupervised Learning", timestamp: "2024-03-11T09:00:00Z" },
]

export default function DetailedActivityLogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterModule, setFilterModule] = useState('all')
  const [filterAction, setFilterAction] = useState('all')

  const filteredActivities = activityLog.filter(activity => 
    (activity.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (activity.thread && activity.thread.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (filterModule === 'all' || activity.module === filterModule) &&
    (filterAction === 'all' || activity.action === filterAction)
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-bold">eXpert AI</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/modules">Modules</Link>
            <Link href="/progress">Progress</Link>
            <Link href="/notifications">Notifications</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Detailed Activity Log</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Activity Filters</CardTitle>
            <CardDescription>Refine your activity log view</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search activities..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={filterModule} onValueChange={setFilterModule}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modules</SelectItem>
                    <SelectItem value="Machine Learning Basics">Machine Learning Basics</SelectItem>
                    <SelectItem value="Advanced JavaScript">Advanced JavaScript</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Data Structures">Data Structures</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterAction} onValueChange={setFilterAction}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Actions</SelectItem>
                    <SelectItem value="Completed thread">Completed thread</SelectItem>
                    <SelectItem value="Started module">Started module</SelectItem>
                    <SelectItem value="Achieved milestone">Achieved milestone</SelectItem>
                    <SelectItem value="Completed quiz">Completed quiz</SelectItem>
                    <SelectItem value="Added note">Added note</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Your learning journey at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Thread</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>
                      <Badge variant="outline">{activity.action}</Badge>
                    </TableCell>
                    <TableCell>{activity.module}</TableCell>
                    <TableCell>{activity.thread || '-'}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        {new Date(activity.timestamp).toLocaleString()}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-center">
          <Button variant="outline">
            Load More
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2024 eXpert AI. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}