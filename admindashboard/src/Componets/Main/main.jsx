import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import { FaCcMastercard, FaPeopleCarryBox } from "react-icons/fa6";
import {
  IoMailUnreadOutline,
  IoPersonSharp,
  IoPieChart
} from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Chart from "../../Chart/chart";
const Main = () => {
  return (
    <div className="flex flex-col md:flex-row bg-indigo-100 dark:bg-slate-950">
      <section className="w-auto md:w-[70%] h-full">
        <div className="w-full flex items-center justify-between">
          <div className="text-indigo-950 m-4 font-bold text-lg md:text-2xl dark:text-transparent bg-clip-text dark:bg-gradient-to-tl from-indigo-800 to-pink-800">
            YU BANK
          </div>
          <div className="flex end md:hidden gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-400">
            <SlCalender />
            <MdOutlineNotificationsActive />
            <IoMailUnreadOutline />
            <SlCalender />
            <IoPersonSharp />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400">
                <FaWallet />
              </div>
              <div className="flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full">
                <CiMenuKebab />
              </div>
            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-2xl text-indigo-950 dark:text-slate-400">
              $500.00
            </div>
            <div className="text-indigo-950 dark:text-slate-400 text-sm font-semibold">
              <div>Your Bank Balance</div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400">
                <IoPieChart />
              </div>
              <div className="flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full">
                <CiMenuKebab />
              </div>
            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-2xl text-indigo-950 dark:text-slate-400">
              $350.00
            </div>
            <div className="text-indigo-950 dark:text-slate-400 text-sm font-semibold">
              <div>You deposit</div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400">
                <FaPeopleCarryBox />
              </div>
              <div className="flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full">
                <CiMenuKebab />
              </div>
            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-2xl text-indigo-950 dark:text-slate-400">
              $130.00
            </div>
            <div className="text-indigo-950 dark:text-slate-400 text-sm font-semibold">
              <div>Employee Working Today</div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400">
                <FaCcMastercard />
              </div>
              <div className="flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full">
                <CiMenuKebab />
              </div>
            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-2xl text-indigo-950 dark:text-slate-400">
              $240.00
            </div>
            <div className="text-indigo-950 dark:text-slate-400 text-sm font-semibold">
              <div>This Week Card Processing</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 m-4 w-auto">
          <div className="col-span-4 md:col-span-1 h-28 bg-white dark:bg-slate-900/50 rounded-md">
            <div className="flex flex-col justify-between P-4 h-full">
              <div className="font-semibold text-indigo-950 dark:text-slate-400">
                New clients
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl sm:text-xl lg:text-5xl font-bold text-indigo-900 dark:text-slate-400">
                    64
                  </div>
                  <div className="flex px=2 py=1 text=sm rounded full bg-green-500 items-center text-green-900">
                    +69%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 row-span-2 bg-white dark:bg-slate-900/50">
            <Chart />
          </div>
          <div className="col-span-4 md:col-span-1 h-28 bg-white dark:bg-slate-900/50 rounded-md">
            <div className="flex flex-col justify-between P-4 h-full">
              <div className="font-semibold text-indigo-950 dark:text-slate-400">
                Budget Allocation
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl sm:text-xl P-7 lg:text-5xl font-bold text-indigo-900 dark:text-slate-400">
                    56
                  </div>
                  <div className="flex px=3 py=3 text=sm rounded px-4 full bg-green-500 items-center text-green-900">
                    +69%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <div className="text-indigo-950 dark:text-slate-400 font-bold text-2xl my-4">
            Recent Transaction
            <table className="w-full text-sm text-left dark:text-indigo-500">
              <thead className="text-xs text-indigo-950 dark:text-slate-400 uppercase bg-gray-50 dark:big-slate-900/50">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Person
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Bank Account
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="text-indigo-950 dark:text-slate-400">
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Erastus Ngamau</td>
                  <td className="py-4 px-6">6574664</td>
                  <td className="py-4 px-6">$459</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Alfred tatn</td>
                  <td className="py-4 px-6">673729</td>
                  <td className="py-4 px-6">$467</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Stephen Gray</td>
                  <td className="py-4 px-6">3637</td>
                  <td className="py-4 px-6">$310</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Evans Kiprop</td>
                  <td className="py-4 px-6">06728366537</td>
                  <td className="py-4 px-6">$453</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Braze Kendi</td>
                  <td className="py-4 px-6">45630</td>
                  <td className="py-4 px-6">$353</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Abigal kennel</td>
                  <td className="py-4 px-6">34527</td>
                  <td className="py-4 px-6">$245</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Foster Patric</td>
                  <td className="py-4 px-6">673452738</td>
                  <td className="py-4 px-6">$148</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">ishmail kenzo</td>
                  <td className="py-4 px-6">4379010</td>
                  <td className="py-4 px-6">$37</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Muga Wenzo</td>
                  <td className="py-4 px-6">552773677</td>
                  <td className="py-4 px-6">$165</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50 border-b">
                  <td className="py-4 px-6">Fenard njikkol</td>
                  <td className="py-4 px-6">353883</td>
                  <td className="py-4 px-6">$173</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full md:w-[30%] bg-indigo-200 dark:bg-slate-900/20">
      <div className='flex flex-col m-4'>
      <div className="hidden md:flex gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-400">
            <SlCalender />
            <MdOutlineNotificationsActive />
            <IoMailUnreadOutline />
            <SlCalender />
            <IoPersonSharp />
          </div>
    <div className='flex flex-col bg-white dark:bg-slate-900/50 gap-6 my-10 mx-4 p-4 m-4 rounded-md h-auto shadow-lg'>
      <div>
<div className='font-bold text-indigo-950 dark:text-slate-400'>Formation Status</div>
<div className='text-xs font-bold text-indigo-500 dark:text-slate-400'>In progress</div>
</div>
<div className='h-4 w-full dark:bg-gray-200 rounded-lg'>
  <div className='h-4 bg-indigo-900 rounded-lg w-[30%]'></div>
</div>
<div className='flex flex-col items-center'></div>
<div className='tont-bold text-indigo-950 dark:text-slate-400'>Estimated Processing</div>
<div className='font-bold text-white dark:text text-sm'>4-5 Business Days</div>
<div >
  <button className='bg-gradient-to-tr w-full p-4 from-pink-900 to-indigo-900 text-white rounded-xl dark:text-slate-400'>View Status</button>
</div>
      </div>
      <div className='flex flex-col gap-5 m-4 text-indigo900 dark:text'>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
<div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
<CiTimer/>
</div>
<div>
  <div className='font-semibold text-sm text-slate-400'>Run Payroll</div>
  <div className=' text-indigo-500 text-xs'>March 7th at 4:50pm</div>
  
</div>
        </div>
        <div className='flex flex-col bg-white dark:bg-slate-900/50 gap-6 my-10 mx-4 p-4 rounded-lg h-auto'>
        <div className='font-bold text-indigo-200 dark-text-slate-400'>
Ready Allowances
        
        <div className='flex flex-col bg-white dark:bg-slate-900/50 gap-6 my-10 mx-4 p-4 rounded-lg h-auto'>
        <div className='font-bold text-indigo-200 dark-text-slate-400'>
June 19th 2024
        </div>

        <div className='font-semibold text-indigo-500 dark:text-slate-400 text-sm'>
          Finance and Invest with Us
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default Main;
