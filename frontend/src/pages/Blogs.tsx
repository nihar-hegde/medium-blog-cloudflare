import { BlogCard } from "../components/Blog/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="flex justify-center">
        <div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center p-4 pt-10">
      <div className=" max-w-xl">
        {blogs.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            authorName={item.author.name || "Anonymus"}
            title={item.title}
            content={item.content}
            publisedDate={"05-05-2024"}
          />
        ))}
      </div>
    </div>
  );
};
