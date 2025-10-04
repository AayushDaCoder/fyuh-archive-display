import { useEffect, useRef } from "react";

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(threshold = 0.1) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-fade-in");
          element.classList.remove("opacity-0");
        }
      },
      { threshold }
    );

    element.classList.add("opacity-0");
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};
