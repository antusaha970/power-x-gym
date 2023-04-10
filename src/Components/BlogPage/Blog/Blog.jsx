import React from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import BlogContainer from "../BlogContainer/BlogContainer";

const Blog = () => {
  return (
    <>
      <TopHeader title="Our Blogs" />
      <BlogContainer />
      <Footer />
    </>
  );
};

export default Blog;
