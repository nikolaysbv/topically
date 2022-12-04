import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const getMostPopularUrl = environment.basePath + '/topic/popular';

@Injectable()
export class TopicService {

  constructor(private http: HttpClient) { }

  getMostPopularTopics(): Observable<any> {
    return this.http.get(getMostPopularUrl);
  }
}
