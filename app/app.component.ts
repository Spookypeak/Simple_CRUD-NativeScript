import { Component } from "@angular/core";
import { PostService } from "~/services/post.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor(private servP: PostService) {
        this.servP.getPosts();
      }
 }
