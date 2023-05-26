import React, { useEffect, useState } from 'react';
import "./home.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

 const BaseUrl = "https://newsapi.org/v2/everything?q=apple&from=2023-05-25&to=2023-05-25&sortBy=popularity&apiKey=9c90bd230ae14b4294a8627d9ef672b4";

 const [ newsData, setNewsData ] = useState([]);
//  const [ error, setError ] = useState("");

 useEffect(() => {
    Axios.get(BaseUrl)
        .then(res => {
            setNewsData(res.data.articles);
        }).catch(err => {
            console.log(err.message)
            // setError(err.message);
        })
 }, []);

 const readMore = (indx) => {
   
    var news = newsData.filter(item => newsData.indexOf(item) === indx)
    console.log(news)
    navigate("/fullDetails", {state:news})
 }

  return (
    <div className="news">
        <div className="news_blog">
        <h1>NEWS UPDATE</h1>
                <div className="card">
                    {newsData.slice(0, 4).map((blog, index) => {
                        return(
                            <div key={index} className="news_card">
                                <h2>{blog.title}</h2>
                                <img src={blog.urlToImage} alt="img"/>
                                <p>{blog.description}</p>
                                <button onClick={() => readMore(newsData.indexOf(blog))}>Read More</button>
                            </div>
                        )
                    })} 
                </div>
                <div className="card">
                    {newsData.slice(5, 9).map((blog, index) => {
                        return(
                            <div key={index} className="news_card">
                                <h2>{blog.title}</h2>
                                <img src={blog.urlToImage} alt="img"/>
                                <p>{blog.description}</p>
                                <button onClick={() => readMore(newsData.indexOf(blog))}>Read More</button>
                            </div>
                        )
                    })}
                </div>
            </div>
    </div>
  )};

export default Home;
