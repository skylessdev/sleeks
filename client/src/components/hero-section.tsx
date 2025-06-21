import sleeksImage from "@assets/44B06E61-2D31-49E1-94F6-CD8B31F1F632_1750374904450.png";

export default function HeroSection() {
  return (
    <main className="relative">
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{ 
            backgroundImage: `url(${sleeksImage})` 
          }}
        />
      </section>
    </main>
  );
}
