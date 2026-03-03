import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
      });

      gsap.from(".about-description", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      });

      gsap.from(".about-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content-wrapper",
          start: "top 70%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={aboutRef} className="about-section py-20 md:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="about-title text-center font-[var(--font-heading)] text-4xl md:text-5xl font-[var(--heading-weight)] text-[var(--foreground)] mb-8 md:mb-12">
          Our Story
        </h2>
        <p className="about-description text-center text-lg md:text-xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto">
          From our first meeting to the day we said "yes," every moment has been a cherished chapter.
          Here's a glimpse into the journey that led us to forever.
        </p>

        <div className="about-content-wrapper grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="about-card p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-full h-48 md:h-64 mb-6 rounded-[var(--radius-md)] overflow-hidden bg-[var(--secondary)] flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/12705469/pexels-photo-12705469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Our Beginning"
                className="w-full h-full object-cover grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 duration-500 ease-in-out"
              />
            </div>
            <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-[var(--primary)] mb-4">
              The Beginning
            </h3>
            <p className="text-[var(--foreground)]/80 leading-relaxed max-w-md">
              Micaela and Tim's path crossed on a warm summer evening, under the glow of city lights.
              It was an instant connection, a feeling of coming home that neither had experienced before.
              Their conversations flowed effortlessly, covering everything from shared dreams to a mutual love for art and quiet evenings.
            </p>
          </Card>

          <Card className="about-card p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-full h-48 md:h-64 mb-6 rounded-[var(--radius-md)] overflow-hidden bg-[var(--secondary)] flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/7827741/pexels-photo-7827741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="The Proposal"
                className="w-full h-full object-cover grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 duration-500 ease-in-out"
              />
            </div>
            <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-[var(--primary)] mb-4">
              The Proposal
            </h3>
            <p className="text-[var(--foreground)]/80 leading-relaxed max-w-md">
              Years later, amidst a backdrop of serene mountain views, Tim surprised Micaela with a heartfelt proposal.
              It was a moment suspended in time, filled with joyous tears and promises of a future together.
              The "yes" echoed through the quiet landscape, sealing their commitment to a lifetime of love and companionship.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
