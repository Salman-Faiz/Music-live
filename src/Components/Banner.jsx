const Banner = () => {
  return (
    <div className="bg-[url('./images/hero.jpg')] bg-center bg-cover bg-fixed flex justify-center items-center flex-col h-[calc(100vh-200px)] min-h-[400px] pt-[24px]">
      <div className="relative bg-white/30 py-2 px-4 md:rounded-xl text-center backdrop-blur-md">
        <img src="/images/logo.png" alt="" />
        <div className="flex items-center justify-center mt-[-140px] mb-12">
          <div className="bg-pink-500 w-28 h-28 rounded-full flex gap-1 justify-center items-center ">
            <div className="w-1 h-3 bg-pink-300 rounded-full animate-wave "></div>
            <div className="w-1 h-8 bg-pink-200 rounded-full animate-wavey"></div>
            <div className="w-1 h-12 bg-pink-100 rounded-full animate-waveey"></div>
            <div className="w-1 h-7 bg-pink-200 rounded-full animate-wavey "></div>
            <div className="w-1 h-5 bg-pink-300 rounded-full animate-waveey"></div>
            <div className="w-1 h-7 bg-pink-100 rounded-full animate-wave"></div>
            <div className="w-1 h-5 bg-pink-300 rounded-full animate-waveey"></div>
            <div className="w-1 h-7 bg-pink-200 rounded-full animate-wavey"></div>
            <div className="w-1 h-4 bg-pink-100 rounded-full animate-wave"></div>
            <div className="w-1 h-3 bg-pink-200 rounded-full animate-waveey"></div>
          </div>
        </div>
        <h1 className="text-5xl font-bold ">
          Music : <span className="text-sky-900">Live</span>
        </h1>
      </div>
      <p className="font-bold text-sm mt-3 px-3">
        We are the music makers and we are the dreamers of dreams
      </p>
      <div className="mt-3 md:flex gap-2">
        <input
          className="rounded-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 "
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <button className="rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg shadow-black/20">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Banner;
