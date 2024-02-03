import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <>
            <div className='Home bg-slate-900 w-full h-screen relative overflow-hidden'>
                <div className="bg-gray-300 absolute h-screen w-full z-0" style={{ clipPath: 'polygon(100% 1%, 0% 100%, 100% 100%)' }}></div>
                <div className="flex items-center justify-center z-10">
                    <div className="circle hidden md:block z-0 bg-green-500 mt-40 p-48 rounded-full shad"></div>
                    <div className="text1 text-[60px] sm:text-[100px] lg:text-[170px] left-10 mt-[300px] md:mt-48 text-white absolute">FITNESS</div>
                    <img src="https://pngimg.com/d/fitness_PNG32.png" className='bottom-0 w-[330px] absolute right-0 md:right-auto' alt="" />

                    <div className="right-0 hidden md:block">
                        <div className='absolute top-[42%] right-[10px] lg:right-[50px] text-slate-900'>
                            <p className="text1 text-3xl  lg:text-6xl ">DON'T STOP</p>
                            <p className="para2 text-2xl  lg:text-5xl pt-4 ">FITNESS IS NOT DESTINATION  <br /> IT IS WAY OF LIFE</p>
                            <p className=""></p>
                            <button className='glow-on-hover  mt-4 px-7 py-2 rounded-md text-xl'>Get Started </button>
                        </div>

                    </div>

                </div>
            </div>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        </>
    )
}

export default Home