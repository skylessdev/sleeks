import jumpImage from "@assets/jump_1750549326901.png";

export default function HeroSection() {
  return (
    <main className="relative">
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{ 
            backgroundImage: `url(${jumpImage})` 
          }}
        />
      </section>
    </main>
  );
}
