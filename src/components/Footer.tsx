import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1600px] px-8 py-12">
        <div className="grid grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
              ABOUT
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  OUR STORY
                </a>
              </li>
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  SUSTAINABILITY
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Help */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
              HELP
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  SHIPPING
                </a>
              </li>
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  RETURNS
                </a>
              </li>
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
              LEGAL
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
                  TERMS OF SERVICE
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
              FOLLOW US
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-foreground hover:opacity-60 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-foreground hover:opacity-60 transition-opacity"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-foreground hover:opacity-60 transition-opacity"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
            © 2025 FYUH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
