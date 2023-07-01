import React from "react";
import "../Styles/main.css";



const CsPost = ({ post: { title, body,
imgUrl, author, page}, index  }) => {
  return (  
   
      <div className="csPost-container">
        <h1 className="csHeading">{title}</h1>
        <a href={page}><img className="csImage" src={imgUrl} alt="csPostI"/></a>
        <p>{body}</p>
        <div className="csInfo">      
          <h4>Written by: {author}</h4>
        </div>
      </div>
   
  );
};
  

export default CsPost;