import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul>

    `
  
})
export class CoursesComponent {
  title = "List of courses";
  courses;

  constructor(service: CoursesService) { //in order for the dependency injection to work, we need to declare in the app module, providers array
    
    this.courses = service.getCourses();

  }

  getTitle() {
    return this.title;
  }

}
