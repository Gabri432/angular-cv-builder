import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent {
  @Input() label: string = "Default Label";
  @Input() placeholder: string = "Default Placeholder";
  @Output() dataEvent = new EventEmitter<string>();

  sendData(data: Event) {
    this.dataEvent.emit((data.target as HTMLInputElement).value);
  }
}
