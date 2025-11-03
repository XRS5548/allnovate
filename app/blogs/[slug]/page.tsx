"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
  photo?: string;
  content: string;
  excerpt?: string;
  createdAt?: string;
  authorName?: string;
  authorPhoto?: string;
}

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Blog not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        {blog.authorPhoto && (
          <img
            src={blog.authorPhoto}
            alt={blog.authorName}
            className="w-8 h-8 rounded-full"
          />
        )}
        <span>{blog.authorName || "Unknown Author"}</span>•
        <span>
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : "Unknown Date"}
        </span>
      </div>

      <img
        src={
          blog.photo ||
          "https://via.placeholder.com/800x400?text=No+Image+Available"
        }
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-8 shadow-md"
      />

      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </motion.div>
  );
}
