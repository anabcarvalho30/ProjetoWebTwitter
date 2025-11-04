import React, { useEffect, useState } from "react";
import PostForm from "../components/PostForm";

const CreatePostPage = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const savedId = localStorage.getItem("userId");
    if (savedId) setUserId(savedId);
  }, []);

  return (
    <div className="page">
      <h1>Descreva suas ideias!</h1>

      {!userId ? (
        <p>Nenhum usuário encontrado! Cadastre-se para postar suas ideias!</p>
      ) : (
        <>
          <p style={{ color: "gray", fontSize: "0.9em" }}>
            Seu ID conectado: <code>{userId}</code>
          </p>
          <PostForm authorId={userId} onPostCreated={() => {}} />
        </>
      )}
    </div>
  );
};

export default CreatePostPage;
