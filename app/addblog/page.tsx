"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// ⚡ Import TipTap dynamically (fixes SSR issue)
const Editor = dynamic(() => import("./tiptap-editor"), {
  ssr: false,
});

export default function AddBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [tags, setTags] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Title and content are required!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          photo,
          tags,
          excerpt,
          content,
          createdBy: 1, // Replace later with logged-in user
        }),
      });

      if (res.ok) {
        toast.success("Blog added successfully!");
        router.push("/blogs");
      } else {
        toast.error("Failed to add blog");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex justify-center p-6">
      <Card className="max-w-3xl w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">📝 Add New Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                id="photo"
                placeholder="Enter image URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="e.g. technology, AI, startup"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="Short summary about your blog..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            <div>
              <Label>Content</Label>
              <Editor content={content} onChange={setContent} />
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Publishing..." : "Publish Blog"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
