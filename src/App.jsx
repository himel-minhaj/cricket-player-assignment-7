import React, { useState } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Players from "./Components/Players";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectedPlayer from "./Components/SelectedPlayer";
import CartCointainer from "./Components/CartCointainer";
import NewsLetter from "./Components/NewsLetter";

const App = () => {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  // console.log(isActive);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [freeTaka, setFreeTaka] = useState(0);

  const handleDeleteBtnAddMoney = (deletePrice) => {
    setFreeTaka(freeTaka + deletePrice);
  };

  const handleAddFreeTaka = (tk) => {
    // console.log(tk);
    toast.success("Adding Money");
    const addTaka = freeTaka + tk;
    setFreeTaka(addTaka);
  };

  const handleBuyPlayers = (playerPrice) => {
    // console.log(playerPrice);
    if (selectedPlayers.length <= 5) {
      if (freeTaka < playerPrice) {
        toast("Not Enough Money");
      } else {
        setFreeTaka(freeTaka - playerPrice);
      }
    } else {
      toast("can not chose more then six");
    }

    // const playerPrice = selectedPlayers.find((p) => p == player);
    // setFreeTaka(playerPrice.biddingPrice - freeTaka);
  };

  const handleDelete = (id) => {
    // console.log(id);
    toast("player removed");
    const remaningPlayers = selectedPlayers.filter((p) => p.playerId !== id);
    // handleDeleteBtnAddMoney(p.biddingPrice);
    setSelectedPlayers(remaningPlayers);
  };

  const handleSelectedPlayers = (player) => {
    if (selectedPlayers.length <= 5) {
      const isExist = selectedPlayers.find(
        (p) => p.playerId == player.playerId
      );
      // console.log(isExist);
      if (isExist) {
        toast.error("Player Already Exist");
      } else {
        if (freeTaka < 1500000) {
          toast("Not Enough Money");
        } else {
          handleBuyPlayers(player.biddingPrice);
          toast("Adding player");
          const newSelexctedPlayers = [...selectedPlayers, player];
          setSelectedPlayers(newSelexctedPlayers);
        }
      }
    } else {
      toast("can not chose more then six");
    }
  };
  // console.log(selectedPlayers);

  const handleIsactiveStatus = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      ></ToastContainer>

      {/* Header */}
      <Header freeTaka={freeTaka}></Header>

      {/* Banner  */}
      <Banner handleAddFreeTaka={handleAddFreeTaka}></Banner>
      {/* Player section  */}
      <CartCointainer
        handleIsactiveStatus={handleIsactiveStatus}
        isActive={isActive}
        handleSelectedPlayers={handleSelectedPlayers}
        selectedPlayers={selectedPlayers}
        handleDelete={handleDelete}
        handleDeleteBtnAddMoney={handleDeleteBtnAddMoney}
      ></CartCointainer>

      {/* Footer  */}
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default App;
