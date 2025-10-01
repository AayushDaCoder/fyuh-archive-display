import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <main>
        <FilterBar />
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
