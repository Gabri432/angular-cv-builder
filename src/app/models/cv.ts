import { EducationDetails } from "./education-details";
import { ExperienceDetails } from "./experience-details";
import { PersonalDetails } from "./personal-details";
import { SkillDetails } from "./skill-details";

export interface Cv {
    personalDetails: PersonalDetails;
    educationDetails: EducationDetails;
    experienceDetails: ExperienceDetails;
    skillDetails: SkillDetails;
    listOfExtras: string[];
}
