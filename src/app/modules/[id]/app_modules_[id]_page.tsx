'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, ChevronRight, Edit, MoreHorizontal, Play, Settings, Trash } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for the module
const moduleData = {
  id: '1',
  title: 'Machine Learning Basics',
  description: 'Learn the fundamentals of machine learning, including key concepts, algorithms, and practical applications.',
  progress: 65,
  totalThreads: 12,
  completedThreads: 8,
  lastActivity: '2 days ago',
  threads: [
    { id: '1', title: 'Introduction to Machine Learning', completed: true },
    { id: '2', title: 'Supervised Learning', completed: true },
    { id: '3', title: 'Unsupervised Learning', completed: true },
    { id: '4', title: 'Neural Networks Basics', completed: false },
    { id: '5', title: 'Deep Learning Introduction', completed: false },
  ],
  notes: [
    { id: '1', content: 'Remember to review the difference between supervised and unsupervised learning', timestamp: '2024-03-10T14:30:00Z' },
    { id: '2', content: 'Practice implementing a simple neural network', timestamp: '2024-03-12T09:15:00Z' },
  ],
  milestones: [
    { id: '1', title: 'Complete all threads', completed: false },
    { id: '2', title: 'Score 80% on final quiz', completed: false },
    { id: '3', title: 'Implement a machine learning project', completed: false },
  ]
}

export default function ModuleDetailsPage({ params }: { params: { id: string } }) {
  const [module, setModule] = useState(moduleData)

  const toggleThreadCompletion = (threadId: string) => {
    setModule(prevModule => ({
      ...prevModule,
      threads: prevModule.threads.map(thread =>
        thread.id === threadId ? { ...thread, completed: !thread.completed } : thread
      ),
      completedThreads: prevModule.threads.filter(thread => thread.id === threadId ? !thread.completed : thread.completed).length,
      progress: Math.round((prevModule.threads.filter(thread => thread.id === threadId ? !thread.completed : thread.completed).length / prevModule.totalThreads) * 100)
    }))
  }

  const toggleMilestoneCompletion = (milestoneId: string) => {
    setModule(prevModule => ({
      ...prevModule,
      milestones: prevModule.milestones.map(milestone =>
        milestone.id === milestoneId ? { ...milestone, completed: !milestone.completed } : milestone
      )
    }))
  }

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
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
            <p className="text-muted-foreground">{module.description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Module Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit Module
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Module Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Delete Module
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Module Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{module.completedThreads} of {module.totalThreads} threads completed</span>
                <span>Last activity: {module.lastActivity}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Continue Learning
            </Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList>
            <TabsTrigger value="content">Module Content</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Threads</CardTitle>
                <CardDescription>Your learning path for this module</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {module.threads.map((thread) => (
                    <li key={thread.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`thread-${thread.id}`}
                        checked={thread.completed}
                        onCheckedChange={() => toggleThreadCompletion(thread.id)}
                      />
                      <label
                        htmlFor={`thread-${thread.id}`}
                        className={`flex-grow ${thread.completed ? 'line-through text-muted-foreground' : ''}`}
                      >
                        {thread.title}
                      </label>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notes">
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
                <CardDescription>Your personal notes for this module</CardDescription>
              </CardHeader>
              <CardContent>
                {module.notes.length > 0 ? (
                  <ul className="space-y-4">
                    {module.notes.map((note) => (
                      <li key={note.id} className="bg-muted p-4 rounded-md">
                        <p>{note.content}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {new Date(note.timestamp).toLocaleString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">No notes yet. Start adding notes as you learn!</p>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Add New Note</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="milestones">
            <Card>
              <CardHeader>
                <CardTitle>Milestones</CardTitle>
                <CardDescription>Key achievements for this module</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {module.milestones.map((milestone) => (
                    <li key={milestone.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`milestone-${milestone.id}`}
                        checked={milestone.completed}
                        onCheckedChange={() => toggleMilestoneCompletion(milestone.id)}
                      />
                      <label
                        htmlFor={`milestone-${milestone.id}`}
                        className={`flex-grow ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}
                      >
                        {milestone.title}
                      </label>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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