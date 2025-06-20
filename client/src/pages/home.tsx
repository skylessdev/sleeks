import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import Footer from '@/components/footer'
import { fetchDrops } from '@/lib/fetchDrops'

export default function Home() {
  const [drops, setDrops] = useState([])

  useEffect(() => {
    fetchDrops().then(setDrops)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Live Drops</h1>

        {drops.length === 0 ? (
          <p className="text-gray-500">No drops available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drops.map((drop: any) => (
              <div key={drop._id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {drop.imageUrl && (
                  <div className="aspect-square w-full">
                    <img
                      src={drop.imageUrl}
                      alt={drop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{drop.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(drop.releaseDate).toLocaleDateString()}
                  </p>
                  {drop.description && (
                    <p className="text-gray-700 text-sm">{drop.description}</p>
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
