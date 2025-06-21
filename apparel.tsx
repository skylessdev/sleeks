import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { fetchApparel } from '@/lib/fetchApparel'

export default function Apparel() {
  const [apparel, setApparel] = useState([])

  useEffect(() => {
    fetchApparel().then(setApparel)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-12 pt-24">
        <h1 className="text-3xl font-bold mb-6">Apparel</h1>

        {apparel.length === 0 ? (
          <p className="text-gray-500">No apparel available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apparel.map((item: any) => (
              <div key={item._id} className="border-b pb-6">
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                {item.price && <p className="text-lg font-medium text-gray-800 mb-4">R{item.price}</p>}

                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full max-w-md rounded shadow-md mb-3"
                  />
                ) : (
                  <div className="w-full max-w-md h-48 bg-gray-100 rounded shadow-md mb-3 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Image coming soon</p>
                  </div>
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
                    className="inline-block bg-gray-300 text-gray-500 px-6 py-2 rounded cursor-not-allowed"
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