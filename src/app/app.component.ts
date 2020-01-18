import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'naresh-world';
  post = {
    title: "Title",
    isFavorite: true,
  }
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed:", eventArgs);
  }
}
