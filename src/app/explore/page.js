"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/Footer";

/* ─── Static mock data (replace with Prisma / API calls) ───────────────────── */
const CATEGORIES = [
  { key: "ALL",           label: "All",           icon: "travel_explore" },
  { key: "CULTURE",       label: "Culture",        icon: "account_balance" },
  { key: "NATURE",        label: "Nature",         icon: "forest" },
  { key: "BEACHES",       label: "Beaches",        icon: "beach_access" },
  { key: "RELIGION",      label: "Religion",       icon: "church" },
  { key: "ENTERTAINMENT", label: "Entertainment",  icon: "festival" },
  { key: "LIFESTYLE",     label: "Lifestyle",      icon: "local_cafe" },
];

const MOCK_ATTRACTIONS = [
  {
    id: 1,
    name: "La Alhambra",
    municipality: "Granada",
    region: "Andalucía",
    category: "CULTURE",
    rating: 4.9,
    reviewCount: 3241,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDocfGpjs8Rm6hnGEshbUjT3VpcsuGIS78_hg8I3QnFfEA17NpEiNdyLAasceYGLXyA1ggYpL7z8K7FlJV17T8_D-UT0e4yqKCedHwDCb3QhJuF87JLewaP09vi-143UlVy_qBg3qReUha-iIk9zI5xHZAtvQxkJi_OStQ2ST0sW312Ag1Gbh6t8WkiftEkgOy4HeR60TQm_AAGnMr8UBSK0Y0L1NnZB_CL0zAAyjwJFAzPJghrC5Dn9mKLpeQ8im5cDLinIW47erGz",
    description: "A UNESCO World Heritage palace and fortress complex. One of the finest examples of Moorish architecture in Europe.",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Sagrada Família",
    municipality: "Barcelona",
    region: "Cataluña",
    category: "RELIGION",
    rating: 4.8,
    reviewCount: 5820,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Fl_0dAMiKi-z_k1URHFwc6OX5W13peU9oJLkjwNOD6c2fOFCJIMN38NKSWck8YyM31OxlC6M9Fa84AkmvjkDWH67CH52lXVq48AE9dR7yNc40z8G-PfeVLROflswHApFQCCTMQawhW1RRiv0kH_7a0eYj_hTXul40WAgRXNiHtBB3yKrIIrScDqgrvEA_EUccpigwWkD3Hf2hNvEhPTepr-jh7Li2ydQLN86WS3y9Nb_qzLP7IkxtwTmJUsJv3h_YWzfRklF3yV0",
    description: "Gaudí's unfinished masterpiece — a basilica unlike anything else on earth, still under construction since 1882.",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Parque Nacional de Doñana",
    municipality: "Almonte",
    region: "Andalucía",
    category: "NATURE",
    rating: 4.7,
    reviewCount: 1102,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdhG78Se5aUEju-NHlM0aPMCiJyu7sr5btEUE1nvqO8gecBXG2kqbs3x2eJ1Wyf87rOztwnH46uqk8SCLaiOBHwwsPndtUBHOFOjHpO9n0wRvXWk9YLNW47nk5jkoWOoHZvRDuxf-KnPHi_0ygrNQoGSTPMjYHyeKmTX900JAWTchd19NtbcHIQmdrAtN8X8qWZ1iiVWwWfXtwqMFJ5Lb4qgzAk6NbXFKpS6z3nFDu_I1MZpYU_zBEFdlvk5UeZOk7hy5fepjVuq4E",
    description: "Europe's largest and most important wetland reserve — home to rare wildlife and sweeping Atlantic dune landscapes.",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Playa de La Concha",
    municipality: "San Sebastián",
    region: "País Vasco",
    category: "BEACHES",
    rating: 4.9,
    reviewCount: 2890,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6-VUK-C_phRFxeM0NbfErQpQ_ZBOfnYVs4kFrvT5YfidNp4sN7qXgWxAnoFgmReEfm_3Mbz0DxRBeYoTm3OOIhHKTJ_HeE1yt5RFSoam-Z218NVkBvNdhSasnEfflyRmzJMViisqMhjLmnMXRUCdyJXwmIW7RlhWl7ATioQjuMSvtdSv_zwOm7c7tF4Cba3zHIDtGF-4RdPgSrS1JWCaQvrxphKiaQ_oustTmTaFGFazcC5wWkB9fIso24Fj6zpI7AL-6OqkBL2CK",
    description: "Consistently ranked among Europe's finest urban beaches. A perfect crescent of sand sheltered by the city's old quarter.",
    isFeatured: false,
  },
  {
    id: 5,
    name: "Mercado de San Miguel",
    municipality: "Madrid",
    region: "Comunidad de Madrid",
    category: "LIFESTYLE",
    rating: 4.5,
    reviewCount: 4120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdW-qOg2KqLUUOw3o4-XmCr8R7THRmbwlT7zI8KKJnWQDKxPzvRaVcKLLiwFDcJ2cYK-BPG5bL1ycxhJWXEAZraDdKATuhEDcJC6ygHvcytRcd1AX40h9RM0MZX75a1U_1xLN2QHoNh1-f9xNYZ7khGib5E2qU8f2524TomoxYZSsfySjoe5H9KZENoxeV6xNLg638x8ZuRK5tMrJTk06ymUFcsspWgigT0XKcDZfvd2o4AsO8-AjReiU-YIJzYk8aIHhb3FdBOSSv",
    description: "Madrid's iconic iron-and-glass market hall, buzzing with tapas stalls, fine wines, and artisanal Spanish produce.",
    isFeatured: false,
  },
  {
    id: 6,
    name: "Feria de Abril",
    municipality: "Sevilla",
    region: "Andalucía",
    category: "ENTERTAINMENT",
    rating: 4.8,
    reviewCount: 1870,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdhG78Se5aUEju-NHlM0aPMCiJyu7sr5btEUE1nvqO8gecBXG2kqbs3x2eJ1Wyf87rOztwnH46uqk8SCLaiOBHwwsPndtUBHOFOjHpO9n0wRvXWk9YLNW47nk5jkoWOoHZvRDuxf-KnPHi_0ygrNQoGSTPMjYHyeKmTX900JAWTchd19NtbcHIQmdrAtN8X8qWZ1iiVWwWfXtwqMFJ5Lb4qgzAk6NbXFKpS6z3nFDu_I1MZpYU_zBEFdlvk5UeZOk7hy5fepjVuq4E",
    description: "Sevilla's legendary spring fair — flamenco, casetas, horse parades, and the full explosion of Andalusian culture.",
    isFeatured: false,
  },
];

const CATEGORY_COLORS = {
  CULTURE:       "bg-amber-50  text-amber-800  border-amber-200",
  NATURE:        "bg-green-50  text-green-800  border-green-200",
  BEACHES:       "bg-sky-50    text-sky-800    border-sky-200",
  RELIGION:      "bg-purple-50 text-purple-800 border-purple-200",
  ENTERTAINMENT: "bg-rose-50   text-rose-800   border-rose-200",
  LIFESTYLE:     "bg-orange-50 text-orange-800 border-orange-200",
};

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-headline text-2xl font-black text-primary">
          Turistio
        </a>
        <div className="flex items-center gap-3">
          <a
            href="/explore"
            className="font-label text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-0.5"
          >
            Explore
          </a>
          <span className="text-outline-variant mx-2">|</span>
          <a
            href="/login"
            className="font-label text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors px-4 py-2"
          >
            Log in
          </a>
          <a
            href="/register"
            className="editorial-gradient text-on-primary font-label text-sm font-bold uppercase tracking-widest px-6 py-2.5 rounded-md hover:opacity-90 transition-all"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-outlined text-base ${
            star <= Math.round(rating) ? "text-amber-400" : "text-outline-variant"
          }`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function AttractionCard({ attraction }) {
  const badge = CATEGORY_COLORS[attraction.category] ?? "bg-surface-container text-on-surface-variant border-outline-variant";
  const categoryLabel = CATEGORIES.find((c) => c.key === attraction.category)?.label ?? attraction.category;

  return (
    <article className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category badge */}
        <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded border ${badge}`}>
          {categoryLabel}
        </span>
        {attraction.isFeatured && (
          <span className="absolute top-4 right-4 editorial-gradient text-on-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-headline text-xl font-bold text-primary leading-tight">
            {attraction.name}
          </h3>
        </div>
        {/* Location */}
        <div className="flex items-center gap-1.5 text-on-surface-variant text-sm mb-4">
          <span className="material-symbols-outlined text-base">location_on</span>
          <span>{attraction.municipality}, {attraction.region}</span>
        </div>
        {/* Description */}
        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-1 line-clamp-3">
          {attraction.description}
        </p>
        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-outline-variant/10">
          <div className="flex items-center gap-3">
            <StarRating rating={attraction.rating} />
            <span className="text-sm font-bold text-primary">{attraction.rating}</span>
            <span className="text-xs text-on-surface-variant">({attraction.reviewCount.toLocaleString()})</span>
          </div>
          <a
            href={`/attractions/${attraction.id}`}
            className="flex items-center gap-1.5 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all"
          >
            View
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function MapTeaser() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/10 h-[220px] flex items-end">
      {/* Blurred map background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdW-qOg2KqLUUOw3o4-XmCr8R7THRmbwlT7zI8KKJnWQDKxPzvRaVcKLLiwFDcJ2cYK-BPG5bL1ycxhJWXEAZraDdKATuhEDcJC6ygHvcytRcd1AX40h9RM0MZX75a1U_1xLN2QHoNh1-f9xNYZ7khGib5E2qU8f2524TomoxYZSsfySjoe5H9KZENoxeV6xNLg638x8ZuRK5tMrJTk06ymUFcsspWgigT0XKcDZfvd2o4AsO8-AjReiU-YIJzYk8aIHhb3FdBOSSv"
          alt="Map preview"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>
      {/* Simulated pins */}
      {[
        { top: "28%", left: "44%", label: "Madrid" },
        { top: "55%", left: "28%", label: "Sevilla" },
        { top: "42%", left: "70%", label: "Barcelona" },
      ].map((pin) => (
        <div
          key={pin.label}
          className="absolute group cursor-pointer"
          style={{ top: pin.top, left: pin.left }}
        >
          <div className="w-3 h-3 bg-white rounded-full shadow-lg ring-2 ring-primary/40 relative z-10" />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-[9px] font-bold shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-primary">
            {pin.label}
          </div>
        </div>
      ))}
      {/* CTA overlay */}
      <div className="relative z-10 p-6 w-full flex items-center justify-between">
        <div>
          <p className="text-on-primary font-headline text-lg font-bold">Interactive Map</p>
          <p className="text-on-primary/70 text-xs mt-0.5">Explore 5,000+ geolocated attractions</p>
        </div>
        <a
          href="/map"
          className="bg-white text-primary font-label text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-md hover:bg-surface-container-low transition-colors flex items-center gap-2"
        >
          Open Map
          <span className="material-symbols-outlined text-sm">open_in_full</span>
        </a>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = useMemo(() => {
    let list = MOCK_ATTRACTIONS;

    if (activeCategory !== "ALL") {
      list = list.filter((a) => a.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.municipality.toLowerCase().includes(q) ||
          a.region.toLowerCase().includes(q)
      );
    }

    if (sortBy === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    } else if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [activeCategory, query, sortBy]);

  return (
    <>
      <Navbar />

      {/* ── Page header ─────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/10 pt-16 pb-12">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-bold">Explore</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="font-label text-xs uppercase tracking-[0.35em] text-on-surface-variant font-bold mb-4 block">
                Discover Spain
              </span>
              <h1 className="font-headline text-5xl md:text-6xl font-black text-primary leading-[0.95]">
                Explore <br />
                <span className="italic font-light">Attractions</span>
              </h1>
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl pointer-events-none">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name, city or region…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant/30 rounded-xl text-sm font-body text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main layout ─────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-12">
        <div className="flex flex-col xl:flex-row gap-10">

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="xl:w-72 shrink-0 space-y-8">
            {/* Categories */}
            <div>
              <h2 className="font-label text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-5">
                Category
              </h2>
              <ul className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <li key={cat.key}>
                    <button
                      onClick={() => setActiveCategory(cat.key)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-semibold transition-all text-left ${
                        activeCategory === cat.key
                          ? "bg-primary text-on-primary shadow-md"
                          : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={activeCategory === cat.key ? { fontVariationSettings: "'FILL' 1" } : {}}
                      >
                        {cat.icon}
                      </span>
                      {cat.label}
                      {activeCategory === cat.key && (
                        <span className="ml-auto bg-on-primary/20 text-on-primary text-xs font-bold px-2 py-0.5 rounded-full">
                          {filtered.length}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sort */}
            <div>
              <h2 className="font-label text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-5">
                Sort by
              </h2>
              <div className="space-y-1">
                {[
                  { key: "rating",  label: "Highest Rated",  icon: "star" },
                  { key: "reviews", label: "Most Reviewed",  icon: "reviews" },
                  { key: "name",    label: "Alphabetical",   icon: "sort_by_alpha" },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSortBy(opt.key)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-semibold transition-all text-left ${
                      sortBy === opt.key
                        ? "bg-surface-container text-primary font-bold"
                        : "text-on-surface-variant hover:bg-surface-container-low"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{opt.icon}</span>
                    {opt.label}
                    {sortBy === opt.key && (
                      <span className="material-symbols-outlined text-base ml-auto text-primary">
                        check
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Map teaser */}
            <div>
              <h2 className="font-label text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-5">
                Map View
              </h2>
              <MapTeaser />
            </div>

            {/* Sign-up nudge */}
            <div className="bg-primary rounded-xl p-7 text-on-primary">
              <span className="material-symbols-outlined text-3xl mb-4 block opacity-80">
                bookmark_add
              </span>
              <p className="font-headline text-xl font-bold mb-2">Save favourites</p>
              <p className="text-sm opacity-70 mb-6 leading-relaxed">
                Create a free account to bookmark attractions and build your own travel lists.
              </p>
              <a
                href="/register"
                className="bg-white text-primary font-label text-xs font-bold uppercase tracking-[0.2em] px-5 py-3 rounded-md w-full block text-center hover:bg-surface-container-low transition-colors"
              >
                Join Free
              </a>
            </div>
          </aside>

          {/* ── Results ─────────────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-body text-sm text-on-surface-variant">
                Showing{" "}
                <span className="font-bold text-primary">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "attraction" : "attractions"}
                {activeCategory !== "ALL" && (
                  <> in{" "}
                    <span className="font-bold text-primary">
                      {CATEGORIES.find((c) => c.key === activeCategory)?.label}
                    </span>
                  </>
                )}
              </p>

              {/* Active filters */}
              <div className="flex items-center gap-2">
                {activeCategory !== "ALL" && (
                  <button
                    onClick={() => setActiveCategory("ALL")}
                    className="flex items-center gap-1.5 text-xs font-bold bg-primary-container text-on-primary-container px-3 py-1.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    {CATEGORIES.find((c) => c.key === activeCategory)?.label}
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                )}
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="flex items-center gap-1.5 text-xs font-bold bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    "{query}"
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                )}
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((attraction) => (
                  <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <span className="material-symbols-outlined text-7xl text-outline-variant mb-6">
                  travel_explore
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                  No attractions found
                </h3>
                <p className="text-on-surface-variant max-w-sm mb-8">
                  Try a different search term or category filter.
                </p>
                <button
                  onClick={() => { setQuery(""); setActiveCategory("ALL"); }}
                  className="editorial-gradient text-on-primary font-label text-sm font-bold uppercase tracking-widest px-8 py-3 rounded-md hover:opacity-90 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination placeholder */}
            {filtered.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-16 pt-10 border-t border-outline-variant/10">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                      n === 1
                        ? "editorial-gradient text-on-primary shadow-md"
                        : "border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <span className="text-on-surface-variant text-sm px-2">…</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}