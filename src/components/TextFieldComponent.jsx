export const TextField = ({
  title,
  handleSubmit,
  name,
  value,
  setValue,
  type,
  placeholder,
}) => {
  return (
    <div className="border border-slate-300 ms-10 mt-5 w-4/5 flex rounded-lg">
      <div className="bg-stone-200 p-3 ps-4 rounded-l-lg w-1/3">
        <label className="me-5 capitalize font-serif text-stone-700 text-md">
          {title}
        </label>
      </div>
      <div className="bg-stone-100 w-2/3  rounded-r-lg ">
        <input
          placeholder={placeholder}
          className="ps-4 h-full rounded-r-lg w-full bg-transparent"
          type={type}
          name={name}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />{" "}
      </div>
      <br />
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

// export const EducationField = ({ labelText, value, handleEducationChange }) => {
//   return (
//     <div className="border border-slate-300 ms-10 mt-5 w-4/5 flex rounded-lg">
//       <div className="bg-stone-200 p-3 ps-4 rounded-l-lg w-1/3">
//         <label className="me-5 capitalize font-serif text-stone-700 text-md">
//           {labelText}
//         </label>
//       </div>
//       <div className="bg-stone-100 w-2/3  rounded-r-lg ">
//         <input
//           className="ps-4 h-full rounded-r-lg w-full bg-transparent"
//           placeholder="name of degree"
//           type="text"
//           value={value}
//           onChange={(e) =>
//             handleEducationChange(index, "degree", e.target.value)
//           }
//         />
//       </div>
//     </div>
//   );
// };
