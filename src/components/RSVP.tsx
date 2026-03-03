import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";
import Button from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
gsap.registerPlugin(ScrollTrigger);

export default function RSVP() {
  const rsvpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rsvp-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".rsvp-section",
          start: "top 80%",
        },
      });

      gsap.from(".rsvp-description", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".rsvp-section",
          start: "top 75%",
        },
      });

      gsap.from(".rsvp-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: ".rsvp-card",
          start: "top 70%",
        },
      });
    }, rsvpRef);

    return () => ctx.revert();
  }, []);

  const handleRSVPClick = () => {
    alert("Thank you for your interest! RSVP form coming soon for Micaela & Tim's wedding.");
  };

  return (
    <section id="rsvp" ref={rsvpRef} className="rsvp-section py-20 md:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="rsvp-title text-center font-[var(--font-heading)] text-4xl md:text-5xl font-[var(--heading-weight)] text-[var(--foreground)] mb-8 md:mb-12">
          RSVP
        </h2>
        <p className="rsvp-description text-center text-lg md:text-xl text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto">
          We would be honored to have you celebrate with us. Please let us know if you can make it by [Date TBD, e.g., March 1, 2027].
        </p>

        <Card className="rsvp-card p-6 md:p-8 text-center max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-[var(--primary)] mb-4">
              Join Our Celebration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-[var(--foreground)]/80 text-lg">
              Kindly click the button below to confirm your attendance.
            </p>
            <Button
              className="px-8 py-3 text-lg font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              onClick={handleRSVPClick}
            >
              RSVP Now
            </Button>
            <p className="text-[var(--muted-foreground)] text-sm mt-4">
              We can't wait to share our special day with you!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
