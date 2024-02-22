import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const HomePage = () => {
  const { fullName, role, email, location, number, profileDescription } = useContext(UserContext);
  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-screen bg-stone-300">
          <div className=" ms-32 pt-32 font-serif text-stone-600 text-5xl flex flex-col items-start">
            <h1 className="capitalize">{fullName}</h1>
            <h1>Name</h1>
            <h3 className="text-lg capitalize">
              <i className="fa-solid fa-user fa-xs me-2"></i>
              {role}Your Current Role
            </h3>
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <h1 className="mb-2">Education</h1>
            <h3 className="mb-2">Title of Study</h3>
            <h3 className="mb-2">School Name</h3>
            <h3 className="mb-2">Date of Study</h3>
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <h1 className="mb-2">Skills</h1>
            <h3 className="mb-2">Skill one</h3>
            <h3 className="mb-2">Skill two</h3>
            <h3 className="mb-2">Skill three</h3>
          </div>
        </div>

        <div className="w-3/4">
          <div className="pt-40 ps-40">
            <h4>Email: {email}</h4>
            <h4>phone number: {number}</h4>
            <h4>Location: {location}</h4>
          </div>
          <div className="ps-32 pt-16">
            <h1>Profile</h1>
            <p>
              {profileDescription}
              Description Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolor harum assumenda et ipsa, ut recusandae, necessitatibus
              soluta beatae non nemo qui perferendis corrupti dolorem doloribus
              aut, at rerum esse deserunt.
            </p>
          </div>

          <div className="ps-32 pt-16">
            <h1 className="mb-4">Experience</h1>
            <h3>Job title</h3>
            <h3>Company Name | Duration of Work</h3>
            <p>
              Description of work <br /> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dolor harum assumenda et ipsa, ut recusandae,
              necessitatibus soluta beatae non nemo qui perferendis corrupti
              dolorem doloribus aut, at rerum esse deserunt.
            </p>
          </div>
        </div>
      </div>
      <NavLink to="/addinfo">
        {" "}
        <button>Add details</button>
      </NavLink>
      <br />
      <h1>my name is {fullName}</h1>
      <h1>my role is {role}</h1>
    </>
  );
};

export default HomePage;
