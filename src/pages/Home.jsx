import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import VideoPlayer from "../components/VideoPlayer";

const Home = () => {
  return (
    <div className="px-10">
      <div className=" w-full max-w-[90rem]">
        <div className="flex flex-col justify-center items-center relative">
          <div className="flex flex-col items-center justify-center gap-5 max-w-[39rem] mx-auto text-center pb-[3rem] relative z-[1]">
            <h1 className="text-[4rem] md:text-[6.5rem] lg-[6.5rem] -tracking-2 text-orange-500 font-extrabold heading-text">
              Cultural Day Noso Community
            </h1>
            <p>Welcome to the Noso commutity website</p>
            <div className="">See you on the 8th of May</div>
          </div>
          <div className="flex justify-center w-full items-center ">
            <div className="w-full  max-w-[50rem] h-[400px]  overflow-hidden rounded-md flex justify-center items-center aspect-[50/28.625] z-[1]">
              <VideoPlayer />
            </div>
          </div>
          <div className="md:flex lg:flex hidden  flex-col gap-8 absolute max-[78-rem] w-full z-0 left-[0%] right-[0%] bottom-[3rem] max-h-[30.6rem] mx-0 top-auto ">
            <div className="flex justify-between mx-7">
              <div className="w-[12.5rem] h-auto overflow-hidden aspect-[12.5/8.75]">
                <img src={image1} alt="image" />
              </div>
              <div className="w-[12.5rem] h-auto overflow-hidden aspect-[12.5/8.75]">
                <img src={image2} alt="image" />
              </div>
            </div>
            <div className="flex justify-between mx-[-1.5rem]">
              <div className="w-[12.5rem] h-auto overflow-hidden aspect-[12.5/8.75]">
                <img src={image3} alt="image" />
              </div>
              <div className="w-[12.5rem] h-auto overflow-hidden aspect-[12.5/8.75]">
                <img src={image4} alt="image" />
              </div>
            </div>
            <div className="flex justify-between mx-3">
              <div className="w-[12.5rem] h-auto overflow-hidden aspect-[12.5/8.75]">
                <img src={image5} alt="image" />
              </div>
              <div className="w-[12.5rem] h-auto overflow-hidden aspect-[12.5/8.75]">
                <img src={image6} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
