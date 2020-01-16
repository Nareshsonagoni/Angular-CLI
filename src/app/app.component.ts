import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'naresh-world';
  post = {
    title: "Title",
    isFavorite: true,
  }
  onFavoriteChange() {
    console.log("Favorite Changed!!!");
  }
}
