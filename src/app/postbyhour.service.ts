import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostbyhourService {

  postbyhourUrl = 'https://kw0gynakn7.execute-api.us-east-2.amazonaws.com/prod/tweet-tag';

  constructor( private http: HttpClient) { }

  listPostByHour() {
    return this.http.get<any[]>(`${this.postbyhourUrl}`);
  }
}
