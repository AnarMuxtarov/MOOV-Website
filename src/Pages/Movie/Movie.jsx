import React from 'react'
import MovieBanner from '../../Components/Movie/MovieBanner/MovieBanner'
import MovieSearch from '../../Components/Movie/MovieSearch/MovieSearch'
import Membership from '../../Components/Main/Membership/Membership'
 



const Movie = () => {
  return (
    <div>
 <MovieBanner/>
 <MovieSearch/>
  <Membership/>
    </div>
  )
}

export default Movie