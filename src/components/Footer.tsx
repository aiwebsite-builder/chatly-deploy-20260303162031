import React from "react";
import { cn } from "../lib/utils";
import Separator from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-12 border-t border-[var(--border)] text-[var(--muted-foreground)] text-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <Separator className="mb-8 bg-[var(--border)]/50" />
        <p className="text-sm font-medium mb-4">
          With Love,
          <br />
          Micaela & Tim
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Micaela & Tim. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with ❤️ for a lifetime of happiness.
        </p>
      </div>
    </footer>
  );
}
