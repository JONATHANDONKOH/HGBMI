import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Play, Download } from "lucide-react"

export default function MusicSermonsPage() {
  const musicItems = [
    {
      id: 1,
      title: "Praise & Worship Collection",
      description: "Uplifting worship music to inspire your spirit",
      coverImage: "/praise-music-cover.jpg",
      type: "Music"
    },
    {
      id: 2,
      title: "Sunday Morning Sermon",
      description: "Weekly teachings and biblical insights",
      coverImage: "/sermon-audio-cover.jpg",
      type: "Sermon"
    },
    {
      id: 3,
      title: "Prayer & Meditation",
      description: "Guided prayer sessions and meditation music",
      coverImage: "/prayer-audio-cover.jpg",
      type: "Prayer"
    },
    {
      id: 4,
      title: "Teaching Series",
      description: "In-depth biblical teaching and discipleship",
      coverImage: "/teaching-audio-cover.jpg",
      type: "Teaching"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Music & Sermons</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of worship through music and be inspired by our sermon recordings
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {musicItems.map((item) => (
            <Card key={item.id} className="bg-white border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.description}
                </CardDescription>
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {item.type}
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <Button className="w-full" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Listen Now
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More content coming soon! Stay tuned for updates.
          </p>
          <Link href="/bookstore">
            <Button variant="outline">
              Back to Bookstore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
