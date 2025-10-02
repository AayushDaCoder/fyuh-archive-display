import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <main>
        <FilterBar />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
