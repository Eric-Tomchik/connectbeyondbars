import {
  Heart,
  Star,
  Quote,
  ArrowRight,
  Users,
  TrendingDown,
  Mail,
} from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Pen Pal Writer",
    location: "Portland, OR",
    quote:
      "I started writing Marcus 8 months ago, not sure what to expect. Now it's the highlight of my week when I get a reply. His perspective on life and gratitude for simple things has genuinely changed how I see the world. ConnectBeyond Bars made it safe and easy to get started.",
    rating: 5,
    duration: "8 months writing",
  },
  {
    name: "James R.",
    role: "Incarcerated Pen Pal",
    location: "Ohio State Facility",
    quote:
      "Getting that first letter was like a ray of light. Someone on the outside cared enough to write me. My pen pal and I talk about books, philosophy, our families. It gives me something positive to focus on and reminds me that I'm still connected to the world.",
    rating: 5,
    duration: "6 months receiving letters",
  },
  {
    name: "Elena K.",
    role: "Pen Pal Writer",
    location: "Austin, TX",
    quote:
      "As a college student studying criminal justice, I wanted to understand the system from the inside. Writing through ConnectBeyond Bars opened my eyes. The privacy protection gave my parents peace of mind, and the experience has shaped my career goals.",
    rating: 5,
    duration: "1 year writing",
  },
  {
    name: "Pastor David L.",
    role: "Church Group Leader",
    location: "Nashville, TN",
    quote:
      "Our church group signed up together. We each write to different individuals, and we share our experiences in our weekly meetings. It's become one of the most meaningful service projects we've ever done. The organizational plan made coordinating everything simple.",
    rating: 5,
    duration: "Coordinates 12 writers",
  },
  {
    name: "Michelle T.",
    role: "Family Member & Writer",
    location: "Chicago, IL",
    quote:
      "My brother is incarcerated, and through ConnectBeyond Bars I've connected with other writers who understand what families go through. The community aspect is incredible. I also started writing to someone at a different facility — it's healing for both of us.",
    rating: 5,
    duration: "4 months writing",
  },
  {
    name: "Robert P.",
    role: "Retired Teacher & Writer",
    location: "Denver, CO",
    quote:
      "After retiring, I wanted to use my time meaningfully. I now write to three pen pals regularly. We discuss books I send them through the bookstore feature, and I've been able to help two of them with their GED studies through our letters. Purpose in retirement, indeed.",
    rating: 5,
    duration: "10 months, 3 pen pals",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <Heart className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Real Stories, Real Impact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Success <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Hear from writers and incarcerated individuals whose lives have been
            changed through the power of pen pal connections.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-white">40%</div>
              <div className="text-surface-400 text-sm mt-1">
                Recidivism Reduction
              </div>
            </div>
            <div className="w-px h-12 bg-surface-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white">3x</div>
              <div className="text-surface-400 text-sm mt-1">
                Better Mental Health
              </div>
            </div>
            <div className="w-px h-12 bg-surface-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-surface-400 text-sm mt-1">
                Successful Reentry
              </div>
            </div>
            <div className="w-px h-12 bg-surface-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-surface-400 text-sm mt-1">
                Address Privacy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8 flex flex-col">
                <Quote className="w-8 h-8 text-brand-400/30 mb-4" />
                <p className="text-surface-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <div className="border-t border-surface-800/50 pt-4">
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-brand-400 text-xs">{t.role}</div>
                  <div className="text-surface-500 text-xs mt-0.5">
                    {t.location} · {t.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-20 border-t border-surface-800/50 bg-surface-900/30">
        <div className="section-container max-w-3xl text-center">
          <Mail className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your Story
          </h2>
          <p className="text-surface-400 text-lg mb-8 leading-relaxed">
            Has writing a pen pal changed your life? We&apos;d love to hear
            about your experience. Your story could inspire others to start
            their own pen pal journey.
          </p>
          <Link href="/contact" className="btn-primary">
            Tell Us Your Story
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-surface-800/50">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Own Story?
          </h2>
          <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
            Every letter is a lifeline. Every connection changes a life. Start
            writing today.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/auth/register" className="btn-primary">
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-2" />
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
