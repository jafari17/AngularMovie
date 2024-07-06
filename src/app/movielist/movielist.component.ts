import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interfaces/app-interfaces';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  @Input() movies: IMovie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
