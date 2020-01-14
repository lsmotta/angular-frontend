import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostbyhashtagService {

  postbyhashtagUrl = 'https://kw0gynakn7.execute-api.us-east-2.amazonaws.com/prod/tweet-group-hours';

  constructor( private http: HttpClient) { }

  listposthashtag() {
    return this.http.get<any[]>(`${this.postbyhashtagUrl}`);
  }
}
