import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
