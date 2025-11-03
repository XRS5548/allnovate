import { NextResponse } from "next/server";
import { initDB, createBlog, getAllBlogs } from "@/lib/dbhelper";

/**
 * ✅ GET /api/blogs → Fetch all blogs
 */
export async function GET() {
  try {
    await initDB(); // Ensure tables exist
    const blogs = await getAllBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

/**
 * ✅ POST /api/blogs → Add a new blog
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      photo,
      content,
      excerpt,
      tags,
      createdBy,
    }: {
      title: string;
      photo?: string;
      content: string;
      excerpt?: string;
      tags?: string;
      createdBy?: number | null;
    } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required." },
        { status: 400 }
      );
    }

    await initDB();
    const id = await createBlog({
      title,
      photo: photo || "https://via.placeholder.com/300x200?text=Blog",
      content,
      excerpt: excerpt || "",
      tags: tags || "",
      createdBy: createdBy || null,
    });

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to add blog" },
      { status: 500 }
    );
  }
}
