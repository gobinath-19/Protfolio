import React, { useState } from 'react'
import axios from 'axios';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        const data = {
            name: name,
            Email: email,
            Message: message,
        };

        console.log("Sending Data:", data);

        const res = axios.post('https://api.sheetbest.com/sheets/2d2af7aa-cc2e-4f37-a961-4d05eb62f5e7', data);
        console.log("Res:", res.data);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => setSuccess(false), 3000);
    }




    return (
        <div id="contact" className='bgg max-w-[1200px] mx-2 sm:pt-20 sm:pb-18 p-5 scroll-smooth'>
            {/* Contact Title */}
            <div data-aos="fade-right" className='text-center'>
                <h2 className='text-4xl font-bold leading-tight bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-teal-400 inline-block'>Contact Me</h2>
            </div>

            <div data-aos="fade-left" className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-[#161616] rounded-xl'>
                    <div className='p-10'>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} method='POST'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>

                                {/* Name */}
                                <div>
                                    <div className='mt-2.5'>
                                        <input type='text' name='name' id='' value={name} onChange={(e) => { setName(e.target.value) }} required placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <div className='mt-2.5'>
                                        <input type='email' name='email' id='' value={email} onChange={(e) => { setEmail(e.target.value) }} required placeholder='Your Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Message */} 
                                <div className=' sm:col-span-2'>
                                    <div className='mt-2.5'>
                                        <textarea name='message' id='' value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className='sm:col-span-2'>
                                    <button type='submit' className="text-xl w-full p-4 mt-2 text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-md cursor-pointer hover:from-teal-400 hover:to-blue-500">Send</button>
                                </div>

                            </div>

                            {/* Success Message */}
                            {success && <div className='text-center mt-4 font-semibold text-green-500'>Message Sent Successfully!</div>}
                        </form>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact