import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  personalDetails: string[] = ["", "", "", "", "", "", ""];

  sendData(receivedMessage: string, type: 'name' | 'email' | 'address' | 'number' | 'linkedin' | 'website' | 'description') {
    if (type == 'name') this.personalDetails[0] = receivedMessage;
    if (type == 'email') this.personalDetails[1] = receivedMessage;
    if (type == 'address') this.personalDetails[2] = receivedMessage;
    if (type == 'number') this.personalDetails[3] = receivedMessage;
    if (type == 'linkedin') this.personalDetails[4] = receivedMessage;
    if (type == 'website') this.personalDetails[5] = receivedMessage;
    if (type == 'description') this.personalDetails[6] = receivedMessage;
  }

  getPersonalDetails(): string[] {
    return this.personalDetails;
  }

}
