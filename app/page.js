"use client";
import { Hero } from "@/components/Hero";
import { Porto } from "@/components/Porto";
import { Study } from "@/components/Study";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="study" className="bg-sec">
        <Study />
      </section>
      <section id="portfolio">
        <Porto />
      </section>
    </>
  );
}
