import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-2/4'>{overview}</p>
            <div>
                <button className='bg-gray-500 text-white p-4 px-12 text-xl rounded-md bg-opacity-60'>Play</button>
                <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-md bg-opacity-60'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle