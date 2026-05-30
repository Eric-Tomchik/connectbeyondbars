import Link from "next/link";
import { Heart, Mail, Shield, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-surface-800/50 bg-surface-950">
      <div className="section-container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="text-lg font-bold text-white">
                ConnectBeyond<span className="text-brand-400">Bars</span>
              </span>
            </Link>
            <p className="text-surface-400 text-sm leading-relaxed">
              Safe, meaningful connections between incarcerated individuals and
              volunteer pen pals. Reducing recidivism through human connection.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/profiles", label: "Browse Profiles" },
                { href: "/pricing", label: "Premium" },
                { href: "/auth/register", label: "Become a Pen Pal" },
                { href: "/about", label: "Our Mission" },
                { href: "/testimonials", label: "Success Stories" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/writing-guide", label: "Writing Guide" },
                { href: "/faq", label: "FAQ" },
                { href: "/bookstore", label: "Bookstore" },
                { href: "/scam-awareness", label: "Scam Awareness" },
                { href: "/sponsor", label: "Sponsor a Connection" },
                { href: "/partners", label: "Partners" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Trust */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Safety
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/safety", label: "Safety & Trust" },
                { href: "/scam-awareness", label: "Scam Awareness" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 text-surface-400 text-sm pt-2">
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                Address Privacy Vault
              </li>
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                Verified Profiles
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@connectbeyondbars.com"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  hello@connectbeyondbars.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-3 mt-6 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/acceptable-use", label: "Acceptable Use" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-surface-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-500 text-xs">
            &copy; {new Date().getFullYear()} ConnectBeyond Bars. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-surface-500 text-xs">
            <Link href="/terms" className="hover:text-surface-300 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-surface-300 transition-colors">
              Privacy
            </Link>
            <Link href="/acceptable-use" className="hover:text-surface-300 transition-colors">
              Acceptable Use
            </Link>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-400 mx-0.5" /> for
              human connection
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
