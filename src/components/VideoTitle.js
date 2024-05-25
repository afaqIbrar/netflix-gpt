import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='md:px-24 pt-72 pl-24 absolute text-white w-full aspect-video bg-gradient-to-r from-black'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-2/4'>{overview}</p>
            <div>
                <button className=' text-black p-4 px-12 text-xl rounded-md bg-white hover:bg-opacity-80'> Play</button>
                <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-md bg-opacity-40 hover:bg-opacity-80'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle