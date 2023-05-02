import Link from "next/link";
import { getLatestPosts } from "~/lib/blog";

export function RecentPosts() {
  const posts = getLatestPosts();

  return (
    <ol className="divide-y divide-slate-500">
      {posts.map((post) => (
        <li key={`footer-${post._id}`} className="py-4 first:pt-0 last:pb-0">
          <Link href={post.slug} className="group block">
            <h4 className="font-semibold leading-snug text-slate-100 underline-offset-2 group-hover:underline">
              {post.title}
            </h4>
            <p className="mt-1 line-clamp-3 text-sm no-underline">
              {post.description}
            </p>
          </Link>
        </li>
      ))}
    </ol>
  );
}
