import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../App";
function Home() {
  const user = useContext(AppContext);
  const { opensidebar, openmodal } = user;
  return (
    <main className="btnMenu">
      <button onClick={opensidebar}>
        <FaBars />
      </button>
      <div className="showbtn">
        <button onClick={openmodal}>show modal</button>
      </div>
    </main>
  );
}

export default Home;
