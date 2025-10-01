import { Search, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary-black text-white">
      {/* Announcement Bar */}
      <div className="bg-primary-black py-2">
        <p className="text-center text-[13px] font-medium uppercase tracking-wider">
          NEW DROP - NOW LIVE
        </p>
      </div>

      {/* Main Header */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold tracking-[0.125em]">
              FYUH
            </a>

            {/* Center Navigation */}
            <nav className="flex gap-10">
              <a href="#" className="nav-link text-sm font-medium uppercase tracking-wide hover:opacity-70">
                NEW IN
              </a>
              <a href="#" className="nav-link text-sm font-medium uppercase tracking-wide hover:opacity-70">
                APPAREL
              </a>
              <a href="#" className="nav-link text-sm font-medium uppercase tracking-wide hover:opacity-70">
                STORES
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <button aria-label="Search" className="hover:opacity-70">
                <Search className="h-5 w-5" />
              </button>
              <a href="#" className="text-sm font-medium uppercase tracking-wide hover:opacity-70">
                LOGIN
              </a>
              <button aria-label="Shopping bag" className="relative hover:opacity-70">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-red text-[10px] font-semibold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
