const products = [
  { id: 1, color: "#3a3a3a", label: "PRODUCT IMAGE", sizes: ["XS", "S", "M"] },
  { id: 2, color: "#6b1f1f", label: "PRODUCT IMAGE", sizes: ["M", "L", "XL"] },
  { id: 3, color: "#5d4e4a", label: "PRODUCT IMAGE", sizes: ["S", "M", "L"] },
  { id: 4, color: "#1a1a1a", label: "PRODUCT IMAGE", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 5, color: "#3a3a3a", label: "PRODUCT IMAGE", sizes: ["L", "XL"] },
  { id: 6, color: "#6b1f1f", label: "PRODUCT IMAGE", sizes: ["XS", "S"] },
  { id: 7, color: "#5d4e4a", label: "PRODUCT IMAGE", sizes: ["M", "L"] },
  { id: 8, color: "#1a1a1a", label: "PRODUCT IMAGE", sizes: ["S", "M", "L", "XL"] },
];

interface ProductGridProps {
  selectedSize: string | null;
}

const ProductGrid = ({ selectedSize }: ProductGridProps) => {
  const filteredProducts = selectedSize
    ? products.filter((product) => product.sizes.includes(selectedSize))
    : products;

  return (
    <section className="bg-background py-8">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {filteredProducts.map((product) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
