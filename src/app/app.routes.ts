import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurvisionComponent } from './ourvision/ourvision.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // الصفحة الرئيسية
    { path: 'home', component: HomeComponent },
    { path: 'ourvision', component: OurvisionComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
];








