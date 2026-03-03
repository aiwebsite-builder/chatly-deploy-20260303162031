import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";
gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Mountainscape photo" },
    { src: "https://images.pexels.com/photos/8148680/pexels-photo-8148680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Blank frame in minimalist room" },
    { src: "https://images.pexels.com/photos/5725904/pexels-photo-5725904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Wooden frame on white wall" },
    { src: "https://images.pexels.com/photos/9017632/pexels-photo-9017632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Textured canvas" },
    { src: "https://images.pexels.com/photos/29093113/pexels-photo-29093113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Abstract sculptures" },
    { src: "https://images.pexels.com/photos/5876751/pexels-photo-5876751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Minimalist still life with grapes" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top 80%",
        },
      });

      gsap.from(".gallery-description", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top 75%",
        },
      });

      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 70%",
        },
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="gallery-section py-20 md:py-32 bg-[var(--secondary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="gallery-title text-center font-[var(--font-heading)] text-4xl md:text-5xl font-[var(--heading-weight)] text-[var(--foreground)] mb-8 md:mb-12">
          Our Engagement
        </h2>
        <p className="gallery-description text-center text-lg md:text-xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto">
          A collection of moments that capture the essence of our journey and the joy of our engagement.
          Each image tells a part of our beautiful story.
        </p>

        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <Card key={index} className="gallery-item overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="relative w-full h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
