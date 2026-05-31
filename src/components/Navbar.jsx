import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-900 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-white text-2xl font-bold">
          BLOGNEST
        </h1>

        <div className="space-x-6">
          <Link
            to="/"
            className="text-white hover:text-pink-300"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="text-white hover:text-cyan-300"
          >
            Create Post
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;