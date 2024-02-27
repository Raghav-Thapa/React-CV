import { useEffect, useState } from "react";

export const Sidebar = ({ onClick, active, icon, title }) => {
  return (
    <div
      onClick={onClick}
      className={`mb-5 p-4 cursor-pointer hover:bg-stone-50 ${
        active ? "bg-stone-50" : ""
      }`}
    >
      <i className={`fa-solid ${icon} me-3`}></i>
      {title}
      <i
        className={`fa-solid fa-chevron-right float-end hover-icon ${
          active ? "opacity-100" : " opacity-0"
        }`}
      ></i>
    </div>
  );
};

export const TextField = ({
  title,
  name,
  value,
  setValue,
  type,
  placeholder,
  validation,
  shouldShowError,
}) => {
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const validate = () => {
    if (shouldShowError) {
      const errorMessage = validation(value);
      setError(errorMessage);
    }
  };

  useEffect(validate, [value, shouldShowError]);

  return (
    <div className="border border-slate-300 ms-10 mt-5 w-4/5 flex rounded-lg">
      <div className="bg-stone-200 p-3 ps-4 rounded-l-lg w-1/3">
        <label className="me-5 capitalize font-serif text-stone-700 text-md">
          {title}
        </label>
      </div>
      <div className="bg-stone-100 w-2/3  rounded-r-lg ">
        <input
          placeholder={error ? error : placeholder}
          className="ps-4 h-full rounded-r-lg w-full bg-transparent"
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />{" "}
        {/* {error && <div className="text-red-500 mt-1 ">{error}</div>} */}
      </div>
      <br />
    </div>
  );
};

export const InputField = ({
  labelText,
  handleChangee,
  placeHolder,
  type,
  eduValue,
}) => {
  return (
    <>
      <div className="border border-slate-300 ms-10 mt-5 w-4/5 flex rounded-lg">
        <div className="bg-stone-200 p-3 ps-4 rounded-l-lg w-1/3">
          <label className="me-5 capitalize font-serif text-stone-700 text-md">
            {labelText}
          </label>
        </div>
        <div className="bg-stone-100 w-2/3  rounded-r-lg ">
          <input
            className="ps-4 h-full rounded-r-lg w-full bg-transparent"
            placeholder={placeHolder}
            type={type}
            value={eduValue}
            onChange={handleChangee}
          />
        </div>
      </div>
    </>
  );
};

export const Button = ({ handleClick, text, icon }) => {
  return (
    <>
      <button
        className="ms-10 mt-10 bg-stone-200 p-2 ps-2 pe-7 rounded-lg capitalize font-serif text-stone-700 text-md hover:bg-stone-300"
        onClick={handleClick}
      >
        <i className={`fa-solid ${icon} ms-5 me-2`}></i>
        {text}
      </button>
    </>
  );
};
