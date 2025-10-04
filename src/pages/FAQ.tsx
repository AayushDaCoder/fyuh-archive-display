import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const heroRef = useScrollAnimation<HTMLElement>();
  const faqRef = useScrollAnimation<HTMLDivElement>();

  const faqs = [
    {
      question: "What material is used?",
      answer: "100% Premium Cotton",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, national shipping is available",
    },
    {
      question: "Do the sizes run true to size?",
      answer: "Yes, but check our size chart for the best fit",
    },
    {
      question: "How do I wash your products?",
      answer: "Machine wash cold, tumble dry low. Avoid bleach",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="border-b border-border bg-card py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-8">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
              Frequently Asked Questions
            </h1>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div ref={faqRef} className="mx-auto max-w-3xl px-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
