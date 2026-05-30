import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  UserCheck,
  Mail,
  Flag,
  BookOpen,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function SafetyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Your Safety Is Our Priority
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Safety &amp; <span className="gradient-text">Trust</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            ConnectBeyond Bars was built from the ground up with safety at its
            core. Here&apos;s everything we do to protect our writers, families,
            and the incarcerated individuals on our platform.
          </p>
        </div>
      </section>

      {/* Address Privacy Vault */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-brand-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Address Privacy Vault
                </h2>
              </div>
              <p className="text-surface-300 text-lg mb-6 leading-relaxed">
                Your home address is <strong className="text-white">never</strong>{" "}
                shared with inmates, facilities, or anyone else. Every piece of
                correspondence is routed through our secure PO Box system.
              </p>
              <ul className="space-y-4">
                {[
                  "Your physical address is never visible to any inmate",
                  "All mail is sent from and received at our PO Box",
                  "Digital replies are scanned and delivered through the platform",
                  "No inmate ever learns your location or identity unless you choose to share",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-6">
                How the Vault Works
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "You Write Online",
                    desc: "Compose your letter through our secure web platform",
                  },
                  {
                    step: "2",
                    title: "We Print & Mail",
                    desc: "Letter is printed and mailed from our PO Box — your address is never on the envelope",
                  },
                  {
                    step: "3",
                    title: "Inmate Replies to PO Box",
                    desc: "Reply letters come to our PO Box, not your home",
                  },
                  {
                    step: "4",
                    title: "You Read Digitally",
                    desc: "We scan the reply and deliver it to your secure inbox on the platform",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-600/20 flex items-center justify-center text-brand-400 text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {item.title}
                      </div>
                      <div className="text-surface-500 text-xs mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Grid */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Our Safety Measures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Verified Profiles",
                description:
                  "Every inmate profile is manually reviewed and cross-referenced with Department of Correction records. We verify identity, facility, and offense information.",
              },
              {
                icon: Eye,
                title: "Content Moderation",
                description:
                  "All correspondence is reviewed before delivery. Letters containing threats, manipulation, requests for money, or inappropriate content are flagged and blocked.",
              },
              {
                icon: Flag,
                title: "One-Click Reporting",
                description:
                  "See something concerning? Every profile has a Report button. Our team investigates every report within 24 hours and takes swift action.",
              },
              {
                icon: Shield,
                title: "18+ Age Verification",
                description:
                  "All writers must confirm they are 18 years or older during registration. We take extra precautions to protect minors.",
              },
              {
                icon: AlertTriangle,
                title: "Scam Prevention",
                description:
                  "Our moderation team is trained to identify romance scams, financial manipulation, and social engineering. We educate writers on red flags.",
              },
              {
                icon: Lock,
                title: "Data Encryption",
                description:
                  "All personal information is encrypted at rest and in transit. We never sell your data. Your privacy is protected by design.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips for Writers */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-brand-400" />
            <h2 className="text-3xl font-bold text-white">
              Safety Tips for Writers
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Never share your home address",
                description:
                  "Use our platform for all correspondence. Never include your personal address, phone number, or workplace in letters.",
              },
              {
                title: "Never send money",
                description:
                  "Legitimate pen pals do not need money from you. If someone asks for funds, gift cards, or financial help — report it immediately.",
              },
              {
                title: "Take it slow",
                description:
                  "Building trust takes time. Be cautious about sharing personal details early in the correspondence. It's okay to keep things light.",
              },
              {
                title: "Trust your instincts",
                description:
                  "If something feels off — overly flattering language, urgent requests, or pressure to communicate outside the platform — trust your gut and report it.",
              },
              {
                title: "Use a pen name if desired",
                description:
                  "You're welcome to use a first name only or a pen name. You don't have to share your full identity until you're comfortable.",
              },
              {
                title: "Report concerning behavior",
                description:
                  "Our team is here to help. If anything makes you uncomfortable, use the Report button or email safety@connectbeyondbars.com.",
              },
            ].map((tip, i) => (
              <div key={i} className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {tip.title}
                  </h3>
                  <p className="text-surface-400 text-sm mt-1 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <Heart className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Safety?
          </h2>
          <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re always happy to talk about how we keep our community safe.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
            <Link href="/scam-awareness" className="btn-secondary">
              Scam Awareness Guide →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
