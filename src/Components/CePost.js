import React from "react";
import "../Styles/main.css";



const CePost = ({ post: { title, body,
imgUrl, author, page}, index  }) => {
  return (  
   
      <div className="cePost-container">
        <h1 className="ceHeading">{title}</h1>
        <a href={page}><img className="ceImage" src={imgUrl} alt="cePostI"/></a>
        <p>{body}</p>
        <div className="caInfo">      
          <h4>Written by: {author}</h4>
        </div>
      </div>
   
  );
};
  

export default CePost;