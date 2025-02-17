import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'


function RowList() {
  return (
    <div>
      <Row 
      title= "NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.FetchTrending}/>
      <Row title= "Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorsMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomancesMovies}/>
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaryMovies}/>
   

    </div>
  )
}

export default RowList
