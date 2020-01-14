import { Component, OnInit } from '@angular/core';
import { PostbyhashtagService } from '../postbyhashtag.service';

@Component({
  selector: 'app-postbyhashtag-list',
  templateUrl: './postbyhashtag-list.component.html',
  styleUrls: ['./postbyhashtag-list.component.css']
})
export class PostbyhashtagListComponent implements OnInit {

  postbyhashtagList: Array<any>;

  constructor(private postbyhashtagService: PostbyhashtagService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.postbyhashtagService.listposthashtag().subscribe(data => this.postbyhashtagList = data);
  }

}
