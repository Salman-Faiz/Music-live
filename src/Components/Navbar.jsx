const Navbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 flex  items-center justify-between">
        <div className="p-2">
          <img src="/images/logo-inverted.png" width={50} alt="" />
        </div>
        <div className="font-bold text-zinc-200 ">
          <h1 className="text-2xl  font-bold">
            Music <span className="text-sky-900">Live</span>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
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
