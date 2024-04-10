import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { AppBar } from "./components/AppBar";
import { Publish } from "./pages/Publish";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
