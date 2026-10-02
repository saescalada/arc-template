import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.remove("is-pending");
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    const show = () => {
      if (motion.matches) {
        element.classList.remove("is-pending");
        observer.disconnect();
      }
    };
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add("is-pending");
      observer.observe(element);
    }
    motion.addEventListener("change", show);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", show);
      element.classList.remove("is-pending");
    };
  }, []);
  return <div ref={ref} className="reveal" onFocusCapture={() => ref.current?.classList.remove("is-pending")}>{children}</div>;
}
