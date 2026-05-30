"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PenTool,
  Lightbulb,
  Copy,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Heart,
  MessageSquare,
  AlertTriangle,
  Mail,
} from "lucide-react";

const letterTemplates = [
  {
    id: "first-letter",
    title: "First Letter Introduction",
    category: "Getting Started",
    template: `Dear [Name],

My name is [Your Name], and I found your profile on ConnectBeyond Bars. I was drawn to your interests in [mention something from their profile — books, art, faith, etc.], and I'd love to start a correspondence with you.

A little about me: I'm from [general region, not specific address] and I enjoy [2-3 interests/hobbies]. I work as [general occupation] and in my free time, I love to [activity].

I believe in the power of human connection, and I'm genuinely interested in getting to know you. No judgment, no expectations — just honest conversation.

If there's anything specific you'd like to know about me, please don't hesitate to ask. I look forward to hearing from you.

Warm regards,
[Your First Name]`,
  },
  {
    id: "follow-up",
    title: "Follow-Up Letter",
    category: "Getting Started",
    template: `Dear [Name],

Thank you for your reply! It was wonderful to hear from you. I really enjoyed reading about [something they mentioned].

You asked about [their question] — [answer their question naturally]. I'd love to hear more about [topic they mentioned].

Since my last letter, I've been [brief update about your life — a book you read, something that happened, a thought you had]. It made me think of you because [connection to something they shared].

What have you been reading/working on/thinking about lately?

Looking forward to your next letter.

Best,
[Your First Name]`,
  },
  {
    id: "shared-interest",
    title: "Building on Shared Interests",
    category: "Deepening Connection",
    template: `Dear [Name],

I've been thinking a lot about what you said about [topic] in your last letter. It really resonated with me because [your perspective].

I recently [read/watched/experienced] [specific thing] and I think you'd find it interesting because [why]. Have you ever [related question]?

Here's something I wanted to share with you: [a quote, poem, idea, or personal story related to your shared interest].

I always look forward to our conversations. They give me a different perspective that I really value.

Take care,
[Your First Name]`,
  },
  {
    id: "encouragement",
    title: "Words of Encouragement",
    category: "Deepening Connection",
    template: `Dear [Name],

I wanted to write today to let you know that I've been thinking about you. I know [acknowledge a challenge they mentioned], and I want you to know that your strength is inspiring.

[Share a brief story or quote about resilience, hope, or perseverance.]

Remember that who you are is not defined by your circumstances. The thoughtfulness and [positive quality] I see in your letters tell me a lot about the person you are.

I'm here, and I'm not going anywhere. Our correspondence means a lot to me too.

With admiration,
[Your First Name]`,
  },
  {
    id: "faith-based",
    title: "Faith-Based Connection",
    category: "Special Topics",
    template: `Dear [Name],

Grace and peace to you! I was moved by your profile mentioning your faith journey, and I felt called to connect with you.

A passage that has been on my heart lately is [verse/quote]. It reminds me that [your reflection on the passage].

I'd love to hear about your spiritual journey and what brings you comfort and strength. I believe God places people in our lives for a reason, and I'm grateful for this connection.

If there's a way I can pray for you or support you spiritually, please let me know.

Blessings,
[Your First Name]`,
  },
  {
    id: "holiday",
    title: "Holiday / Special Occasion",
    category: "Special Topics",
    template: `Dear [Name],

Happy [holiday/season]! I know this time of year can be especially [difficult/meaningful], and I wanted to make sure you heard from a friend.

During this season, I like to [your tradition]. I hope you're finding moments of peace and joy wherever you can.

[Share a holiday memory, tradition, or warm wish.]

You're in my thoughts, and I'm grateful for the connection we share. I hope this letter brings a little warmth to your day.

With care,
[Your First Name]`,
  },
];

const conversationStarters = [
  {
    category: "Light & Fun",
    prompts: [
      "If you could have dinner with any person (living or dead), who would it be and why?",
      "What's a book, movie, or TV show that changed how you see the world?",
      "If you could instantly master any skill, what would you choose?",
      "What's your favorite childhood memory?",
      "If you could travel anywhere in the world, where would you go?",
      "What's the best meal you've ever had?",
      "What music are you listening to right now?",
    ],
  },
  {
    category: "Meaningful & Deep",
    prompts: [
      "What's the most important lesson life has taught you?",
      "What does a successful, fulfilling life look like to you?",
      "Who has been the biggest influence on the person you are today?",
      "What are you most grateful for right now?",
      "If you could go back and tell your younger self one thing, what would it be?",
      "What gives you hope?",
      "What's something you wish more people understood?",
    ],
  },
  {
    category: "Goals & Growth",
    prompts: [
      "What are you working on right now (studying, creating, learning)?",
      "What's a goal you're working toward?",
      "What's something you've accomplished that you're proud of?",
      "If you could start any business or career, what would it be?",
      "What habit are you trying to build?",
      "How do you stay motivated during tough times?",
    ],
  },
  {
    category: "Current Events & Culture",
    prompts: [
      "What news story has been on your mind lately?",
      "Have you read anything good recently? I'm looking for recommendations!",
      "What's your take on [a recent cultural event or topic]?",
      "Is there a cause or issue you feel strongly about?",
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="btn-secondary text-xs py-1.5 px-3"
    >
      {copied ? (
        <>
          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-3 h-3 mr-1" />
          Copy Template
        </>
      )}
    </button>
  );
}

export default function WritingGuidePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(letterTemplates.map((t) => t.category)),
  ];

  const filteredTemplates =
    activeCategory === "all"
      ? letterTemplates
      : letterTemplates.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <PenTool className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Letter Writing Resources
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Writing <span className="gradient-text">Guide</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Not sure what to say? We&apos;ve got you covered. Use our letter
            templates, conversation starters, and writing tips to craft
            meaningful letters with confidence.
          </p>
        </div>
      </section>

      {/* Writing Tips */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl font-bold text-white">
              Tips for Great Letters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Be yourself",
                desc: "Authenticity builds trust. You don't need to be a professional writer — just be genuine.",
              },
              {
                title: "Ask questions",
                desc: "Show genuine interest. Questions keep the conversation flowing and show you care about their perspective.",
              },
              {
                title: "Share, don't overshare",
                desc: "Share your interests and life, but avoid sharing your home address, workplace, or sensitive personal info early on.",
              },
              {
                title: "Be consistent",
                desc: "Try to reply within a reasonable time. Consistent correspondence builds a stronger connection.",
              },
              {
                title: "Keep it positive",
                desc: "Focus on interests, goals, and shared experiences. You can discuss difficult topics, but try to balance with positivity.",
              },
              {
                title: "Write legibly (if handwriting)",
                desc: "If composing by hand, write clearly. Better yet, use our online editor — we'll print it professionally.",
              },
              {
                title: "Reference their profile",
                desc: "Mention something from their bio or interests in your first letter. It shows you chose them specifically.",
              },
              {
                title: "It's okay to set boundaries",
                desc: "You don't have to answer every question or share everything. Healthy boundaries are important in any relationship.",
              },
            ].map((tip) => (
              <div key={tip.title} className="card p-5">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {tip.title}
                </h3>
                <p className="text-surface-400 text-xs leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letter Templates */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-brand-400" />
            <h2 className="text-3xl font-bold text-white">
              Letter Templates
            </h2>
          </div>
          <p className="text-surface-400 mb-8">
            Copy and customize these templates for your letters
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-brand-600 text-white"
                    : "glass text-surface-300 hover:text-white"
                }`}
              >
                {cat === "all"
                  ? "All Templates"
                  : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">{template.title}</h3>
                    <span className="text-brand-400 text-xs">
                      {template.category}
                    </span>
                  </div>
                  <CopyButton text={template.template} />
                </div>
                <pre className="text-surface-400 text-xs leading-relaxed whitespace-pre-wrap font-sans bg-surface-950/50 rounded-lg p-4 max-h-64 overflow-y-auto">
                  {template.template}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Starters */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-brand-400" />
            <h2 className="text-3xl font-bold text-white">
              Conversation Starters
            </h2>
          </div>
          <p className="text-surface-400 mb-8">
            Stuck on what to talk about? Try one of these prompts.
          </p>

          <div className="space-y-8">
            {conversationStarters.map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-bold text-white mb-4">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.prompts.map((prompt) => (
                    <div
                      key={prompt}
                      className="card p-4 flex items-start gap-3"
                    >
                      <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-surface-300 text-sm">
                        {prompt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What NOT to Include */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h2 className="text-3xl font-bold text-white">
              What NOT to Include
            </h2>
          </div>

          <div className="card p-8">
            <p className="text-surface-400 mb-6">
              For your safety, avoid including these in your letters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Your home address or PO Box",
                "Your phone number",
                "Your workplace name or address",
                "Your social media usernames",
                "Financial information (bank details, credit card numbers)",
                "Information about your daily schedule or routines",
                "Photos of your home, car, or identifying locations",
                "Personal details about children or minors",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">✕</span>
                  </div>
                  <span className="text-surface-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <BookOpen className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your First Letter?
          </h2>
          <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
            Browse profiles, find someone who resonates with you, and start a
            connection that could change both your lives.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/profiles" className="btn-primary">
              Browse Profiles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/auth/register" className="btn-secondary">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
