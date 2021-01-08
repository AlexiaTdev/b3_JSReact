import React, { useMemo } from 'react'

const Movie = ({movie}) => {
    const style = useMemo(() => {
        return {
            backgroundImage: `url(${movie.image})`,
            height: "15em",
            width: "25em"
        }
    }, [movie])
    
    return(
        <div className="movie" style={style}>
            
        </div>
    )
}


export default Movie