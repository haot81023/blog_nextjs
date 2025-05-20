import fs from 'fs';
import path from 'path';

type Post = {
  title: string;
  date: string;
  slug: string;
  content: string;
};

// Generate static params for all slugs
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(jsonData);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Page component
export default async function PostDetail({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(jsonData);

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
}