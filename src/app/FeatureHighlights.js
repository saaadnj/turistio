export default function FeatureHighlights() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Large Feature */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-lowest p-2 h-[600px]">
            <div className="relative h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                alt="stylized birds eye view of Madrid city layout with clean architectural lines and modern urban design"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6-VUK-C_phRFxeM0NbfErQpQ_ZBOfnYVs4kFrvT5YfidNp4sN7qXgWxAnoFgmReEfm_3Mbz0DxRBeYoTm3OOIhHKTJ_HeE1yt5RFSoam-Z218NVkBvNdhSasnEfflyRmzJMViisqMhjLmnMXRUCdyJXwmIW7RlhWl7ATioQjuMSvtdSv_zwOm7c7tF4Cba3zHIDtGF-4RdPgSrS1JWCaQvrxphKiaQ_oustTmTaFGFazcC5wWkB9fIso24Fj6zpI7AL-6OqkBL2CK"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-20 text-on-primary">
                <h3 className="font-headline text-5xl font-bold mb-6">
                  Interactive Cartography
                </h3>
                <p className="max-w-xl font-body text-secondary-fixed text-lg mb-10">
                  Precision-mapped attractions with real-time social layers. See
                  where the world is gathering across the Iberian landscape.
                </p>
                <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-md font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-primary hover:text-white transition-all">
                  Launch Map Experience
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-10">
            {/* Small Feature 1 */}
            <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-between flex-1 hover:shadow-2xl transition-all">
              <div>
                <span className="material-symbols-outlined text-primary text-6xl mb-10">
                  menu_book
                </span>
                <h3 className="font-headline text-3xl font-bold mb-6">
                  Travel Diaries
                </h3>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  Authored experiences by professional travelers and local
                  guides. Long-form inspiration for your next escape.
                </p>
              </div>
              <a
                className="font-label text-xs uppercase tracking-[0.3em] font-bold text-primary mt-12 inline-flex items-center gap-3 group"
                href="#"
              >
                Explore Stories
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            {/* Small Feature 2 */}
            <div className="bg-primary text-on-primary p-12 rounded-xl flex flex-col justify-between flex-1 hover:shadow-2xl transition-all">
              <div>
                <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-10">
                  group
                </span>
                <h3 className="font-headline text-3xl font-bold mb-6">
                  Global Community
                </h3>
                <p className="font-body opacity-80 text-lg leading-relaxed">
                  Connect with like-minded explorers. Share geolocated pins and
                  real-time recommendations.
                </p>
              </div>
              <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-md font-bold text-sm tracking-widest uppercase w-fit mt-12 hover:opacity-90 transition-all">
                Join The Tribe
              </button>
            </div>
          </div>
          {/* Map Preview Feature */}
          <div className="md:col-span-12 bg-surface-container-lowest rounded-xl p-16 flex flex-col lg:flex-row items-center gap-20 overflow-hidden border border-outline-variant/10">
            <div className="w-full lg:w-2/5">
              <h3 className="font-headline text-4xl font-bold mb-8">
                Spain at your Fingertips
              </h3>
              <p className="font-body text-on-surface-variant text-lg mb-10 leading-relaxed">
                Our minimalist map interface allows you to filter by experience
                type, elevation, and cultural density. Explore the peninsula
                like never before.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-5">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-base font-medium">
                    5,000+ Curated Pins
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-base font-medium">
                    Live Weather Integration
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-base font-medium">
                    Crowd Density Indicators
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-3/5 h-[500px] bg-surface-container rounded-2xl relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container to-surface"></div>
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-30"
                alt="minimalist topographic map of Spain with clean teal markers and soft gray terrain details"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdW-qOg2KqLUUOw3o4-XmCr8R7THRmbwlT7zI8KKJnWQDKxPzvRaVcKLLiwFDcJ2cYK-BPG5bL1ycxhJWXEAZraDdKATuhEDcJC6ygHvcytRcd1AX40h9RM0MZX75a1U_1xLN2QHoNh1-f9xNYZ7khGib5E2qU8f2524TomoxYZSsfySjoe5H9KZENoxeV6xNLg638x8ZuRK5tMrJTk06ymUFcsspWgigT0XKcDZfvd2o4AsO8-AjReiU-YIJzYk8aIHhb3FdBOSSv"
              />
              {/* Simulated Markers */}
              <div className="absolute top-[20%] left-[45%] group cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(0,51,60,0.8)]"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded text-[10px] font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Madrid
                </div>
              </div>
              <div className="absolute bottom-[20%] right-[30%] group cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(0,51,60,0.8)]"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded text-[10px] font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Granada
                </div>
              </div>
              <div className="absolute top-[40%] right-[15%] group cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(0,51,60,0.8)]"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded text-[10px] font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Valencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
