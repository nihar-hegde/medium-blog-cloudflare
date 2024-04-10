import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

export interface Blogs {
  content: string;
  title: string;
  id: string;
  published: boolean;
  author: { name: string };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blogs>();

  useEffect(() => {
    const getblogs = async () => {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlog(res.data.blog);
      setLoading(false);
    };
    getblogs();
  }, [id]);

  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const getblogs = async () => {
      const res = await axios.get(`${BASE_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlogs(res.data.blog);
      setLoading(false);
    };
    getblogs();
  }, []);

  return {
    loading,
    blogs,
  };
};
