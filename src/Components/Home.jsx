import Banner from "./Banner";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="font-customFont text-zinc-200">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;