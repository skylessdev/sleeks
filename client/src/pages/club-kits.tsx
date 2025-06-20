import { useQuery } from "@tanstack/react-query";
import Navigation from "../components/navigation";
import { fetchKits } from "../lib/fetchKits";

export default function ClubKits() {
  const { data: kits = [], isLoading, error } = useQuery({
    queryKey: ['/api/kits'],
    queryFn: fetchKits,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading club kits</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-12 pt-24">
        <h1 className="text-3xl font-bold mb-6">Club Kits</h1>

        {kits.length === 0 ? (
          <p className="text-gray-500">No club kits available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kits.map((kit: any) => (
              <div key={kit._id} className="bg-gray-50 p-6 rounded-lg">
                {kit.imageUrl && (
                  <img 
                    src={kit.imageUrl} 
                    alt={kit.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2">{kit.name}</h2>
                <p className="text-gray-600 mb-4">R{kit.price}</p>
                {kit.buyLink && (
                  <a 
                    href={kit.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    Buy Now
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}