import React from "react";
import "../Styles/main.css";

const Post = ({ post: { title, body,
imgUrl, author, page}, index }) => {
  return (  
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <a href={page}><img className="image" src={imgUrl} alt="post" /></a>
      <p>{body}</p>
      <div className="info">      
        <h4>Written by: {author}</h4>
      </div>
    </div>
  );
};
  

export default Post;