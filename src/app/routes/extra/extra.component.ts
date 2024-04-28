import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent {

  public extras: number[];
  @Output() dataEvent = new EventEmitter<string>();

  constructor() {
    this.extras = [];
  }

  addExtras(): void {
    this.extras.push(this.extras.length);
  }

  removeExtra(): void {
    this.extras.pop();
  }

  sendData(receivedMessage: string) {
    this.dataEvent.emit(receivedMessage);
  }
}
