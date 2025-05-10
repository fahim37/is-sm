"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Eye } from "lucide-react"

// Dummy data for a single news article
const newsArticle = {
  id: 1,
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta lacus nisi, sit amet congue lorem dictum non.",
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta lacus nisi, sit amet congue lorem dictum non. Nulla gravida lectus non semper pulvinar. Suspendisse malesuada malesuada ex et porttitor. Nulla orci ligula, cursus et tempor id, porta quis neque. Nulla pharetra elit ut urna vestibulum imperdiet. Nullam eget eu leo fermentum aliquet. Suspendisse mattis et nisi non dictum. Mauris facilisis augue quis arcu tempor, eget egestas turpis pulvinar. Vestibulum ullamcorper est vitae lacus cursus, ut elementum mauris maximus. Praesent est enim, porttitor sed lectus sed, porta dignissim nisl. Aenean augue orci, elementum in eros dignissim malesuada leo.</p>
    <h2>Lorem ipsum dolor sit amet:</h2>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Donec sit amet ante eu justo fermentum efficitur a ac neque.</li>
      <li>Nulla gravida nibh pretium, finibus ligula id, eleifend nulla.</li>
      <li>Aenean eleifend elit vel lorem finibus imperdiet.</li>
      <li>Vestibulum tristique sapien sit amet lacus volutpat pulvinar.</li>
      <li>Pellentesque malesuada metus id felis fringilla, ut viverra ex consectetur.</li>
      <li>Proin pretium neque dignissim, ullamcorper eros eu, imperdiet ipsum.</li>
      <li>In varius libero non lorem tempor, ut sollicitudin nisi molestie.</li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tellus in volutpat molestie. Nam ut justo scelerisque, tempus erat id, tristique nunc. Cras venenatis commodo luctus. Aenean eget sapien at libero malesuada vehicula. Morbi eu congue diam. Ut efficitur mi vitae augue ultrices, eget ultricies massa interdum. Nunc scelerisque velit eget justo accumsan pharetra. Aenean finibus finibus metus, in auctor lacus accumsan eget. Nullam commodo felis lacus, sed maximus mi dapibus nam.</p>
  `,
  date: "17 Oct, 2020",
  author: "Admin",
  views: 150,
  image: "/business-newspaper.png",
}

// Dummy data for related news
const relatedNews = Array.from({ length: 3 }, (_, i) => ({
  id: i + 2,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  excerpt: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
  date: "12 Dec 2025",
  author: "Admin",
  views: 12,
  image: "/good-news-banner.png",
}))

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState(newsArticle)

  useEffect(() => {
    // In a real app, you would fetch the article data based on the ID
    // For now, we'll just use the dummy data
    console.log(`Fetching article with ID: ${params.id}`)
  }, [params.id])

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">News</h1>
      </div>

      <Link href="/employee-portal/news" className="mb-4 flex items-center text-gray-600 hover:text-black">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-bold">{article.title}</h1>
        <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {article.date}
          </div>
          <div className="flex items-center">
            <Eye className="mr-1 h-4 w-4" />
            {article.views}
          </div>
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-lg">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={800}
          height={400}
          className="w-full object-cover"
        />
      </div>

      <div className="mb-8 prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

      <div className="mt-12">
        <h2 className="mb-6 text-xl font-bold">Related News:</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedNews.map((news) => (
            <div key={news.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                <div className="absolute top-2 left-2 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                  {news.date}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 text-xs text-gray-500">
                  {news.author} | {news.views} Views
                </div>
                <h3 className="mb-2 text-lg font-semibold">{news.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{news.excerpt}</p>
                <Link
                  href={`/employee-portal/news/${news.id}`}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-black"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
