function Feature() {
  return (
    <div className="h-[100vh] flex items-center   justify-center space-x-[20px]">
      <div className="flex flex-col h-[80%] w-[45%] tracking-wider">
        <h2 className="text-gray-900 font-semibold text-[32px] ml-[20%] mt-[30%]">
          Clean and
        </h2>
        <h2 className="text-gray-900 font-extralight text-[32px] ml-[20%]">
          fragrant soy wax
        </h2>
        <p className="text-[#56B280] font-extralight text-[16px] ml-[20%] mt-2 mb-4">
          Made for your home and for your wellness
        </p>
        <ul className=" mt-2">
          <li className="text-gray-900 font-extralight text-[16px] ml-[20%] flex flex-row mt-2">
            <img
              src="src/assets/tick.svg"
              alt="Shop Logo"
              className="h-4 w-4 mr-2 mt-1"
            />
            Eco-sustainable:All recyclable materials, 0% CO2 emissions
          </li>
          <li className="text-gray-900 font-extralight text-[16px] ml-[20%] flex flex-row mt-2">
            <img
              src="src/assets/tick.svg"
              alt="Shop Logo"
              className="h-4 w-4 mr-2 mt-1"
            />
            Eco-sustainable:All recyclable materials, 0% CO2 emissions
          </li>
          <li className="text-gray-900 font-extralight text-[16px] ml-[20%] flex flex-row mt-2">
            <img
              src="src/assets/tick.svg"
              alt="Shop Logo"
              className="h-4 w-4 mr-2 mt-1"
            />
            Eco-sustainable:All recyclable materials, 0% CO2 emissions
          </li>
          <li className="text-gray-900 font-extralight text-[16px] ml-[20%] flex flex-row mt-2">
            <img
              src="src/assets/tick.svg"
              alt="Shop Logo"
              className="h-4 w-4 mr-2 mt-1"
            />
            Eco-sustainable:All recyclable materials, 0% CO2 emissions
          </li>
        </ul>
        <button
          type="button"
          className="text-white font-semibold bg-gradient-to-r w-[200px] mt-10 items-center ml-[20%] from-[#56B280] to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Learn More ...
        </button>
      </div>
      <div className="flex flex-col h-[80%] w-[45%] ">
        <img
          src="https://pbs.twimg.com/media/FkQk49uXkAEbrSb.jpg"
          alt="Shop Logo"
          className="h-[100%] object-cover"
        />
      </div>
    </div>
  );
}

export default Feature;
