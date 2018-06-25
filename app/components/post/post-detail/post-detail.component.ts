import { Component, OnInit } from '@angular/core';
import { PostService } from '~/services/post.service';
import { Router } from '@angular/router';
import { Post } from '~/models/post.model';

@Component({
  moduleId: module.id,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(private servP: PostService, private router: Router) {
  }

  ngOnInit() {
    this.post = this.servP.posts.value[this.servP.selected.value];
  }

  eliminarPost(id: number): void {
    this.router.navigateByUrl('postList');
    this.servP.posts.value.map((p, i) => {
      if (p.id == id)
        this.servP.posts.value.splice(i, 1);
    });
  }

  guardarPost(): void {
    this.router.navigateByUrl('postList');
    this.servP.selected.next(0);
  }
}
