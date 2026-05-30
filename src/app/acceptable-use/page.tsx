import { Shield } from "lucide-react";

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <Shield className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Acceptable Use Policy
          </h1>
          <p className="text-surface-400">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl">
          <div className="space-y-8 text-surface-300 text-sm leading-relaxed">
            <div>
              <p>
                This Acceptable Use Policy outlines the rules and expectations for all users of ConnectBeyond Bars. Our goal is to maintain a safe, respectful, and supportive environment for writers and incarcerated individuals alike.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Prohibited Content</h2>
              <p className="mb-3">The following content is not allowed in any correspondence:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Threats, intimidation, or harassment</li>
                <li>Sexually explicit or obscene content</li>
                <li>Hate speech, discriminatory language, or slurs</li>
                <li>Content that promotes illegal activity</li>
                <li>Unsolicited requests for money, gifts, or financial assistance</li>
                <li>Personal identifying information (home address, phone number, Social Security number)</li>
                <li>Information about minors or content involving minors</li>
                <li>Escape plans or content that could endanger facility security</li>
                <li>Content designed to manipulate or exploit the recipient</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Prohibited Behavior</h2>
              <p className="mb-3">Users may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Create multiple accounts or impersonate another person</li>
                <li>Use the Platform for commercial purposes or solicitation</li>
                <li>Attempt to contact users outside the Platform to circumvent safety measures</li>
                <li>Share account credentials with others</li>
                <li>Attempt to extract personal information from pen pals</li>
                <li>Engage in romance scams, financial manipulation, or emotional exploitation</li>
                <li>Use automated tools or bots to interact with the Platform</li>
                <li>Interfere with the Platform&apos;s operations or security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Writer Responsibilities</h2>
              <p className="mb-3">As a pen pal writer, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Treat all correspondence with respect and empathy</li>
                <li>Protect your own privacy by not sharing sensitive personal information</li>
                <li>Report any concerning behavior through the Platform&apos;s reporting tools</li>
                <li>Respect boundaries — both yours and those of your pen pal</li>
                <li>Not send money, gift cards, or financial instruments to inmates</li>
                <li>Communicate honestly and in good faith</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Content Moderation</h2>
              <p>
                All correspondence is reviewed before delivery. Letters that violate this policy will be rejected, and the sender will be notified with an explanation. Repeated violations may result in account suspension or permanent ban.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Reporting Violations</h2>
              <p className="mb-3">If you encounter content or behavior that violates this policy:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Use the <strong className="text-white">Report</strong> button on any profile or letter</li>
                <li>Email <a href="mailto:safety@connectbeyondbars.com" className="text-brand-400 hover:text-brand-300 transition-colors">safety@connectbeyondbars.com</a></li>
                <li>All reports are investigated within 24 hours</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Enforcement</h2>
              <p className="mb-3">Violations may result in:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Letter rejection with explanation</li>
                <li>Written warning</li>
                <li>Temporary account suspension</li>
                <li>Permanent account termination</li>
                <li>Reporting to law enforcement when legally required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about this policy? Contact{" "}
                <a href="mailto:legal@connectbeyondbars.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                  legal@connectbeyondbars.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
