import React from "react";
import "../Styles/main.css";



const CaPost = ({ post: { title, body,
imgUrl, author, page}, index  }) => {
  return (  
   
      <div className="caPost-container">

        <div className="caCard">

          <div className="caFront">           
            <h1 className="caHeading">{title}</h1>
            <a href={page}><img className="caImage" src={imgUrl} alt="caPostI"/></a>
            
          </div>

          <div className="caBack">
            <div className="caInfo">   
              <p>{body}</p>  
              <h4>Written by: {author}</h4>
            </div>
          </div>

      </div>



      </div>
   
  );
};
  


export default CaPost;