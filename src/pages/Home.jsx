import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-purple-950 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          BlogNest Blogs
        </h1>
         <p className="text-center text-purple-200 mt-2">
          A Nest for Every Story
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.length === 0 ? (
            <p className="text-white text-center col-span-2">
              No blogs yet...
            </p>
          ) : (
            blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog._id}`}
              >
                <div className="bg-purple-900 p-6 rounded-xl hover:scale-105 transition">
                  <h2 className="text-2xl text-cyan-300 font-bold">
                    {blog.title}
                  </h2>

                  <p className="text-gray-300 mt-2">
                    {blog.content}
                  </p>

                  <p className="text-pink-300 mt-3 text-sm">
                    By {blog.author}
                  </p>
                  <button onClick={async (e) => {
                   e.preventDefault();
                     await axios.delete(
                        `http://localhost:5000/blogs/${blog._id}`
                        );
                fetchBlogs();
                  }}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                       >Delete</button>


                       <Link to={`/edit/${blog._id}`}onClick={(e) => e.stopPropagation()}
>                      <button className="mt-2 ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Edit</button>
                          </Link>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;