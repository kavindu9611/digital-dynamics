import Link from "next/link";

export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  type posttype = {
    id: number;
    title: string;
  };

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <ul>
        {data.posts.map((post: posttype) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
