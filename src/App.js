import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import BlogContentPage from "./pages/BlogContentPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Routes>
          <Route path="/blogs/bcp" element={<BlogContentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
