import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IMovie } from '../interfaces/app-interfaces';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  movies: IMovie[] = [

    {
      moviename: 'matrix',
      linkimage: 'https://mimreh.ir/wp-content/uploads/2023/04/Pos413-300x300.jpg',
      genre: '123  .'
    },
    {
      moviename: ' Teen Wolf',
      linkimage: 'https://mimreh.ir/wp-content/uploads/2023/04/Pos110-300x300.jpg',
      genre: '456 Bothell way'
    },
    {
      moviename: ' Teen Wolf',
      linkimage: 'https://mimreh.ir/wp-content/uploads/2023/04/Pos110-300x300.jpg',
      genre: '456 Bothell way'
    }, 
    {
      moviename: 'matrix',
      linkimage: 'https://mimreh.ir/wp-content/uploads/2023/04/Pos413-300x300.jpg',
      genre: '123  .'
    },
    {
      moviename: ' Teen Wolf',
      linkimage: 'https://mimreh.ir/wp-content/uploads/2023/04/Pos110-300x300.jpg',
      genre: '456 Bothell way'
    },
    {
      moviename: ' Teen Wolf',
      linkimage: 'https://mimreh.ir/wp-content/uploads/2023/04/Pos110-300x300.jpg',
      genre: '456 Bothell way'
    },


  ];

  @Output() onAddMovieClicked = new EventEmitter<IMovie[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddMovie(moviename: string, linkimage: string, genre: string, e: Event) {
    e.preventDefault();
    let u: IMovie = {
      moviename: moviename,
      linkimage: linkimage,
      genre: genre
    };
    this.movies.push(u);
    this.onAddMovieClicked.emit(this.movies);
  }
}
