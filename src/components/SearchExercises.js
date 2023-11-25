import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { fetchData, exercisesOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);


    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExerciseData()
    }, [])



    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
            // console.log(exercisesData.name)
            // console.log(exercisesData)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <div className='SearchExercises'>
            <div className="SearchHead mt-10 text-3xl sm:text-4xl md:text-5xl font-[500] text-slate-900 text-center">Awesome Exercises You Should Know</div>
            <div className="SearchBox text-center mt-5">
                <input type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder='Search Exercises'
                    className='outline-none px-5 py-2 border rounded-tl-full rounded-bl-full w-[60%] font-[500] border-slate-900 border-r-0' />
                <button
                    className='pl-5 pr-7 py-2 border border-slate-900 rounded-tr-full rounded-br-full bg-green-500'
                    onClick={handleSearch}
                ><FontAwesomeIcon icon={faMagnifyingGlass} fontSize="22px" /></button>
            </div>
            <div className="relative w-full p-[20px] ">
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
            </div>
        </div>
    )
}

export default SearchExercises