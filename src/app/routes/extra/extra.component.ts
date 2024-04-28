import { Component } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent {

  public extras: number[];

  constructor() {
    this.extras = [];
  }

  addExtras(): void {
    this.extras.push(this.extras.length);
  }

  removeExtra(): void {
    this.extras.pop();
  }
}
