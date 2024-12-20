import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col w-full  bg-black text-neutral-content p-10 relative">
      <div className="flex justify-center items-center mb-4 mt-40 ">
        <img src="https://i.ibb.co.com/2t0yQjV/logo-footer.png" alt="" />
      </div>

      <div className="flex justify-between ">
        <div className="w-3/12">
          <h1 className="text-lg font-bold">About Us</h1>
          <p className="font-normal text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div>
          <h1 className="text-lg font-bold">Quick Links</h1>
          <ul className="font-normal text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-3/12">
          <h1 className="text-lg font-bold">Subscribe</h1>
          <p className="font-normal text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex p-1 bg-gray-100 rounded-2xl ">
            <input
              className="rounded-lg border-black ml-3  placeholder-gray-800 "
              type="text"
              placeholder="Enter your email"
            />
            <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-5 text-black rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bg-cover bg-no-repeat rounded-3xl mt-10 mb-10 h-[15.5rem] bg-gray-400 container mx-auto px-4 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        style={{
          backgroundImage: `url('https://i.ibb.co.com/jhL0ZG9/bg-shadow.png')`,
        }}
      >
        <div className="  text-center mt-10 space-y-3 ">
          <h1 className="text-3xl font-bold text-black">
            Subscribe to our Newsletter
          </h1>
          <p className="text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex p-1  w-4/12 mx-auto gap-2  ">
            <input
              className="rounded-lg border-black ml-3 bg-gray-100 rounded-2xl  placeholder-gray-800 px-2 "
              type="text"
              placeholder="Enter your email"
            />
            <button className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-5 text-black rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
