import React, { useEffect, useState } from 'react';
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard';
import Pagination from '@mui/material/Pagination';

const Exercises = ({ exercises, bodyPart, setExercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExersice = currentPage * exercisesPerPage;
    const indexOfFirstExersice = indexOfLastExersice - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExersice, indexOfLastExersice)
    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scroll({ top: 1200, behavior: "smooth" })
    }

    useEffect(() => {

        const fetchExercisesData = async () => {
            let exerciseData = [];

            if (bodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
            }
            else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
            }
            setExercises(exerciseData)
        }

        fetchExercisesData();
    }, [bodyPart])


    return (
        <div className='p-[46px]'>
            <h3 className='text-3xl mb-[46px]'>Showing Results</h3>
            <div className="flex flex-wrap justify-center lg:gap-[110px] sm:gap-[70px]">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} index={index} exercise={exercise} />
                ))}
            </div>
            <div className="mt-[110px] flex justify-center">
                {exercises.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                        boundaryCount={0}
                    />
                )}
            </div>
        </div>
    )
}

export default Exercises