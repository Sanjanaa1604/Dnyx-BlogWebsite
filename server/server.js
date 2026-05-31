require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/Blog");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running!");
});

app.post("/blogs", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.json({
      message: "Blog created",
      blog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating blog",
    });
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
});

app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json(blog);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      message: "Blog deleted",
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Blog updated",
      blog,
    });
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});