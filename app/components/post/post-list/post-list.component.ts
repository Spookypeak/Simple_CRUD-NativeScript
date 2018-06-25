import { Component, OnInit } from "@angular/core";
import { PostService } from "~/services/post.service";
import { Router } from "@angular/router";
import { Post } from "~/models/post.model";


@Component({
  moduleId: module.id,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Post>;

  constructor(private servP: PostService) {
    this.servP.posts.subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
  }

}