import fs from "fs";
import path from "path";
import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type Post = {
  id: string;
  title: string;
  slug: string;
};

export default async function BlogPage() {
  const filePath = path.join(process.cwd(), "src", "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: Post[] = JSON.parse(jsonData);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📚 Danh sách bài viết</h1>

      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        {posts.map((post, index) => (
          <>
            <ResizablePanel key={post.id} defaultSize={100 / posts.length} className="bg-gray-50">
              <Link href={`/blog/${post.slug}`}>
                <div className="h-full p-4 hover:bg-gray-100 transition cursor-pointer">
                  <h2 className="text-lg font-semibold text-indigo-700">{post.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">Xem chi tiết →</p>
                </div>
              </Link>
            </ResizablePanel>
            {/* Add ResizableHandle except after last panel */}
            {index < posts.length - 1 && <ResizableHandle />}
          </>
        ))}
      </ResizablePanelGroup>
    </div>
  );
}
