import { NextResponse } from "next/server";
import { Blog, getAllBlogs } from "@/lib/dbhelper";

// ✅ GET /api/blogs/[slug]
export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    // Await params (Next.js 15 strict typing fix)
    const { slug } = await context.params;
    const blogs = await getAllBlogs();

    // Match blog by slugified title
    const blog = blogs.find(
      (b: Blog) =>
        b.title
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "") === slug
    );

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
