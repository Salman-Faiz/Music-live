import Banner from "./Banner";
import Headliners from "./Headliners";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="font-customFont ">
            <Navbar></Navbar>
            <Banner></Banner>
            <Headliners></Headliners>
        </div>
    );
};

export default Home;