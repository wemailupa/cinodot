
import React from "react";
import "../Styles/main.css";
import TcPost from "./CsPost";

import imageOne from "./theoreticalComputerSci-computationalComplexity.jpg";
import imageTwo from "./theoreticalComputerSci-informationTheory.jpg";
import imageThree from "./theoreticalComputerSci-cryptography.jpg";
import imageFour from "./theoreticalComputerSci-hardware.jpg";
import imageFive from "./theoreticalComputerSci-turingMachine.jpeg";
import imageSix from "./theoreticalComputerSci-computabilityTheory.jpg";
import imageSeven from "./theoreticalComputerSci-algoSort.jpg";


  const TcPosts = () => {

        const TcPostsA = [
     
            {
              title:'COMPUTATIONAL COMPLEXITY',
              body:'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
              imgUrl: imageOne,
              author:'WIKIPEDIA',
              page: '',
           
            },
            {
              title:'INFORMATION THEORY',
              body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
              imgUrl: imageTwo,
              author:'WIKIPEDIA',
              page: '',
           
            },
            {
              title:'CRYPTOGRAPHY',
              body: 'There are many types of computer applications. To begin with machine learning, computer vision among others. ',
              imgUrl: imageThree,
              author:'Edward Pablo de Sa Sauerbrunn',
              page: '',
           
            },
            {
              title:'HARDWARE',
              body:'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
              imgUrl: imageFour,
              author:'WIKIPEDIA',
              page: '',
           
            },
           
            {
              title:'TURING MACHINE',
              body:'Theoretical computer science is a subset of general computer science and mathematics that focuses on mathematical aspects of computer science such as the theory of computation, lambda calculus, and type theory. It is difficult to circumscribe the theoretical areas precisely.',
              imgUrl: imageFive,
              author:'WIKIPEDIA',
              page: '',
           
            },
            {
              title:'COMPUTABILITY THEORY',
              body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
              imgUrl: imageSix,
              author:'WIKIPEDIA',
              page: '',
           
            },
            {
              title:'ALGORITHMS',
              body: 'There are many types of computer applications. To begin with machine learning, computer vision among others. ',
              imgUrl: imageSeven,
              author:'Edward Pablo de Sa Sauerbrunn',
              page: '',
           
            },
            
            
      
    ];
    return (
      <div className="tcPosts-container">
        {TcPostsA.map((post, index) => (
          <TcPost key={index} index={index} post={post} />
         
        ))}

      </div>
      );
  };
 

  


export default TcPosts;