import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent {
  @Input() option: string = "";
  @Input() route: string = "";
}
