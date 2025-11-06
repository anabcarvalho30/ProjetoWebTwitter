import React, { useState } from "react";
import api from "../services/api";

const PostForm = ({ authorId, onPostCreated }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Digite algo para postar!");

    try {
      const response = await api.post("/posts", { authorId, content });
      onPostCreated(response.data);
      onPostCreated(content);
      setContent("");
    } catch (err) {
      console.error("Erro ao criar post:", err);
      alert("Não foi possível criar o post.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="Comece assim: Seria muito irado que na minha festa tivesse..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Postar!</button>
    </form>
  );
};

export default PostForm;
