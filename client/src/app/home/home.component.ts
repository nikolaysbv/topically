import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.topics = [
      "topic 1",
      "topic 2",
      "topic 3",
      "topic 4",
      "topic 5",
      "topic 6",
      "topic 7",
    ]
  }

}
