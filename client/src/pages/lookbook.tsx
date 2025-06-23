
import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { fetchLookbook } from '@/lib/fetchLookbook'

interface LookbookItem {
  _id: string
  title: string
  imageUrl: string
  description?: string
}

export default function Lookbook() {
  const [lookbookItems, setLookbookItems] = useState<LookbookItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadLookbook = async () => {
      try {
        const items = await fetchLookbook()
        setLookbookItems(items)
      } catch (error) {
        console.error('Failed to load lookbook:', error)
      } finally {
        setLoading(false)
      }
    }

    loadLookbook()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-sleeks-black mb-4 tracking-wide">
            Issue 001: Designed to Move
          </h1>
          <p className="text-sleeks-gray text-lg max-w-2xl mx-auto">
            Exploring the intersection of performance and style through our latest collection
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-sleeks-gray">Loading lookbook...</p>
          </div>
        ) : lookbookItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sleeks-gray">No lookbook images available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lookbookItems.map((item) => (
              <div key={item._id} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-sleeks-black">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sleeks-gray text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
