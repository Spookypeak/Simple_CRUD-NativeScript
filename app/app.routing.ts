import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { PostListComponent } from "~/components/post/post-list/post-list.component";
import { AlbumListComponent } from "~/components/album/album-list/album-list.component";
import { PostDetailComponent } from "~/components/post/post-detail/post-detail.component";


const routes: Routes = [
    { path: "", redirectTo: "postList", pathMatch: "full" },
    { path: "postList", component: PostListComponent },
    { path: "postDetail", component: PostDetailComponent },
    { path: "albumList", component: AlbumListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }