import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <div className='mt-0 md:mt-20px p-[20px]'>
            <p className='text-3xl font-[500] mb-5'>Exercises that <span className='text-green-600'>target</span> the same muscle group</p>
            <div className="flex p-2">
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </div>

            <p className='text-3xl font-[500] mb-5'>Exercises that use the <span className='text-green-600'>same</span> equipment</p>
            <div className="flex p-2">
                {targetMuscleExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </div>
        </div>
    )
}

export default SimilarExercises