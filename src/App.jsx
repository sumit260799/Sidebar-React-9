import React, { createContext, useState } from "react";

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
        value={{ opensidebar, closesidebar, openmodal, closemodal }}
      ></AppContext.Provider>
    </>
  );
}

export default App;
