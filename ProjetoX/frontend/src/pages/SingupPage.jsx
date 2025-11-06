import React, { useState, useEffect } from "react";
import api from "../services/api";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", username: "", bio: "" });
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users", form);
      const newUserId = res.data.id;
      const newUsername = res.data.username;

      localStorage.setItem("userId", newUserId);
      localStorage.setItem("username", newUsername);

      setUserId(newUserId);
      setMessage(`Usuário criado: ${newUsername} (ID e username salvos localmente!)`);

      setForm({ name: "", username: "", bio: "" });
      fetchUsers();
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage(
        "Erro: " + (error.response?.data?.message || "Não foi possível criar usuário.")
      );
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="principal">
      <div className="page">
        <h1>Crie sua conta!</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Nome"
            onChange={handleChange}
            value={form.name}
            required
          />
          <input
            name="username"
            placeholder="Usuário"
            onChange={handleChange}
            value={form.username}
            required
          />
          <textarea
            name="bio"
            placeholder="Bio"
            onChange={handleChange}
            value={form.bio}
          />
          <button type="submit">Cadastrar</button>
        </form>

        {message && <p>{message}</p>}

        {userId && (
          <small style={{ paddingTop: "10px", display: "block", textAlign: "center", marginBottom: "10px", color: "#8d8d8dff" }}>
            ID salvo localmente: <code>{userId}</code><br />
            Username salvo: <code>{localStorage.getItem("username")}</code>
          </small>
        )}
      </div>

      <div className="page">
        <h2>Usuários Cadastrados</h2>
        <div className="user-list">
          {users.length === 0 ? (
            <p style={{ color: "#aaa" }}>Nenhum usuário cadastrado ainda.</p>
          ) : (
            users.map((u) => (
              <div key={u.id} className="user-card">
                <strong>@{u.username}</strong>
                <small>Nome: {u.name}</small><br />
                <small>ID: {u.id}</small>
                {u.bio && <p>Bio: {u.bio}</p>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
