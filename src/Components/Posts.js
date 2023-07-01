import React from "react";
import "../Styles/main.css";
import Post from "./Post";


  const Posts = () => {

    const blogPosts = [
      {
        title: "COMPUTER SCIENCE",
        body: `Fundamental areas of computer science Computer science is the study of computation, information, and automation. 
        Computer science spans theoretical disciplines to applied disciplines. 
        Though more often considered an academic discipline, computer science is closely related to computer programming. `,
        author: "google.com",
        imgUrl:'https://iibawards-prod.s3.amazonaws.com/projects/images/000/002/333/page.png?1505504208',
        page: '/CsPosts',
      },
     /* {
        title: "MATHEMATICS",
        body: `the abstract science of number, quantity, and space. Mathematics may be studied in its own right ( pure mathematics ), or as it is applied to other disciplines such as physics and engineering ( applied mathematics ). `,
        author: "google.com",
        imgUrl: 'https://live.staticflickr.com/272/32264483720_c51bdde679_b.jpg',
        page: '',
       
      },
      {
        title: "CHEMISTRY",
        body: `Chemistry is the scientific study of the properties and behavior of matter. It is a physical science under natural sciences that covers the elements that make up matter to the compounds made of atoms`,
        author: "google.com",
        imgUrl:"https://live.staticflickr.com/4167/34536396162_05f8039ed6_b.jpg",
        page: '',
        
      },
      {
        title: "PHYSICS",
        body: `Physics is the natural science of matter, involving the study of matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.`,
        author: "google.com",
        imgUrl:"https://www.sciencealert.com/images/2016-12/processed/PhysicsMap_1024.jpg",
        page: '',
      
      },
      {
        title: "FULLSTACK DEVELOPER",
        body: `the entirety of a computer system or application, comprising both the front end and the back end. `,
        author: "google.com",
        imgUrl:"https://thedeveloperblog.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyyiky4w%2Fproduction%2Fce347b99fb889ecf809f24abdd3ef3d44c58ce62-2729x1657.png&w=2048&q=75",
        page: '',
      },
      {
        title: "DATA ANALYST ROADMAP",
        body: `Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. `,
        author: "google.com",
        imgUrl:"https://media.geeksforgeeks.org/wp-content/uploads/20220923112010/DataAnalystRoadmap.png",
        page: '',
      },

      {
        title: "CIVIL ENGINEERING",
        body: `the branch of engineering concerned with the design and maintenance of roads, bridges, dams, and similar structures.`,
        author: "google.com",
        imgUrl:"https://coreconsultingengineers.com.au/wp-content/uploads/elementor/thumbs/30.11.2021_12.38.19_REC_11zon-piguvndzr1zltqqqdq7ltlz63yt5b5kyk3u1mj0s38.png",
        page: '',
      },*/
    ];

    return (
      <div className="posts-container">
        {blogPosts.map((post, index) => (
          <Post key={index} index={index} post={post} />
         
        ))}
      </div>

      );
        };
 

  

export default Posts;