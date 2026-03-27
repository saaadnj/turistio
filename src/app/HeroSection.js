import React from "react";

import axios from "axios";

export default async function HeroSection() {
  // Example: Fetch hero data from your API (replace with your actual endpoint)
  // const res = await axios.get("http://localhost:4000/api/hero");
  // const heroData = res.data;
  // For now, just use static fallback data:
  const heroData = {
    backgroundImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP7LuP24ZbK8oUZAFO-LOc-vw9QKMtGEI1OkWucgFST0neg5IWHX81tkbXZAfxlQi6UsaR0PCsP31UHUZ3lgG2SbInwzZNLuEtzv_zW5xdjWs-i1F-l0BVu0WA02LGPp0F85BTwaXlX0JAmkLzLAeeVvNVRJhl7oGF3LxZ_H9WaWe9mK50mWQW12YfGbd3yfDXYrMZmSYzZb0Wn5KiIO5oQTfUEEDRGK-v3b5Fo3iM1lgAbtjjXTr-MI4mRnNPvMyUoZFfaJqfbR_6",
    tagline: "Iberian Wanderlust",
    headline: (
      <>
        Discover the <br /> <span className="italic font-light">Essence</span>{" "}
        of Spain
      </>
    ),
    description:
      "A geolocated catalog and social network for the modern traveler. Experience the soul of the peninsula through curated journeys.",
    cta1: "Explore Destinations",
    cta2: "Join the Community",
  };

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 z-0 hero-vignette">
        <img
          className="w-full h-full object-cover"
          alt={heroData.tagline}
          src={heroData.backgroundImage}
        />
      </div>
      <div className="container mx-auto px-10 relative z-10 max-w-[1440px]">
        <div className="max-w-4xl">
          <span className="font-label text-base uppercase tracking-[0.4em] text-primary mb-8 block font-bold">
            {heroData.tagline}
          </span>
          <h1 className="font-headline text-7xl md:text-[120px] text-primary leading-[0.9] mb-10 font-black">
            {heroData.headline}
          </h1>
          <p className="font-body text-2xl text-on-surface-variant max-w-2xl mb-14 leading-relaxed">
            {heroData.description}
          </p>
          <div className="flex flex-wrap gap-8">
            <button className="editorial-gradient text-on-primary px-12 py-5 rounded-md font-bold tracking-widest uppercase text-sm shadow-2xl hover:opacity-90 transition-all active:scale-95">
              {heroData.cta1}
            </button>
            <button className="border-b-2 border-primary text-primary px-6 py-5 font-bold tracking-widest uppercase text-sm hover:bg-surface-container-low transition-all">
              {heroData.cta2}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
