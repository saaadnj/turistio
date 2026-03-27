export default function CommunityFeed() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="flex items-center justify-between mb-24">
          <h2 className="font-headline text-5xl text-primary font-bold">
            Latest Adventures
          </h2>
          <button className="font-label text-sm font-bold uppercase tracking-[0.3em] text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-2">
            View All Global Activity
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Feed Item 1 */}
          <div className="space-y-8 group">
            <div className="aspect-[3/4] rounded-xl overflow-hidden relative shadow-2xl">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]"
                alt="vibrant street photography of Seville old town at dusk with warm street lanterns and cobblestone texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdhG78Se5aUEju-NHlM0aPMCiJyu7sr5btEUE1nvqO8gecBXG2kqbs3x2eJ1Wyf87rOztwnH46uqk8SCLaiOBHwwsPndtUBHOFOjHpO9n0wRvXWk9YLNW47nk5jkoWOoHZvRDuxf-KnPHi_0ygrNQoGSTPMjYHyeKmTX900JAWTchd19NtbcHIQmdrAtN8X8qWZ1iiVWwWfXtwqMFJ5Lb4qgzAk6NbXFKpS6z3nFDu_I1MZpYU_zBEFdlvk5UeZOk7hy5fepjVuq4E"
              />
              <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Sevilla
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-surface-container overflow-hidden ring-2 ring-primary/10">
                  <img
                    className="w-full h-full object-cover"
                    alt="portrait of a young female traveler with sun hat and smiling expression"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1VoYuq3UhV4G-Ac8F9atJnRGgI2OWAqyCC9QFeLlvc49Crd2AFJ20gIrUh0_bfrbFv4gHFWM8nple16G1GeS61taT_Mu1i-B4itldIq2vOLcZStBr4pEAsxxJohboMGfqAjPa-tEx5tlqBEaRZMO_5SZsbzAOVoHHtAHcX9WwJ9HGigUd6QQE9NnlVpOs1cwewQSRZCWK92Ms5ebMUrr0OE9yBnG_qGUFnOyhXbrPmJKOjvab6WWAW6zSmGuzoM_o6rAo8EJGjBz_"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Elena Rodriguez</h4>
                  <p className="text-sm text-on-surface-variant">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    favorite
                  </span>{" "}
                  1.2k
                </button>
                <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    chat_bubble
                  </span>{" "}
                  48
                </button>
              </div>
            </div>
            <p className="font-body text-base leading-relaxed text-on-surface-variant">
              "Lost in the Santa Cruz district. The scent of jasmine is
              everywhere this time of year. Found a tiny café that only serves
              local orange-infused pastries..."
            </p>
          </div>
          {/* Feed Item 2 */}
          <div className="space-y-8 group">
            <div className="aspect-[3/4] rounded-xl overflow-hidden relative shadow-2xl">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]"
                alt="atmospheric view of the Alhambra palace in Granada with Sierra Nevada mountains in the background under clear blue sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDocfGpjs8Rm6hnGEshbUjT3VpcsuGIS78_hg8I3QnFfEA17NpEiNdyLAasceYGLXyA1ggYpL7z8K7FlJV17T8_D-UT0e4yqKCedHwDCb3QhJuF87JLewaP09vi-143UlVy_qBg3qReUha-iIk9zI5xHZAtvQxkJi_OStQ2ST0sW312Ag1Gbh6t8WkiftEkgOy4HeR60TQm_AAGnMr8UBSK0Y0L1NnZB_CL0zAAyjwJFAzPJghrC5Dn9mKLpeQ8im5cDLinIW47erGz"
              />
              <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Granada
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-surface-container overflow-hidden ring-2 ring-primary/10">
                  <img
                    className="w-full h-full object-cover"
                    alt="portrait of a man with glasses and travel backpack looking at a map"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3GliyCuqH-CiUo970b-q865ksxFEMcZw7oq0uq7JCJDoga3YoseiUgzRTme3x1nZrO0OJzo7ukmy8UtLoVHn3vwyYi4tphzU8auHzEAIvJ8BGPrvPNy0viAuQ5Ty_dgOlKam4kDnXx7h2CxBjoKiu6V8hQRrqwQohfjSBRDCwi4cYws8gwMTXo2qlK0iIaYG-NuvXghVNuVkUBsfsZ39uosVnwySoVHOra6IelaaIMW8e2tbeD1UUa_6cFWGvhNYTJlnVypsYDMW"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Marcus Thorne</h4>
                  <p className="text-sm text-on-surface-variant">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    favorite
                  </span>{" "}
                  856
                </button>
                <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    chat_bubble
                  </span>{" "}
                  12
                </button>
              </div>
            </div>
            <p className="font-body text-base leading-relaxed text-on-surface-variant">
              "Woke up at 5 AM to catch the first light hitting the Sierra
              Nevada. The contrast between the Moorish architecture and the snow
              caps is unreal."
            </p>
          </div>
          {/* Feed Item 3 */}
          <div className="space-y-8 group">
            <div className="aspect-[3/4] rounded-xl overflow-hidden relative shadow-2xl">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]"
                alt="architectural detail of Sagrada Familia in Barcelona with intricate stone carvings and stained glass reflections"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Fl_0dAMiKi-z_k1URHFwc6OX5W13peU9oJLkjwNOD6c2fOFCJIMN38NKSWck8YyM31OxlC6M9Fa84AkmvjkDWH67CH52lXVq48AE9dR7yNc40z8G-PfeVLROflswHApFQCCTMQawhW1RRiv0kH_7a0eYj_hTXul40WAgRXNiHtBB3yKrIIrScDqgrvEA_EUccpigwWkD3Hf2hNvEhPTepr-jh7Li2ydQLN86WS3y9Nb_qzLP7IkxtwTmJUsJv3h_YWzfRklF3yV0"
              />
              <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Barcelona
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-surface-container overflow-hidden ring-2 ring-primary/10">
                  <img
                    className="w-full h-full object-cover"
                    alt="smiling woman with short hair holding a professional camera in a sunlit city square"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_G6npKuGR9v29vpiXhqgt22ZOXVX4i18yvU7FV2GkVKTz0N_pbmoW-FtFJCqhD0-0DIlLYOrAYZB5jcDxfJ6IuGdLtLv55_V9HCdSTfxuKtEx6nR_1Pe_dpNtg5kc9eUp1tp-kFpNWZGT6khsz2yXQTBmYPP3OV6_CnwwPRotvqpSdR_uGxrVzbJ3rC4L8VLwmrqMY5_IVMiUqXzd5VrkAI8uByIBtbBhhhmfmRkfW32NR5fG9TIZpIgM1YeR4TL9K2mpUkKAU45"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sophie Chen</h4>
                  <p className="text-sm text-on-surface-variant">3 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    favorite
                  </span>{" "}
                  2.4k
                </button>
                <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    chat_bubble
                  </span>{" "}
                  104
                </button>
              </div>
            </div>
            <p className="font-body text-base leading-relaxed text-on-surface-variant">
              "Finally crossed Gaudí off my bucket list. Pro tip: book the late
              afternoon slot for the best light through the stained glass
              windows."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
