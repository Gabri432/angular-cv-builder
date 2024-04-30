import { Component } from '@angular/core';
import { PreviewerService } from './services/previewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cv-builder';
  modePreview = (new PreviewerService).modePreviewOn;
}
