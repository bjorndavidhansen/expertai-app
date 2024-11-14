'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, Check, ChevronRight, MessageSquare, Settings, Star, TrendingUp, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

// Mock data for notifications
const mockNotifications = [
  { id: 1, type: 'achievement', title: 'New Achievement Unlocked!', description: 'You\'ve completed your first module. Great job!', icon: Star, date: '2 hours ago', read: false },
  { id: 2, type: 'progress', title: 'Learning Streak!', description: 'You\'ve maintained a 7-day learning streak. Keep it up!', icon: TrendingUp, date: '1 day ago', read: false },
  { id: 3, type: 'system', title: 'New Feature Available', description: 'Check out our new AI-powered study recommendations.', icon: MessageSquare, date: '3 days ago', read: true },
  { id: 4, type: 'achievement', title: 'Quiz Master', description: 'You aced the Machine Learning Basics quiz!', icon: Star, date: '1 week ago', read: true },
  { id: 5, type: 'progress', title: 'Halfway There!', description: 'You\'re 50% through the Web Development module.', icon: TrendingUp, date: '1 week ago', read: true },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [activeTab, setActiveTab] = useState('all')

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.type === activeTab)

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })))
  }

  const toggleNotificationRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: !notif.read } : notif
    ))
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
            <Link href="/notifications" className="text-primary">Notifications</Link>
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
          <h1 className="text-3xl font-bold">Notifications</h1>
          <Button variant="outline" onClick={markAllAsRead}>Mark all as read</Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="achievement">Achievements</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <Card key={notification.id} className={notification.read ? 'bg-muted' : ''}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <div className={`mr-4 p-2 rounded-full ${notification.read ? 'bg-muted-foreground/20' : 'bg-primary/20'}`}>
                      <notification.icon className={`h-4 w-4 ${notification.read ? 'text-muted-foreground' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{notification.title}</CardTitle>
                      <CardDescription>{notification.description}</CardDescription>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleNotificationRead(notification.id)}
                      aria-label={notification.read ? "Mark as unread" : "Mark as read"}
                    >
                      <Check className={`h-4 w-4 ${notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{notification.date}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-64">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-xl font-semibold mb-2">No notifications</p>
                  <p className="text-muted-foreground">You're all caught up!</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
              </div>
              <Switch />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Link href="/settings" className="flex items-center justify-center w-full">
                Manage Notification Preferences <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
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