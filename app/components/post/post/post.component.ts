import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '~/services/post.service';
import { Router } from '@angular/router';
import { Post } from '~/models/post.model';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() i: number;


  constructor(
    private servP: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  verPost(idx: number): void {
    this.servP.selected.next(idx);
    this.router.navigateByUrl('postDetail');
  }
}
