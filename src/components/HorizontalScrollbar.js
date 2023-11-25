import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex >= data.length - 3 ? 0 : prevIndex + 1
        );
    };
    console.log(bodyPart)
    // console.log(data)
    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 3 : prevIndex - 1
        );
    };

    return (
        <div className="slider relative">
            <div className="image-container my-2 flex px-10 ">
                <div
                    className="image-wrapper flex gap-20 h-full"
                    style={{
                        transform: `translateX(-${currentImageIndex * 9}%)`,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {data.map((item) => (
                        <>
                            {isBodyPart ?
                                <div key={item.id || item} itemID={item.id || item} title={item.id || item} className={item === bodyPart ? `seleted rounded-lg image-item w-[200px] px-7 py-4` : 'p-7 cursor-pointer image-item w-[200px]'}
                                    onClick={() => {
                                        setBodyPart(item);
                                        window.scrollTo({ top: 1200, left: 100, behavior: 'smooth' })
                                    }}>
                                    <img
                                        src="https://inshapegym.co.uk/wp-content/uploads/2023/03/Inshape-Logo-03.png"
                                        alt="slider-img"
                                        className=""
                                    />
                                    <p className="text-center text-2xl font-[500] text-slate-900 capitalize" >
                                        {item}
                                    </p>
                                </div> :

                                <ExerciseCard exercise={item} />
                            }
                        </>
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-green-500 bg-slate-900 pb-1.5 rounded-full px-[.45rem]"
            >
                ←
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-green-500 bg-slate-900 pb-1.5 rounded-full px-[.5rem]"
            >
                →
            </button>
        </div>
    );
};

export default HorizontalScrollbar;
