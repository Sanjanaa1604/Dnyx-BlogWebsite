import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/blogs",
        {
          title,
          author,
          content,
        }
      );

      alert("Blog Created!");

      console.log(response.data);

      setTitle("");
      setAuthor("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-purple-950 p-8">
      <div className="max-w-2xl mx-auto bg-purple-900 p-8 rounded-2xl">

        <h1 className="text-white text-3xl font-bold mb-6">
          Create New Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded"
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 rounded"
          />

          <textarea
            rows="6"
            placeholder="Write your blog here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded"
          >
            Publish Post
          </button>

        </form>

      </div>
    </div>
  );
}

export default CreatePost;