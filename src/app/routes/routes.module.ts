import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { ExtraComponent } from './extra/extra.component';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    ExperiencesComponent,
    EducationComponent,
    ExtraComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class RoutesModule { }
