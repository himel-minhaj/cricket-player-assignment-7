const Header = ({ freeTaka }) => {
  return (
    <div className="sticky top-0 backdrop-blur-3xl z-50  px-4 flex justify-between items-center mt-10 ">
      <div>
        <img src="https://i.ibb.co.com/kyxtVKQ/logo.png" alt="" />
      </div>
      <div>
        <ul className="flex gap-6 text-base font-semibold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 py-2 px-10 bg-gray-100 rounded-lg font-bold ">
        <h3 className="">{freeTaka} Coin</h3>
        <i className="fa-brands fa-bitcoin text-2xl text-yellow-500"></i>
      </div>
    </div>
  );
};

export default Header;
