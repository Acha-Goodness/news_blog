import React from 'react';
import "./fulldetails.css";
import { useLocation, Link } from "react-router-dom";

const FullDetails = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div className="new_details">
      <div className="top_bar">
        <Link to="/">
          <p>Home</p>
        </Link>
        <h1>Read Complete Details</h1>
      </div>
      <div className="nws">
        <img src={state[0].urlToImage} alt="img"/>
        <div className="nws_content">
            <h2>{state[0].title}</h2>
            <p className="content">{state[0].content}</p>
            <div className="nws_author">
              <p><b>Author:</b> {state[0].author}</p>
              <p><b>Date Published:</b> {state[0].publishedAt}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FullDetails;
