import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
