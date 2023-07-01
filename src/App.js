// import React, {useState} from "react";
import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Posts from "./Components/Posts";
import './Styles/main.css';
import Clock from './Components/Clock';
// import SearchBar from './Components/SearchBar';
// import SearchResultsList from "./Components/SearchResultsList";
import CsPosts from "./Components/CsPosts";
import CaPosts from "./Components/CaPosts";
import CePosts from "./Components/CePosts";
import TcPosts from "./Components/TcPosts";



function App() {
  // const [results, setResults] = useState([]);
  return (
    
      <React.Fragment>
            <Navbar/>
            <div className="main-container">
                {/*<div className="search-bar-container">
                  <SearchBar className='searchBar' setResults={setResults} />
                  {results && results.length > 0 && <SearchResultsList results={results} />}
  </div>*/}
                
                  <Routes>

                    <Route path='/' element={<Posts />}/>                 
                    <Route path='/CsPosts' element={<CsPosts />}/>
                    <Route path='/CaPosts' element={<CaPosts />}/>
                    <Route path='/CePosts' element={<CePosts />}/>
                    <Route path='/TcPosts' element={<TcPosts />}/>

                  </Routes>

                <div class = 'clock'>
                  <Clock/>
                </div>
            </div>
          

            {/* <h1>This site has been visited <span id="visits"></span> times.</h1> */}
      
      </React.Fragment>
   
  );
}

export default App;