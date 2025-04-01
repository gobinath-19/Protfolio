import React from 'react'
import proj1 from '../assets/proj1.png'

//! WorkoutX 

const Proj1 = () => {
    return (
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
            <img src={proj1} alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                 <div className='pt-8 text-center'>
                    <a href='https://protfolio-tau-henna.vercel.app/' target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>live</button>
                    </a>
                    <a href='https://github.com/gobinath-19/Protfolio' target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proj1