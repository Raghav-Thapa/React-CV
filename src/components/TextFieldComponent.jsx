export const TextField = ({title, handleSubmit, name, value, setValue, type} ) => {
  return (
    <div>
      {title}
      <input
        className=" border border-black"
        type={type}
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
