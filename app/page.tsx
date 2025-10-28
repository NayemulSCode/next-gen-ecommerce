import HeroBanner from "@/components/home/hero-banner";
import ProductGrid from "@/components/home/product-grid";
import SponsoredProducts from "@/components/home/sponsored-products";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* nav bar section/header section*/}
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero banner */}
        <HeroBanner />

        {/* Spnsored Products */}
        <SponsoredProducts />

        {/* Feature Products */}
        <ProductGrid
          title="Featured Products"
          viewAllLink="/products/featured"
        />

        {/* New Arrival */}
        <ProductGrid title="New Arrivals" viewAllLink="/products/new" />

        {/* Most Popular */}
        <ProductGrid title="Most Popular" viewAllLink="/products/popular" />
        <h1>Main content add here!!!!!!!!</h1>
      </main>
      {/* footer section */}
      <Footer />
    </div>
  );
}
