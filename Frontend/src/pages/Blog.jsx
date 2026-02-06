import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, ArrowRight, BookOpen, Clock } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setBlogs(sampleBlogs);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const getReadingTime = (content) =>
    Math.ceil((content?.split(/\s+/).length || 0) / 200);
  const parseContent = (content) =>
    content?.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 underline">$1</a>',
    ) || "";

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20">
              <BookOpen className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-400 font-medium">
                Insights & Updates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">
                Blog
              </span>
            </h1>
            <p className="text-slate-400 text-lg">
              Stay informed with the latest insights on cybersecurity,
              compliance, and technology trends.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="transparent">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen size={48} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-400">No blogs yet</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedBlog(blog)}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={blog.imageUrl || DEFAULT_BLOG_IMAGE}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = DEFAULT_BLOG_IMAGE;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-navy-950/80 border border-white/10 text-xs text-slate-300 flex items-center gap-1">
                      <Clock size={12} />
                      {getReadingTime(blog.longDescription)} min
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(blog.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {blog.author || "360 Kavach Team"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                      {blog.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-primary-400 text-sm font-medium">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </SectionWrapper>

      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-y-auto"
          >
            <motion.article
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-navy-900 border border-white/10 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-navy-950/80 text-slate-400 hover:text-white border border-white/10"
              >
                <X size={20} />
              </button>
              <div className="overflow-y-auto max-h-[90vh]">
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedBlog.imageUrl || DEFAULT_BLOG_IMAGE}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = DEFAULT_BLOG_IMAGE;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950/60 border border-white/10">
                        <Calendar size={14} />
                        {formatDate(selectedBlog.createdAt)}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950/60 border border-white/10">
                        <User size={14} />
                        {selectedBlog.author || "360 Kavach Team"}
                      </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">
                      {selectedBlog.title}
                    </h1>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-lg text-primary-400 font-medium mb-6 pb-6 border-b border-white/10">
                    {selectedBlog.shortDescription}
                  </p>
                  <div
                    className="prose prose-invert prose-lg max-w-none text-slate-300 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: parseContent(selectedBlog.longDescription),
                    }}
                  />
                  <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="px-6 py-2.5 bg-white/5 hover:bg-primary-500/20 border border-white/10 rounded-lg text-sm font-medium"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const sampleBlogs = [
  {
    _id: "1",
    title: "The Future of Zero Trust Security Architecture",
    shortDescription:
      "Explore how Zero Trust is reshaping enterprise security.",
    longDescription: "Zero Trust Security has become the gold standard...",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    author: "Security Team",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "GDPR Compliance: A Complete Guide",
    shortDescription:
      "Everything you need to know about staying GDPR compliant.",
    longDescription:
      "The General Data Protection Regulation continues to evolve...",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    author: "Compliance Team",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _id: "3",
    title: "AI in Cybersecurity: Friend or Foe?",
    shortDescription: "How AI is transforming cyber defense and attacks.",
    longDescription:
      "Artificial Intelligence is revolutionizing cybersecurity...",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
    author: "Research Team",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

export default Blog;
