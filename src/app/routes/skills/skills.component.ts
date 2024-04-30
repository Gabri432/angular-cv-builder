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

  getskillDetailList(type: 'names' | 'levels') {
    let skillDetailList: string[] = []; 
    let chosenMap = new Map<number, string>();
    if (type == 'names') chosenMap = this.namesMap;
    if (type == 'levels') chosenMap = this.levelsMap;
    for (let i = 0; i<chosenMap.size; i++) {
      skillDetailList.push(chosenMap.get(i)!);
    }
    return skillDetailList;
  }
}
