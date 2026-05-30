import {
  Heart,
  Shield,
  Users,
  TrendingDown,
  Mail,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            ConnectBeyond Bars exists to reduce recidivism and restore dignity
            through meaningful human connection. We believe that everyone
            deserves a second chance — and that connection is the first step
            toward successful reentry.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Pen Pals Matter
              </h2>
              <p className="text-surface-300 leading-relaxed mb-6">
                The United States incarcerates more people than any other nation —
                over 1.9 million. Research consistently shows that maintaining
                social connections during incarceration is one of the strongest
                predictors of successful reentry and reduced recidivism.
              </p>
              <p className="text-surface-300 leading-relaxed mb-6">
                Yet many incarcerated individuals have no outside contacts. They
                lose family ties, community bonds, and the social skills needed to
                rebuild their lives after release.
              </p>
              <p className="text-surface-300 leading-relaxed">
                Pen pal programs bridge this gap. A simple letter can provide hope,
                motivation, and a window to the outside world that makes
                rehabilitation possible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingDown, stat: "40%", label: "Lower recidivism with social bonds" },
                { icon: Users, stat: "1.9M+", label: "Incarcerated individuals in the US" },
                { icon: Heart, stat: "3x", label: "Better mental health outcomes" },
                { icon: Mail, stat: "85%", label: "Successful reentry with support" },
              ].map((item) => (
                <div key={item.label} className="card p-5 text-center">
                  <item.icon className="w-7 h-7 text-brand-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{item.stat}</div>
                  <div className="text-surface-500 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description:
                  "Your home address is never shared. Every letter is routed through our secure Address Privacy Vault. We take writer safety seriously.",
              },
              {
                icon: Target,
                title: "Verified Profiles",
                description:
                  "Every inmate profile is manually reviewed and verified. We work with Departments of Correction to ensure accuracy and safety.",
              },
              {
                icon: Lightbulb,
                title: "Impact Focused",
                description:
                  "We're not just a listing site. We track outcomes, measure impact, and continuously improve our matching and safety systems.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Dignity",
                description: "Every person, regardless of their circumstances, deserves to be treated with respect and compassion.",
              },
              {
                title: "Safety",
                description: "Writer safety is non-negotiable. Our Address Privacy Vault, content moderation, and verification systems exist to protect you.",
              },
              {
                title: "Impact",
                description: "We measure our success by lives changed — reduced recidivism, successful reentry, and lasting human connections.",
              },
              {
                title: "Transparency",
                description: "Simple pricing, clear policies, and honest communication. No hidden fees, no dark patterns, no surprises.",
              },
            ].map((value, i) => (
              <div key={value.title} className="card p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-600/20 flex items-center justify-center text-brand-400 font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">
                    {value.description}
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
            Join our community of volunteer pen pals and help change lives
            through the power of connection.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/auth/register" className="btn-primary">
              Create Free Account
            </Link>
            <Link href="/profiles" className="btn-secondary">
              Browse Profiles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
