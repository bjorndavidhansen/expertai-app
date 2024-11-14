'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, ChevronRight, Filter, Plus, Search } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data for modules
const mockModules = [
  { id: 1, title: 'Machine Learning Basics', progress: 65, threads: 12, lastActivity: '2 days ago', status: 'In Progress' },
  { id: 2, title: 'Web Development Fundamentals', progress: 80, threads: 15, lastActivity: '1 day ago', status: 'In Progress' },
  { id: 3, title: 'Data Structures and Algorithms', progress: 30, threads: 20, lastActivity: '5 days ago', status: 'In Progress' },
  { id: 4, title: 'Advanced JavaScript Concepts', progress: 0, threads: 10, lastActivity: 'Not started', status: 'Not Started' },
  { id: 5, title: 'Python for Data Science', progress: 100, threads: 18, lastActivity: '1 week ago', status: 'Completed' },
  { id: 6, title: 'Mobile App Development', progress: 50, threads: 14, lastActivity: '3 days ago', status: 'In Progress' },
]

export default function ModulesPage() {
  const [modules, setModules] = useState(mockModules)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredModules = modules.filter(module => 
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (statusFilter === 'all' || module.status === statusFilter)
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-bold">eXpert AI</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/modules" className="text-primary">Modules</Link>
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Modules</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Module
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
          <div className="flex-1 w-full md:w-auto md:max-w-sm">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search modules..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-muted-foreground" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Not Started">Not Started</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredModules.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredModules.map((module) => (
              <Card key={module.id}>
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                  <CardDescription>{module.threads} threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} />
                    <div className="flex justify-between text-sm">
                      <span>Status</span>
                      <span>{module.status}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Activity</span>
                      <span>{module.lastActivity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Link href={`/modules/${module.id}`} className="flex items-center justify-center w-full">
                      View Module <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center h-64">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-xl font-semibold mb-2">No modules found</p>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create New Module
              </Button>
            </CardContent>
          </Card>
        )}
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