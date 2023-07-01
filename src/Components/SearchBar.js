<<<<<<< HEAD
import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa"
import './SearchBar.css';

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json)=> {
          const results = json.filter((user)=>{
            return (
              value && 
              user && 
              user.name && 
              user.name.toLowerCase().includes(value)
            );

          });
        setResults(results);
      });
    }
      
      const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      }


    
  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input placeholder="type to search..." value={input} onChange={(e)=> handleChange(e.target.value)}/>
    </div>
  );
}

=======
import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa"
import './SearchBar.css';

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json)=> {
          const results = json.filter((user)=>{
            return (
              value && 
              user && 
              user.name && 
              user.name.toLowerCase().includes(value)
            );

          });
        setResults(results);
      });
    }
      
      const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      }


    
  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input placeholder="type to search..." value={input} onChange={(e)=> handleChange(e.target.value)}/>
    </div>
  );
}

>>>>>>> 7a8630f9d7e81b4c0ca9cce5f916758f7145fc30
export default SearchBar