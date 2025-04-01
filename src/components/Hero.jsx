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
        <section id="hero" className='md:pt-20 pt-10  flex flex-col w-auto md:flex-row  primary-color text-white '>
            <div className='flex flex-col md:w-1/2 md:ml-6 pt-14 md:pl-36 pl-4'>
                <div data-aos="fade-right " >
                    <h3 className='font-bold text-4xl md:text-3xl '>Hello, It's Me</h3>
                    <h1 className='font-bold md:text-6xl text-6xl mb-2'>Gobinath K</h1>
                    <h3 className='font-bold md:text-3xl text-2xl mb-3'>And I'm a <span className='font-bold text-2xl md:text-3xl text-color'> {text} </span><Cursor /></h3>
                    <p className=''>
                        I'm a passionate web developer who loves crafting sleek, user-friendly experiences and dreams big, both in code and life.
                    </p>
                </div>
                <div className="flex gap-3 md:mt-10 mt-4 ml-[50px] md:ml-0" >
                    <button data-aos='fade-up' data-aos-delay="500" className=' border-2 border-[#2db2ff] rounded-full md:p-1 p-2 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://www.linkedin.com/in/gobinath-k-8b3b142a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="md:text-3xl text-xl text-[#2db2ff] hover:text-black transition duration-300">
                            <FaLinkedinIn />
                        </a>
                    </button>
                    <button data-aos='fade-down' data-aos-delay="600" className='border-2 border-[#2db2ff] rounded-full md:p-1 p-2 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://github.com/gobinath-19" className=" text-xl md:text-3xl text-[#2db2ff] hover:text-black transition duration-300 ">
                            <AiOutlineGithub />
                        </a>
                    </button>
                    <button data-aos='fade-up' data-aos-delay="700" className='border-2 border-[#2db2ff] rounded-full md:p-1 p-2 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://wa.me/+919363118493" className="text-xl md:text-3xl text-[#2db2ff] hover:text-black transition duration-300">
                            <AiOutlineWhatsApp />
                        </a>
                    </button>
                    <button data-aos='fade-down' data-aos-delay="800" className='border-2 border-[#2db2ff]  rounded-full md:p-1 p-2 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="https://www.instagram.com/gobinath_k19?igsh=ODQ1NzF3ZThtaTFl" className="md:text-3xl text-xl text-[#2db2ff] hover:text-black transition duration-300">
                            <AiOutlineInstagram />
                        </a>
                    </button>
                    <button data-aos='fade-up' data-aos-delay="900" className='border-2 border-[#2db2ff] rounded-full md:p-1 p-2 hover:bg-[#2db2ff] hover:shadow-[0_0_15px_#2db2ff] transition duration-300' >
                        <a target="_blank" href="mailto:gobinath1019@gmail.com" className="md:text-3xl text-xl text-[#2db2ff] hover:text-black transition duration-300">
                            <AiOutlineMail />
                        </a>
                    </button>


                </div >
                <a data-aos='fade-up' data-aos-delay="1500" href='/Gobinath-CV.pdf' download='Gobinath-CV.pdf'>
                    <button className='ml-[104px] mt-4 md:ml-14 md:mt-5 md:text-xl text-xl text-[#1f242d] flex justify-start s-color rounded-full p-2 md:p-3 md:ml-12 font-semibold  md:w-40 sm:w-64 sm:mt-10 items-center hover:shadow-[0_0_0] shadow-[0_0_15px_#2db2ff] transition duration-300'>Download CV</button>
                </a>
            </div>

            <div className="flex justify-center md:w-1/2 sm:mt-10  sm:ml-20 sm:w-3/4 home-img mt-10" data-aos='fade-left' >
                <img  src={Profile} alt="Hello" />
            </div>
        </section>

    );
}

export default Hero;