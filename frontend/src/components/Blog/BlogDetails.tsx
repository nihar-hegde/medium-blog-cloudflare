import { Blogs } from "../../hooks";
import { Avatar } from "./BlogCard";

export const BlogDetails = ({ blog }: { blog: Blogs }) => {
  return (
    <div className="grid grid-cols-12 px-10 pt-200 max-w-screen-2xl">
      <div className="col-span-8 p-20">
        <div>
          <h1 className="text-4xl font-extrabold">{blog.title}</h1>
          <p className="text-slate-400 pt-2">Posted on 2nd December 2023</p>
          <p className="pt-4">{blog.content}</p>
        </div>
      </div>
      <div className="col-span-4 p-20">
        <p className="text-slate-600">Author</p>
        <div className=" p-2 flex flex-row gap-4 items-center ">
          <Avatar name={blog.author.name || "Anonymus"} />
          <div className="flex flex-col itmes-center gap-2">
            <h1 className="text-2xl font-extrabold">
              {blog.author.name || "Anonymus"}
            </h1>
            <p>Random catch phrase about the author</p>
          </div>
        </div>
      </div>
    </div>
  );
};
