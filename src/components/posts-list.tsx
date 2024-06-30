import Link from "next/link";

export default async function PostList() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  type posttype = {
    id: number;
    title: string;
  };

  return (
    <ul>
      {data.posts.map((post: posttype) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
