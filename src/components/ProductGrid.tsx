import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  { id: 1, image: product1, alt: "Black graphic t-shirt" },
  { id: 2, image: product2, alt: "White artistic t-shirt" },
  { id: 3, image: product3, alt: "Brown signature t-shirt" },
  { id: 4, image: product4, alt: "Black lion graphic t-shirt" },
  { id: 5, image: product5, alt: "Gray street art t-shirt" },
  { id: 6, image: product6, alt: "White calligraphy t-shirt" },
  { id: 7, image: product7, alt: "Brown signature t-shirt" },
  { id: 8, image: product8, alt: "Black animal design t-shirt" },
];

const ProductGrid = () => {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group cursor-pointer overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
