import { Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <Scale className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-surface-400">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl prose-invert">
          <div className="space-y-8 text-surface-300 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using ConnectBeyond Bars (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Platform. We reserve the right to update these terms at any time, and your continued use constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Eligibility</h2>
              <p>
                You must be at least 18 years of age to use this Platform. By creating an account, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Account Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. ConnectBeyond Bars is not liable for any loss resulting from unauthorized account access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Platform Services</h2>
              <p>
                ConnectBeyond Bars provides a managed correspondence platform connecting volunteer pen pals with incarcerated individuals. Services include profile browsing, letter composition, print-to-mail delivery, and privacy protection through our Address Privacy Vault. We reserve the right to modify, suspend, or discontinue any service at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Content Moderation</h2>
              <p>
                All correspondence sent through the Platform is subject to review. We reserve the right to reject, edit, or remove any content that violates our Acceptable Use Policy, including but not limited to: threats, harassment, explicit content, financial solicitation, or personal information that compromises safety.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Privacy &amp; Data</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy for information on how we collect, use, and protect your data. By using the Platform, you consent to the practices described in the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Subscriptions &amp; Payments</h2>
              <p>
                Premium subscriptions are billed monthly through Stripe. You may cancel at any time; access continues until the end of the billing period. Refunds are provided at our discretion. Prices are subject to change with 30 days&apos; notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                ConnectBeyond Bars facilitates connections but does not guarantee the behavior, truthfulness, or intentions of any user. We are not liable for any damages arising from your use of the Platform or interactions with other users. Use the Platform at your own risk and exercise personal judgment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at any time for violation of these Terms, our Acceptable Use Policy, or for any conduct we deem harmful to the community. You may also delete your account at any time by contacting support.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
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
