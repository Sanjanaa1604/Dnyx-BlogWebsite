import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/blogs/${id}`
      );

      setTitle(res.data.title);
      setAuthor(res.data.author);
      setContent(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBlog = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/blogs/${id}`,
        {
          title,
          author,
          content,
        }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-purple-950 flex justify-center items-center">
      <form
        onSubmit={updateBlog}
        className="bg-purple-900 p-8 rounded-xl w-full max-w-lg"
      >
        <h1 className="text-3xl text-white font-bold mb-6">
          Edit Blog
        </h1>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 rounded"
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 mb-4 rounded"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 mb-4 rounded h-40"
        />

        <button
          className="bg-cyan-500 text-black px-4 py-2 rounded font-bold"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default EditPost;