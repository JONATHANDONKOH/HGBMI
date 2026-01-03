import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

const books = [
  {
    id: 1,
    title: "Walking in Faith",
    author: "Pastor John Smith",
    price: "$19.99",
    rating: 4.8,
    reviews: 124,
    category: "Spiritual Growth",
    description:
      "A comprehensive guide to strengthening your relationship with God through daily practices and biblical wisdom.",
    image: "/spiritual-book-cover.jpg",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    author: "Dr. Sarah Johnson",
    price: "$15.99",
    rating: 4.9,
    reviews: 89,
    category: "Prayer",
    description: "Discover the transformative power of prayer and learn practical ways to deepen your prayer life.",
    image: "/prayer-book-cover.jpg",
  },
  {
    id: 3,
    title: "Biblical Leadership",
    author: "Rev. Michael Brown",
    price: "$24.99",
    rating: 4.7,
    reviews: 156,
    category: "Leadership",
    description: "Learn biblical principles of leadership that can transform your ministry and personal life.",
    image: "/leadership-book-cover.png",
  },
  {
    id: 4,
    title: "Grace Unveiled",
    author: "Pastor Mary Wilson",
    price: "$17.99",
    rating: 4.9,
    reviews: 203,
    category: "Grace",
    description: "Explore the depths of God's grace and how it transforms every aspect of our lives.",
    image: "/grace-book-cover.jpg",
  },
]

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Spiritual Books</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your spiritual journey with our carefully selected collection of books
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="bg-white border-border hover:shadow-lg transition-shadow">
              <CardHeader className="p-4">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4 overflow-hidden">
                  <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {book.category}
                </Badge>
                <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                <CardDescription className="text-sm">by {book.author}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{book.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{book.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({book.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{book.price}</span>
                  <Button size="sm" className="animate-bounce">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

