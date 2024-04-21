import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { EducationComponent } from './routes/education/education.component';
import { ExperiencesComponent } from './routes/experiences/experiences.component';
import { SkillsComponent } from './routes/skills/skills.component';
import { ExtraComponent } from './routes/extra/extra.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Cv Builder Website'},
  {path: 'education', component: EducationComponent, title: 'Your degrees and certitications'},
  {path: 'experiences', component: ExperiencesComponent, title: 'Your Working Experiences'},
  {path: 'skills', component: SkillsComponent, title: 'Your skills'},
  {path: 'extra', component: ExtraComponent, title: 'More details about you'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
