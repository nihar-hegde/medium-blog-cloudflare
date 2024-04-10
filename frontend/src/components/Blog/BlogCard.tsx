import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publisedDate: string;
  id: string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publisedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="cursor-pointer">
      <div className="border-b border-slate-200 pb-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Avatar name={authorName} />
          <div className="flex flex-row items-center gap-2">
            <span className="">{authorName}</span>
            <div className="h-1 w-1 rounded-full bg-slate-400" />
            <span className="text-slate-400 font-extralight">
              {publisedDate}
            </span>
          </div>
        </div>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-md font-thin">{content.substring(0, 100)}...</div>
        <div className="text-slate-400">{`${Math.ceil(content.length / 100)} Mins Read`}</div>
      </div>
    </Link>
  );
};

export const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" text-gray-600 dark:text-gray-300 text-sm">
        {name[0]}
      </span>
    </div>
  );
};
