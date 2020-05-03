import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-rating-floating-button',
  templateUrl: './movie-rating-floating-button.component.html',
  styleUrls: ['./movie-rating-floating-button.component.scss']
})
export class MovieRatingFloatingButtonComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit(): void {
  }

}
