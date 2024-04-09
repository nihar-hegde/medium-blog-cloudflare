import { BlogCard } from "../components/Blog/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <BlogCard
        authorName={"Nihar Hegde"}
        title={"title of the blog bro"}
        content={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur nam error, laudantium saepe eum! Minima suscipit dolorum ut amet maxime reiciendis laudantium provident, laborum iure earum doloribus neque temporibus?"
        }
        publisedDate={"05-05-2024"}
      />
    </div>
  );
};
