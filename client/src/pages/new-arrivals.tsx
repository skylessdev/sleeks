import { useQuery } from '@tanstack/react-query';
import { fetchApparel } from '../lib/fetchApparel';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function NewArrivals() {
  const { data: apparel = [], isLoading, error } = useQuery({
    queryKey: ['/api/apparel'],
    queryFn: fetchApparel,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading new arrivals...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">Error loading new arrivals</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl font-bold mb-8 text-sleeks-black">New Arrivals</h1>
        
        {apparel.length === 0 ? (
          <p className="text-gray-500">No new arrivals available.</p>
        ) : (
          <div className="space-y-8">
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
      </div>
      <Footer />
    </div>
  );
}