import Profile from '../assets/profile12.png';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Hero = () => {

    const [text] = useTypewriter({
        words: ['Front-End-Developer', 'Back-End-Developer', 'Designer'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 90,
    });



    return (
        <section id="hero" className='pt-20 flex flex-col  md:flex-row  primary-color text-white sm:ml-10'>
            <div className='flex flex-col md:w-1/2 ml-6 pt-14 md:pl-36'>
                <div data-aos="fade-right" >
                    <h3 className='font-bold text-3xl sm:text-4xl'>Hello, It's Me</h3>
                    <h1 className='font-bold text-6xl sm:text-7xl mb-2'>Gobinath K</h1>
                    <h3 className='font-bold text-3xl sm:text-4xl mb-3'>And I'm a <span className='font-bold text-3xl text-color'> {text} </span><Cursor /></h3>
                    <p className='sm:text-2xl'>
                        I'm a passionate web developer who loves crafting sleek, user-friendly experiences and dreams big, both in code and life
                    </p>
                </div>
                <div className="flex gap-3 mt-10 sm:ml-20 " >
                    <button data-aos='fade-up' data-aos-delay="500" className=' border-2 border-[#2db2ff] rounded-full p-1 sm:p-3 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://www.linkedin.com/in/gobinath-k-8b3b142a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-3xl sm:text-5xl text-[#2db2ff] hover:text-black transition duration-300">
                            <FaLinkedinIn />
                        </a>
                    </button>
                    <button data-aos='fade-down' data-aos-delay="600" className='border-2 border-[#2db2ff] rounded-full p-1 sm:p-3 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://github.com/gobinath-19" className=" sm:text-5xl text-3xl text-[#2db2ff] hover:text-black transition duration-300 ">
                            <AiOutlineGithub />
                        </a>
                    </button>
                    <button data-aos='fade-up' data-aos-delay="700" className='border-2 border-[#2db2ff] rounded-full p-1 sm:p-3 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://wa.me/+919363118493" className="sm:text-5xl text-3xl text-[#2db2ff] hover:text-black transition duration-300">
                            <AiOutlineWhatsApp />
                        </a>
                    </button>
                    <button data-aos='fade-down' data-aos-delay="800" className='border-2 border-[#2db2ff]  rounded-full p-1 sm:p-3 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://www.instagram.com/gobinath_k19?igsh=ODQ1NzF3ZThtaTFl" className="text-3xl sm:text-5xl text-[#2db2ff] hover:text-black transition duration-300">
                            <AiOutlineInstagram />
                        </a>
                    </button>
                    <button data-aos='fade-up' data-aos-delay="900" className='border-2 border-[#2db2ff] rounded-full p-1 sm:p-3 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="mailto:gobinath1019@gmail.com" className="text-3xl sm:text-5xl text-[#2db2ff] hover:text-black transition duration-300">
                            <AiOutlineMail />
                        </a>
                    </button>


                </div >
                <a data-aos='fade-up' data-aos-delay="1500" href='../../assets/Gobinath-CV.pdf' download='Gobinath-CV.pdf'>
                    <button className='sm:ml-44 ml-14 mt-5 text-xl sm:text-3xl text-[#1f242d] flex justify-start s-color rounded-full p-8 font-semibold  md:max-w-40 sm:w-64 sm:mt-10 items-center hover:shadow-[0_0_0] shadow-[0_0_15px_#2db2ff] transition duration-300'>Download CV</button>
                </a>
            </div>

            <div className="flex justify-center md:w-1/2 sm:mt-10 md:w-full sm:ml-20 sm:w-3/4 sm:h-[300px]  home-img mt-10" data-aos='fade-left' >
                <img  src={Profile} alt="Hello" />
            </div>
        </section>

    );
}

export default Hero;