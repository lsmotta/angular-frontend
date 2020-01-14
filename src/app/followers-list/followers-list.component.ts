import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../follower.service';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {

  top5FollowersList: Array<any>;

  constructor(private followerService: FollowerService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.followerService.listTop5Followers().subscribe(data => this.top5FollowersList = data);
  }
}
