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
  
}



