import { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { TextField } from "./TextFieldComponent";

export const UserInfo = () => {
  const {
    setFullName,
    setRole,
    setEmail,
    setNumber,
    setLocation,
    setProfileDescription,
  } = useContext(UserContext);
  const [name, setName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const [educations, setEducations] = useState([
    { degree: "", institute: "", date: "" },
  ]);

  const [skill, setSkill] = useState([{ skills: "" }]);

  const handleAddSkill = () => {
    setSkill((prevSkills) => [...prevSkills, { skills: "" }]);
  };
  const handleRemoveSkill = (index) => {
    setSkill((prevSkill) => prevSkill.filter((_, i) => i !== index));
  };

  const handleSubmitFirstName = () => {
    setFullName(name);
  };

  const handleSubmitRole = () => {
    setRole(currentRole);
  };

  const handleSubmitEmail = () => {
    setEmail(currentEmail);
  };
  const handleSubmitNumber = () => {
    setNumber(currentNumber);
  };
  const handleSubmitLocation = () => {
    setLocation(currentLocation);
  };
  const handleSubmitDescription = () => {
    setProfileDescription(currentDescription);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skill];
    if (newSkills[index]) {
      newSkills[index].skills = value;
      setSkill(newSkills);
    }
    console.log(newSkills);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducations = [...educations];
    if (newEducations[index]) {
      newEducations[index][field] = value;
      setEducations(newEducations);
    }
    // console.log(educations);
  };
  const handleAddEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      { degree: "", institute: "", date: "" },
    ]);
  };

  const handleRemoveEducation = (index) => {
    setEducations((prevEducations) =>
      prevEducations.filter((_, i) => i !== index)
    );
  };
  return (
    <>
      {" "}
      <div>
        <TextField
          title={"Enter Full name"}
          type={"text"}
          name={"name"}
          value={name}
          setValue={setName}
          handleSubmit={handleSubmitFirstName}
        />
        <br />
        <TextField
          title={"Enter Your Role"}
          type={"text"}
          name={"role"}
          value={currentRole}
          setValue={setCurrentRole}
          handleSubmit={handleSubmitRole}
        />
        <br />
        <h1 className="mb-2">Education Background</h1>
        {educations.map((education, index) => (
          <div key={index}>
            <label>Name of Degree </label>
            <input
              className="border border-black"
              type="text"
              value={education.degree}
              onChange={(e) =>
                handleEducationChange(index, "degree", e.target.value)
              }
            />
            <label>Name of Institute </label>
            <input
              className="border border-black"
              type="text"
              value={education.institute}
              onChange={(e) =>
                handleEducationChange(index, "institute", e.target.value)
              }
            />
            <label>Date of Study </label>
            <input
              className="border border-black me-5"
              type="date"
              value={education.date}
              onChange={(e) =>
                handleEducationChange(index, "date", e.target.value)
              }
            />{" "}
            <button
              className="border bg-red-300 rounded-lg"
              onClick={() => handleRemoveEducation(index)}
            >
              <i className="fa-solid fa-minus ms-5 me-2"></i>Remove
            </button>
          </div>
        ))}
        <button
          className="border bg-slate-300 rounded-lg"
          onClick={handleAddEducation}
        >
          <i className="fa-solid fa-plus ms-5 me-2"></i>Add more
        </button>
        <br />
        <h1 className="mt-5 mb-2">Skills</h1>
        {skill.map((skil, index) => (
          <div key={index}>
            <input
              type="text"
              value={skil.skills}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="border border-black me-5"
            />{" "}
            <button
              className="border bg-red-300 rounded-lg"
              onClick={() => handleRemoveSkill(index)}
            >
              <i className="fa-solid fa-minus ms-5 me-2"></i>Remove
            </button>
          </div>
        ))}

        <button
          className="border bg-slate-300 rounded-lg mt-4"
          onClick={handleAddSkill}
        >
          <i className="fa-solid fa-plus ms-5 me-2"></i>Add more
        </button>
        <br />
        <NavLink to="/"> Generate My CV</NavLink>
      </div>
      <br /> <hr />
      <br />
      <TextField
        title={"Enter your email"}
        type={"email"}
        name={"email"}
        value={currentEmail}
        setValue={setCurrentEmail}
        handleSubmit={handleSubmitEmail}
      />
      <br />
      <TextField
        title={"Enter your Phonenumber"}
        type={"text"}
        name={"text"}
        value={currentNumber}
        setValue={setCurrentNumber}
        handleSubmit={handleSubmitNumber}
      />
      <br />
      <TextField
        title={"Enter your location"}
        type={"text"}
        name={"text"}
        value={currentLocation}
        setValue={setCurrentLocation}
        handleSubmit={handleSubmitLocation}
      />
      <br />
      <label>Write in short about yourself</label>
      <br />
      <textarea
        className=" border border-black"
        name="about"
        cols="40"
        rows="5"
        value={currentDescription}
        onChange={(event) => setCurrentDescription(event.target.value)}
        // setValue={setCurrentDescription}
      />
      <button onClick={handleSubmitDescription}>Submit</button>
      <br />
    </>
  );
};
