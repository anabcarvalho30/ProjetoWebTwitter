import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import CommentList from "../components/CommentList";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await api.get("/posts");
        const foundPost = res.data.find((p) => p.id === parseInt(id));
        setPost(foundPost || null);
      } catch (err) {
        console.error("Erro ao carregar post:", err);
      }
    };

    loadPost();
  }, [id]);

  if (!post) return <p>Carregando...</p>;

  return (
    <div className="post-page">
      <div className="back-arrow-container">
        <Link to="/" className="back-arrow">ᐊ Voltar</Link>
      </div>

      <div className="post-container">


        <div className="post-comments">
          <CommentList postId={id} />
        </div>
        <div className="post-content">
          <h2>Ideia de: @{post.author?.username}</h2>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>

      </div>
    </div>
  );
};

export default PostPage;
