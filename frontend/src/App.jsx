import { Navigate, Route, Routes } from "react-router";
import Login from "./screens/auth/Login";
import Home from "./screens/user/Home";
import Category from "./screens/user/Category";
import Blog from "./screens/user/Blog";
import Register from "./screens/auth/Register";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { UserContext } from "./screens/auth/UserContext";
import MyBlogs from "./screens/user/MyBlogs";
import AddBlog from "./screens/user/AddBlog";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={user ? <Blog /> : <Navigate to={"/"} />}>
            <Route index element={<Navigate to={"home"} replace />} />
            {/* All blogs */}
            <Route path="home" element={<Home />} />
            {/* Add blogs */}
            <Route path="blog" element={<AddBlog />} />
            {/* Add tables category */}
            <Route path="category" element={<Category />} />
            {/* My blogs */}
            <Route path="myblogs" element={<MyBlogs />} />
          </Route>
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
