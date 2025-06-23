import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { fetchApparel } from '@/lib/fetchApparel'

export default function Apparel() {
  const [apparel, setApparel] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApparel().then((data) => {
      setApparel(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-12 pt-24">
        <h1 className="text-3xl font-bold mb-6">Apparel</h1>

        {loading ? (
          <p className="text-gray-500">Loading apparel...</p>
        ) : apparel.length === 0 ? (
          <p className="text-gray-500">No apparel available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apparel.map((item: any) => (
              <div key={item._id} className="border-b pb-6">
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                {item.price && <p className="text-lg font-medium text-gray-800 mb-4">R{item.price}</p>}

                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full max-w-md rounded shadow-md mb-3"
                  />
                )}

                {item.buyLink ? (
                  <a 
                    href={item.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-sleeks-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
                  >
                    Buy Now
                  </a>
                ) : (
                  <button 
                    disabled
                    className="inline-block bg-gray-400 text-white px-6 py-2 rounded cursor-not-allowed opacity-75"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}