import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of the New York city',
      'assets/images/manhattan-mansion.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'assets/images/paris-room.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Place',
      'Not your average city trip!',
      'assets/images/foggy-room.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places]  
  }

  constructor() { }
}
