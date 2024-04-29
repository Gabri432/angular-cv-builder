import { Component } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent {

  public extras: number[];
  public extrasMap = new Map<number, string>();

  constructor() {
    this.extras = [0];
  }

  addExtras(): void {
    this.extras.push(this.extras.length);
  }

  removeExtra(): void {
    this.extras.pop();
    this.extrasMap.delete(this.extras.length);
  }

  sendData(receivedMessage: string, index: number) {
    this.extrasMap.set(index, receivedMessage);
  }

  getExtra() {
    return this.extrasMap;
  }
}
