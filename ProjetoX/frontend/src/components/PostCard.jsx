import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <p><strong>@{post.author?.username}</strong></p>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small><br></br>
      <Link to={`/post/${post.id}`}><i className="fa-solid fa-comments"></i> Ver comentários
      </Link>
    </div>
  );
};

export default PostCard;
