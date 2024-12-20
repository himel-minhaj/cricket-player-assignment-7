import { useEffect, useState } from "react";
import "./Players.css";
import Available from "./Available";



const Players = ({ handleSelectedPlayers }) => {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);
  // console.log(allPlayers);
  return (
    <div className="container mx-auto px-4 mb-4">
      <h1 className="font-bold text-2xl ml-8 py-3">Available Players</h1>
      <div className="grid grid-cols-3 gap-6 container mx-auto px-4">
        {allPlayers.map((player) => (
          <Available
            key={player.id}
            player={player}
            handleSelectedPlayers={handleSelectedPlayers}
          ></Available>
        ))}
      </div>
    </div>
  );
};

export default Players;
