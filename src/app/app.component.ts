import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Fist Angular App';
  imageUrl = "https://loremflickr.com/200/230";

  onClick() {
    alert("clicked");
  }



  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("changed: " + eventArgs);
  }

  newCourses = [];
  viewMode = "";
  otherCourses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];

  onAdd() {
    this.otherCourses.push({ id: 4, name: "course4" });
  }

  onRemove(course) {
    //let index = this.otherCourses.indexOf(course);
    //this.otherCourses.splice(index, 1);
    course.name = 'updated'
  }

}

