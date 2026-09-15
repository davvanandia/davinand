"use client";

import { navLinks, siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        // ✅ Offset supaya "aktif" ketika section sudah melewati navbar
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/85 dark:bg-zinc-950/85 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
        >
          davina
          <span className="text-emerald-600 dark:text-emerald-400 font-mono">
            nd
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                      : "hover:text-zinc-950 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}