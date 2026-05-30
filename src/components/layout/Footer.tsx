import Link from "next/link";
import { Heart, Mail, Shield, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-surface-800/50 bg-surface-950">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
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
              <li>
                <Link
                  href="/profiles"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  Browse Profiles
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  Premium Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  Become a Pen Pal
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Safety & Trust
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                Address Privacy Vault
              </li>
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                Verified Profiles
              </li>
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                Managed Correspondence
              </li>
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                Content Moderation
              </li>
            </ul>
          </div>

          {/* Contact */}
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
                  href="/about"
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-surface-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-500 text-xs">
            &copy; {new Date().getFullYear()} ConnectBeyond Bars. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-surface-500 text-xs">
            Built with <Heart className="w-3 h-3 text-red-400 mx-0.5" /> for
            human connection
          </div>
        </div>
      </div>
    </footer>
  );
}
