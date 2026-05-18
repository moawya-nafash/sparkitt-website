import HeroSection from "@/components/home/HeroSection";
import ProblemStats from "@/components/home/ProblemStats";
import PillarsPreview from "@/components/home/PillarsPreview";
import TechTeaser from "@/components/home/TechTeaser";
import ClientsList from "@/components/home/ClientsList";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProblemStats />
      <PillarsPreview />
      <TechTeaser />
      <ClientsList />
      
      {/* Simple CTA Section at the bottom */}
      <section className="py-32 bg-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
                  Ready to Decode the <br/> Subconscious?
              </h2>
              <a href="/book-demo" className="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold text-xl transition-all hover:scale-105 btn-glow">
                  Book Your Free Demo
              </a>
          </div>
      </section>
    </div>
  );
}
