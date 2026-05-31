import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/create" element={<CreatePost />} />
  <Route path="/blog/:id" element={<ViewPost />} />
  <Route path="/edit/:id" element={<EditPost />} />
</Routes>
    </>
  );
}

export default App;