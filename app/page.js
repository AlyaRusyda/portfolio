"use client";
import { Hero } from "@/components/Hero";
import { Porto } from "@/components/Porto";
import { Study } from "@/components/Study";

export default function Home() {
  return (
    <>
      <section id="home" className="overflow-x-hidden">
        <Hero />
      </section>
      <section id="study" className="bg-sec overflow-x-hidden">
        <Study />
      </section>
      <section id="portfolio" className="overflow-x-hidden">
        <Porto />
      </section>
    </>
  );
}
