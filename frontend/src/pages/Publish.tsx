import axios from "axios";
import { BASE_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center p-20">
      <div className=" max-w-screen-lg w-full  flex flex-col gap-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder="Tltle"
        />
        <div>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <button
          onClick={async () => {
            setLoading(true);
            const response = await axios.post(
              `${BASE_URL}/api/v1/blog`,
              {
                title,
                content,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              },
            );
            setLoading(false);
            navigate(`/blog/${response.data.blog.id}`);
          }}
          type="button"
          disabled={loading}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
};
