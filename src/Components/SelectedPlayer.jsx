import React from "react";
import Players from "./Players";

const SelectedPlayer = ({
  selectedPlayers,
  handleDelete,
  handleIsactiveStatus,
  handleDeleteBtnAddMoney,
}) => {
  // console.log(selectedPlayers);
  // console.log(handleDelete);
  console.log(handleDeleteBtnAddMoney);
  return (
    <div className="container mx-auto px-4 py-9 space-y-3">
      <h1>Selected Player( {selectedPlayers.length}/6)</h1>
      {selectedPlayers.map((selectPlayer) => (
        <div
          key={selectPlayer.playerId}
          className=" flex  items-center justify-between bg-slate-300 border border-gray-500 shadow-lg py-2 rounded-lg p-4"
        >
          <div className="flex gap-4 items-center justify-center">
            <div className="border object-cover">
              <img
                className="rounded-lg size-28"
                src={selectPlayer.image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-3xl">{selectPlayer.name}</h4>
              <h5>{selectPlayer.battingType}</h5>
            </div>
          </div>
          {/* delete btn  */}
          <button className="  ">
            <i
              // onClick={() => handleDelete(selectPlayer.playerId)}
              // onClick={() => handleDeleteBtnAddMoney(selectPlayer.biddingPrice)}
              onClick={() => {
                handleDelete(selectPlayer.playerId);
                handleDeleteBtnAddMoney(selectPlayer.biddingPrice);
              }}
              className="text-lg btn fa-regular fa-trash-can"
            ></i>
          </button>
        </div>
      ))}
      <button
        onClick={() => handleIsactiveStatus("available")}
        className="btn bg-[#E7FE29] p-2"
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayer;
