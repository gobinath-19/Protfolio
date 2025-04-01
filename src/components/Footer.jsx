import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
        <div  className='bgg md:max-w-full sm:h-[150px] px-12 py-4 md:py-0 flex justify-between mx-auto'>
            <div className='flex flex-col gap-5 '>
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-blue-500  to-teal-400 font-semibold animate-pulse inline-block'><a href='#home'>K. Gobinath</a></span>
                <p className='text-gray-600'>&copy; WebDev@2025</p>
            </div>
            <div className="flex gap-4 sm:mt-0">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/gobinath-k-8b3b142a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-600 hover:text-blue-500 text-2xl transition-all duration-300 hover:scale-120" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/gobinath-19" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-600 hover:text-gray-200 text-2xl transition-all duration-300 hover:scale-120" />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/gobinath_k19?igsh=ODQ1NzF3ZThtaTFl" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-600 hover:text-pink-500 text-2xl transition-all duration-300 hover:scale-120" />
                </a>

                {/* Email */}
                <a href="mailto:gobinath1019@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-gray-600 hover:text-orange-500 text-2xl transition-all duration-300 hover:scale-120" />
                </a>

                {/* Whatsapp */}
                <a href="https://wa.me/+919363118493" target="_blank" rel="noopener noreferrer">
                    <AiOutlineWhatsApp className="text-gray-600 hover:text-green-500 text-2xl transition-all duration-300 hover:scale-120" />
                </a>

                {/* Add more social media icons as needed */}


            </div>
        </div>
    )
}

export default Footer