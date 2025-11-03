"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ✅ Type definition for blog object
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  photo?: string;
  createdAt?: string;
  authorName?: string;
}

// ✅ Helper function to generate slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AnimatedBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: Blog[] = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
      <div className="flex justify-end"><Button onClick={()=>{location.href = "/addblog"}} >Add Your Blog</Button></div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {blogs.length > 0 ? (
          blogs.map((blog) => {
            const slug = generateSlug(blog.title);

            return (
              <motion.div key={blog.id} whileHover={{ scale: 1.04 }}>
                <Card className="h-full flex flex-col justify-between overflow-hidden">
                  <div>
                    <CardHeader className="p-0">
                      <img
                        src={
                          blog.photo?.trim()
                            ? blog.photo
                            : "https://via.placeholder.com/600x300?text=No+Image"
                        }
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-2 line-clamp-1">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="mb-4 line-clamp-3">
                        {blog.excerpt || "No description available."}
                      </CardDescription>
                      <p className="text-sm text-gray-500">
                        {blog.createdAt
                          ? `📅 ${new Date(
                              blog.createdAt
                            ).toLocaleDateString()}`
                          : "📅 Unknown date"}
                      </p>
                      {blog.authorName && (
                        <p className="text-xs text-gray-400 mt-1">
                          ✍️ By {blog.authorName}
                        </p>
                      )}
                    </CardContent>
                  </div>

                  <div className="p-4 pt-0 flex justify-end">
                    <Link href={`/blogs/${slug}`}>
                      <Button variant="outline" className="text-sm">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })
        ) : (
          <p className="text-center col-span-3 text-muted-foreground">
            No blogs available
          </p>
        )}
      </motion.div>
    </div>
  );
}
