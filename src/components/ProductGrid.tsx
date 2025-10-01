const products = [
  { id: 1, color: "hsl(0, 0%, 16%)", label: "PRODUCT IMAGE" },
  { id: 2, color: "hsl(0, 56%, 27%)", label: "PRODUCT IMAGE" },
  { id: 3, color: "hsl(15, 11%, 32%)", label: "PRODUCT IMAGE" },
  { id: 4, color: "hsl(0, 0%, 10%)", label: "PRODUCT IMAGE" },
  { id: 5, color: "hsl(0, 0%, 16%)", label: "PRODUCT IMAGE" },
  { id: 6, color: "hsl(0, 56%, 27%)", label: "PRODUCT IMAGE" },
  { id: 7, color: "hsl(15, 11%, 32%)", label: "PRODUCT IMAGE" },
  { id: 8, color: "hsl(0, 0%, 10%)", label: "PRODUCT IMAGE" },
];

const ProductGrid = () => {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-[1400px] px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card-hover group cursor-pointer overflow-hidden rounded-lg shadow-sm"
            >
              <div
                className="flex aspect-[3/4] items-center justify-center"
                style={{ backgroundColor: product.color }}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-white opacity-30">
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
