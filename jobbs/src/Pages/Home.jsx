import SideBar from "../Components/sidebar";
import Dream from "../Components/Dream";
import Searchbar from "../Components/Searchbar";
import Searchresult from "../Components/Searchresult";
import Lastbar from "../Components/Lastbar";
const Home = () => {
  return (
    <div className="flex flex-col max-w-[1280px] mx-auto mt-[96px]">
      <Dream />
      <div className="flex flex-row px-10">
        <SideBar />
        <div className="flex flex-col  w-full mx-auto mt-{96px} ">
          {/* Whole component expects 3 child components */}
          <div className="flex flex-col mx-auto w-full h-[20 px]">
          <Searchbar/>
          <div className="flex flex-col mx-auto">
            <div></div>
            <Searchresult/>
            < div className="flex flex-col max-auto ">
            <div></div>
            <Lastbar/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
