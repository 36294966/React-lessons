import React from 'react'
import Images from '../assests/images.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
<img className='w-[500px] mx-auto my-4' src={Images} alt="/" />
<div className='flex flex-col justify-center'>

<div>
    <p className='text= [blue] font-bold ' > Coding Skills Enhanced</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Be able to manage complex ideas</h1>
    <p className=''> Coding skills are crucial in today's tech-driven world, enhancing problem-solving 
        and logical thinking across various sectors. They foster 
        collaboration and innovation through teamwork and open-source projects.
         </p>
         <button class="bg-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto text-black md:mx-0 py-3">Get to Learn</button>

</div>
</div>




     </div>
    </div>
  )
}

export default Analytics
