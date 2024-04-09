interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publisedDate: string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publisedDate,
}: BlogCardProps) => {
  return (
    <div>
      <div>
        <Avatar name={authorName} />
        {authorName} . {publisedDate}
      </div>
      <div>{title}</div>
      <div>{content.substring(0, 100)}...</div>
      <div>{`${Math.ceil(content.length / 100)} Mins Read`}</div>
    </div>
  );
};

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">
        {name[0]}
      </span>
    </div>
  );
};
