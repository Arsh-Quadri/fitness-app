import React from 'react'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: 'https://cdn.pixabay.com/photo/2017/02/01/11/02/boy-2029661_960_720.png',
            name: bodyPart,
        },
        {
            icon: 'https://www.pngall.com/wp-content/uploads/12/Running-Silhouette-PNG-Image-HD.png',
            name: target,
        },
        {
            icon: 'https://clipart-library.com/images_k/workout-silhouette-png/workout-silhouette-png-22.png',
            name: equipment,
        }
    ]
    return (
        <div className='flex flex-col md:flex-row items-center p-[20px] pt-[100px]'>
            <img src={gifUrl} alt={name} loading='lazy' className='w-[100%] md:w-[40%]' />
            <div className='gap-[20px] sm:gap-[35px]'>
                <p className='text-4xl font-[500]'>{name}</p>
                <p className='text-lg'>Exercises keep you strong. {name} is one of the best
                    exercises to target your {target}. It will help you improve your
                    mood and gain energy.</p>
                {extraDetail.map((item) => (
                    <div className="flex flex-row mt-5 items-center gap-[24px] capitalize font-[500]" key={item.name}>
                        <button className='w-16 p-3 bg-green-500 rounded-full'>
                            <img src={item.icon} alt={item.name} />
                        </button>
                        <p className='text-xl'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail