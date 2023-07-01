import React from "react";
import "../Styles/main.css";
import CsPost from "./CsPost";



import imageOne from "./applications-general.jpg";
import imageTwo from "./computerEngineering-general.jpg";
import imageThree from "./theoreticalComputerSci-general.jpg";

  const CsPosts = () => {

    const CsPostsA = [
     
      {
        title:'COMPUTER APPLICATIONS',
        body:'There are many types of computer applications such as Machine Learning, or Artificial Intelligence',
        imgUrl: imageOne,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: './CaPosts',
     
      },
      {
        title:'COMPUTER ENGINEERING',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageTwo,
        author:'WIKIPEDIA',
        page: './CePosts',
     
      },
      {
        title:'THEORETICAL COMPUTER SCIENCE',
        body: 'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
        imgUrl: imageThree,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: './TcPosts',
     
      },
 
      
    ];
    return (
      <div className="csPosts-container">
        {CsPostsA.map((post, index) => (
          <CsPost key={index} index={index} post={post} />
         
        ))}

      </div>
      );
  };
 

  

export default CsPosts;