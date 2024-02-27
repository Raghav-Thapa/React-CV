export const ContactInfo = ({ icon, info, defaultInfo }) => {
  return (
    <h4 className="font-serif text-stone-600 text-md">
      <i className={`fa-solid ${icon} fa-md me-3`}></i>
      {info ? info : <span>{defaultInfo}</span>}
    </h4>
  );
};

export const ProfileSection = ({ title, description, defaultDescription }) => {
  return (
    <>
      <h1 className="mb-2 ms-32 font-serif text-stone-800 text-2xl">{title}</h1>
      <hr className="w-1/5 h-0.5 bg-stone-600" />
      <p className="ms-32 font-serif text-stone-600 text-md mt-5">
        {description ? description : <>{defaultDescription}</>}
      </p>
    </>
  );
};

export const ExperienceSection = ({ experiencesList }) => {
  return (
    <>
      <h1 className="mb-2 ms-32 font-serif text-stone-800 text-2xl">
        EXPERIENCE
      </h1>
      <hr className="w-1/5 h-0.5 bg-stone-600" />
      {experiencesList.map((expList, index) => (
        <div
          key={index}
          className="ms-32 mt-5 font-serif text-stone-600 text-md"
        >
          <h3 className="font-serif text-stone-600 text-lg uppercase">
            {expList.title ? expList.title : <span>Job title </span>}
          </h3>
          <h3 className="font-serif text-stone-600 text-lg">
            {expList.company ? expList.company : <span>Company Name </span>}|
            {expList.startDate ? (
              expList.startDate.split("-")[0]
            ) : (
              <span> 2000</span>
            )}{" "}
            -
            {expList.endDate ? (
              expList.endDate.split("-")[0]
            ) : (
              <span> 2000</span>
            )}
          </h3>
          <p className="mt-1">
            {expList.detail ? (
              expList.detail
            ) : (
              <>
                Description of work <br /> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Dolor harum assumenda et ipsa, ut
                recusandae, necessitatibus soluta beatae non nemo qui
                perferendis corrupti dolorem doloribus aut, at rerum esse
                deserunt.
              </>
            )}
          </p>
        </div>
      ))}
    </>
  );
};
export const SkillsSection = ({ skillList }) => {
  return (
    <>
      <h1 className="mb-3 font-serif text-stone-800 text-2xl">SKILLS</h1>
      {skillList.map((skill, index) => (
        <div key={index}>
          <h3 className="font-serif text-stone-600 text-lg capitalize">
            {skill.skills ? skill.skills : <span>Skillone</span>}
          </h3>
        </div>
      ))}
    </>
  );
};

export const EducationSection = ({ educationDetail }) => {
  return (
    <>
      <h1 className="mb-3 font-serif text-stone-800 text-2xl">EDUCATION</h1>
      {educationDetail.map((eduDetail, index) => (
        <div className="mb-4" key={index}>
          <h3 className="font-serif text-stone-600 text-lg capitalize">
            {eduDetail.degree ? (
              eduDetail.degree
            ) : (
              <span> Title of Study </span>
            )}
          </h3>
          <h3 className="font-serif text-stone-600 text-lg capitalize">
            {eduDetail.institute ? (
              eduDetail.institute
            ) : (
              <span>Name of Institute </span>
            )}
          </h3>
          <h3 className="font-serif text-stone-600 text-md">
            {eduDetail.startDate ? (
              eduDetail.startDate.split("-")[0]
            ) : (
              <span> 2000</span>
            )}{" "}
            -
            {eduDetail.endDate ? (
              eduDetail.endDate.split("-")[0]
            ) : (
              <span> 2000</span>
            )}
          </h3>
        </div>
      ))}
    </>
  );
}
