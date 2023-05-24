import React, { createContext, useState } from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

const AppContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const opensidebar = () => {
    setIsSidebarOpen(true);
  };
  const closesidebar = () => {
    setIsSidebarOpen(false);
  };
  const openmodal = () => {
    setIsModalOpen(true);
  };
  const closemodal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AppContext.Provider
        value={{
          opensidebar,
          closesidebar,
          openmodal,
          closemodal,
          isSidebarOpen,
          isModalOpen,
        }}
      >
        <Home />
        <Modal />
        <Sidebar />
      </AppContext.Provider>
    </>
  );
}

export default App;
export { AppContext };
