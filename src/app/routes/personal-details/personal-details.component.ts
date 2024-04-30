import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  personalDetails: string[] = ["", "", "", "", ""];

  sendData(receivedMessage: string, type: 'name' | 'email' | 'address' | 'linkedin' | 'github') {
    if (type == 'name') this.personalDetails[0] = receivedMessage;
    if (type == 'email') this.personalDetails[1] = receivedMessage;
    if (type == 'address') this.personalDetails[2] = receivedMessage;
    if (type == 'linkedin') this.personalDetails[3] = receivedMessage;
    if (type == 'github') this.personalDetails[4] = receivedMessage;
  }

  getPersonalDetails(): string[] {
    return this.personalDetails;
  }

}
