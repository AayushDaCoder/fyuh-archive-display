import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white text-[#1a1a1a]">
      {/* Announcement Bar */}
      <div className="border-b border-[#e5e5e5] bg-[#3a3a3a] py-1.5 text-white">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.15em]">
          EXTENSION OF YOUR EXPRESSION
        </p>
      </div>

      {/* Main Header */}
      <div className="border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-[1600px] px-8">
          <div className="flex items-center justify-between py-3.5">
            {/* Logo */}
            <Link to="/" className="text-lg font-bold tracking-[0.2em]">
              FYUH
            </Link>

            {/* Center Navigation */}
            <nav className="flex gap-6 md:gap-12">
              <Link to="/" className="text-[10px] font-medium uppercase tracking-[0.15em] hover:opacity-60">
                HOME
              </Link>
              <Link to="/all-clothing" className="text-[10px] font-medium uppercase tracking-[0.15em] hover:opacity-60">
                ALL CLOTHING
              </Link>
              <Link to="/story" className="text-[10px] font-medium uppercase tracking-[0.15em] hover:opacity-60">
                STORY
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="text-[10px] font-medium uppercase tracking-[0.15em] hover:opacity-60">
                LOGIN
              </a>
              <button aria-label="Shopping bag" className="relative hover:opacity-60">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-red text-[9px] font-semibold text-white">
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
