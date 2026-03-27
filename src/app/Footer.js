export default function Footer() {
  return (
    <footer className="w-full border-t border-[#edeeef] dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 py-20">
      <div className="w-full px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-['Noto_Serif'] font-black text-[#00333c] block mb-8">
              Turistio
            </span>
            <p className="font-body text-sm text-slate-500 leading-relaxed max-w-xs">
              The premier geolocated editorial platform for discovering the
              cultural and geographic richness of Spain.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8">
              Platform
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Interactive Map
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Travel Diaries
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Community Pins
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Pro Accounts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8">
              Company
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8">
              Connect
            </h5>
            <div className="flex gap-4 mb-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">
                  alternate_email
                </span>
              </button>
            </div>
            <p className="text-xs text-slate-400">
              © 2024 Turistio. All rights reserved.
            </p>
          </div>
        </div>
        <div className="border-t border-outline-variant/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-10">
            <a
              className="text-xs font-medium text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-medium text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs font-medium text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              Cookies Settings
            </a>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-slate-400 uppercase tracking-[0.2em]">
            The Editorial Voyager
          </p>
        </div>
      </div>
    </footer>
  );
}
