import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul>
      
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
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><br/>
<hr/>
<h3>Pipes</h3>
{{course.title | uppercase}}<br/>
  {{course.rating | number:'1.2-2'}}<br/>
  {{course.price | currency:'EUR'}}<br/>
  {{course.releaseDate | date:'shortDate'}}<br/>
<hr/>
<h4>Custom Pipes</h4>
{{ longText | summary:40 }}
`
  
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  
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
  email = "pedro@pedro.com";
  onKeyUp() {
    alert("Key enter was pressed!");
    console.log(this.email);
  }

  course = {
    title: "The complete angular",
    rating: 4.3256,
    price: 150.00,
    releaseDate: new Date(2018,9,2)

  }
  longText = "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."

}
