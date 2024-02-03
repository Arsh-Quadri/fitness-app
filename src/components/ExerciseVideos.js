import React from 'react'
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    // console.log({ exerciseVideos } + '111')
    if (!exerciseVideos.length) return (<Loader />);
    return (
        <div className='p-[20px] mt-[20px] sm:mt-[50px] md:mt-[70px] lg:mt-[100px]'>
            <p className='text-4xl font-[600] mb-[33px]'>
                Watch <span className='text-green-600 capitalize'>{name}</span> exercise videos
            </p>
            <div className='flex justify-center flex-wrap items-center flex-row sm:flex-row gap-[10px] sm:gap-[30px] md:gap-[60px]'>
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a key={index} className='exercise-video w-[100%] sm:w-[25%]' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <div>
                            <p className='text-xl font-[400]'>{item.video.title}</p>
                            <p className='text-md'>{item.video.channelName}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ExerciseVideos