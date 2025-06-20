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
          <div className="space-y-10">
            {drops.map((drop: any) => (
              <div key={drop._id} className="border-b pb-6">
                <h2 className="text-2xl font-semibold">{drop.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{drop.releaseDate}</p>

                {drop.imageUrl && (
                  <img
                    src={drop.imageUrl}
                    alt={drop.title}
                    className="w-full max-w-md rounded shadow-md mb-3"
                  />
                )}

                <p className="text-gray-700">{drop.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
