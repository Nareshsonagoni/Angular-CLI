import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
