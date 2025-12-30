import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageSquare, Palette, Heart, Video } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Online Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow believers, share your story, and grow in faith together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Events & Livestreams</CardTitle>
              <CardDescription>
                Join our upcoming events and watch live services and special programs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/events">
                <Button className="w-full animate-bounce">
                  View Events
                  <Video className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Discussion Boards</CardTitle>
              <CardDescription>
                Share testimonies and engage in meaningful discussions with the community
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Creative Submissions</CardTitle>
              <CardDescription>
                Share your creative works, art, music, and writings inspired by faith
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Give & Support</CardTitle>
              <CardDescription>
                Support our ministry and help spread God's word through your generosity
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/give">
                <Button className="w-full animate-bounce">
                  Give Now
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}