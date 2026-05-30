"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../../convex/_generated/api";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const writer = useQuery(api.writers.me);
  const { signOut } = useAuthActions();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { href: "/profiles", label: "Browse Profiles" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Premium" },
    { href: "/safety", label: "Safety" },
  ];

  const resourceLinks = [
    { href: "/writing-guide", label: "Writing Guide" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/bookstore", label: "Bookstore" },
    { href: "/scam-awareness", label: "Scam Awareness" },
    { href: "/testimonials", label: "Success Stories" },
    { href: "/sponsor", label: "Sponsor" },
    { href: "/partners", label: "Partners" },
  ];

  const allMobileLinks = [
    ...mainLinks,
    { href: "/writing-guide", label: "Writing Guide" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/bookstore", label: "Bookstore" },
    { href: "/scam-awareness", label: "Scam Awareness" },
    { href: "/testimonials", label: "Success Stories" },
    { href: "/sponsor", label: "Sponsor" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
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
          <nav className="hidden md:flex items-center gap-5">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-surface-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 text-surface-300 hover:text-white transition-colors text-sm font-medium"
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 py-2 glass border border-surface-800/50 rounded-xl shadow-2xl animate-fade-in">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setResourcesOpen(false)}
                      className="block px-4 py-2 text-surface-300 hover:text-white hover:bg-surface-800/50 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-surface-800/50 mt-1 pt-1">
                    <Link
                      href="/contact"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-4 py-2 text-brand-400 hover:text-brand-300 hover:bg-surface-800/50 text-sm font-medium transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
          <div className="md:hidden py-4 border-t border-surface-800/50 animate-fade-in max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {allMobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-surface-300 hover:text-white transition-colors py-2.5 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-surface-800/50 mt-2 pt-2">
                {writer ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="text-surface-300 hover:text-white transition-colors py-2.5 text-sm font-medium flex items-center gap-2"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        void signOut();
                        setMobileOpen(false);
                      }}
                      className="text-left text-surface-400 hover:text-surface-200 transition-colors py-2.5 text-sm flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      onClick={() => setMobileOpen(false)}
                      className="text-surface-300 hover:text-white transition-colors py-2.5 text-sm font-medium block"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setMobileOpen(false)}
                      className="btn-primary text-sm py-2 px-4 text-center mt-2 block"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
