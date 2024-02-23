import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import { UserInfo } from "../components/InputComponents";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import FormPage from "../pages/Formpage";

const Routing = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [educationDetail, setEducationDetail] = useState([
    { degree: "", institute: "", date: "" },
  ]);
  const [skillList, setSkillList] = useState([{ skills: "" }]);
  const [experiencesList, setExperiencesList] = useState([
    { title: "", company: "", date: "", detail: "" },
  ]);
  return (
    <>
      <UserContext.Provider
        value={{
          fullName,
          setFullName,
          role,
          setRole,
          email,
          setEmail,
          location,
          setLocation,
          number,
          setNumber,
          profileDescription,
          setProfileDescription,
          educationDetail,
          setEducationDetail,
          skillList,
          setSkillList,
          experiencesList,
          setExperiencesList,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addinfo" element={<UserInfo />}/>
            <Route path="/form" element={<FormPage/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default Routing;
