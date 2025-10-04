import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Home = () => {
  const heroRef = useScrollAnimation();
  const latestRef = useScrollAnimation();
  const regularRef = useScrollAnimation();
  const popularRef = useScrollAnimation();
  const latestProducts = [
    { id: 1, color: "#1a1a1a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 2, color: "#5d4e4a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 3, color: "#1a3a1a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 4, color: "#8a1a1a", label: "PRODUCT IMAGE", price: "$45.00" },
  ];

  const popularProducts = [
    { id: 5, color: "#3a1a1a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 6, color: "#1a2a4a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 7, color: "#1a1a6a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 8, color: "#2a2a2a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 9, color: "#4a2a1a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 10, color: "#3a1a5a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 11, color: "#5a1a1a", label: "PRODUCT IMAGE", price: "$45.00" },
    { id: 12, color: "#2a3a1a", label: "PRODUCT IMAGE", price: "$45.00" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="bg-background py-12 md:py-16">
          <div className="mx-auto max-w-[1600px] px-8">
            <div className="flex aspect-video items-center justify-center bg-card">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground opacity-30">
                VIDEO PLACEHOLDER
              </span>
            </div>
          </div>
        </section>

        {/* Latest Drop Section */}
        <section ref={latestRef} className="bg-background py-8">
          <div className="mx-auto max-w-[1600px] px-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                LATEST DROP
              </h2>
              <a href="/all-clothing" className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground hover:opacity-60">
                EXPLORE ITEM
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {latestProducts.map((product) => (
                <article
                  key={product.id}
                  className="group cursor-pointer overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className="flex aspect-[3/4] items-center justify-center"
                    style={{ backgroundColor: product.color }}
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white opacity-30">
                      {product.label}
                    </span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-foreground">
                      {product.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Tees Button */}
        <section ref={regularRef} className="bg-background py-8">
          <div className="mx-auto max-w-[1600px] px-8 text-center">
            <Button
              variant="outline"
              className="px-8 py-2 text-[10px] font-medium uppercase tracking-[0.15em]"
            >
              REGULAR TEES
            </Button>
          </div>
        </section>

        {/* Popular Picks Section */}
        <section ref={popularRef} className="bg-background py-8">
          <div className="mx-auto max-w-[1600px] px-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                POPULAR PICKS
              </h2>
              <a href="/all-clothing" className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground hover:opacity-60">
                EXPLORE ITEM
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {popularProducts.map((product) => (
                <article
                  key={product.id}
                  className="group cursor-pointer overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className="flex aspect-[3/4] items-center justify-center"
                    style={{ backgroundColor: product.color }}
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white opacity-30">
                      {product.label}
                    </span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-foreground">
                      {product.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
