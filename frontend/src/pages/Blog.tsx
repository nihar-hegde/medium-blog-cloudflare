import { BlogDetails } from "../components/Blog/BlogDetails";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  return (
    <div>{blog ? <BlogDetails blog={blog} /> : <div>No blog found</div>}</div>
  );
};
