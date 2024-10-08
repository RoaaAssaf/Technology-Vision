import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurvisionComponent } from './ourvision/ourvision.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { YoutubeButtonsComponent } from './youtube-buttons/youtube-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurvisionComponent,
    CoursesComponent,
    ContactComponent,
    YoutubeButtonsComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
