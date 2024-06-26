import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InputBarComponent } from './input-bar/input-bar.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputBarComponent,
    TextAreaComponent,
    OptionCardComponent,
    SideBarComponent,
    ColorPickerComponent
  ],
  exports: [
    HeaderComponent, FooterComponent, InputBarComponent, TextAreaComponent, OptionCardComponent, SideBarComponent, ColorPickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
