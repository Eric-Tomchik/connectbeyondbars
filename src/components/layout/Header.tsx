"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../../convex/_generated/api";
import {
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  Shield,
} from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const writer = useQuery(api.writers.me);
  const { signOut } = useAuthActions();

  const navLinks = [
    { href: "/profiles", label: "Browse Profiles" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Premium" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-surface-800/50">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
              ConnectBeyond<span className="text-brand-400">Bars</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-surface-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {writer ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1.5 text-surface-300 hover:text-white transition-colors text-sm font-medium"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={() => void signOut()}
                  className="flex items-center gap-1.5 text-surface-400 hover:text-surface-200 transition-colors text-sm"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="text-surface-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link href="/auth/register" className="btn-primary text-sm py-2 px-4">
                  Get Started
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-surface-300 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-surface-800/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-surface-300 hover:text-white transition-colors py-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {writer ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="text-surface-300 hover:text-white transition-colors py-2 text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      void signOut();
                      setMobileOpen(false);
                    }}
                    className="text-left text-surface-400 hover:text-surface-200 transition-colors py-2 text-sm"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileOpen(false)}
                    className="text-surface-300 hover:text-white transition-colors py-2 text-sm font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary text-sm py-2 px-4 text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
