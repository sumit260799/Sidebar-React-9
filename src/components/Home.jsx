import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../App";

function Home() {
  const user = useContext(AppContext);
  const { opensidebar, openmodal } = user;
  return (
    <main className="btnMenu">
      <button className="sidebtn" onClick={opensidebar}>
        <FaBars />
      </button>
      <div className="showbtn">
        <button className="showbtn1" onClick={openmodal}>
          show modal
        </button>
      </div>
    </main>
  );
}

export default Home;
