import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses/courses.component';
import { YoutubeButtonsComponent } from '../youtube-buttons/youtube-buttons.component'; 

@NgModule({
  declarations: [
    CoursesComponent,
    YoutubeButtonsComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent 
  ]
})
export class CoursesModule { }
