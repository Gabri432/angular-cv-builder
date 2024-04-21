import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InputBarComponent } from './input-bar/input-bar.component';
import { TextAreaComponent } from './text-area/text-area.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputBarComponent,
    TextAreaComponent
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
