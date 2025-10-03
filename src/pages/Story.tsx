import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="mx-auto max-w-[900px] px-8">
            <h1 className="text-center text-[18px] md:text-[24px] font-bold uppercase tracking-[0.3em] text-foreground">
              About our Concept
            </h1>
          </div>
        </section>

        {/* Story Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-[900px] px-8">
            <div className="space-y-8 md:space-y-12">
              {/* First Paragraph */}
              <div className="space-y-4">
                <p className="text-[13px] md:text-[15px] leading-relaxed tracking-[0.02em] text-foreground">
                  Born from a fusion of contrasting ideas and a mission to reintroduce yet redefine the 90s, FYUH Concept is a rebellion against the ordinary. It's the story of a style that is both polished and effortlessly undone, a brand that marries the raw, unfiltered energy of American streetwear with the timeless elegance of Western graffiti art.
                </p>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="h-[1px] w-24 bg-border"></div>
              </div>

              {/* Second Paragraph */}
              <div className="space-y-4">
                <p className="text-[13px] md:text-[15px] leading-relaxed tracking-[0.02em] text-foreground">
                  Our purpose is simple: to redefine and reinvent fashion by telling a story through every stitch. We believe that clothing is more than just fabric; it's a form of self-expression. Each piece is designed for those who dare to stand out....yet redefine history, for the free spirits who refuse to be confined by trends. We create clothes for the dreamers, the artists, and the unapologetically authentic.
                </p>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="h-[1px] w-24 bg-border"></div>
              </div>

              {/* Third Paragraph */}
              <div className="space-y-4">
                <p className="text-[13px] md:text-[15px] leading-relaxed tracking-[0.02em] text-foreground">
                  FYUH Concept isn't just about what you wear; it's about why you wear it. It's for those who find beauty in the unconventional and for those who believe that style should be a conversation, not just a statement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values Section */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {/* Value 1 */}
              <div className="text-center">
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground">
                  Authenticity
                </h3>
                <p className="text-[11px] leading-relaxed tracking-[0.02em] text-muted-foreground">
                  We stay true to our roots, creating pieces that reflect genuine self-expression.
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground">
                  Innovation
                </h3>
                <p className="text-[11px] leading-relaxed tracking-[0.02em] text-muted-foreground">
                  We push boundaries, blending streetwear energy with timeless artistry.
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground">
                  Community
                </h3>
                <p className="text-[11px] leading-relaxed tracking-[0.02em] text-muted-foreground">
                  We create for dreamers, artists, and those who dare to redefine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-8 text-center">
            <h2 className="mb-6 text-[14px] md:text-[16px] font-bold uppercase tracking-[0.25em] text-foreground">
              Explore the Collection
            </h2>
            <a
              href="/all-clothing"
              className="inline-block border border-foreground bg-transparent px-8 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Shop Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Story;
