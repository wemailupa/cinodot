
import React from "react";
import "../Styles/main.css";
import CePost from "./CePost";

import imageOne from "./computerEngineering-scheduling.jpg";
import imageTwo from "./computerEngineering-compArch.jpg";
import imageThree from "./computerEngineering-programLanguages.jpg";
import imageFour from "./computerEngineering-softwareEngineering.jpg";
import imageFive from "./computerEngineering-operatingSystems.jpg";
import imageSix from "./computerEngineering-compiler.jpg";



  const CePosts = () => {

    const CePostsA = [
     
      {
        title:'SCHEDULING',
        body:'There are many types of computer applications such as Machine Learning, or Artificial Intelligence',
        imgUrl: imageOne,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: './CaPosts',
     
      },
      {
        title:'COMPUTER ARCHITECTURE',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageTwo,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'SOFTWARE AND PROGRAMMING LANGUAGES',
        body: 'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
        imgUrl: imageThree,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: '',
     
      },
      {
        title:'SOFTWARE ENGINEERING',
        body: 'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
        imgUrl: imageFour,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: '',
     
      },
      {
        title:'OPERATING SYSTEMS',
        body: 'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
        imgUrl: imageFive,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: '',
     
      },
 
      {
        title:'COMPILERS',
        body: 'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
        imgUrl: imageSix,
        author:'Edward Pablo de Sa Sauerbrunn',
        page: '',
     
      },
 
          
    ];
    return (
      <div className="cePosts-container">
        {CePostsA.map((post, index) => (
          <CePost key={index} index={index} post={post} />
         
        ))}

      </div>
      );
  };
 

  

export default CePosts;