import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import spring from '../assets/springboot.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import jwt from '../assets/jwt.png'
import Tech from '../helpers/Tech'



const Skills = () => {
    return (
        <div >
            {/* skills */}

            <p data-aos='fade-right' className=' text-4xl mb-3 font-bold bg-gradient-to-r bg-pink-500 text-transparent bg-clip-text from-blue-500 to-teal-400  inline-block ml-6'>Skills</p>

            {/* Front-end Tech */}
            <div data-aos='fade-up' className='bgg  border border-gray-700 sm:my-5 bg-black text-gray-400 px-8 py-4 md:h-auto max-w-[100%] md:max-w-[1200px] md:rounded-t-4xl mx-auto flex flex-wrap justify-center items-center gap-6'>

                {/* Tech Title */}
                <div className='flex flex-col items-center w-full md:w-auto text-center'>
                    <h2 className='text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:m-5'>
                        My<br />Front-end<br />Stack
                    </h2>
                </div>

                {/* HTML */}
                <Tech srcPath={html} srcAlt={"HTML skill/"} srcName='Html' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* CSS */}
                <Tech srcPath={css} srcAlt={"CSS skill"} srcName='CSS' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* JavaScript */}
                <Tech srcPath={javascript} srcAlt={"Javascript language"} srcName='Javascript' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* Tailwind CSS */}
                <Tech srcPath={tailwind} srcAlt={"Tailwind CSS tech"} srcName='Tailwind' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* React */}
                <Tech srcPath={react} srcAlt={"React JS tech"} srcName='React' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* Add more technologies here*/}

            </div>


            {/* Back-end Tech*/}
            <div data-aos='fade-up' className='bgg border border-gray-700 sm:my-5 bg-black text-gray-400 px-8 py-4 md:h-auto max-w-[100%] md:max-w-[1200px] md:rounded-b-4xl mx-auto flex flex-wrap justify-center items-center gap-6'>

                {/* Tech Title */}
                <div className='flex flex-col items-center w-full md:w-auto text-center'>
                    <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:m-5'>
                        My<br />Back-end<br />Stack
                    </h2>
                </div>

                
                {/* express */}
                <Tech srcPath={express} srcAlt={"Express language"} srcName='Express' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* mongodb */}
                <Tech srcPath={mongodb} srcAlt={"MongoDB tech"} srcName='MongoDB' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* mysql */}
                <Tech srcPath={mysql} srcAlt={"MySQL tech"} srcName='MySQL' width={100} height={100} outerSmallScreenW='80px' outerLargeScreenW='100px' />

                {/* jwt */}
                <Tech srcPath={jwt} srcAlt={"JWT tech"} srcName='JWT' width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />

                {/* Add more technologies here*/}

            </div>
        </div>

    )
}

export default Skills