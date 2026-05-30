import Link from "next/link";
import {
  Users,
  Building,
  Heart,
  BookOpen,
  Shield,
  CheckCircle,
  ArrowRight,
  Mail,
  Church,
  GraduationCap,
  Scale,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Church,
    title: "Faith-Based Organizations",
    description:
      "Churches, ministries, and faith communities running prison outreach programs. We provide tools for group coordination, shared dashboards, and bulk onboarding.",
    benefits: [
      "Group management dashboard",
      "Custom pricing for 10+ writers",
      "Dedicated account manager",
      "Faith-based matching preferences",
      "Quarterly impact reports for your congregation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Universities & Schools",
    description:
      "Criminal justice, social work, and psychology programs using pen pal correspondence as experiential learning. We support academic research partnerships.",
    benefits: [
      "Student group accounts",
      "Academic pricing",
      "Research data partnerships (anonymized)",
      "Curriculum integration support",
      "Guest speaker availability",
    ],
  },
  {
    icon: Building,
    title: "Nonprofits & Reentry Organizations",
    description:
      "Organizations focused on reducing recidivism, supporting reentry, and building community connections for incarcerated individuals.",
    benefits: [
      "Free or subsidized accounts for participants",
      "API access for program integration",
      "Co-branded outreach materials",
      "Joint grant applications",
      "Data sharing for impact measurement",
    ],
  },
  {
    icon: Scale,
    title: "Legal & Advocacy Groups",
    description:
      "Legal aid organizations, public defenders, and criminal justice reform advocates who want to connect their clients with community support.",
    benefits: [
      "Priority profile verification",
      "Secure referral pathways",
      "Compliance documentation",
      "Training materials for staff",
      "Advocacy resource library",
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <Users className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Partner With Us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Our <span className="gradient-text">Partners</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            We work with organizations across the country to expand access to
            meaningful pen pal connections. Whether you&apos;re a church,
            university, nonprofit, or advocacy group — we&apos;d love to
            partner with you.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Partnership Programs
          </h2>

          <div className="space-y-12">
            {partnerTypes.map((partner, i) => (
              <div
                key={partner.title}
                className="card p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center">
                      <partner.icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {partner.title}
                    </h3>
                  </div>
                  <p className="text-surface-400 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-surface-500 text-xs font-medium uppercase tracking-wider mb-4">
                    Partner Benefits
                  </h4>
                  <ul className="space-y-3">
                    {partner.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-surface-300 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Partner */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How to Get Started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Reach Out",
                description:
                  "Contact our partnerships team with information about your organization, your mission, and what you're looking for.",
              },
              {
                step: "2",
                title: "Customize",
                description:
                  "We'll work together to design a partnership that fits your organization's needs, goals, and budget.",
              },
              {
                step: "3",
                title: "Launch",
                description:
                  "Get onboarded with dedicated support, training materials, and a custom dashboard for your team.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600/20 flex items-center justify-center text-brand-400 text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center max-w-3xl">
          <Heart className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-surface-400 text-lg mb-8 leading-relaxed">
            Together, we can expand access to meaningful connections and make a
            real impact on recidivism, mental health, and community reentry.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:partners@connectbeyondbars.com"
              className="btn-primary"
            >
              <Mail className="w-4 h-4 mr-2" />
              partners@connectbeyondbars.com
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Form
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
