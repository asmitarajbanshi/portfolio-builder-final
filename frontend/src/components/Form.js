import FormGroup from "./Bootstrap/FormGroup";
import SocialMedia from "./Bootstrap/SocialMedia";
import AwardList from "./Form/Awards/AwardList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import ProjectList from "./Form/Projects/ProjectList";
import SkillsList from "./Form/Skills/SkillsList";
import { SectionTitle } from "./sectionTitle/sectionTitle";

const Form = ({ FormData, onChange, isExperienceEnabled, isEducationEnabled, isSkillEnabled, isInterestEnabled, isAwardsEnabled,
  isProjectEnabled, toggleProject, toggleExperience, toggleEducation, toggleSkill, toggleInterest, toggleAward }) => {
  const Desc = {
    FullName: [
      "text",
      "Full Name",
    ],
    FirstName: [
      "text",
      "First Name",
    ],
    LastName: ["text", "Last Name"],
    Thubmnail: [
      "text",
      "Your Photo",
    ],
    URL: [
      "text",
      "Website / Resume Link",
    ],
    Keywords: [
      "text",
      "Keywords i.e. frontend developer",
    ],
    Description: ["text", "About you",],
    
    Address: [
      "text",
      "Address",
    ],
    Phone: [
      "text",
      "Phone Number",
    ],
    Email: ["text", "Email Address",  ],

    Socials: {
      Facebook: [
        "text",
        "Facebook Id",
        
      ],
      WhatsApp: [
        "text",
        "WhatsApp Number",
      ],
      Instagram: [
        "text",
        "Instagram Username",
      ],
      Twitter: [
        "text",
        "Twitter Handle",
      ],
      LinkedIn: [
        "text",
        "LinkedIn ID",
      ],
      GitHub: [
        "text",
        "GitHub Username",
      ],
      StackOverflow: [
        "text",
        "StackOverflow Profile",
      ],
    },
  };

  const getBorderColor = (fd) => {
    if (FormData[fd].length != 0 && fd !== "Colour") {
      //changed the code here to neglect the theme color section filled
      return "border-lime-500"; // Green color for filled section
    }
    return ""; // No special border color for unfilled section
  };
  return (
    <div className="Form">
        <h1 className="text-xl mb-2 font-bold">Basic Info</h1>
      {Object.keys(FormData).map((fd) =>
        fd !== "Socials" ? (
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
              borderColor={getBorderColor(fd)}
            />
          )
        ) : (
          <SocialMedia
            MediaData={Desc[fd]}
            value={FormData[fd]}
            onChange={fd === "FullName" ? () => {} : onChange}
          />
        )
      )}
       <div className={isExperienceEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
        {true ? (
          <>
            <SectionTitle initialTitle="Experience" titleType="experience"/>
            <ExperienceList />
          </>
        ) : (
          <p className="">Experience section is disabled.</p>
        )}
        
        {/* <button className={"text-white  w-full py-1 " + (isExperienceEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleExperience}>
          {isExperienceEnabled ? 'Remove' : 'Add'} Experience Section
        </button> */}
      </div>

      <div className={isEducationEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
        {true ? (
          <>
            <SectionTitle initialTitle="Education" titleType='education'/>
            <EducationList />
          </>
        ) : (
          <p>Education section is disabled.</p>
        )}
        {/* <button className={"text-white  w-full py-1 " + (isEducationEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleEducation}>
          {isEducationEnabled ? 'Remove' : 'Add'} Education Section
        </button> */}
      </div>
      
      <div className={isSkillEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
            <SectionTitle initialTitle="Skills" titleType="skills"/>
            <SkillsList />
          </>
        ) : (
          <p>Skills section is disabled.</p>
        )}
        {/* <button className={"text-white  w-full py-1 " + (isSkillEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleSkill}>
          {isSkillEnabled ? 'Remove' : 'Add'} Skills Section
        </button> */}
      </div>

      <div className={isInterestEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
           <SectionTitle initialTitle="Interests" titleType="interests"/>
           <InterestList />
          </>
        ) : (
          <p>Interest section is disabled.</p>
        )}
        {/* <button className={"text-white  w-full py-1 " + (isInterestEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleInterest}>
          {isInterestEnabled ? 'Remove' : 'Add'} Interest Section
        </button> */}
      </div>

      <div className={isAwardsEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
           <SectionTitle initialTitle="Awards" titleType="awards"/>
           <AwardList />
          </>
        ) : (
          <p>Awards section is disabled.</p>
        )}
      </div>
      
      <div className={isProjectEnabled ? "bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
           <SectionTitle initialTitle="Projects" titleType="projects"/>
           <ProjectList />
          </>
        ) : (
          <p>Projects section is disabled.</p>
        )}
      </div>
    </div>
  );
};

export default Form;