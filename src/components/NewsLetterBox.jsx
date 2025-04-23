import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event)=>{
        event.preventDefault()
        
    }
    return (
        <div className=' text-center'>
            <p className='font-medium text-gray-800 text-2xl'>Subscribe now & get 20%off</p>
            <p className='mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi eaque quod!</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex gap-3 mx-auto border border-gray-400 my-6 pl-3' >
                <input type="email" className='w-full sm:flex outline-none ' placeholder='Enter your email' id="" required />
                <button className='bg-black text-white px-10 py-5' type='submit '>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
