import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  HTTYD2: Movie = {
    Title: 'How To Train Your Dragon 2', 
    Rating: 7.7,
    ShortDescription: 'a',
    Runtime: 102,
    ReleaseDate: new Date('2014-6-19'),
    MovieThumbnail: new URL('https://image.tmdb.org/t/p/w600_and_h900_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg')
  };

  constructor() { }

  ngOnInit() {
  }

}
