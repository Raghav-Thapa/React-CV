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
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
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
            <NavLink to="/form">
              <i className="fa-solid fa-pen-to-square fa-lg ms-3 mt-5 cursor-pointer"></i>
            </NavLink>{" "}
            <button onClick={handleDownload}>
              <i class="fa-solid fa-file-arrow-down fa-lg  ms-3 mt-5 cursor-pointer"></i>
            </button>
          </div>
          <div className=" ms-32 mt-28 font-serif text-stone-700 text-6xl flex flex-col items-start">
            <h1 className="uppercase">{fullName}</h1>
            <h1>NAME</h1>
            <h3 className="text-lg  text-stone-600 mt-1 capitalize">
              <i className="fa-solid fa-user fa-xs me-2"></i>
              {role}Your Current Role
            </h3>
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <h1 className="mb-3 font-serif text-stone-800 text-2xl">
              EDUCATION
            </h1>
            {educationDetail.map((eduDetail, index) => (
              <div className="mb-4" key={index}>
                <h3 className="font-serif text-stone-600 text-lg capitalize">
                  Title of Study {eduDetail.degree}
                </h3>
                <h3 className="font-serif text-stone-600 text-lg capitalize">
                  Name of Institute {eduDetail.institute}
                </h3>
                <h3 className="font-serif text-stone-600 text-md">
                  2018-2022 {eduDetail.date.split("-")[0]} -{" "}
                  {eduDetail.date.split("-")[0]}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <h1 className="mb-3 font-serif text-stone-800 text-2xl">SKILLS</h1>
            {skillList.map((skill, index) => (
              <div key={index}>
                <h3 className="font-serif text-stone-600 text-lg capitalize">
                  {skill.skills}skillone
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
              {email} hello@gmail.com
            </h4>
            <h4 className="font-serif text-stone-600 text-md">
              <i className="fa-solid fa-mobile-screen-button fa-md me-3"></i>
              {number} +977-9999999999
            </h4>
            <h4 className="font-serif text-stone-600 text-md">
              <i className="fa-solid fa-location-dot fa-md me-3"></i>
              {location} Kathmandu, Nepal
            </h4>
          </div>
          <div className="mt-32">
            <h1 className="mb-2 ms-32 font-serif text-stone-800 text-2xl">
              PROFILE
            </h1>
            <hr className="w-1/5 h-0.5 bg-stone-600" />
            <p className="ms-32 font-serif text-stone-600 text-md mt-5">
              {profileDescription}
              Description Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolor harum assumenda et ipsa, ut recusandae, necessitatibus
              soluta beatae non nemo qui perferendis corrupti dolorem doloribus
              aut, at rerum esse deserunt.
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
                  Job title {expList.title}
                </h3>
                <h3 className="font-serif text-stone-600 text-lg">
                  Company Name {expList.company}| 2018-2023
                  {expList.date.split("-")[0]} - {expList.date.split("-")[0]}
                </h3>
                <p className="mt-1">
                  {expList.detail}
                  Description of work <br /> Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Dolor harum assumenda et ipsa,
                  ut recusandae, necessitatibus soluta beatae non nemo qui
                  perferendis corrupti dolorem doloribus aut, at rerum esse
                  deserunt.
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
