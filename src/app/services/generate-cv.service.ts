import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

const newCv: Cv = {
  personalDetails: {address: "", name: "", email: ""},
  educationDetails: {listOfInstitutes: [], listOfDegrees: []},
  experienceDetails: {listOfJobs: [], listOfJobDescriptions: [], listOfJobPeriods: []},
  skillDetails: {listOfSkillNames: [],  listOfSkillLevels: []},
  listOfExtras: []
}

@Injectable({
  providedIn: 'root'
})

export class GenerateCVService {

  constructor() { }

  updatePersonalDetails(personalDetails: string[]): void {
    newCv.personalDetails = {
      name: personalDetails[0],
      email: personalDetails[1],
      address: personalDetails[2],
      phoneNumber: personalDetails[3],
      linkedin: personalDetails[4],
      website: personalDetails[5],
      shortDescription: personalDetails[6],
    }
  }

  updateEducationDetails(instituteList: string[], degreeList: string[]): void {
    newCv.educationDetails = {
      listOfInstitutes: instituteList,
      listOfDegrees: degreeList
    }
  }

  updateSkillDetails(skillNameList: string[], skillLevelList: string[]): void {
    newCv.skillDetails = {
      listOfSkillNames: skillNameList,
      listOfSkillLevels: skillLevelList
    }
  }

  updateExperienceDetails(jobTitleList: string[], jobDescriptionList: string[], jobPeriodList: string[]): void {
    newCv.experienceDetails = {
      listOfJobs: jobTitleList,
      listOfJobDescriptions: jobDescriptionList,
      listOfJobPeriods: jobPeriodList
    }
  }

  generateCv(extraDetailList: string[]): Cv {
    newCv.listOfExtras = extraDetailList;
    return newCv;
  }

}
