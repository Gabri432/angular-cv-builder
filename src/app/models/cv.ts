import { EducationDetails } from "./education-details";
import { ExperienceDetails } from "./experience-details";
import { SkillDetails } from "./skill-details";

export interface Cv {
    name: string;
    email: string;
    address: string;
    linkedin?: string;
    github?: string;
    educationDetails: EducationDetails;
    experienceDetails: ExperienceDetails;
    skillDetails: SkillDetails;
    listOfExtras: string[];
}
