import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/lib/utils";
import { getLatestPosts } from "~/lib/blog";
import Balancer from "react-wrap-balancer";

export function LatestBlog() {
  const posts = getLatestPosts();

  return (
    <section className="py-[10vw] xl:py-32">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-primary-600">
            Blog Posts
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-2 text-slate-600 sm:text-lg">
            <Balancer>
              Here are some of the most recent articles I&apos;ve written about
              software trends and the web development industry as a whole.
            </Balancer>
          </p>
        </header>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id}>
              <Link
                href={post.slug}
                className="group flex flex-col items-start justify-between outline-none"
                rel="bookmark"
              >
                <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-300 group-focus-visible:ring-primary-600">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={804}
                      height={452}
                      className="aspect-[16/9] w-full scale-100 transform-gpu object-cover transition-transform group-hover:scale-110 group-focus-visible:scale-110"
                    />
                  )}
                </div>

                <time
                  dateTime={post.date}
                  className="mt-4 block text-xs text-slate-500"
                >
                  {formatDate(post.date)}
                </time>

                <h3 className="mt-2 text-lg font-semibold leading-6 text-slate-900 transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
