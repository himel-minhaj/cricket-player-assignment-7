import "./Banner.css";
const Banner = ({ handleAddFreeTaka }) => {
  // console.log(handleAddFreeTaka);
  return (
    <div
      className=" container mx-auto px-4 bg-black  bg-cover bg-no-repeat rounded-3xl mt-10 mb-10 h-[36.5rem]"
      style={{
        backgroundImage: 'url("https://i.ibb.co.com/JKLX9NW/bg-shadow.png")',
      }}
    >
      <div>
        <div className="flex justify-center items-center ">
          <img
            className="mt-16 object-cover"
            src="https://i.ibb.co.com/FwjTMvH/banner-main.png"
            alt=""
          />
        </div>
        <div className="flex flex-col w-9/12 mx-auto ustify-center items-center text-center mt-5 space-y-5">
          <h1 className="text-4xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-lg text-gray-400 font-medium">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            onClick={() => handleAddFreeTaka(1500000)}
            className="btn bg-[#E7FE29] p-4 border-black m-2"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
