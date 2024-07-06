import { Component } from '@angular/core';
import { IMovie } from './interfaces/app-interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  movies: IMovie[] = [];
   

  public movieAdded(movies: IMovie[]) {
    this.movies = movies;
  }
}
