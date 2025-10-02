import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FilterBar selectedSize={selectedSize} onSizeChange={setSelectedSize} />
        <ProductGrid selectedSize={selectedSize} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
