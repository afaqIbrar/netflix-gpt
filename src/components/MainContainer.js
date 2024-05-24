import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    // Early Return
    if (!movies.length) return;
    const { original_title, overview } = movies[0];
    console.log('movie', movies[0]);


    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground />
        </div>
    )
}

export default MainContainer