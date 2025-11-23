"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for book recommendations
const mockRecommendations = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    similarity: 92,
    description:
      "A story about a woman who gets a chance to explore all the different lives she could have lived in an infinite library of parallel worlds.",
    keywords: ["Fantasy", "Life", "Magic"],
    cover: "/midnight-library-cover.png",
  },
  {
    id: 2,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    similarity: 88,
    description:
      "An intimate retelling of the Trojan War centered on the relationship between Achilles and Patroclus during ancient Greece.",
    keywords: ["Mythology", "Romance", "War"],
    cover: "/song-of-achilles-cover.png",
  },
  {
    id: 3,
    title: "Piranesi",
    author: "Susanna Clarke",
    similarity: 85,
    description:
      "A mysterious tale set in a house of impossible architecture where a man awakens with no memory of his past in a labyrinthine world.",
    keywords: ["Mystery", "Fantasy", "Surreal"],
    cover: "/book-cover-piranesi.jpg",
  },
  {
    id: 4,
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    similarity: 81,
    description:
      "An enchanting journey through a magical underground library where a college student discovers a book that contains the story of his own life.",
    keywords: ["Library", "Adventure", "Magic"],
    cover: "/book-cover-starless-sea.jpg",
  },
  {
    id: 5,
    title: "Howl's Moving Castle",
    author: "Diana Wynne Jones",
    similarity: 78,
    description:
      "A young woman cursed into an old body joins a mysterious wizard and his magical castle, embarking on an unexpected adventure.",
    keywords: ["Magic", "Fantasy", "Romance"],
    cover: "/book-cover-howls-moving-castle.jpg",
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
          Book Sommelier
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover your next read based on plot similarity, not just popularity.
        </p>
      </section>

      {/* Search Interface */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter a book title or describe a plot you love..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 py-3 text-base"
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={isLoading}
            className="px-6 bg-amber-600 hover:bg-amber-700 text-white"
          >
            {isLoading ? "Analyzing..." : "Analyze & Recommend"}
          </Button>
        </div>
      </section>

      {/* Results Grid */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Top Recommendations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {mockRecommendations.map((book) => (
            <Card
              key={book.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Book Cover */}
              <div className="bg-muted aspect-[2/3] overflow-hidden mb-4">
                <img
                  src={book.cover || "/placeholder.svg"}
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-4 pb-4 flex flex-col flex-1">
                {/* Similarity Badge */}
                <Badge className="w-fit mb-3 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  {book.similarity}% Match
                </Badge>

                {/* Title */}
                <h3 className="font-serif font-bold text-foreground text-sm mb-1 line-clamp-2">{book.title}</h3>

                {/* Author */}
                <p className="text-xs text-muted-foreground mb-3">{book.author}</p>

                {/* Description */}
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{book.description}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {book.keywords.map((keyword, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs py-0.5 px-2 bg-slate-100 text-slate-700 hover:bg-slate-100"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center">
        <p className="text-sm text-muted-foreground">Built with Python, Scikit-Learn & TF-IDF</p>
      </footer>
    </main>
  )
}
