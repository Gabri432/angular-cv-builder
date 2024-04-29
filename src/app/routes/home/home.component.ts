import { Component, OnInit, ViewChild } from '@angular/core';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(EducationComponent, { static: false }) educationComponent!: EducationComponent;
  private draggables!: NodeListOf<HTMLElement>;
  receivedEducation: string = "";
  receivedExperiences: string = "";
  receivedSkills: string = "";
  receivedExtra: string = "";

    ngOnInit(): void {
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
    receiveExperiences(message: string) {
      this.receivedExperiences = message;
    }
    receiveSkills(message: string) {
      this.receivedSkills = message;
    }
    receiveExtra(message: string) {
      this.receivedExtra = message;
    }

    download() {
      console.log(this.educationComponent.getInstitutes(), this.educationComponent.getDegrees());
    }

}
