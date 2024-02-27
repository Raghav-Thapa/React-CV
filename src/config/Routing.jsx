import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
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
    { degree: "", institute: "", startDate: "", endDate: "" },
  ]);
  const [skillList, setSkillList] = useState([{ skills: "" }]);
  const [experiencesList, setExperiencesList] = useState([
    { title: "", company: "", startDate: "", endDate: "", detail: "" },
  ]);

  const [profileImage, setProfileImage] = useState(null);
  return (
    <>
      <UserContext.Provider
        value={{
          profileImage,
          setProfileImage,
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
            <Route path="/" element={<FormPage />} />
            <Route path="/cv" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default Routing;
