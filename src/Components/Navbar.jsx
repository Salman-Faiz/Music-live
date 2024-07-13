import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isToggled, setIsToggoled] =useState(false)
  const [showTickets, setShowTickets] = useState(false);

  const handleToggleMenu = ()=>{
    setIsToggoled(!isToggled)

  }
  const handleTickets = ()=>{
    setShowTickets(!showTickets);
    
  }
  return (
    <div>
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 flex  items-center relative">
        {/* logo and name */}
        <div className="p-2">
          <img src="/images/logo-inverted.png" width={50} alt="" />
        </div>
        <div className="font-bold text-zinc-200 ">
          <h1 className="text-2xl  font-bold">
            Music <span className="text-sky-900">Live</span>
          </h1>
        </div>
        {/* for responsive navbar create an icon for menu */}
        <div  className=" block md:hidden ml-auto pr-4 my-auto cursor-pointer  top-full ">
          {
            isToggled ? <div onClick={handleToggleMenu} className="text-zinc-200 text-4xl"><IoMdClose></IoMdClose></div> : <div onClick={handleToggleMenu} className="space-y-1  ">
            <div className="w-8 h-1 bg-zinc-200 rounded-full "></div>
             <div className="w-8 h-1 bg-zinc-200 rounded-full "></div>
             <div className="w-8 h-1 bg-zinc-200 rounded-full "></div>
            </div>  
          }

          {/* show menu items for mobile */}
        {
            isToggled && <div className="absolute right-0 top-[62px]   w-full    rounded-b-md space-y-3 text-xl py-3 bg-gradient-to-r from-rose-500 to-pink-500">
             
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Home</span>
          </div>

          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Line-Up</span>
          </div>


          <div className="group relative  h-full i cursor-pointer  text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <div onClick={handleTickets} className="p-4  font-bold">Tickets</div>
           
           {
            showTickets ? <div className="relative">
            <div className=" text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out p-4">
               <span>One Day Tickets</span>
             </div>
             <div className=" text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out p-4">
               <span>Seven Day Tickets</span>
             </div>
            </div> : ''
           }
          </div>



          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Support</span>
          </div>
              </div>
       }
        </div>


        {/* menu items for lerger device*/}
        <div className="hidden md:flex flex-1 items-center justify-end">

          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Home</span>
          </div>

          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Line-Up</span>
          </div>

          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
            <span>Tickets</span>
            <div className="group-hover:block  hidden absolute top-full bg-pink-500 right-0 whitespace-nowrap rounded-b-md">
              <h1 className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200 text-end">one day tickets</h1>
              <h1 className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200 text-end">seven days tickets</h1>
            </div>
          </div>

          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
