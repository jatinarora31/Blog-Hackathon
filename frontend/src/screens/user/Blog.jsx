import { useEffect } from "react";
import BlogAppBar from "../../components/BlogAppBar";
import { Outlet } from "react-router";

function Blog() {
  useEffect(() => {
    console.log("this is blog page");
  }, []);
  return (
    <div>
      <BlogAppBar />
      <Outlet />
    </div>
  );
}

export default Blog;
