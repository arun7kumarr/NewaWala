// import React, { Component } from 'react'
import React from 'react'

const NewsItem =(props)=> {

    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className="mx-2 my-3">
        <div className="card ">
         <img src={!imageUrl?"https://sportshub.cbsistatic.com/i/r/2023/06/24/c3dec174-9b38-4e24-a8d0-8441a2b3ee46/thumbnail/1200x675/25fe3f20d226a93545fe9a920b8b70b8/gettyimages-15009816171.jpg":imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By <span className='text-primary'>{!author?'Unknown':author}</span>  on <span className='text-dark'>{new Date(date).toGMTString()}</span></small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
         </div>
        </div>
      </div>
    )
}

export default NewsItem
