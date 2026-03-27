"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HierarchySection() {
  const [data, setData] = useState({
    regions: [],
    provinces: [],
    municipalitiesTotal: 0,
    attractionsTotal: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [regionsRes, provincesRes, municipalitiesRes, attractionsRes] =
          await Promise.all([
            axios.get("http://localhost:4000/api/regions"),
            axios.get("http://localhost:4000/api/provinces"),
            axios.get("http://localhost:4000/api/municipalities?pageSize=1"),
            axios.get("http://localhost:4000/api/attractions?pageSize=1"),
          ]);
        setData({
          regions: regionsRes.data.data || [],
          provinces: provincesRes.data.data || [],
          municipalitiesTotal: municipalitiesRes.data.total || 0,
          attractionsTotal: attractionsRes.data.total || 0,
        });
      } catch (error) {
        // Optionally handle error
        setData({
          regions: [],
          provinces: [],
          municipalitiesTotal: 0,
          attractionsTotal: 0,
        });
      }
    }
    fetchData();
  }, []);

  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-5xl text-primary font-bold mb-6">
              The Architecture of Travel
            </h2>
            <p className="font-body text-xl text-on-surface-variant">
              Navigating the rich tapestry of Spanish administration and
              heritage from regional scale to hidden gems.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="h-1.5 w-24 bg-primary"></span>
            <span className="h-1.5 w-8 bg-outline-variant"></span>
            <span className="h-1.5 w-8 bg-outline-variant"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface-container-lowest p-12 border border-outline-variant/10 hover:shadow-xl transition-all group cursor-pointer">
            <span
              className="material-symbols-outlined text-5xl text-primary mb-10 block group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              travel_explore
            </span>
            <h3 className="font-headline text-2xl font-bold mb-3">Regions</h3>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">
              The Autonomies
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {data.regions.length} autonomous communities with distinct
              cultural identities.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-12 border border-outline-variant/10 hover:shadow-xl transition-all group cursor-pointer">
            <span
              className="material-symbols-outlined text-5xl text-primary mb-10 block group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              location_city
            </span>
            <h3 className="font-headline text-2xl font-bold mb-3">Provinces</h3>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">
              Cultural Districts
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {data.provinces.length} unique provinces defining the
              administrative landscape.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-12 border border-outline-variant/10 hover:shadow-xl transition-all group cursor-pointer">
            <span
              className="material-symbols-outlined text-5xl text-primary mb-10 block group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              holiday_village
            </span>
            <h3 className="font-headline text-2xl font-bold mb-3">
              Municipalities
            </h3>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">
              Local Heritage
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {data.municipalitiesTotal.toLocaleString()} municipalities, from
              vibrant cities to quiet hamlets.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-12 border border-outline-variant/10 hover:shadow-xl transition-all group cursor-pointer">
            <span
              className="material-symbols-outlined text-5xl text-primary mb-10 block group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              account_balance
            </span>
            <h3 className="font-headline text-2xl font-bold mb-3">
              Attractions
            </h3>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">
              Points of Interest
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {data.attractionsTotal.toLocaleString()} curated landmarks,
              museums, and natural wonders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
