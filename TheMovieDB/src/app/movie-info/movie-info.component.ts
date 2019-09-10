import { Component, OnInit, Input } from '@angular/core';
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
    ShortDescription: "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    Runtime: 102,
    ReleaseDate: new Date('2014-6-19'),
    MovieThumbnail: new URL('https://image.tmdb.org/t/p/w600_and_h900_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg')
  };
  
  currentMovie = this.HTTYD2;

  constructor() { }

  ngOnInit() {
  }

}
