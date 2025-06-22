import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { client } from '../../../sanityClient'

interface LookbookItem {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
}

export default function Lookbook() {
  const [lookbookItems, setLookbookItems] = useState<LookbookItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLookbook() {
      try {
        const query = `
          *[_type == "lookbook"] | order(_createdAt desc) {
            _id,
            title,
            description,
            category,
            "imageUrl": image.asset->url
          }
        `
        
        const items = await client.fetch(query)
        console.log('Fetched Lookbook:', items)
        setLookbookItems(items)
      } catch (error) {
        console.error('Error fetching lookbook:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLookbook()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 py-12 pt-24">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">Loading lookbook...</div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Lookbook</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest styles and fashion inspiration from Club Kits. 
            Explore our curated collection of looks and outfits.
          </p>
        </div>

        {lookbookItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-500 mb-8">
              Our lookbook is currently being curated. Check back soon for the latest fashion inspiration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder cards */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Look {index}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lookbookItems.map((item) => (
              <div key={item._id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.category && (
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {item.category}
                    </span>
                  )}
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Style inspiration section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Style Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Streetwear Essentials</h3>
              <p className="text-gray-600 mb-6">
                Discover how to style our club kits for everyday wear. Mix and match pieces 
                to create unique looks that reflect your personal style.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Layer hoodies with tees for versatile styling</li>
                <li>• Mix textures and colors for visual interest</li>
                <li>• Accessorize with caps and bags</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Team Spirit</h3>
              <p className="text-gray-600 mb-6">
                Show your club pride with coordinated looks. Perfect for game days, 
                events, or just representing your favorite team.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete kit coordination</li>
                <li>• Mix official and casual pieces</li>
                <li>• Bold colors and graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}