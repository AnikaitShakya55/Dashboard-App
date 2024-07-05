import Link from "next/link";
import Image from "next/image";
import dashBoardIcon from "../../public/Assests/setting1.png";
import keyIcon from '../../public/Assests/key-square.png'
import productIcon from '../../public/Assests/3d-square 1.png'
import incomeIcon from '../../public/Assests/wallet-money 2.png';
import promoteIcon from '../../public/Assests/discount-shape 1.png';
import helpIcon from '../../public/Assests/message-question 1.png';
import { FcCustomerSupport } from "react-icons/fc";
import { FaAnglesRight } from "react-icons/fa6";
import profilePic from '../../public/Assests/Ellipse 8.png'





const Sidebar = () => {
  
   

  return (
    <div className="text-xl text-sans bg-white bg-opacity-30 w-[306px] h-[1198px] pt-7 p flex flex-col ">
      <h1 className="text-2xl font-semibold mb-12 text-center flex justify-center gap-2 absolute top-[36px] left-[28px]">
       <Image src={dashBoardIcon} />
       <span className="pt-1" >Dashboard</span>
       <span className="pt-4 -ml-1 text-xs opacity-50" >v.01</span>
        </h1>

      <ul className="list-none text-sm opacity-95 w-[250px] ml-4 absolute top-[139px]">

        <li className="flex items-center mb-4 w-[250px] h-[46px ]">
          <Link
            href="#"
            className="flex items-center py-2 px-4 hover:bg-customPurple  w-60 hover:text-white rounded-lg"
          >
            <Image src={keyIcon} className='size-5' />
            <span className="ml-2">Dashboard</span>
            <FaAnglesRight className="absolute ml-44 opacity-50" />
          </Link>

         

        </li>

        <li className="flex items-center mb-4 w-[250px] h-[46px ]">
          <Link
            href="#"
            className="flex items-center py-2 px-4 hover:bg-customPurple  w-60 hover:text-white rounded-lg"
          >
            <Image src={productIcon} className='size-5' />
           
            <span className="ml-2">Product</span>
            <FaAnglesRight className="absolute ml-44 opacity-50" />

          </Link>
          
        </li>

        <li className="flex items-center mb-4 w-[250px] h-[46px ]">
          <Link
            href="/dashboard"
            className="flex items-center py-2 px-4 hover:bg-customPurple   w-60 hover:text-white rounded-lg"
          >
            <FcCustomerSupport className="size-6" />
           
            <span className="ml-2">Customers</span>
            <FaAnglesRight className="absolute ml-44 opacity-50" />
            

          </Link>
        </li>

        <li className="flex items-center mb-4 w-[250px] h-[46px ]">
          <Link
            href="/dashboard"
            className="flex items-center py-2 px-4 hover:bg-customPurple  w-60 hover:text-white rounded-lg"
          >
            <Image src={incomeIcon} className='size-5' />
           
            <span className="ml-2">Income</span>
            <FaAnglesRight className="absolute ml-44 opacity-50" />

          </Link>
        </li>






        <li className="flex items-center mb-4 w-[250px] h-[46px ]">
          <Link
            href="/dashboard"
            className="flex items-center py-2 px-4 hover:bg-customPurple   w-60 hover:text-white rounded-lg"
          >
            <Image src={promoteIcon} className='size-5' />
           
            <span className="ml-2">Promote</span>
            <FaAnglesRight className="absolute ml-44 opacity-50" />

          </Link>
        </li>

        <li className="flex items-center mb-4 w-[250px] h-[46px ]">
          <Link
            href="/dashboard"
            className="flex items-center py-2 px-4 hover:bg-customPurple  w-60 hover:text-white rounded-lg"
          >
            <Image src={helpIcon} className='size-5' />
           
            <span className="ml-2">Help</span>
            <FaAnglesRight className="absolute ml-44 opacity-50" />
          </Link>
        </li>


        <div className=" mt-96 h-[150px] w-[250px] bg-gradient-to-br from-pink-200 to-gradientPurple p-4 rounded-2xl shadow-md"> 
           
        <h2 className="text-white text-xs text-center  px-7 mb-2 mt-2">Upgrade to PRO to get access all Features!</h2>
      <button className="bg-white text-gradientPurple font-bold py-2  px-9 mt-5 ml-6 rounded-3xl hover:bg-purple-100">Get Pro Now!</button>
        </div>
        
        <div className="ml-10 flex flex-row mt-10  ">
           
           <Image src={profilePic} className="h-11 absolute left-0"  />


          <div className="flex flex-col ml-3">
          <label className=" text-sm font-semibold  "> Evano </label>
          <label className=" text-sm text-opacity-55 opacity-60 "> Project Manager </label>

          </div>
          
          <select className=" ml-14 text-opacity-55 rounded-lg">
            <option value=""></option>
            <option value=""></option>
          </select>

        </div>  
        

       
        
      </ul>
    </div>
  );
};

export default Sidebar;
