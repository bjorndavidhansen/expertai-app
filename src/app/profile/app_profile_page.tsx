'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, Calendar, Edit, Github, Linkedin, Mail, MapPin, MessageSquare, Share2, Twitter } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const user = {
    name: "Jane Doe",
    title: "AI Enthusiast & Web Developer",
    location: "San Francisco, CA",
    bio: "Passionate about leveraging AI to create innovative solutions. Always learning and exploring new technologies.",
    joinDate: "Joined January 2023",
    email: "jane.doe@example.com",
    twitter: "@janedoe",
    github: "janedoe",
    linkedin: "in/janedoe"
  }

  const stats = [
    { label: "Modules Completed", value: 12 },
    { label: "Threads Completed", value: 87 },
    { label: "Learning Hours", value: 120 },
    { label: "Current Streak", value: "7 days" }
  ]

  const achievements = [
    { title: "Fast Learner", description: "Completed 5 threads in one day", icon: BookOpen },
    { title: "Consistency King", description: "Maintained a 7-day learning streak", icon: Calendar },
    { title: "Module Master", description: "Completed all threads in a module", icon: BookOpen },
  ]

  const recentActivity = [
    { action: "Completed thread", module: "Machine Learning Basics", time: "2 hours ago" },
    { action: "Started new module", module: "Advanced JavaScript", time: "1 day ago" },
    { action: "Achieved milestone", module: "Web Development", time: "3 days ago" },
  ]

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
              <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Avatar className="h-20 w-20 mr-4">
                <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>{user.title}</CardDescription>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {user.location}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{user.bio}</p>
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <span>{user.joinDate}</span>
                <Link href={`mailto:${user.email}`} className="flex items-center">
                  <Mail className="mr-1 h-4 w-4" />
                  {user.email}
                </Link>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href={`https://twitter.com/${user.twitter}`} className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href={`https://github.com/${user.github}`} className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href={`https://linkedin.com/${user.linkedin}`} className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Machine Learning', 'Web Development', 'Data Structures'].map((module, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{module}</span>
                        <span>{(index + 1) * 20}%</span>
                      </div>
                      <Progress value={(index + 1) * 20} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Current Learning Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Complete the Advanced Machine Learning module</li>
                  <li>Contribute to an open-source AI project</li>
                  <li>Achieve a 30-day learning streak</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements" className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{achievement.title}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="activity" className="space-y-4">
            {recentActivity.map((activity, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{activity.action}</CardTitle>
                    <CardDescription>{activity.module}</CardDescription>
                  </div>
                  <Badge variant="outline">{activity.time}</Badge>
                </CardHeader>
              </Card>
            ))}
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