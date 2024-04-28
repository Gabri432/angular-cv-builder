import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  public titles: number[];
  @Output() dataEvent = new EventEmitter<string>();

  constructor() {
    this.titles = [];
  }

  addEducation(): void {
    this.titles.push(this.titles.length);
  }

  removeEducation(): void {
    this.titles.pop();
  }

  sendData(receivedMessage: string) {
    this.dataEvent.emit(receivedMessage);
  }

}
