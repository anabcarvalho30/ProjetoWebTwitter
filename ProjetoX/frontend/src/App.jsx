import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import SingupPage from "./pages/SingupPage";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/Project X.jpg" alt="Project X logo" className="logo" />
          <h2>Project X - Sua festa dos sonhos aqui!</h2>
        </div>

        <div className="navbar-right">
          <Link to="/signup">Cadastre-se!</Link>
          <Link to="/">Ideias de festa!</Link>
          <Link to="/create">Minhas ideias!</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
