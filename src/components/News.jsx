import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handlePrevClick = () => {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
    }
  }
  const handleNextClick = () => {
    if (page * 10 < totalResults) { // Assuming 10 articles per page
      setLoading(true);
      setPage(page + 1);
    }
  }

  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    // props.setProgress(0);
    setLoading(true);
    // let url = `https://newsapi.org/v2/everything?q=${props.type}&from=2023-08-17&to=2023-08-17&sortBy=popularity&apiKey=e12c433cda684f7fbd732fb5bd07c2e2&page=${page}&pageSize=${props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e12c433cda684f7fbd732fb5bd07c2e2&page=${page}&pageSize=${props.pageSize}`;


    fetch(url)
      .then(response => response.json()) // Parse the response to JSON
      .then(data => {
        setData(data.articles); // Assuming you want to set the 'articles' part of the response to state
        setTotalResults(data.totalResults);
        setLoading(false);
        document.title =`${capitalizeFirstLetter(props.category)} - TechTrends`;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    // props.setProgress(100);

  }, [props.category, props.country, page, props.pageSize]); // Empty dependency array to run this effect only once

  return (
    // Your JSX to render the data
    <>
      <div className="container my-3">
        <h1 style={{margin: "35px 0px"}}>TechTrends - Tech News Aggregator</h1>
        {loading && <Spinner />}
        {!loading && (
          <div className="row">
            {data && data.length > 0 ? (
              data.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author = {element.author}
                    date = {element.publishedAt}
                    source = {element.source.name}
                  />
                </div>
              ))
            ) : (
              <strong>No articles available.</strong>
            )}
          </div>
        )}
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={page <= 1} onClick={handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
          <button type="button" disabled={page * 10 >= totalResults} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    </>

  );
}

News.propTypes = {
  country : PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

News.defaultProps = {
  country: "in",
  pageSize:3,
  category:"technology"
}

export default News