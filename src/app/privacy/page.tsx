import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <Lock className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Privacy Policy
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
              <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Account information (name, email, password)</li>
                <li>Profile information (display name, bio, preferences)</li>
                <li>Correspondence content (letters you compose)</li>
                <li>Payment information (processed securely by Stripe)</li>
                <li>Usage data (pages visited, features used)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Provide and maintain the Platform</li>
                <li>Process and deliver correspondence</li>
                <li>Protect user safety through content moderation</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important account and service notifications</li>
                <li>Improve our services and user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Address Privacy Vault</h2>
              <p>
                The core of our privacy protection. Your home address is never shared with incarcerated individuals, facilities, or third parties. All correspondence is routed through our secure PO Box system. Your physical location is never disclosed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
              <p className="mb-3">We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Stripe (payment processing only)</li>
                <li>Law enforcement (when required by law or to protect safety)</li>
                <li>Service providers who assist in platform operations (bound by confidentiality agreements)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption at rest and in transit, secure authentication, and regular security audits. However, no system is 100% secure, and we cannot guarantee absolute data security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                We retain your account data for as long as your account is active. Correspondence records are retained for safety and compliance purposes. You may request deletion of your account and associated data by contacting support.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account</li>
                <li>Export your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
              <p>
                We use essential cookies for authentication and session management. We do not use tracking cookies for advertising purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. Children&apos;s Privacy</h2>
              <p>
                The Platform is not intended for users under 18. We do not knowingly collect information from minors. If we discover we have collected data from a minor, we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at{" "}
                <a href="mailto:privacy@connectbeyondbars.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                  privacy@connectbeyondbars.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
