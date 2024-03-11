import BlogList from "@/components/BlogList";
import React from "react";

export default function Home() {
  return (
    <section className="container">
      <div className="w-full p-10 md:p-20 lg:p-40">
        <h1 className="text-4xl font-bold mb-8">
          Bienvenue sur notre page d'accueil
        </h1>
        <BlogList />
      </div>
    </section>
  );
}
