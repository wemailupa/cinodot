import React from "react";
import "../Styles/main.css";



const TcPost = ({ post: { title, body,
imgUrl, author, page}, index  }) => {
  return (  
   
      <div className="tcPost-container">
        <h1 className="tcHeading">{title}</h1>
        <a href={page}><img className="tcImage" src={imgUrl} alt="tcPostI"/></a>
        <p>{body}</p>
        <div className="tcInfo">      
          <h4>Written by: {author}</h4>
        </div>
      </div>
   
  );
};
  

export default TcPost;