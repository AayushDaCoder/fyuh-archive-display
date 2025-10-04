import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AllClothing = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const filterRef = useScrollAnimation<HTMLDivElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div ref={filterRef}>
          <FilterBar selectedSize={selectedSize} onSizeChange={setSelectedSize} />
        </div>
        <div ref={gridRef}>
          <ProductGrid selectedSize={selectedSize} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllClothing;
