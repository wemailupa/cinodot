
import React from "react";
import "../Styles/main.css";
import CaPost from "./CaPost";

import imageOne from "./applications-machineLearning.jpg";
import imageTwo from "./applications-computerVision.jpg";
import imageThree from "./applications-imageProcessing.jpg";
import imageFour from "./applications-optimization.jpg";
import imageFive from "./applications-AI.jpg";
import imageSix from "./applications-naturalLanguageProcessing.jpg";
import imageSeven from "./applications-booleanSatisfiability.jpg";
import imageEight from "./applications-robotics.jpg";
import imageNine from "./applications-telePresence.jpg";
import imageTen from "./applications-superComputing.jpeg";
import imageEleven from "./applications-augmentedReality.jpg";
import imageTwelve from "./applications-virtualReality.jpg";
import imageThirteen from "./applications-humanComputerInteraction.jpg";
import imageFourteen from "./applications-computationalScience.jpg";
import imageFifteen from "./applications-simulation.jpg";
import imageSixteen from "./applications-automataTheory.jpg";
import imageSeventeen from "./applications-internetOfThings.jpg";
import imageEighteen from "./applications-hacking.jpg";
import imageNineteen from "./applications-bigData.jpg";





  const CaPosts = () => {

    const CaPostsA = [

      {
        title: 'MACHINE LEARNING',
        body: 'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageOne,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'COMPUTER VISION',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageTwo,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'IMAGE PROCESSING',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageThree,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'OPTIMISATION',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageFour,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'ARTIFICIAL INTELLIGENCE',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageFive,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'NATURAL LANGUAGE PROCESSING',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageSix,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'BOOLEAN SATISFIABILITY',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageSeven,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'ROBOTICS',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageEight,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'TELEPRESENCE',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageNine,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'SUPER COMPUTING',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageTen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'AUGMENTED REALITY',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageEleven,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'VIRTUAL REALITY',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageTwelve,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'HUMAN COMPUTER INTERACTION',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageThirteen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'COMPUTATIONAL SCIENCE',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageFourteen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'SIMULATION',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageFifteen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'AUTOMATA THEORY',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageSixteen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      
      {
        title:'INTERNET OF THINGS',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageSeventeen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'HACKING',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageEighteen,
        author:'WIKIPEDIA',
        page: '',
     
      },
      {
        title:'BIG DATA',
        body:'Computer engineering is a branch of electrical engineering and computer science that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.',
        imgUrl: imageNineteen,
        author:'WIKIPEDIA',
        page: '',
     
      },
       
      
      
    ];
    return (
      <div className="caPosts-container">
        {CaPostsA.map((post, index) => (
          <CaPost key={index} index={index} post={post} />
         
        ))}

      </div>
      );
  };
 

  
export default CaPosts;