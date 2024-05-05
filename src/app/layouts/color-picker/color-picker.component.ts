import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  @Output() chosenColor = new EventEmitter<string>();

  sendChosenColor(color: string) {
    this.chosenColor.emit(color);
  }

}
