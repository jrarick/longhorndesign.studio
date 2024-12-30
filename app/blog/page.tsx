import { BlogPosts } from "@/app/components/page-sections/blog/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-7xl font-display my-16 text-center text-stone-100 uppercase">
        Read the Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
