import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "../lib/utils";
import Button from "./ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = () => {
    const weddingDate = new Date("2027-04-01T00:00:00"); // April 1, 2027
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-eyebrow", { y: 30, opacity: 0, duration: 0.6, delay: 0.2 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1 }, "-=0.3")
        .from(".hero-names", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/8148680/pexels-photo-8148680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
        <div className="absolute inset-0 bg-[var(--background)]/70 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 text-center text-[var(--foreground)] p-6 max-w-4xl mx-auto">
        <p className="hero-eyebrow text-lg md:text-xl text-[var(--primary)] font-semibold mb-4 tracking-widest uppercase">
          We're Getting Married!
        </p>
        <h1 className="hero-title font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-[var(--heading-weight)] leading-tight mb-4 text-[var(--foreground)]">
          Micaela & Tim
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 font-[var(--font-sans)] text-[var(--foreground)]/90">
          April 2027
        </p>

        <div className="hero-names flex justify-center space-x-6 md:space-x-12 mb-10 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--primary)]">{countdown.days}</span>
            <span className="text-sm md:text-base uppercase tracking-widest text-[var(--foreground)]/80">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--primary)]">{countdown.hours}</span>
            <span className="text-sm md:text-base uppercase tracking-widest text-[var(--foreground)]/80">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--primary)]">{countdown.minutes}</span>
            <span className="text-sm md:text-base uppercase tracking-widest text-[var(--foreground)]/80">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--primary)]">{countdown.seconds}</span>
            <span className="text-sm md:text-base uppercase tracking-widest text-[var(--foreground)]/80">Seconds</span>
          </div>
        </div>

        <div className="hero-cta">
          <Button
            className="px-8 py-3 text-lg font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            onClick={scrollToRSVP}
          >
            RSVP Now
          </Button>
        </div>
      </div>
    </section>
  );
}
