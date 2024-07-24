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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mt-2 tracking-widest">
          <span className="font-semibold">About </span>
          <span className="text-[#56B280] font-bold">Us</span>
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 mt-4 sm:mt-6 tracking-wider max-w-2xl mx-auto">
          Using this system has completely transformed our operations. The
          efficiency and accuracy are unmatched!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {people.map((person) => (
            <div
              key={person.id}
              className="group relative cursor-pointer overflow-hidden bg-white px-4 sm:px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
            >
              <span className="absolute top-[60px] left-1/2 transform -translate-x-1/2 h-20 w-20 rounded-full bg-[#56B280] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex justify-end">
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
                      className="h-5 w-5"
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
                <div className="space-y-4 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h2 className="text-center font-semibold tracking-wider">
                    {person.name}
                  </h2>
                  <p className="tracking-wide text-sm">{person.quote}</p>
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
