import React from 'react'

const MovieHeader = ({movie, color}) => {
    return(
        <div style={{backgroundColor: color, fontSize: color}}> MOVIE HEADER {movie.title} {color}</div>
    )
}
export default MovieHeader