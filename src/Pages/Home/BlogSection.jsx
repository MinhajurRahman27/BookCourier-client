import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Read Books That Will Change Your Perspective",
      excerpt: "Discover transformative literature that challenges conventional thinking and opens new worlds of understanding.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Book Reviews",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.goodreads.com/blog/show/2024-must-read-books"
    },
    {
      id: 2,
      title: "The Rise of Digital Reading: How E-books Are Changing Literature",
      excerpt: "Exploring the impact of digital technology on reading habits and the future of publishing industry.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/index.html"
    },
    {
      id: 3,
      title: "Building Your Personal Library: A Beginner's Guide",
      excerpt: "Essential tips for curating a meaningful book collection that reflects your interests and goals.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Reading Tips",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.bookbub.com/blog/how-to-build-a-personal-library"
    }
  ];

  return (
    <section className="py-16 mb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest book reviews, reading tips, and literary insights from our community of book lovers.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;