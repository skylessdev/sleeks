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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apparel.map((item: any) => (
              <div key={item._id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm">Image coming soon</p>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  {item.price && <p className="text-lg font-medium text-gray-800 mb-4">R{item.price}</p>}

                  {item.buyLink ? (
                    <a 
                      href={item.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
                    >
                      Buy Now
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm">Coming soon</p>
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