import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Tag,
  Search,
  Mail,
  PenTool,
  Shield,
  Heart,
  Users,
  TrendingDown,
} from "lucide-react";

const blogPosts = [
  {
    slug: "how-to-write-first-prison-pen-pal-letter",
    title: "How to Write Your First Prison Pen Pal Letter",
    excerpt:
      "Nervous about writing your first letter? Here's a step-by-step guide to crafting a warm, genuine introduction that opens the door to meaningful connection.",
    category: "Getting Started",
    readTime: "6 min read",
    date: "2024-12-15",
    icon: PenTool,
    featured: true,
    content: null,
  },
  {
    slug: "understanding-corrlinks-vs-jpay",
    title: "Understanding CorrLinks vs JPay: A Complete Guide",
    excerpt:
      "Two of the biggest digital communication platforms in corrections. Here's what they are, how they work, and how ConnectBeyond Bars is different.",
    category: "Education",
    readTime: "8 min read",
    date: "2024-12-10",
    icon: BookOpen,
    featured: true,
    content: null,
  },
  {
    slug: "what-to-expect-writing-inmate",
    title: "What to Expect When Writing an Inmate",
    excerpt:
      "From mail processing times to conversation dynamics, here's an honest look at what the pen pal experience is really like — and why it's so rewarding.",
    category: "Getting Started",
    readTime: "7 min read",
    date: "2024-12-05",
    icon: Mail,
    featured: false,
    content: null,
  },
  {
    slug: "prison-pen-pal-safety-guide",
    title: "The Complete Prison Pen Pal Safety Guide",
    excerpt:
      "Your safety matters most. Learn about address privacy, scam awareness, boundary-setting, and how ConnectBeyond Bars keeps you protected.",
    category: "Safety",
    readTime: "10 min read",
    date: "2024-11-28",
    icon: Shield,
    featured: false,
    content: null,
  },
  {
    slug: "how-pen-pals-reduce-recidivism",
    title: "How Pen Pals Reduce Recidivism: The Research",
    excerpt:
      "Studies show that maintaining social connections during incarceration dramatically improves reentry outcomes. Here's what the research says.",
    category: "Impact",
    readTime: "9 min read",
    date: "2024-11-20",
    icon: TrendingDown,
    featured: false,
    content: null,
  },
  {
    slug: "5-conversation-topics-pen-pals",
    title: "5 Great Conversation Topics for New Pen Pals",
    excerpt:
      "Run out of things to say? These five topic areas will keep your letters interesting, meaningful, and flowing naturally.",
    category: "Getting Started",
    readTime: "5 min read",
    date: "2024-11-15",
    icon: Heart,
    featured: false,
    content: null,
  },
  {
    slug: "church-groups-prison-ministry",
    title: "How Church Groups Can Start a Prison Pen Pal Ministry",
    excerpt:
      "A practical guide for faith communities looking to start or expand their prison ministry through pen pal programs. Includes organizing tips and group pricing.",
    category: "Organizations",
    readTime: "8 min read",
    date: "2024-11-10",
    icon: Users,
    featured: false,
    content: null,
  },
  {
    slug: "mail-rules-by-state",
    title: "Prison Mail Rules by State: What You Need to Know",
    excerpt:
      "Each state has different rules about what can be sent to inmates. Here's a comprehensive overview of mail policies across the US prison system.",
    category: "Education",
    readTime: "12 min read",
    date: "2024-11-05",
    icon: BookOpen,
    featured: false,
    content: null,
  },
];

const categories = [
  "All",
  ...new Set(blogPosts.map((p) => p.category)),
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const recentPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <BookOpen className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Blog &amp; Resources
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            The ConnectBeyond <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Guides, stories, and resources to help you become a better pen pal
            and make a bigger impact.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.slug} className="card p-8 group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-featured text-xs">{post.category}</span>
                  <span className="text-surface-500 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center flex-shrink-0">
                    <post.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h3>
                </div>
                <p className="text-surface-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-brand-400 text-sm font-medium">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.slug} className="card p-6 group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-interest text-xs">{post.category}</span>
                  <span className="text-surface-500 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-surface-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-brand-400 text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 border-t border-surface-800/50 bg-brand-950/30">
        <div className="section-container text-center max-w-xl">
          <Mail className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-surface-400 text-sm mb-6">
            Get new articles, writing tips, and pen pal success stories
            delivered to your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-1"
            />
            <button className="btn-primary px-6 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
