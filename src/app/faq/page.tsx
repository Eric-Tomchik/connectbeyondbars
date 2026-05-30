"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Mail,
  Shield,
  CreditCard,
  Users,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: React.ElementType;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "Getting Started",
    icon: Users,
    items: [
      {
        question: "How does ConnectBeyond Bars work?",
        answer:
          "ConnectBeyond Bars connects volunteer pen pals with incarcerated individuals through safe, managed correspondence. You browse verified profiles, choose someone to write to, compose your letter online, and we handle printing, mailing, and privacy protection. Your home address is never shared.",
      },
      {
        question: "Who can become a pen pal?",
        answer:
          "Anyone 18 years or older can sign up as a pen pal writer. We welcome people from all backgrounds — whether you're a student, retiree, faith community member, or simply someone who wants to make a difference through human connection.",
      },
      {
        question: "Is it safe to write an inmate?",
        answer:
          "Yes. Our Address Privacy Vault ensures your home address is never shared. All mail is routed through our secure PO Box, and every piece of correspondence is reviewed by our moderation team before delivery. You can also use a pen name and limit the personal information you share.",
      },
      {
        question: "How do I choose who to write to?",
        answer:
          "Browse our profiles page where you can filter by state, gender, age, interests, and correspondence goals (friendship, mentorship, faith-based, etc.). Read their bios to find someone whose interests and goals align with yours.",
      },
      {
        question: "How long does it take for a letter to arrive?",
        answer:
          "After your letter is reviewed and approved (typically within 24-48 hours), physical mail usually takes 5-10 business days to reach the facility. Digital responses through the platform are faster once the inmate replies.",
      },
    ],
  },
  {
    title: "Safety & Privacy",
    icon: Shield,
    items: [
      {
        question: "Will the inmate know my home address?",
        answer:
          "Absolutely not. All correspondence goes through our Address Privacy Vault. Letters are printed and mailed from our PO Box. The inmate never sees your address, phone number, or location — unless you voluntarily include it in a letter (which we strongly discourage).",
      },
      {
        question: "What if I feel uncomfortable with someone I'm writing?",
        answer:
          "You can stop correspondence at any time — no questions asked. Use the Report button on any profile to flag concerns, or email safety@connectbeyondbars.com. Our team investigates every report within 24 hours.",
      },
      {
        question: "Do you screen the letters?",
        answer:
          "Yes. All outgoing and incoming correspondence is reviewed by our moderation team. Letters containing threats, manipulation, requests for money, explicit content, or other violations are flagged and blocked. We also educate both parties on appropriate communication.",
      },
      {
        question: "Can I use a fake name?",
        answer:
          "You're welcome to use your first name only or a pen name. There's no requirement to share your full legal name, and many writers prefer to maintain some anonymity, especially early on.",
      },
    ],
  },
  {
    title: "Pricing & Subscriptions",
    icon: CreditCard,
    items: [
      {
        question: "How much does it cost?",
        answer:
          "We offer a Free plan that lets you browse all profiles and send up to 2 letters per month. Our Premium plan ($9.99/month) includes unlimited letters, advanced matching, priority processing, and an impact dashboard.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes, you can cancel your Premium subscription at any time. You'll retain access to Premium features until the end of your current billing period. No cancellation fees or penalties.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover) through our secure payment processor, Stripe. All transactions are encrypted.",
      },
      {
        question: "Is there a discount for organizations?",
        answer:
          "Yes! We offer custom pricing for churches, nonprofits, universities, and reentry organizations. Contact us at partners@connectbeyondbars.com for a tailored plan.",
      },
    ],
  },
  {
    title: "About the Profiles",
    icon: BookOpen,
    items: [
      {
        question: "How are inmate profiles verified?",
        answer:
          "Every profile is manually reviewed and cross-referenced with Department of Correction records. We verify identity, current facility, and publicly available offense information. Profiles receive verification badges once confirmed.",
      },
      {
        question: "Can I submit a profile for someone who is incarcerated?",
        answer:
          "Yes! Family members, chaplains, or case workers can submit a profile request on behalf of an incarcerated individual. Contact us at hello@connectbeyondbars.com with the individual's name, facility, and inmate ID, and we'll guide you through the process.",
      },
      {
        question: "Why do some profiles show offense categories?",
        answer:
          "Transparency is important for writer safety and informed decision-making. Offense categories are broad (e.g., 'non-violent,' 'drug-related') to provide context without sensationalizing. We believe in second chances while respecting writers' right to make informed choices.",
      },
      {
        question: "How often are profiles updated?",
        answer:
          "Profiles are reviewed and updated regularly. If an inmate is transferred, released, or their information changes, we update the profile as soon as we're notified. Families and facility staff can also request updates.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    icon: AlertTriangle,
    items: [
      {
        question: "I signed up but haven't received a verification email.",
        answer:
          "Check your spam/junk folder first. If you still don't see it, try signing in again — the system will resend the verification. If issues persist, contact support@connectbeyondbars.com.",
      },
      {
        question: "My letter was rejected — why?",
        answer:
          "Letters may be rejected if they contain personal address/phone information, requests for money, explicit content, or anything that could compromise safety. You'll receive an email explaining the reason, and you're welcome to revise and resubmit.",
      },
      {
        question: "I haven't received a reply. What should I do?",
        answer:
          "Physical mail can take time — allow 2-4 weeks for a response. Some inmates may not reply to every letter, or facility restrictions may cause delays. If it's been over a month, feel free to send a follow-up letter.",
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-surface-800/50 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-sm group-hover:text-brand-400 transition-colors pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-surface-500 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-brand-400" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="text-surface-400 text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <HelpCircle className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Frequently Asked Questions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            How Can We <span className="gradient-text">Help?</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about becoming a pen pal, safety,
            pricing, and more.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="section-container max-w-4xl space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-600/10 border border-brand-600/20 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-brand-400" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="card px-6">
                {section.items.map((item) => (
                  <FAQAccordion key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 border-t border-surface-800/50 bg-surface-900/30">
        <div className="section-container text-center">
          <Mail className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-surface-400 mb-6 max-w-md mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is happy to
            help.
          </p>
          <Link href="/contact" className="btn-primary">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
