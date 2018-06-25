import { Injectable } from '@angular/core';
import * as  http from 'http';
import { BehaviorSubject } from 'rxjs';
import { Post } from '~/models/post.model';

@Injectable()
export class PostService {

  selected = new BehaviorSubject<number>(0);
  posts = new BehaviorSubject<Array<Post>>(null);

  constructor() { }

  getPosts(): void {
    http.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    }).then((response) => {
      this.posts.next(<Array<Post>>response.content.toJSON().splice(0, 10));
    });
  }
}
