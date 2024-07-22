function AboutUs() {
  const people = [
    {
      id: 1,
      name: "Quang Huy",
      quote:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    },
    {
      id: 2,
      name: "Dinh Kha",
      quote:
        "A wonderful experience, the team was extremely professional and the service exceeded my expectations.",
    },
    {
      id: 3,
      name: "Quang Vu",
      quote:
        "Absolutely fantastic! The product quality is top-notch and the customer support is excellent.",
    },
    {
      id: 4,
      name: "Quang Teo",
      quote:
        "Absolutely fantastic! The product quality is top-notch and the customer support is excellent.",
    },
  ];

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="flex flex-col h-[80%] w-[80%]">
        <h1 className="text-center text-[48px] mt-2 tracking-widest">
          <span className="font-semibold">About </span>
          <span className="text-[#56B280] font-bold">Us</span>
        </h1>
        <p className="text-center text-[16px] text-gray-600 mt-[20px] tracking-wider">
          Using this system has completely transformed our operations. The
          efficiency and accuracy are unmatched!
        </p>
        <div className="flex justify-around items-center mt-[10%] gap-[12px]">
          {people.map((person) => (
            <div
              key={person.id}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            >
              <span className="absolute top-[60px] left-1/2 transform -translate-x-1/2 h-20 w-20 rounded-full bg-[#56B280] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md h-[300px]">
                <div className="flex justify-end ">
                  <a
                    href="#"
                    className="text-[#56B280] mr-2 group-hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 2h-3a5 5 0 00-5 5v3H6v4h4v9h4v-9h3l1-4h-4V7a1 1 0 011-1h3V2z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-[#56B280] group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 8a6 6 0 10-12 0 6 6 0 0012 0zM8 13a5 5 0 00-5 5v2a1 1 0 001 1h8a1 1 0 001-1v-2a5 5 0 00-5-5z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="grid place-items-center relative">
                  <img
                    src={`https://i.pravatar.cc/150?img=${person.id}`}
                    alt="Profile"
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h2 className="text-center font-semibold tracking-wider">
                    {person.name}
                  </h2>
                  <p className="tracking-wide ">{person.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
