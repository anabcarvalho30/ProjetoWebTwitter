import React, { useEffect, useState } from "react";
import api from "../services/api";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await api.get("/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("Erro ao carregar posts:", err);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="Posts">
      <h1>Ideias para festas!</h1>
      {posts.length === 0 ? (
        <p>Sem ideias por aqui...</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostsPage;
