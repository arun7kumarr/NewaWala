// rcc
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import React,{useState}  from 'react'
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pagesize = 55;
  
  const[progress,setProgress] = useState(0)
  const apikey = process.env.REACT_APP_NEWS_API
  // setProgress = (progress)=>{
  //   setState({progress:progress })
  // }
  
    return (
      <div>
        <Router>
        <NavBar></NavBar>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={()  => setProgress(0)}
      />
        <Routes>
          			<Route exact path="/" element={<News setProgress = {setProgress} apikey = {apikey} key="general" pagesize =  {pagesize} country="in" category="general" />} />
                <Route exact path="/business" element={<News setProgress = {setProgress} apikey = {apikey} key={'business'} pagesize =  {pagesize} country="in" category="business" />} />
                <Route exact path="/entertainment" element={<News setProgress = {setProgress} apikey = {apikey} key="entertainment" pagesize =  {pagesize} country="in" category="entertainment" />} />
                <Route exact path="/health" element={<News setProgress = {setProgress} apikey = {apikey} key="health" pagesize =  {pagesize} country="in" category="health" />} />
                <Route exact path="/science" element={<News setProgress = {setProgress} apikey = {apikey} key="science" pagesize =  {pagesize} country="in" category="science" />} />
                <Route exact path="/sports" element={<News setProgress = {setProgress} apikey = {apikey} key="sports" pagesize =  {pagesize} country="in" category="sports" />} />
                <Route exact path="/technology" element={<News setProgress = {setProgress} apikey = {apikey} key="technology" pagesize =  {pagesize} country="in" category="technology" />} />
                
          			
        </Routes>
        </Router>
      </div>
    )
}

export default App;