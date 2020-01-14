import { Component, OnInit } from '@angular/core';
import { PostbyhourService } from '../postbyhour.service';

@Component({
  selector: 'app-postbyhour-list',
  templateUrl: './postbyhour-list.component.html',
  styleUrls: ['./postbyhour-list.component.css']
})
export class PostbyhourListComponent implements OnInit {

  postByhourList: Array<any>;

  constructor(private postbyhourService: PostbyhourService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.postbyhourService.listPostByHour().subscribe(data => this.postByhourList = data);
  }

}
