import React from 'react';

const Available = ({ player, handleSelectedPlayers }) => {
  // console.log(player);
  // console.log(handleSelectedPlayers);
  return (
    <div className=" ">
      <div className="card bg-base-100 border-2 shadow-xl">
        <figure className="px-8 pt-6">
          <img
            className="w-full rounded-xl object-fill h-72"
            src={player.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2 text-xl font-bold">
            <i className="  fa-solid fa-user"></i>
            <h1>{player.name}</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-flag"></i>
              <h1>{player.country}</h1>
            </div>
            <h1 className="bg-slate-200 p-2 rounded-lg">{player.role}</h1>
          </div>
          <div className="divider my-5"></div>
          <p className="font-bold">Rating</p>
          <div className="flex items-center justify-between ">
            <h1 className="font-medium">{player.battingType}</h1>
            <h1 className="font-medium text-gray-400">{player.bowlingType}</h1>
          </div>

          <div className="card-actions items-center justify-between mt-2">
            <h1>Price: {player.biddingPrice}</h1>
            <button
              onClick={() => handleSelectedPlayers(player)}
              className="btn bg-slate-200 p-4 border rounded-xl"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;