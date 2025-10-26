import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* nav bar section/header section*/}
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero banner */}
        <h1>Main content add here!!!!!!!!</h1>
      </main>
      {/* footer section */}
      <Footer />
    </div>
  );
}
