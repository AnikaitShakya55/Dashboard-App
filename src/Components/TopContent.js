import React from 'react';
import Image from 'next/image'
import memberIcon from "../../public/Assests/Group 10.png";
import tickIcon from "../../public/Assests/Group 13.png";
import pcIcon from  "../../public/Assests/12.png";
import { FiSearch } from 'react-icons/fi'; 
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import pic1 from "../../public/Assests/Profile icons/Ellipse 58.png";
import pic2 from "../../public/Assests/Profile icons/Ellipse 60.png";
import pic3 from "../../public/Assests/Profile icons/Ellipse 61.png";
import pic4 from "../../public/Assests/Profile icons/Ellipse 62.png";
import waveIcon from "../../public/Assests/waving.png"

const TopContent = () => {
  return (
    <div>

        <div className='flex items-center'>
           
        
        <h1 className='text-2xl  font-semibold pl-20 font-sans flex items-start  '>Hello Evnao 
        {/* <FaHandshake className='ml-2 text-4xl' /> */}
        <Image src={waveIcon} className="w-12 h-12 ml-1 -mt-4" alt="Wave Icon" />,
        </h1>

        <div className='flex items-center relative left-96 ml-20'>
       <FiSearch size={20} className='opacity-50' /> 
       <input type="text" placeholder="Search" className='border-opacity-35 h-7 w-32 ml-1'/>
       </div>

       </div>  


        <div className='mt-10 pl-24 flex flex-row gap-20 absolute top-[117px]'>

            <div className='flex flex-row gap-3'>
                <Image src={memberIcon} alt='image' height={80} width={80} />
                <div>
                    <h1 className='text-sm text-gray-400'>TotalCustomers</h1>
                    <h1 className='text-2xl font-semibold'>5,423</h1>
                    <h1 className='text-xs flex flex-row'> <GoArrowUp className='text-customGreen text-lg'/> 16% this month</h1>
                </div>
            </div>

            <div className='flex flex-row gap-3'>
                <Image src={tickIcon} alt='image' height={80} width={80} />
                <div>
                    <h1 className='text-sm text-gray-400'>Members</h1>
                    <h1 className='text-2xl font-semibold'>1,893</h1>
                    <h1 className='text-xs flex flex-row'> <GoArrowDown className='text-red-600 text-lg '/> 1% this month</h1>
                </div>
            </div>
            
            <div className='flex flex-row gap-3'>
                <Image src={pcIcon} alt='image' height={80} width={80} />
                <div>
                    <h1 className='text-sm text-gray-400'>Active Now</h1>
                    <h1 className='text-2xl font-semibold'>189</h1>
                    <h1 className='text-xs flex flex-row'>
                        <Image src={pic1} className='z-10' />
                        <Image src={pic2} className='z-20 -ml-2'/>
                        <Image src={pic3} className='z-30 -ml-2'/>
                        <Image src={pic4} className='z-40 -ml-2'/>
                    </h1>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default TopContent
