"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API/Convex mutation
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <MessageSquare className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              We&apos;re Here to Help
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Have a question, concern, or just want to learn more? Our team
            typically responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-600/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:hello@connectbeyondbars.com"
                      className="text-brand-400 hover:text-brand-300 text-sm transition-colors"
                    >
                      hello@connectbeyondbars.com
                    </a>
                    <p className="text-surface-500 text-xs mt-1">
                      General inquiries & support
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Family Support Line
                    </h3>
                    <a
                      href="mailto:families@connectbeyondbars.com"
                      className="text-brand-400 hover:text-brand-300 text-sm transition-colors"
                    >
                      families@connectbeyondbars.com
                    </a>
                    <p className="text-surface-500 text-xs mt-1">
                      For family members of incarcerated individuals
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Mailing Address
                    </h3>
                    <p className="text-surface-400 text-sm">
                      ConnectBeyond Bars
                      <br />
                      PO Box [To Be Assigned]
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Response Time
                    </h3>
                    <p className="text-surface-400 text-sm">
                      We aim to respond to all inquiries within 24 hours during
                      business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-surface-400 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message
                    and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "general",
                        message: "",
                      });
                    }}
                    className="btn-secondary mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      Send Us a Message
                    </h2>
                    <p className="text-surface-500 text-sm">
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-surface-300 text-sm font-medium mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="input-field"
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-surface-300 text-sm font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input-field"
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-surface-300 text-sm font-medium mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="input-field"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="writer-help">
                        Help with Writing / My Account
                      </option>
                      <option value="family">
                        Family Member of an Inmate
                      </option>
                      <option value="inmate-profile">
                        Submit / Update an Inmate Profile
                      </option>
                      <option value="organization">
                        Organization / Partnership
                      </option>
                      <option value="safety">Safety Concern / Report</option>
                      <option value="billing">Billing / Subscription</option>
                      <option value="media">Media / Press Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-surface-300 text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="input-field min-h-[160px] resize-y"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Link */}
          <div className="mt-16 text-center">
            <div className="card p-8 inline-block max-w-lg">
              <HelpCircle className="w-8 h-8 text-brand-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Looking for Quick Answers?
              </h3>
              <p className="text-surface-400 text-sm mb-4">
                Check our FAQ page for answers to common questions about writing
                pen pals, safety, subscriptions, and more.
              </p>
              <a href="/faq" className="btn-secondary text-sm">
                Visit FAQ →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
