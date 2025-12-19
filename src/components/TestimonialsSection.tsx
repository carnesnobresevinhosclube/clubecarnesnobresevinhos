import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const duplicated = [...testimonials, ...testimonials];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;
    const speed = 0.6;

    const loop = () => {
      if (!isHovered && !isDragging) {
        container.scrollLeft += speed;
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft -= maxScroll;
        }
      }
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [isHovered, isDragging]);
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={containerRef}
            className="group relative flex w-full overflow-hidden cursor-grab active:cursor-grabbing [--gap:1.5rem]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDragging(false);
            }}
            onMouseDown={(e) => {
              const container = containerRef.current;
              if (!container) return;
              setIsDragging(true);
              dragStartX.current = e.clientX;
              scrollStartX.current = container.scrollLeft;
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              const container = containerRef.current;
              if (!container) return;
              e.preventDefault();
              const delta = e.clientX - dragStartX.current;
              container.scrollLeft = scrollStartX.current - delta;
              const maxScroll = container.scrollWidth / 2;
              if (container.scrollLeft < 0) {
                container.scrollLeft += maxScroll;
                scrollStartX.current += maxScroll;
              } else if (container.scrollLeft >= maxScroll) {
                container.scrollLeft -= maxScroll;
                scrollStartX.current -= maxScroll;
              }
            }}
            onMouseUp={() => setIsDragging(false)}
          >
            <div className="flex w-max [gap:var(--gap)] px-2 py-2">
              {duplicated.map((testimonial, i) => (
                <TestimonialCard key={`t-${i}`} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
