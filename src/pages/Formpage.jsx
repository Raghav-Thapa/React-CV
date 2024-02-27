import { useState, useContext } from "react";
import { Button, InputField, TextField } from "../components/FormComponent";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../components/FormComponent";

const FormPage = () => {
  const {
    fullName,
    role,
    email,
    location,
    number,
    profileDescription,
    educationDetail,
    skillList,
    experiencesList,
    setFullName,
    setRole,
    setEmail,
    setNumber,
    setLocation,
    setProfileDescription,
    setEducationDetail,
    setSkillList,
    setExperiencesList,
  } = useContext(UserContext);

  const [name, setName] = useState(fullName);
  const [currentRole, setCurrentRole] = useState(role);
  const [currentEmail, setCurrentEmail] = useState(email);
  const [currentNumber, setCurrentNumber] = useState(number);
  const [currentLocation, setCurrentLocation] = useState(location);
  const [currentDescription, setCurrentDescription] =
    useState(profileDescription);
  const [personal, setPersonal] = useState(true);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [educations, setEducations] = useState(educationDetail);

  const [skill, setSkill] = useState(skillList);

  const [experiences, setExperiences] = useState(experiencesList);
  const [generateCv, setGenerateCv] = useState(false);

  const handleFormClick = (formType) => {
    setPersonal(formType === "personal");
    setEducation(formType === "education");
    setExperience(formType === "experience");
  };

  const handlePersonalDetailSubmit = () => {
    setFullName(name);
    setRole(currentRole);
    setEmail(currentEmail);
    setNumber(currentNumber);
    setLocation(currentLocation);
    setProfileDescription(currentDescription);
    handleFormClick("education");
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
      { degree: "", institute: "", startDate: "", endDate: "" },
    ]);
  };

  const handleRemoveEducation = (index) => {
    setEducations((prevEducations) =>
      prevEducations.filter((_, i) => i !== index)
    );
  };
  const handleSubmitEducation = () => {
    setEducationDetail(educations);
    handleFormClick("experience");
  };
  const handleAddSkill = () => {
    setSkill((prevSkills) => [...prevSkills, { skills: "" }]);
  };
  const handleRemoveSkill = (index) => {
    setSkill((prevSkill) => prevSkill.filter((_, i) => i !== index));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skill];
    if (newSkills[index]) {
      newSkills[index].skills = value;
      setSkill(newSkills);
    }
    console.log(newSkills);
  };
  const handleSubmitExperience = () => {
    setExperiencesList(experiences);
    setSkillList(skill);
    setGenerateCv(true);
  };

  const handleAddExperience = () => {
    setExperiences((prevExperience) => [
      ...prevExperience,
      { title: "", company: "", startDate: "", endDate: "", detail: "" },
    ]);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experiences];
    if (newExperience[index]) {
      newExperience[index][field] = value;
      setExperiences(newExperience);
    }
    console.log(newExperience);
  };
  const handleRemoveExperience = (index) => {
    setExperiences((prevExperience) =>
      prevExperience.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-stone-200">
        <div>
          <h1 className="uppercase text-3xl font-serif text-stone-600 mt-16 mb-10 font-semibold text-center">
            Create your cv
          </h1>
          <hr className="h-0.5 bg-black mt-3" />
        </div>
        <div className="flex flex-col ms-16 capitalize text-xl font-serif text-stone-600 mt-12">
          <Sidebar
            onClick={() => handleFormClick("personal")}
            active={personal}
            icon="fa-user"
            title="Personal Information"
          />
          <Sidebar
            onClick={() => handleFormClick("education")}
            active={education}
            icon="fa-book"
            title="Education Background"
          />
          <Sidebar
            onClick={() => handleFormClick("experience")}
            active={experience}
            icon="fa-brain"
            title="Skills and Experiences"
          />
          <NavLink
            to="/cv"
            className={`${
              generateCv ? "bg-stone-300" : ""
            } ms-3 mt-5 bg-stone-100 w-1/2 p-2 ps-7 pe-7 rounded-lg capitalize font-serif text-stone-700 text-md hover:bg-stone-300`}
          >
            Generate My CV
          </NavLink>
        </div>
      </div>
      <div className="w-3/4 h-screen bg-stone-50 ">
        {personal && (
          <div>
            <h1 className=" bg-stone-200  text-center p-7 mb-16 font-serif text-stone-800 text-2xl uppercase">
              Personal Details
            </h1>
            <div className="grid grid-cols-2">
              <TextField
                title={"Full name"}
                type={"text"}
                name={"name"}
                placeholder={"enter your full name"}
                value={name}
                setValue={setName}
              />
              <TextField
                title={"Job Role"}
                type={"text"}
                name={"role"}
                placeholder={"enter your job role or title"}
                value={currentRole}
                setValue={setCurrentRole}
              />
              <TextField
                title={"Email"}
                type={"email"}
                name={"email"}
                placeholder={"enter your email address"}
                value={currentEmail}
                setValue={setCurrentEmail}
              />
              <TextField
                title={"Phonenumber"}
                type={"text"}
                name={"text"}
                placeholder={"enter your phone number"}
                value={currentNumber}
                setValue={setCurrentNumber}
              />
              <TextField
                title={"Address"}
                type={"text"}
                name={"text"}
                placeholder={"enter your current address"}
                value={currentLocation}
                setValue={setCurrentLocation}
              />
              <br />
              <div className="ms-10 mt-5">
                <h1 className="me-5 mb-1 capitalize font-serif text-stone-700 text-md">
                  Write in short about yourself
                </h1>
                <textarea
                  placeholder="describe about yourself in short"
                  className=" border border-black ps-3 pt-1"
                  name="about"
                  cols="90"
                  rows="5"
                  value={currentDescription}
                  onChange={(event) =>
                    setCurrentDescription(event.target.value)
                  }
                />
              </div>
            </div>
            <Button
              icon="fa-arrow-right"
              handleClick={handlePersonalDetailSubmit}
              text="Next"
            />
          </div>
        )}
        {education && (
          <div className=" h-screen">
            <h1 className=" bg-stone-200  text-center p-7 mb-16 font-serif text-stone-800 text-2xl uppercase">
              Education Background
            </h1>
            <div className="overflow-scroll overflow-x-hidden h-3/4 ">
              {educations.map((education, index) => (
                <div key={index}>
                  <div className="grid grid-cols-2 " key={index}>
                    <InputField
                      labelText="Name of Degree"
                      placeHolder="name of degree"
                      type="text"
                      eduValue={education.degree}
                      handleChangee={(e) =>
                        handleEducationChange(index, "degree", e.target.value)
                      }
                    />
                    <InputField
                      labelText="Name of Institute"
                      placeHolder="name of institute"
                      type="text"
                      eduValue={education.institute}
                      handleChangee={(e) =>
                        handleEducationChange(
                          index,
                          "institute",
                          e.target.value
                        )
                      }
                    />
                    <InputField
                      labelText="Start Date"
                      placeHolder="start date"
                      type="date"
                      eduValue={education.startDate}
                      handleChangee={(e) =>
                        handleEducationChange(
                          index,
                          "startDate",
                          e.target.value
                        )
                      }
                    />
                    <InputField
                      labelText="End Date"
                      placeHolder="end date"
                      type="date"
                      eduValue={education.endDate}
                      handleChangee={(e) =>
                        handleEducationChange(index, "endDate", e.target.value)
                      }
                    />
                    <button
                      className="w-1/4 ms-10 mt-7 bg-red-200 p-2 pe-7 rounded-lg capitalize font-serif text-stone-700 text-md hover:bg-stone-300"
                      onClick={() => handleRemoveEducation(index)}
                    >
                      <i className="fa-solid fa-minus ms-5 me-2"></i>Remove
                    </button>
                    <br />
                  </div>
                  <hr className="h-0.5 mt-5 mb-2 bg-stone-300" />
                </div>
              ))}
              <Button
                icon="fa-plus"
                handleClick={handleAddEducation}
                text="Add more"
              />
              <Button
                icon="fa-arrow-right"
                handleClick={handleSubmitEducation}
                text="Next"
              />
            </div>
          </div>
        )}
        {experience && (
          <div className="h-screen">
            <div>
              <h1 className=" bg-stone-200  text-center p-7 mb-16 font-serif text-stone-800 text-2xl uppercase">
                Skills and Experiences
              </h1>
            </div>
            <div className="h-4/5 overflow-scroll overflow-x-hidden">
              <div className="rounded-l-lg w-full">
                <h1 className="me-5 ms-10 capitalize font-serif text-stone-700 text-xl">
                  List Your Skills:
                </h1>
              </div>
              <div className="border border-slate-300 ms-10 mt-5 lg:w-4/5 grid grid-cols-4 gap-3 rounded-lg">
                {skill.map((skil, index) => (
                  <div className="" key={index}>
                    <input
                      placeholder="Add your skill"
                      type="text"
                      value={skil.skills}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="ps-5 h-11 me-2 rounded-r-lg  bg-transparent border"
                    />{" "}
                    <button
                      className="rounded-lg"
                      onClick={() => handleRemoveSkill(index)}
                    >
                      <i className="fa-solid fa-trash ms-2 me-2"></i>
                    </button>
                  </div>
                ))}
              </div>
              <Button
                icon="fa-plus"
                handleClick={handleAddSkill}
                text="Add more"
              />
              <hr className="mt-5 h-0.5 bg-stone-300" />
              <div className=" mt-7 rounded-l-lg w-full">
                <h1 className="me-5 ms-10 capitalize font-serif text-stone-700 text-xl">
                  List Your Experiences:
                </h1>
              </div>
              <div className="">
                {experiences.map((experience, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-2 " key={index}>
                      <InputField
                        labelText="Job Title"
                        placeHolder="title of your job"
                        type="text"
                        eduValue={experience.title}
                        handleChangee={(e) =>
                          handleExperienceChange(index, "title", e.target.value)
                        }
                      />
                      <InputField
                        labelText="Name of Company"
                        placeHolder="name of company"
                        type="text"
                        eduValue={experience.company}
                        handleChangee={(e) =>
                          handleExperienceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                      />
                      <InputField
                        labelText="Start Date"
                        placeHolder="start date"
                        type="date"
                        eduValue={experience.startDate}
                        handleChangee={(e) =>
                          handleExperienceChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                      />
                      <InputField
                        labelText="End Date"
                        placeHolder="end date"
                        type="date"
                        eduValue={experience.endDate}
                        handleChangee={(e) =>
                          handleExperienceChange(
                            index,
                            "endDate",
                            e.target.value
                          )
                        }
                      />
                      <div className="ms-10 mt-5">
                        <h1 className="me-5 mb-1 capitalize font-serif text-stone-700 text-md">
                          Description of work
                        </h1>
                        <textarea
                          placeholder="describe about yourself in short"
                          className=" border border-black ps-3 pt-1"
                          name="about"
                          cols="90"
                          rows="5"
                          value={experience.detail}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "detail",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <br />
                      <button
                        className="w-1/4 ms-10 mt-3 bg-red-200 p-2 pe-7 rounded-lg capitalize font-serif text-stone-700 text-md hover:bg-stone-300"
                        onClick={() => handleRemoveExperience(index)}
                      >
                        <i className="fa-solid fa-minus ms-5 me-2"></i>Remove
                      </button>
                    </div>
                    <hr className="h-0.5 mt-5 mb-2 bg-stone-300" />
                  </div>
                ))}
                <Button
                  icon="fa-plus"
                  handleClick={handleAddExperience}
                  text="Add more"
                />
                <button
                  className="ms-10 mt-10 bg-green-200 p-2 ps-7 pe-7 rounded-lg capitalize font-serif text-stone-700 text-md hover:bg-green-300"
                  onClick={handleSubmitExperience}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;
