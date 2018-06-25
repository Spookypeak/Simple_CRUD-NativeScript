import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { PostComponent } from "~/components/post/post/post.component";
import { PostListComponent } from "~/components/post/post-list/post-list.component";
import { PostDetailComponent } from "~/components/post/post-detail/post-detail.component";
import { AlbumComponent } from "~/components/album/album/album.component";
import { AlbumListComponent } from "~/components/album/album-list/album-list.component";
import { AlbumDetailComponent } from "~/components/album/album-detail/album-detail.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { PostService } from "~/services/post.service";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        PostComponent,
        PostListComponent,
        PostDetailComponent,
        AlbumComponent,
        AlbumListComponent,
        AlbumDetailComponent
        
    ],
    providers: [
        PostService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
