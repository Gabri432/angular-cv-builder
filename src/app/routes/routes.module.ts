import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { ExtraComponent } from './extra/extra.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PreviewComponent } from './preview/preview.component';



@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    ExperiencesComponent,
    EducationComponent,
    ExtraComponent,
    PersonalDetailsComponent,
    PreviewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class RoutesModule { }
