import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ExtraComponent } from '../extra/extra.component';
import { GenerateCVService } from 'src/app/services/generate-cv.service';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { PreviewerService } from 'src/app/services/previewer.service';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(EducationComponent, { static: false }) educationComponent!: EducationComponent;
  @ViewChild(SkillsComponent, { static: false }) skillsComponent!: SkillsComponent;
  @ViewChild(ExperiencesComponent, { static: false}) experiencesComponent!: ExperiencesComponent;
  @ViewChild(ExtraComponent, { static: false }) extraComponent!: ExtraComponent;
  @ViewChild(PersonalDetailsComponent,{ static: false}) personalComponent!: PersonalDetailsComponent;


  private draggables!: NodeListOf<HTMLElement>;
  receivedEducation: string = "";
  receivedExperiences: string = "";
  receivedSkills: string = "";
  receivedExtra: string = "";

  userCv: Cv = {
    personalDetails: {address: "", name: "", email: ""},
    educationDetails: {listOfInstitutes: [], listOfDegrees: []},
    experienceDetails: {listOfJobs: [], listOfJobDescriptions: [], listOfJobPeriods: []},
    skillDetails: {listOfSkillNames: [],  listOfSkillLevels: []},
    listOfExtras: []
  };

  constructor (private previewerService: PreviewerService) {}

    ngOnInit(): void {
      (document.querySelector("app-preview")! as HTMLElement).style.display = "none";
      this.draggables = document.querySelectorAll('.cv-section');
      this.init();
    }

    private init(): void {
      this.draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => this.onDragStart(draggable));
        draggable.addEventListener('dragend', () => this.onDragEnd(draggable));
        draggable.addEventListener('dragover', (event) => this.onDragOver(event));
        draggable.addEventListener('drop', (event) => this.onDrop(event, draggable));
      });
    }

    private onDragStart(draggable: HTMLElement): void {
      draggable.classList.add('dragging');
    }

    private onDragEnd(draggable: HTMLElement): void {
      draggable.classList.remove('dragging');
    }

    private onDragOver(event: DragEvent): void {
      event.preventDefault();
    }

    private onDrop(event: DragEvent, target: HTMLElement): void {
      event.preventDefault();
      const dragging = document.querySelector('.dragging') as HTMLElement;
      if (dragging !== target) {
        const draggingIndex = Array.from(this.draggables).indexOf(dragging);
        const targetIndex = Array.from(this.draggables).indexOf(target);
        if (draggingIndex < targetIndex) {
          target.parentNode?.insertBefore(dragging, target.nextSibling);
        } else {
          target.parentNode?.insertBefore(dragging, target);
        }
      }
    }

    download() {
      const myService = new GenerateCVService;
      myService.updateEducationDetails(
        this.educationComponent.getEducationDetailList('institutes'), 
        this.educationComponent.getEducationDetailList('degrees')
      );
      myService.updateExperienceDetails(
        this.experiencesComponent.getJobDetailList('title'), 
        this.experiencesComponent.getJobDetailList('description'),
        this.experiencesComponent.getJobDetailList('period')
      );
      myService.updatePersonalDetails(
        this.personalComponent.getPersonalDetails()
      );
      myService.updateSkillDetails(
        this.skillsComponent.getskillDetailList('names'),
        this.skillsComponent.getskillDetailList('levels')
      )
      this.userCv = myService.generateCv(this.extraComponent.getExtra());
      this.previewerService.activatePreview();
      if (this.previewerService.modePreviewOn) {
        document.getElementById("cv")!.style.display = 'none';
        document.getElementById("title-section")!.style.display = 'none';
        document.getElementById("download-button")!.style.display = 'none';
        (document.querySelector("app-preview")! as HTMLElement).style.display = "block";
      }
    }

  @HostListener('window:afterprint')
  onAfterPrint() {
    if (this.previewerService.modePreviewOn) {
      this.previewerService.activatePreview();
    }
    document.getElementById("cv")!.style.display = 'block';
    document.getElementById("title-section")!.style.display = 'block';
    document.getElementById("download-button")!.style.display = 'block';
    (document.querySelector("app-preview")! as HTMLElement).style.display = "none";
  }

  closePreview() {
    this.onAfterPrint();
    this.userCv = {
      personalDetails: {address: "", name: "", email: ""},
      educationDetails: {listOfInstitutes: [], listOfDegrees: []},
      experienceDetails: {listOfJobs: [], listOfJobDescriptions: [], listOfJobPeriods: []},
      skillDetails: {listOfSkillNames: [],  listOfSkillLevels: []},
      listOfExtras: []
    };
  }

}
