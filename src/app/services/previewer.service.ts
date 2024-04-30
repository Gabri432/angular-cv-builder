import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewerService {

  constructor() { }

  modePreviewOn: boolean = false;

  activatePreview() {
    if (this.modePreviewOn) {
      this.modePreviewOn = false;
    } else this.modePreviewOn = true;
  }
}
