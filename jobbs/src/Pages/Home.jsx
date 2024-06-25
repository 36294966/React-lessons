import SideBar from "../Components/sidebar";
import Dream from "../Components/Dream";

const Home = () => {
  return (
    <div className="flex flex-col max-w-[1280px] mx-auto mt-[96px]">
      <Dream />
      <div className="flex flex-row px-10">
        <SideBar />
        <div className="flex flex-col">
          Whole component expects 3 child components
          <div>Put Search component here</div>
          <div className="flex">
            <div>put middle comp</div>
            <div>put details comp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
