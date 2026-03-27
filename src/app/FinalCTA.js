export default function FinalCTA() {
  return (
    <section className="py-48 bg-surface-container-highest flex justify-center text-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          alt="abstract architectural patterns"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6-VUK-C_phRFxeM0NbfErQpQ_ZBOfnYVs4kFrvT5YfidNp4sN7qXgWxAnoFgmReEfm_3Mbz0DxRBeYoTm3OOIhHKTJ_HeE1yt5RFSoam-Z218NVkBvNdhSasnEfflyRmzJMViisqMhjLmnMXRUCdyJXwmIW7RlhWl7ATioQjuMSvtdSv_zwOm7c7tF4Cba3zHIDtGF-4RdPgSrS1JWCaQvrxphKiaQ_oustTmTaFGFazcC5wWkB9fIso24Fj6zpI7AL-6OqkBL2CK"
        />
      </div>
      <div className="max-w-4xl px-10 relative z-10">
        <h2 className="font-headline text-7xl text-primary font-black mb-10 leading-tight">
          Ready to Start Your{" "}
          <span className="italic font-light">Adventure?</span>
        </h2>
        <p className="font-body text-2xl text-on-surface-variant mb-16 max-w-2xl mx-auto">
          Join thousands of editorial travelers uncovering the hidden narratives
          of Spain. Your next diary entry starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button className="editorial-gradient text-on-primary px-16 py-6 rounded-md font-bold tracking-[0.2em] uppercase text-sm shadow-2xl hover:scale-105 transition-all">
            Create Free Account
          </button>
          <button className="bg-surface-container-lowest text-primary px-16 py-6 rounded-md font-bold tracking-[0.2em] uppercase text-sm border border-outline-variant/50 hover:bg-surface-container-low transition-all">
            Download The App
          </button>
        </div>
      </div>
    </section>
  );
}
