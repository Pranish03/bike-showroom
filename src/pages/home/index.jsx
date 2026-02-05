import { Hero } from "./Hero";
import { Card } from "../../components/Card";
import React from "react";

export const Home = () => {
  return (
    <main className="w-[1200px] mx-auto">
      <Hero />

      <section>
        <h2 className="text-3xl font-bold mb-10">Latest bikes</h2>

        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
          <Card image={"/bike1.png"} id={1} />
          <Card image={"/bike2.png"} id={2} />
          <Card image={"/bike1.png"} id={3} />
        </div>
      </section>
    </main>
  );
};
