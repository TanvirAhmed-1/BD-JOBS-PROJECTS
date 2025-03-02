import banner from "../assets/banner.webp";

const NavSlider = () => {
  return (
    <div className=" relative  min-h-screen bg-green-500 rounded-bl-[250px] mb-40">
      <div className=" absolute md:top-[20%] pt-20 md:pt-0 lg:w-[50%] w-[90%] flex gap-y-6  flex-col justify-center lg:px-0 md:px-6 items-center  z-20">
        <h1 className="text-white text-center lg:text-7xl md:text-4xl  text-clip text-3xl font-bold lg:text-balance">
          Your Dream Job Is Wating For You{" "}
        </h1>
        <div className="bg-white p-4 lg:p-5 gap-4 rounded-xl flex md:flex-row flex-col justify-center items-center ">
          <label className="input bg-gray-100 flex justify-center items-center gap-4">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm bg-gray-200">⌘</kbd>
            <kbd className="kbd kbd-sm bg-gray-200">K</kbd>
          </label>
          <div className="flex gap-4">
            <div>
              <select
                defaultValue="Pick a  color"
                className="select bg-gray-100"
              >
                <option disabled={true}>Pick a color</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
              </select>
            </div>
            <div>
              <button className="md:px-8 px-2 py-3 bg-green-500 text-white text-xl font-semibold rounded-xl">
                Search Job
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className=" z-0 absolute lg:w-[50%] lg:right-56 flex flex-col gap-10 bottom-[-30px] lg:bottom-[-95px] lg:px-0 px-6 ">
        <div className="lg:w-[80%] lg:ml-44">
          <p className="text-gray-300  text-xl font-medium lg:text-wrap ">
            Your Dream Job Is Wating For You 10k+ Candidates Looking for a new
            job can be both exciting and daunting. Navigating the job market
            involves exploring various avenues, including online job boards.
          </p>
        </div>
        <div>
          <img
            className="rounded-bl-[30px] rounded-br-[80px]"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavSlider;
