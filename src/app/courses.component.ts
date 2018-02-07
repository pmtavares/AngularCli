import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul>
      <img src="{{ imageUrl}}"/>
      <table>
        <tr>
          <td [attr.colspan]="25">table1</td>
        </tr>
      </table>
      <button class="btn btn-primary" (click)="onSave($event)">Save</button>
    <div (click)="divClick()">
      <button class="btn" [class.active]="isActive" (click)="onButtonClick($event)">Active</button>
    </div>
    <button [style.backgroundColor]="isActive ? 'blue': 'white'">Active</button>
    `
  
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  imageUrl = "https://loremflickr.com/200/230";
  isActive = true;
  constructor(service: CoursesService) { //in order for the dependency injection to work, we need to declare in the app module, providers array
    
    this.courses = service.getCourses();

  }
  onButtonClick($event) {
    $event.stopPropagation();
    console.log("Active was clicked");
  }

  divClick() {
    
    console.log("Div click");
  }
  onSave($event) {
    alert("saved!");
    console.log($event);
  }

  getTitle() {
    return this.title;
  }

}
