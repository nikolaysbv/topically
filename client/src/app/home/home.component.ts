import { Component, OnInit } from '@angular/core';
import { TopicService } from '../core/services/topic.service';
import { ITopic } from '../interfaces/topic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularTopics: Array<string> = [];
  manualTopic: string = "";

  constructor(
    private topicService: TopicService,
  ) { }

  ngOnInit() {
    this.topicService.getMostPopularTopics().subscribe((popularTopics) => {
      this.popularTopics = popularTopics;
    });
  }
  
}
