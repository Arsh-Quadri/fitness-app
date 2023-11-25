import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise, index }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className='exercise-card rounded-lg lg:w-[25%] md:w-[40%] sm:w-[50%] w-[95%] pb-10 sm:pb-0'>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <div className="flex">
                <button className='ml-[21px] bg-green-500 px-2 py-1 text-[14px] rounded-md capitalize font-[500]'>{exercise.bodyPart}</button>
                <button className='ml-[21px] bg-slate-900 text-white px-2 py-1 text-[14px] rounded-md capitalize font-[500]'>{exercise.target}</button>
            </div>
            <p className='ml-[21px] mt-[11px] pb-[10px] capitalize text-[22px] text-slate-900 font-[500]'>{exercise.name}</p>
        </Link>
    )
}

export default ExerciseCard