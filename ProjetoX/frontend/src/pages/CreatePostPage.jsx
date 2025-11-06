import React, { useEffect, useState } from "react";
import PostForm from "../components/PostForm";

const CreatePostPage = () => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const savedId = localStorage.getItem("userId");
    const savedUsername = localStorage.getItem("username");

    console.log("Recuperado do localStorage:", { savedId, savedUsername });

    if (savedId) setUserId(savedId);
    if (savedUsername) setUsername(savedUsername);
  }, []);

  const handlePostCreated = (content) => {
    const displayName = username || "usuário";

    setNotification(`@${displayName} postou: "${content}"`);

    setTimeout(() => setNotification(""), 5000);
  };

  return (
    <div className="CreatePost">
      <h1><i className="fa-solid fa-comments"></i> Descreva suas ideias!</h1>

      {!userId ? (
        <p>Nenhum usuário encontrado! Cadastre-se para postar suas ideias!</p>
      ) : (
        <>
          <small style={{ display: "block", textAlign: "center", marginBottom: "10px", color: "#8d8d8dff" }}>
            Seu ID conectado: <code>{userId}</code><br />
            Nome de usuário: <code>{username || "(não encontrado)"}</code>
          </small>


          <PostForm
            authorId={userId}
            onPostCreated={handlePostCreated}
          />
        </>
      )}

      {notification && (
        <div className="notific">
          {notification}
        </div>
      )}
    </div>
  );
};

export default CreatePostPage;
