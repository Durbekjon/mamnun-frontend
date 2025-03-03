import Globe from "../iconic-components/globe";
import Plane from "../iconic-components/plane";
import MagnifyingGlass from "../iconic-components/magnifying-glass";
import Building from "../iconic-components/building";

export default function TravelStats(props: { currentPage: string }) {
  return (
    <div
      className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-20"
      style={{ margin: "100px 0" }}
    >
      {/* Stats Row */}
      <div
        className="flex flex-wrap justify-center gap-16 sm:gap-24 md:gap-36 lg:gap-56 mt-8"
        style={{ margin: "50px 0" }}
      >
        {/* Countries */}
        <div className="flex flex-col items-center p-4">
          <Globe size={90} color="#2f2b26" />
          <h2 className="text-2xl font-light text-[#2f2b26] mt-4">187</h2>
          <p className="text-lg font-light text-[#2f2b26]">Countries</p>
          <hr className="w-24 sm:w-32 border-t border-[#2f2b26] mt-2" />
        </div>

        {/* Airports */}
        {props.currentPage === "travel" && (
          <div className="flex flex-col items-center p-4">
            <Plane size={90} color="#2f2b26" />
            <h2 className="text-2xl font-light text-[#2f2b26] mt-4">750</h2>
            <p className="text-lg font-light text-[#2f2b26]">Airports</p>
            <hr className="w-24 sm:w-32 border-t border-[#2f2b26] mt-2" />
          </div>
        )}
        {props.currentPage === "education" && (
          <div className="flex flex-col items-center p-4">
            <Building size={90} color="#2f2b26" />
            <h2 className="text-2xl font-light text-[#2f2b26] mt-4">
              More +1000
            </h2>
            <p className="text-lg font-light text-[#2f2b26]">Universities</p>
            <hr className="w-24 sm:w-32 border-t border-[#2f2b26] mt-2" />
          </div>
        )}
      </div>

      {/* Search Box */}
      <div
        className="flex items-center sm:w-[600px] border border-gray-300 py-3 px-5 mt-12 shadow-md"
        style={{
          margin: "25px 0",
          background: "rgb(203, 201, 196)",
          borderRadius: "0",
          padding: "0 5px",
        }}
      >
        <MagnifyingGlass size={24} color="#2f2b26" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none border-none pl-4 text-lg text-[#2f2b26] placeholder-gray-500"
          style={{
            width: "600px",
            background: "rgb(203, 201, 196)",
            borderRadius: "0",
            padding: "7px 0",
          }}
        />
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="flex items-center bg-[#63605b] text-[#fffef9] py-4 px-8 sm:px-10 text-lg font-light hover:bg-[#4e4b46] transition shadow-lg">
          <span className="mr-3" style={{ padding: "10px" }}>
            {props.currentPage === "travel" ? "Airports" : "Universities"} List
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            width="18"
            height="18"
            fill="#fffef9"
          >
            <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
