import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import { UserInfo } from "../components/InputComponents";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";


const Routing = () => {
    const [fullName, setFullName] = useState("");
  return (
    <>
    <UserContext.Provider value={{fullName, setFullName}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addinfo" element ={<UserInfo/>}></Route>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default Routing;
