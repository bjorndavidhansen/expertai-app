'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ChevronRight, GraduationCap, Library, Search, Settings, User } from 'lucide-react'

export default function Dashboard() {
  const [syncStatus, setSyncStatus] = useState('Sync Now')

  const handleSync = () => {
    setSyncStatus('Syncing...')
    // Simulating sync process
    setTimeout(() => setSyncStatus('Synced'), 2000)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r bg-muted/40 lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <span className="text-lg font-semibold">eXpert AI</span>
          </div>
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              <li>
                <a className="flex items-center rounded-lg bg-primary px-4 py-2 text-primary-foreground" href="#">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="flex items-center rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted" href="#">
                  <Library className="mr-2 h-5 w-5" />
                  Modules
                </a>
              </li>
              <li>
                <a className="flex items-center rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted" href="#">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Milestones
                </a>
              </li>
              <li>
                <a className="flex items-center rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted" href="#">
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <div className="border-t p-4">
            <Button className="w-full" onClick={handleSync}>
              {syncStatus}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Library className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex flex-1 items-center gap-4">
            <form className="flex-1 lg:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-background py-2 pl-8 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </form>
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>

        {/* Dashboard content */}
        <div className="container mx-auto p-6">
          <h1 className="mb-4 text-3xl font-bold">Welcome back, User!</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-center justify-between">
                  <span>Overall Progress</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="mb-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Modules</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed Threads</span>
                    <span className="font-medium">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upcoming Milestones</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Modules */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Active Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="module1">
                  <TabsList className="mb-4">
                    <TabsTrigger value="module1">Module 1</TabsTrigger>
                    <TabsTrigger value="module2">Module 2</TabsTrigger>
                    <TabsTrigger value="module3">Module 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="module1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-medium">Introduction to AI</h4>
                        <Progress value={75} />
                        <div className="mt-2 flex justify-between text-sm">
                          <span>Next: Machine Learning Basics</span>
                          <span>Due: 3 days</span>
                        </div>
                      </div>
                      <Button>Continue Learning</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="module2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-medium">Data Structures</h4>
                        <Progress value={40} />
                        <div className="mt-2 flex justify-between text-sm">
                          <span>Next: Binary Trees</span>
                          <span>Due: 5 days</span>
                        </div>
                      </div>
                      <Button>Continue Learning</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="module3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-medium">Web Development</h4>
                        <Progress value={20} />
                        <div className="mt-2 flex justify-between text-sm">
                          <span>Next: CSS Layouts</span>
                          <span>Due: 7 days</span>
                        </div>
                      </div>
                      <Button>Continue Learning</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Upcoming Milestones */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Complete AI Basics</p>
                      <p className="text-sm text-muted-foreground">Module: Introduction to AI</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Finish Data Structures Quiz</p>
                      <p className="text-sm text-muted-foreground">Module: Data Structures</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Build Portfolio Website</p>
                      <p className="text-sm text-muted-foreground">Module: Web Development</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">Completed Thread: "Introduction to Neural Networks"</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">Started Module: "Advanced JavaScript Concepts"</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div>
                      <p className="font-medium">Achieved Milestone: "Complete 10 Coding Challenges"</p>
                      <p className="text-sm text-muted-foreground">3 days ago</p>
                    </div>
                  </li>
                </ul>
                <Button variant="link" className="mt-4 px-0">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}