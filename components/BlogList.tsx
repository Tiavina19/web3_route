"use client";

import blogsList from "@/utils/data/blogList";
import React from "react";

function BlogList() {
  return (
    <div className="container py-2">
      <h2 className="text-3xl font-bold mb-4">Liste des Blogs</h2>
      {blogsList.map((blog) => {
        return <p key={blog.id}>Image {blog.id}</p>;
      })}
    </div>
  );
}

export default BlogList;
