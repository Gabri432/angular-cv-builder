import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnChanges {
  @Input() userCv: Cv = {
    personalDetails: {address: "", name: "", email: "", linkedin: "", github: ""},
    educationDetails: {listOfInstitutes: [], listOfDegrees: []},
    experienceDetails: {listOfJobs: [], listOfJobDescriptions: [], listOfJobPeriods: []},
    skillDetails: {listOfSkillNames: [],  listOfSkillLevels: []},
    listOfExtras: []
  };
  @Output() goBack = new EventEmitter<boolean>();

  educationListSize: number[] = [];
  experienceListSize: number[] = [];
  skillListSize: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.educationListSize = [];
    this.experienceListSize = [];
    this.skillListSize = [];
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

  download() {
    const preview = document.getElementById('preview') as HTMLElement;
    const printWindow = window.open('', '_blank')!;
    printWindow.document.write('<html><head><title>User Cv</title></head>');
    printWindow.document.write('<style>@media print { #personal-section { text-align: center;}');
    printWindow.document.write('table {width: 100%;}');
    printWindow.document.write('td:nth-child(1) {padding-left: 20px;}');
    printWindow.document.write('td:nth-child(2) {text-align: right; padding-right: 20px;}');
    printWindow.document.write('}</style><body>');
    printWindow.document.write(preview.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }

  back(exitEvent: Event) {
    this.goBack.emit(true);
  }

}
