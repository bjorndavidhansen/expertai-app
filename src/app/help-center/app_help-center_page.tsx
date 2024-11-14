'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, BookOpen, ChevronRight, HelpCircle, Search } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { title: "Getting Started", icon: BookOpen, description: "Learn the basics of eXpert AI" },
  { title: "Account Management", icon: HelpCircle, description: "Manage your account settings" },
  { title: "Modules and Learning", icon: BookOpen, description: "Understand how to use learning modules" },
  { title: "Progress Tracking", icon: ChevronRight, description: "Track your learning progress" },
  { title: "Technical Issues", icon: HelpCircle, description: "Troubleshoot common problems" },
  { title: "Privacy and Security", icon: HelpCircle, description: "Learn about our security measures" },
]

const faqs = [
  { question: "How do I create a new module?", answer: "To create a new module, go to your Dashboard and click on the 'New Module' button. Follow the prompts to set up your module content and learning objectives." },
  { question: "Can I track my progress across multiple devices?", answer: "Yes, your progress is synced across all devices when you're logged into your eXpert AI account. You can seamlessly switch between your computer, tablet, or smartphone." },
  { question: "How often are new learning materials added?", answer: "We update our content library weekly with new modules, threads, and learning resources. Check the 'What's New' section on your Dashboard for the latest additions." },
]

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')

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
        <h1 className="text-3xl font-bold mb-6">Help Center</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="How can we help you?"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="categories" className="space-y-4">
          <TabsList>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="categories">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-start">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      Explore
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="faqs">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription>Our support team is here to assist you</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <p className="font-medium">Contact Support</p>
              <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
            </div>
            <Button>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
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