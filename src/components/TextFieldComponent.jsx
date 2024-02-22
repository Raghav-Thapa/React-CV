export const TextField = ({title, handleSubmitFirstName, name, fname} ) => {
  return (
    <div>
      {title}
      <input
        className=" border border-black"
        type="text"
        name={name}
        ref={fname}
        // onChange={(event) => setFirstName(event.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmitFirstName}>Submit</button>
    </div>
  );
};
