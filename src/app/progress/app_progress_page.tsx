'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, Calendar, ChevronDown, Clock, Medal, TrendingUp } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data for progress
const overallProgress = {
  totalModules: 12,
  completedModules: 5,
  totalThreads: 180,
  completedThreads: 87,
  totalLearningHours: 64,
  currentStreak: 7,
}

const moduleProgress = [
  { id: 1, title: 'Machine Learning Basics', progress: 65, threadsCompleted: 8, totalThreads: 12, lastActivity: '2 days ago' },
  { id: 2, title: 'Web Development Fundamentals', progress: 80, threadsCompleted: 12, totalThreads: 15, lastActivity: '1 day ago' },
  { id: 3, title: 'Data Structures and Algorithms', progress: 30, threadsCompleted: 6, totalThreads: 20, lastActivity: '5 days ago' },
  { id: 4, title: 'Advanced JavaScript Concepts', progress: 0, threadsCompleted: 0, totalThreads: 10, lastActivity: 'Not started' },
  { id: 5, title: 'Python for Data Science', progress: 100, threadsCompleted: 18, totalThreads: 18, lastActivity: '1 week ago' },
]

const achievements = [
  { id: 1, title: 'Fast Learner', description: 'Completed 5 threads in one day', icon: Clock },
  { id: 2, title: 'Consistency King', description: 'Maintained a 7-day learning streak', icon: Calendar },
  { id: 3, title: 'Module Master', description: 'Completed your first module', icon: BookOpen },
]

export default function ProgressPage() {
  const [dateRange, setDateRange] = useState('last7Days')

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-bold">eXpert AI</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/modules">Modules</Link>
            <Link href="/progress" className="text-primary">Progress</Link>
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
          <h1 className="text-3xl font-bold">Progress</h1>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7Days">Last 7 Days</SelectItem>
              <SelectItem value="last30Days">Last 30 Days</SelectItem>
              <SelectItem value="last3Months">Last 3 Months</SelectItem>
              <SelectItem value="allTime">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Modules Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallProgress.completedModules} / {overallProgress.totalModules}</div>
              <p className="text-xs text-muted-foreground">
                {((overallProgress.completedModules / overallProgress.totalModules) * 100).toFixed(1)}% completion rate
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Threads Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallProgress.completedThreads} / {overallProgress.totalThreads}</div>
              <p className="text-xs text-muted-foreground">
                {((overallProgress.completedThreads / overallProgress.totalThreads) * 100).toFixed(1)}% completion rate
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Learning Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallProgress.totalLearningHours}</div>
              <p className="text-xs text-muted-foreground">
                Avg. {(overallProgress.totalLearningHours / 7).toFixed(1)} hours/day
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallProgress.currentStreak} days</div>
              <p className="text-xs text-muted-foreground">
                Keep it up!
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Modules Progress Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Module</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Threads</TableHead>
                  <TableHead>Last Activity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {moduleProgress.map((module) => (
                  <TableRow key={module.id}>
                    <TableCell className="font-medium">{module.title}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={module.progress} className="w-[60px]" />
                        <span className="text-sm">{module.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{module.threadsCompleted} / {module.totalThreads}</TableCell>
                    <TableCell>{module.lastActivity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements and Milestones</CardTitle>
            <CardDescription>Your learning journey highlights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => (
                <Card key={achievement.id}>
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Achievements
            </Button>
          </CardFooter>
        </Card>
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