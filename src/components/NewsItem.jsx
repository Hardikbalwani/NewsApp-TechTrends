import React from 'react'

const NewsItem = (props) => {

    return (
        <>
            <div className="my-3">
                <div className="card">
                    <div style={{display:"flex" , justifyContent: 'flex-end' , position:'absolute' , right:'0'}} />
                    <span class="badge rounded-pill bg-danger" >
                        {props.source}
                    </span>
                    <img src={!props.imageUrl ? "https://www.digitaltrends.com/wp-content/uploads/2023/08/Sony-X90L-Review-29.jpg?resize=1200%2C630&p=1" : props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}  </h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}</small></p>
                        <a href={props.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem