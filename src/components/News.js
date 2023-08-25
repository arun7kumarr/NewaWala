import React, { useEffect ,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const[articles,setArticles] = useState([]);
  const[loading,setLoading] = useState(false);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);
  
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


useEffect(()=>{
  document.title = `${capitalizeFirstLetter(props.category)} - NewsWala`
  updateNews();
   },[])
 

    const  updateNews =async()=>{
    props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
      let data = await fetch(url);
      props.setProgress(30);
      let parsedata = await data.json();
      props.setProgress(70);
      setArticles(parsedata.articles)
      setTotalResults(parsedata.totalResults)
      
      props.setProgress(100);
      
    }
    //const handlePrevClick = async()=>{
      // console.log('pre')
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=95b6baae46474babbdecfa68dcae9b6e&page=${this.state.page - 1}&pageSize=${props.pagesize}`;
      // let data = await fetch(url);
      // let parsedata = await data.json()
      
      // this.setState({
      //   page:this.state.page-1,
      //   articles:parsedata.articles
      // })
    //   this.setState({page:this.state.page-1});
    //   this.updateNews();
    // }

    // const handleNextClick = async()=>{
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=95b6baae46474babbdecfa68dcae9b6e&page=${this.state.page + 1}&pageSize=${props.pagesize}`;
      // let data = await fetch(url);
      // let parsedata = await data.json()
     
      // this.setState({
      //   page:this.state.page+1,
      //   articles:parsedata.articles
      // })
    //   this.setState({page:this.state.page+1});
    //   this.updateNews();
    // }


    const fetchMoreData = async() => {
      
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=95b6baae46474babbdecfa68dcae9b6e&page=1&pageSize=${page+1}`;
      setPage(page+1);
      let data = await fetch(url);
      let parsedata = await data.json()
      setArticles(articles.concat(parsedata.articles))
      setTotalResults(parsedata.totalResults)
      
    };

   
    return (
      <div className='container '>
        <h2 className='text-center color text-info ' style={{margin: '35px 0px',marginTop: '90px'}}>NewsWala-Top {capitalizeFirstLetter(props.category)}  Headline</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="row">
            {articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                 <NewsItem title={element.title?element.title:""} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} ></NewsItem>
               </div>
            })}   
         </div>
         </InfiniteScroll>
         {/* <div className="container d-flex justify-content-between">
         <button  disabled={this.state.page<=1} type="button"  onClick ={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
         <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button"  onClick ={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
         </div> */}
         {/* <BeatLoader color="#36d7b7" /> */}
      </div>
    )
  
}

News.defaultProps = {
  country:"in",
  pagesize:8,
  category:'general',
}

News.propTypes ={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
}

export default News
