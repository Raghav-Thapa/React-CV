import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const HomePage = () => {
const handleDownload = () => {
  html2canvas(document.getElementById("content"), {
    windowWidth: document.getElementById("content").scrollWidth,
    windowHeight: document.getElementById("content").scrollHeight,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgProps = new Image();
    imgProps.src = imgData;
    imgProps.onload = () => {
      const pdfWidth = imgProps.width > imgProps.height ? "a4" : "a0";
      const pdfOrientation = imgProps.width > imgProps.height ? "l" : "p";
      const pdf = new jsPDF(pdfOrientation, "mm", pdfWidth);
      const pdfHeight =
        (imgProps.height * pdf.internal.pageSize.getWidth()) / imgProps.width;
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdfHeight
      );
      pdf.save("download.pdf");
    };
  });
};
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
  } = useContext(UserContext);
  return (
    <>
      <div className="flex" id="content">
        <div className="w-1/4 bg-stone-300 min-h-screen">
          <div className="absolute">
            <NavLink to="/">
              <i className="fa-solid fa-pen-to-square fa-lg ms-3 mt-5 cursor-pointer"></i>
            </NavLink>{" "}
            <button onClick={handleDownload}>
              <i className="fa-solid fa-file-arrow-down fa-lg  ms-3 mt-5 cursor-pointer"></i>
            </button>
          </div>
          <div className=" ms-32 mt-28 font-serif text-stone-700 text-6xl flex flex-col items-start">
            <h1 className="uppercase">
              {fullName ? fullName : <span>NAME</span>}
            </h1>
            <h3 className="text-lg  text-stone-600 mt-1 capitalize">
              <i className="fa-solid fa-user fa-xs me-2"></i>
              {role ? role : <span>Your Current Role</span>}
            </h3>
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <h1 className="mb-3 font-serif text-stone-800 text-2xl">
              EDUCATION
            </h1>
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
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <h1 className="mb-3 font-serif text-stone-800 text-2xl">SKILLS</h1>
            {skillList.map((skill, index) => (
              <div key={index}>
                <h3 className="font-serif text-stone-600 text-lg capitalize">
                  {skill.skills ? skill.skills : <span>Skillone</span>}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-3/4">
          <div className=" bg-stone-300 w-1/4 ps-24 p-5 rounded-bl-full float-end">
            {" "}
            <h4 className="font-serif text-stone-600 text-md">
              <i className="fa-solid fa-envelope fa-md me-3"></i>
              {email ? email : <span>hello@gmail.com</span>}
            </h4>
            <h4 className="font-serif text-stone-600 text-md">
              <i className="fa-solid fa-mobile-screen-button fa-md me-3"></i>
              {number ? number : <span>+977-9999999999</span>}
            </h4>
            <h4 className="font-serif text-stone-600 text-md">
              <i className="fa-solid fa-location-dot fa-md me-3"></i>
              {location ? location : <span>Kathmandu, Nepal</span>}
            </h4>
          </div>
          <div className="mt-32">
            <h1 className="mb-2 ms-32 font-serif text-stone-800 text-2xl">
              PROFILE
            </h1>
            <hr className="w-1/5 h-0.5 bg-stone-600" />
            <p className="ms-32 font-serif text-stone-600 text-md mt-5">
              {profileDescription ? (
                profileDescription
              ) : (
                <>
                  Description Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Dolor harum assumenda et ipsa, ut
                  recusandae, necessitatibus soluta beatae non nemo qui
                  perferendis corrupti dolorem doloribus aut, at rerum esse
                  deserunt.
                </>
              )}
            </p>
          </div>

          <div className=" mt-14">
            <h1 className="mb-2 ms-32 font-serif text-stone-800 text-2xl">
              EXPERIENCE
            </h1>
            <hr className="w-1/5 h-0.5 bg-stone-600" />
            {experiencesList.map((expList, index) => (
              <div
                key={index}
                className="ms-32 mt-5 font-serif text-stone-600 text-md"
              >
                {" "}
                <h3 className="font-serif text-stone-600 text-lg uppercase">
                  {expList.title ? expList.title : <span>Job title </span>}
                </h3>
                <h3 className="font-serif text-stone-600 text-lg">
                  {expList.company ? (
                    expList.company
                  ) : (
                    <span>Company Name </span>
                  )}
                  |
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
                      consectetur adipisicing elit. Dolor harum assumenda et
                      ipsa, ut recusandae, necessitatibus soluta beatae non nemo
                      qui perferendis corrupti dolorem doloribus aut, at rerum
                      esse deserunt.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
