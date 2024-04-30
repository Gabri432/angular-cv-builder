import { Component, Input, SimpleChanges } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() userCv: Cv = {
    personalDetails: {address: "", name: "", email: "", linkedin: "", github: ""},
    educationDetails: {listOfInstitutes: [], listOfDegrees: []},
    experienceDetails: {listOfJobs: [], listOfJobDescriptions: [], listOfJobPeriods: []},
    skillDetails: {listOfSkillNames: [],  listOfSkillLevels: []},
    listOfExtras: []
  };

  educationListSize: number[] = [];
  experienceListSize: number[] = [];
  skillListSize: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userCv']) {
      for (let i = 0; i < this.userCv.educationDetails.listOfDegrees.length; i++) {
        this.educationListSize.push(i)
      }
      for (let i = 0; i < this.userCv.experienceDetails.listOfJobs.length; i++) {
        this.experienceListSize.push(i)
      }
      for (let i = 0; i < this.userCv.skillDetails.listOfSkillNames.length; i++) {
        this.skillListSize.push(i)
      }
    }
  }

}
