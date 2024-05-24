import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';

const VideoBackground = ({id}) => {
    useMovieTrailer(id);
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    
    return (
        <div className='w-screen bg-gradient-to-r from-black'>
            {trailerVideo && (<iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1$showinfo=0`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>)}
        </div>
    )
}

export default VideoBackground