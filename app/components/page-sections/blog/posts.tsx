import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="mx-auto mt-16 mb-48 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article
            key={post.slug}
            className="flex flex-col items-start justify-between"
          >
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.metadata.publishedAt}
                  className="text-stone-400 font-semibold"
                >
                  {formatDate(post.metadata.publishedAt)}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-stone-100 group-hover:text-stone-200">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.metadata.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-stone-300">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}
