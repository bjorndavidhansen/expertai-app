import Link from 'next/link'
import { Bell, BookOpen, ChevronRight, Layout, Settings, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-bold">eXpert AI</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/dashboard" className="text-primary">Dashboard</Link>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Welcome back, User!</CardTitle>
              <CardDescription>"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice." - Brian Herbert</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Modules</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Completed Threads</p>
                    <p className="text-2xl font-bold">87</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Link href="/progress">View Detailed Progress</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['Machine Learning Basics', 'Web Development', 'Data Structures'].map((module, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{module}</p>
                      <p className="text-sm text-muted-foreground">Next: Thread {index + 1}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Link href="/modules">View All Modules</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['Complete ML Basics Quiz', 'Submit Web Project', 'Review Data Structures'].map((milestone, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{milestone}</p>
                      <p className="text-sm text-muted-foreground">Due in {index + 1} days</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { action: 'Completed thread', module: 'Machine Learning Basics', time: '2 hours ago' },
                  { action: 'Started new module', module: 'Advanced JavaScript', time: '1 day ago' },
                  { action: 'Achieved milestone', module: 'Web Development', time: '3 days ago' },
                ].map((activity, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.module}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {['Advanced Machine Learning', 'React Hooks Deep Dive', 'Algorithms Masterclass'].map((recommendation, index) => (
                  <li key={index}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{recommendation}</CardTitle>
                        <CardDescription>Based on your interests</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Explore</Button>
                      </CardFooter>
                    </Card>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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