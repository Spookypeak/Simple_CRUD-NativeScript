"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var post_list_component_1 = require("~/components/post/post-list/post-list.component");
var album_list_component_1 = require("~/components/album/album-list/album-list.component");
var post_detail_component_1 = require("~/components/post/post-detail/post-detail.component");
var routes = [
    { path: "", redirectTo: "postList", pathMatch: "full" },
    { path: "postList", component: post_list_component_1.PostListComponent },
    { path: "postDetail", component: post_detail_component_1.PostDetailComponent },
    { path: "albumList", component: album_list_component_1.AlbumListComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsdUZBQW9GO0FBQ3BGLDJGQUF3RjtBQUN4Riw2RkFBMEY7QUFHMUYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtDQUN2RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQb3N0TGlzdENvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxidW1MaXN0Q29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS1saXN0L2FsYnVtLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQb3N0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9wb3N0L3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJwb3N0TGlzdFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInBvc3RMaXN0XCIsIGNvbXBvbmVudDogUG9zdExpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicG9zdERldGFpbFwiLCBjb21wb25lbnQ6IFBvc3REZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWxidW1MaXN0XCIsIGNvbXBvbmVudDogQWxidW1MaXN0Q29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==