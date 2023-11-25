import { faRightFromBracket, faRightLeft, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <>
            <div className='Home bg-slate-900 w-full h-screen'>
                <div className="">
                    <div className='absolute top-[18%] sm:top-[35%] left-[8%]'>
                        <p className="para1 text-3xl sm:text-5xl md:text-6xl text-white">DON'T STOP</p>
                        <p className="para2 text-2xl sm:text-4xl md:text-5xl pt-4 text-white">FITNESS IS NOT DESTINATION  <br /> IT IS WAY OF LIFE</p>
                        <p className=""></p>
                        <button className='getStarted text-white bg-green-500 mt-4 px-5 py-2 rounded-md text-xl'>Get Started &nbsp; <FontAwesomeIcon icon={faRightLong} /></button>
                    </div>

                    <div style={{ clipPath: 'polygon(81% 0, 100% 0, 100% 100%, 50% 100%)' }} className='background z-10 bg-green-500 h-screen overflow-visible'>
                    </div>
                    <img src="https://pngimg.com/uploads/fitness/fitness_PNG194.png" alt="" className='heroImg z-20 absolute top-[20%] sm:top-[15%] sm:p-0 sm:left-[50%] md:left-[55%] lg:left-[60%] sm:w-[300px] md:w-[340px] lg:w-[380px]' />
                </div>
            </div>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        </>
    )
}

export default Home