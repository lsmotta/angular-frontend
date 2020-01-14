import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FollowerService {

  top5followersUrl = 'https://kw0gynakn7.execute-api.us-east-2.amazonaws.com/prod/top-five-users';

  constructor( private http: HttpClient) { }

  listTop5Followers() {
    return this.http.get<any[]>(`${this.top5followersUrl}`);
  }
}
