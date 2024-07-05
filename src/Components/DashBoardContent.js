"use client";

import React,{useState} from "react";
import { FiSearch } from "react-icons/fi";
import './DashBoardContent.css';



const currentCustomers = [
  {
    customerName: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    customerName: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floydg@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    customerName: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronaldpadobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    customerName: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvingstesia.com",
    country: "Iran",
    status: "Active",
  },
  {
    customerName: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    customerName: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryng@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    customerName: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    customerName: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristing@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const DashBoardContent = () => {
  
  const [searchTerm , setSearchTerm ] = useState("");
  const [filterCustomers , setFilterCustomers] = useState(currentCustomers);
  
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(event.target.value);

    if (searchTerm ==="")
    {
      setFilterCustomers(currentCustomers)
    }
    else
    {
         
      const filtered = currentCustomers.filter((customer) =>
      customer.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterCustomers(filtered);
    }

   
  };
 

  return (
    <div className="flex flex-row ml-20 mt-4 w-[968px] h-[812px]  absolute top-[308px]">
      <div>
        <h2 className="text-2xl font-semibold">All Customers</h2>
      </div>

      <div className="flex items-center mt-7 absolute left-93 ">
        <span className="text-customGreen text-sm ">Active Members</span>

        <div className="flex items-center ml-64 pl-12">
          <FiSearch size={20} className="opacity-50" />
          <input
            type="text"
            placeholder="Search"
            className="border-opacity-35 h-7 w-32 ml-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="ml-10">
          <label className=" text-sm text-opacity-55 opacity-60 ">
            Sort By
          </label>
          <select className=" ml-1 text-opacity-55 rounded-lg">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="absolute mt-20 ">
        <table>
          <thead>
            <tr className="text-sm opacity-35">
              <th className="pl-0 pt-8">Customer Name</th>
              <th className="pl-7 pt-8">Company</th>

              <th className="pl-7 pt-8">Phone Number</th>
              <th className="pt-8 -ml-10">Email</th>
              <th className="pt-8">Country</th>
              <th className="pl-7 pt-8">Status</th>
            </tr>
          </thead>
          <tbody>
            {filterCustomers.map((customer) => (
              <tr key={customer.name} className="text-sm ">
                <td className="pl-0 pt-8">{customer.customerName}</td>
                <td className="pl-7 pt-8">{customer.company}</td>
                <td className="pl-7 pt-8">{customer.phoneNumber}</td>
                <td className="pl-7 pt-8">{customer.email}</td>
                <td className="pl-7 pt-8">{customer.country}</td>
                <td className={`pl-7 pt-8 `} >
                  <button className={`${customer.status === 'Active' ? 'table-row-active': 'table-row-inactive'}`}> {customer.status}
                </button>
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          
          <div className="pt-10 flex flex-row">
            <span  className=" text-sm opacity-40 ">
              Showing data 1 to 8 of 256k entries
            </span>

            <div className=" text-sm  ml-56">
            <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">{"<"}</span>

              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">1</span>
              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">2</span>
              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">3</span>
              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">4</span>
              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">...</span>
              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">40</span>
              <span className="h-5 w-7 py-1 px-2 rounded-sm bg-slate-100 mr-4 hover:bg-customPurple hover:text-white ">{">"}</span>
            </div>
          </div>




      </div>
    </div>
  );
};

export default DashBoardContent;
