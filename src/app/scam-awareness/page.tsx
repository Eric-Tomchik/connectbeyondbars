import {
  AlertTriangle,
  Shield,
  DollarSign,
  Heart,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  Flag,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function ScamAwarenessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">
              Stay Informed, Stay Safe
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Scam <span className="gradient-text">Awareness</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            While the vast majority of pen pal connections are genuine and
            positive, it&apos;s important to recognize warning signs. Knowledge
            is your best protection.
          </p>
        </div>
      </section>

      {/* Common Scam Types */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Common Scam Types
          </h2>
          <p className="text-surface-400 text-center mb-16 max-w-2xl mx-auto">
            Being aware of these patterns helps you stay protected
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Romance Scams",
                color: "text-red-400",
                bgColor: "bg-red-500/10 border-red-500/20",
                description:
                  "The person quickly declares love or romantic interest, creates an intense emotional bond, and eventually asks for money, gifts, or favors. They may claim to need funds for legal fees, commissary, or \"release costs.\"",
                signs: [
                  "Excessive flattery or declarations of love very early on",
                  "Requests to send money or gift cards",
                  "Claims of needing money for lawyers or release",
                  "Pressure to move communication off the platform",
                ],
              },
              {
                icon: DollarSign,
                title: "Financial Manipulation",
                color: "text-amber-400",
                bgColor: "bg-amber-500/10 border-amber-500/20",
                description:
                  "Requests for money disguised as emergencies, investment opportunities, or help with basic needs. The person may fabricate situations to create urgency and guilt.",
                signs: [
                  "\"Emergency\" situations requiring immediate funds",
                  "Requests for commissary money or phone credits",
                  "Promises to pay you back \"when released\"",
                  "Guilt trips about their living conditions",
                ],
              },
              {
                icon: Phone,
                title: "Contact Harvesting",
                color: "text-purple-400",
                bgColor: "bg-purple-500/10 border-purple-500/20",
                description:
                  "Attempts to get your personal information — phone number, home address, social media accounts, workplace — to use for identity theft, harassment, or to bypass platform safety measures.",
                signs: [
                  "Insistence on having your phone number or address",
                  "Asking for photos of your home or workplace",
                  "Requesting social media account names",
                  "Pressure to communicate outside the platform",
                ],
              },
              {
                icon: MessageSquare,
                title: "Third-Party Scams",
                color: "text-blue-400",
                bgColor: "bg-blue-500/10 border-blue-500/20",
                description:
                  "Requests to contact or help someone else — a \"friend,\" \"cellmate,\" or \"family member.\" These third parties may then attempt their own scam, or the requests may be part of a larger scheme.",
                signs: [
                  "Asks you to contact someone on their behalf",
                  "Introduces a \"friend\" who needs help",
                  "Requests to forward packages or letters",
                  "Asks you to accept or transfer money",
                ],
              },
            ].map((scam) => (
              <div key={scam.title} className="card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${scam.bgColor} border flex items-center justify-center`}
                  >
                    <scam.icon className={`w-5 h-5 ${scam.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{scam.title}</h3>
                </div>
                <p className="text-surface-400 text-sm leading-relaxed mb-5">
                  {scam.description}
                </p>
                <div>
                  <div className="text-surface-500 text-xs font-medium uppercase tracking-wider mb-3">
                    Warning Signs
                  </div>
                  <ul className="space-y-2">
                    {scam.signs.map((sign) => (
                      <li
                        key={sign}
                        className="flex items-start gap-2 text-surface-300 text-sm"
                      >
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Flags vs Red Flags */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Healthy vs. Concerning Behavior
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Green Flags */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-green-400">
                  Healthy Signs
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Respects your boundaries and privacy",
                  "Shares genuine interests and asks about yours",
                  "Never asks for money or financial help",
                  "Patient with response times",
                  "Talks about goals, growth, and rehabilitation",
                  "Grateful for the connection without being manipulative",
                  "Comfortable communicating through the platform",
                  "Discusses books, hobbies, current events, life experiences",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div className="card p-8 border-red-500/10">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-red-400">Red Flags</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Asks for money, gift cards, or financial help",
                  "Declares love or intense feelings very quickly",
                  "Pushes for personal information (address, phone, etc.)",
                  "Creates urgency or emotional pressure",
                  "Gets angry when you set boundaries",
                  "Wants to communicate outside the platform",
                  "Asks you to contact third parties",
                  "Makes you feel guilty for saying no",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What to Do If You Suspect a Scam
          </h2>
          <p className="text-surface-400 text-center mb-12 max-w-2xl mx-auto">
            Your safety comes first. Here&apos;s how to protect yourself.
          </p>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Stop Communication",
                description:
                  "You don't owe anyone an explanation. If something feels wrong, stop writing immediately. Your safety and peace of mind come first.",
              },
              {
                step: "2",
                title: "Report the Profile",
                description:
                  "Use the Report button on the profile page or email safety@connectbeyondbars.com. Include specific details about concerning behavior — our team investigates every report.",
              },
              {
                step: "3",
                title: "Don't Send Money",
                description:
                  "No matter how compelling the story, never send money, gift cards, or financial information. Legitimate pen pals do not need your money.",
              },
              {
                step: "4",
                title: "Protect Your Information",
                description:
                  "If you've already shared personal information you're uncomfortable with, contact our team. We can help you assess the situation and take appropriate steps.",
              },
              {
                step: "5",
                title: "Contact Authorities If Needed",
                description:
                  "For threats, harassment, or identity theft, contact your local law enforcement. You can also file a report with the FBI's Internet Crime Complaint Center (IC3).",
              },
            ].map((item) => (
              <div key={item.step} className="card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-600/20 flex items-center justify-center text-brand-400 font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-surface-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Protection */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container text-center max-w-3xl">
          <Shield className="w-12 h-12 text-brand-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            How We Protect You
          </h2>
          <p className="text-surface-400 text-lg leading-relaxed mb-8">
            Our platform is designed with multiple layers of protection. From
            the Address Privacy Vault to content moderation, we work hard to
            keep our community safe. But education is the most powerful tool —
            and that&apos;s why this page exists.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/safety" className="btn-primary">
              <Shield className="w-4 h-4 mr-2" />
              Safety Features
            </Link>
            <Link href="/contact" className="btn-secondary">
              <Flag className="w-4 h-4 mr-2" />
              Report a Concern
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
