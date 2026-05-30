import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  Heart,
  Star,
  Gift,
  ShoppingBag,
  Info,
} from "lucide-react";

const bookCategories = [
  {
    title: "Self-Help & Personal Growth",
    books: [
      {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        description:
          "A timeless guide to personal and professional effectiveness. One of the most requested books by incarcerated individuals.",
        amazonUrl: "#",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        description:
          "A profound exploration of finding purpose in suffering. Frequently recommended for those seeking hope and meaning.",
        amazonUrl: "#",
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        description:
          "Practical strategies for building good habits and breaking bad ones. Excellent for anyone working on self-improvement.",
        amazonUrl: "#",
      },
      {
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        description:
          "How the way we think about our abilities shapes our lives. A powerful read about growth and change.",
        amazonUrl: "#",
      },
    ],
  },
  {
    title: "Faith & Spirituality",
    books: [
      {
        title: "The Purpose Driven Life",
        author: "Rick Warren",
        description:
          "A guide to understanding God's purpose for your life. One of the most popular books sent to incarcerated individuals.",
        amazonUrl: "#",
      },
      {
        title: "Mere Christianity",
        author: "C.S. Lewis",
        description:
          "A classic exploration of Christian faith accessible to seekers and believers alike.",
        amazonUrl: "#",
      },
      {
        title: "The Shack",
        author: "William Paul Young",
        description:
          "A moving novel about faith, forgiveness, and healing after tragedy.",
        amazonUrl: "#",
      },
    ],
  },
  {
    title: "Education & Skills",
    books: [
      {
        title: "GED Test Prep 2024-2025",
        author: "Kaplan Test Prep",
        description:
          "Comprehensive GED preparation guide. Education is one of the strongest predictors of successful reentry.",
        amazonUrl: "#",
      },
      {
        title: "The Elements of Style",
        author: "Strunk & White",
        description:
          "A concise guide to writing well. Perfect for pen pals who want to improve their letter-writing skills.",
        amazonUrl: "#",
      },
      {
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        description:
          "An engaging tour of science and the world. Great for curious minds looking to learn something new every day.",
        amazonUrl: "#",
      },
    ],
  },
  {
    title: "Fiction & Literature",
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        description:
          "A fable about following your dreams. Universally loved and one of the most gifted books in prisons.",
        amazonUrl: "#",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description:
          "A timeless story about justice, compassion, and moral courage.",
        amazonUrl: "#",
      },
      {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        description:
          "A powerful story of friendship, betrayal, and redemption. Themes of second chances resonate deeply.",
        amazonUrl: "#",
      },
    ],
  },
  {
    title: "Reentry & Life Skills",
    books: [
      {
        title: "The Master Plan",
        author: "Chris Wilson",
        description:
          "A memoir by a man who created a detailed plan for his life after prison — and made it happen. Incredibly inspiring.",
        amazonUrl: "#",
      },
      {
        title: "Financial Peace Revisited",
        author: "Dave Ramsey",
        description:
          "Practical financial advice for building a stable future. Essential for reentry planning.",
        amazonUrl: "#",
      },
      {
        title: "What Color Is Your Parachute?",
        author: "Richard N. Bolles",
        description:
          "The classic job-hunting guide, updated annually. Helpful for those preparing for release.",
        amazonUrl: "#",
      },
    ],
  },
];

export default function BookstorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <BookOpen className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Books That Change Lives
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            <span className="gradient-text">Bookstore</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Send a book to your pen pal. Reading is one of the most powerful
            tools for growth, education, and connection. These are our
            recommended titles, curated with input from incarcerated readers.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <div className="card p-6 flex flex-col sm:flex-row items-start gap-4">
            <Info className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold mb-1">
                How to Send a Book
              </h3>
              <p className="text-surface-400 text-sm leading-relaxed">
                Most facilities accept books shipped directly from retailers
                like Amazon. Check the specific facility&apos;s mail policy
                before ordering. Books should be{" "}
                <strong className="text-surface-300">new, paperback</strong>,
                and shipped directly from the retailer to the facility. Include
                the inmate&apos;s full name and ID number in the shipping
                address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Categories */}
      <section className="py-20">
        <div className="section-container">
          {bookCategories.map((category) => (
            <div key={category.title} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-brand-400" />
                {category.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.books.map((book) => (
                  <div key={book.title} className="card p-6 flex flex-col">
                    <h3 className="text-white font-bold mb-1">{book.title}</h3>
                    <p className="text-brand-400 text-sm mb-3">
                      by {book.author}
                    </p>
                    <p className="text-surface-400 text-sm leading-relaxed flex-1 mb-4">
                      {book.description}
                    </p>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2 w-full justify-center"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      View on Amazon
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Care Package Info */}
      <section className="py-20 border-t border-surface-800/50 bg-surface-900/30">
        <div className="section-container max-w-3xl text-center">
          <Gift className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Care Packages &amp; Commissary
          </h2>
          <p className="text-surface-400 text-lg mb-6 leading-relaxed">
            Beyond books, many facilities allow care packages and commissary
            deposits. Each facility has different approved vendors and rules.
            Contact us and we&apos;ll help you find the right options for your
            pen pal&apos;s facility.
          </p>
          <Link href="/contact" className="btn-primary">
            Ask Us About Care Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
