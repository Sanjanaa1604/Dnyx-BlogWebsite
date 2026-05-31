import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewPost() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        "https://dnyx-blogwebsite-1.onrender.com"
      );

      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return (
      <h2 className="text-center text-white mt-10">
        Loading...
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-purple-950 p-8">
      <div className="max-w-4xl mx-auto bg-purple-900 p-8 rounded-xl">

        <h1 className="text-4xl text-cyan-300 font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-pink-300 mb-6">
          By {blog.author}
        </p>

        <p className="text-gray-200 text-lg">
          {blog.content}
        </p>

      </div>
    </div>
  );
}

export default ViewPost;