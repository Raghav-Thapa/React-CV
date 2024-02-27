import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import userImage from "../assets/user.png";
import {
  ContactInfo,
  ProfileSection,
  ExperienceSection,
  SkillsSection,
  EducationSection,
} from "../components/HomeComponent";

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
    profileImage,
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
          <div className=" ms-32 mt-32 font-serif text-stone-700 text-6xl flex flex-col items-start">
            <h1 className="uppercase">
              {fullName ? fullName : <span>NAME</span>}
            </h1>
            <h3 className="text-lg  text-stone-600 mt-1 capitalize">
              <i className="fa-solid fa-user fa-xs me-2"></i>
              {role ? role : <span>Your Current Role</span>}
            </h3>
          </div>

          <div className="flex flex-col mt-10 ms-32">
            <EducationSection educationDetail={educationDetail} />
          </div>
          <div className="flex flex-col mt-10 ms-32">
            <SkillsSection skillList={skillList} />
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex justify-between">
            <div className="bg-stone-300 h-1/2 rounded-br-full rounded-bl-full">
              {profileImage ? (
                <img
                  height={500}
                  width={200}
                  className="rounded-br-full rounded-bl-full"
                  src={profileImage}
                  alt="Profile picture"
                />
              ) : (
                <img
                  className="rounded-br-full rounded-bl-full"
                  height={500}
                  width={200}
                  src={userImage}
                  alt=""
                />
              )}
            </div>
            <div className=" bg-stone-300 w-1/3 h-1/2 ps-32 p-10 rounded-bl-full float-end">
              <ContactInfo
                icon="fa-envelope"
                info={email}
                defaultInfo="hello@gmail.com"
              />
              <ContactInfo
                icon="fa-mobile-screen-button"
                info={number}
                defaultInfo="+977-9999999999"
              />
              <ContactInfo
                icon="fa-location-dot"
                info={location}
                defaultInfo="Kathmandu, Nepal"
              />
            </div>
          </div>
          <div className="mt-16">
            <ProfileSection
              title="PROFILE"
              description={profileDescription}
              defaultDescription="Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor harum assumenda et ipsa, ut recusandae, necessitatibus soluta beatae non nemo qui perferendis corrupti dolorem doloribus aut, at rerum esse deserunt."
            />
          </div>
          <div className=" mt-14">
            <ExperienceSection experiencesList={experiencesList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
