import React from "react";
import SelectedPlayer from "./SelectedPlayer";
import Players from "./Players";

const CartCointainer = ({
  handleIsactiveStatus,
  isActive,
  handleSelectedPlayers,
  selectedPlayers,
  handleDelete,
  handleDeleteBtnAddMoney,
}) => {
  // console.log(handleIsactiveStatus);
  // console.log(handleSelectedPlayers);
  // console.log(isActive);
  // console.log(handleDeleteBtnAddMoney);
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end my-8  gap-4">
        <button
          onClick={() => handleIsactiveStatus("available")}
          className={`${isActive.available ? "btn active" : "btn"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleIsactiveStatus("selected")}
          className={`${isActive.available ? "btn" : "btn active"}`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
      <div className="">
        {isActive.available ? (
          <Players handleSelectedPlayers={handleSelectedPlayers}></Players>
        ) : (
          <SelectedPlayer
            selectedPlayers={selectedPlayers}
            handleDelete={handleDelete}
            handleIsactiveStatus={handleIsactiveStatus}
            handleDeleteBtnAddMoney={handleDeleteBtnAddMoney}
          ></SelectedPlayer>
        )}
      </div>
    </div>
  );
};

export default CartCointainer;
