import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    // Early Return
    if (!movies.length) return;
    const { original_title, overview, id } = movies[0];

    return (
        <div className='w-full pt-[30%] bg-black md:pt-0 md:bg-none'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer