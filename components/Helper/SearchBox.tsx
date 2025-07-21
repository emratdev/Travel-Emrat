import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6';
 
 const SearchBox = () => {
   return (
     <form
       className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:-[80%] mx-auto"
     >
       {/* 1st Search Inputs */}
       <div className="flex items-center gap-x-6 ">
         <FaMap className="w-6 h-6 text-blue-600" />
         <div className='flex-1'>
           <label htmlFor="where" className="text-lg font-medium mb-[0.2rem] block">
             Location
           </label>
           <input
             id="where"
             type="text"
             placeholder="Where are you going?"
             className="outline-none border-none placeholder:text-gray-800 w-full"
             required
           />
         </div>
       </div>

       {/* 2nd Search Inputs */}
       <div className="flex items-center space-x-6">
         <FaCalendarWeek className="w-6 h-6 text-blue-600  " />
         <div>
           <label
             htmlFor="start_date"
             className="text-lg font-medium mb-[0.2rem] block"
           >
             Start Date
           </label>
           <input
             id="start_date"
             type="date"
             className="outline-none border-none"
           />
         </div>
       </div>

       {/* 3rd Search Inputs */}
       <div className="flex items-center space-x-6">
         <FaCalendarWeek className="w-6 h-6 text-blue-600" />
         <div>
           <label
             htmlFor="end_date"
             className="text-lg font-medium mb-[0.2rem] block"
           >
             End Date
           </label>
           <input
             id="end_date"
             type="date"
             className="outline-none border-none"
           />
         </div>
       </div>

       {/* 4th Search Inputs */}
       <div className="flex items-center space-x-6">
         <FaUserGroup className="w-6 h-6 text-blue-600 shrink-0" />
         <div>
           <p className="text-lg font-medium mb-[0.2rem]">Guest</p>

           <div className="flex gap-2.5">
             <select name="guest" id="">
               {Array.from({ length: 10 }, (_, i) => i + 1).map((guest) => (
                 <option key={guest} value={guest}>
                   {guest} Guest{guest > 1 ? "s" : ""}
                 </option>
               ))}
             </select>

             <select name="room" id="">
               {Array.from({ length: 10 }, (_, i) => i + 1).map((room) => (
                 <option key={room} value={room}>
                   {room} Room{room > 1 ? "s" : ""}
                 </option>
               ))}
             </select>
           </div>
         </div>
       </div>
     </form>
   );
 }
 
 export default SearchBox