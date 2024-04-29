import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skills: number[];
  public namesMap = new Map<number, string>();
  public levelsMap = new Map<number, string>();

  constructor() {
    this.skills  = [0];
  }

  addSkill(): void {
    this.skills.push(this.skills.length);
  }

  removeSkill(): void {
    this.skills.pop();
    this.namesMap.delete(this.skills.length);
    this.levelsMap.delete(this.skills.length);
  }

  sendData(receivedMessage: string, index: number, type: string) {
    if (type == 'name') this.namesMap.set(index, receivedMessage);
    if (type == 'level') this.levelsMap.set(index, receivedMessage);
  }

  getNames() {
    return this.namesMap;
  }

  getLevels() {
    return this.levelsMap;
  }
}
