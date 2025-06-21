import { useQuery } from '@tanstack/react-query';
import { fetchLookbook } from '../lib/fetchLookbook';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function Lookbook() {
  const { data: lookbookImages = [], isLoading, error } = useQuery({
    queryKey: ['/api/lookbook'],
    queryFn: fetchLookbook,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading lookbook...</p>
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
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">Error loading lookbook</p>
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
        
        {lookbookImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No lookbook images available.</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {lookbookImages.map((item: any) => (
              <div key={item._id} className="group cursor-pointer break-inside-avoid mb-6">
                {item.imageUrl ? (
                  <div className="overflow-hidden shadow-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title || 'Lookbook image'}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gray-100 shadow-lg flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Image coming soon</p>
                  </div>
                )}
                <div className="mt-3 text-right">
                  {item.title && (
                    <p className="text-sleeks-gray font-medium text-sm tracking-wide">
                      {item.title}
                    </p>
                  )}
                  {item._createdAt && (
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(item._createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}