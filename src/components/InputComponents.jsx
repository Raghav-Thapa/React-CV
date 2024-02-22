import { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { TextField } from "./TextFieldComponent";

export const UserInfo = () => {
  const { setFullName } = useContext(UserContext);
  const fName = useRef();

  const handleSubmitFirstName = () => {
    setFullName(fName.current.value);
  };

  return (
    <>
      {/* Enter Your Full Name
      <input
        className=" border border-black"
        type="text"
        name="name"
        id=""
        ref={fName}
        // onChange={(event) => setFirstName(event.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmitFirstName}>Submit</button> */}
      <TextField
        title={"Enter Full name"}
        name="name"
        fname={fName}
        handleSubmitFirstName={handleSubmitFirstName}
      />
      <br /> <br />
      <NavLink to="/"> Generate My CV</NavLink>
    </>
  );
};
