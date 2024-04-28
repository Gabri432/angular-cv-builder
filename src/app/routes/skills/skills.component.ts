import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skills: number[];

  constructor() {
    this.skills = [];
  }

  addSkill(): void {
    this.skills.push(this.skills.length);
  }

  removeSkill(): void {
    this.skills.pop();
  }
}
