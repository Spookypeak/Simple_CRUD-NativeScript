"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var post_component_1 = require("~/components/post/post/post.component");
var post_list_component_1 = require("~/components/post/post-list/post-list.component");
var post_detail_component_1 = require("~/components/post/post-detail/post-detail.component");
var album_component_1 = require("~/components/album/album/album.component");
var album_list_component_1 = require("~/components/album/album-list/album-list.component");
var album_detail_component_1 = require("~/components/album/album-detail/album-detail.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var post_service_1 = require("~/services/post.service");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                post_component_1.PostComponent,
                post_list_component_1.PostListComponent,
                post_detail_component_1.PostDetailComponent,
                album_component_1.AlbumComponent,
                album_list_component_1.AlbumListComponent,
                album_detail_component_1.AlbumDetailComponent
            ],
            providers: [
                post_service_1.PostService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msd0VBQXNFO0FBQ3RFLHVGQUFvRjtBQUNwRiw2RkFBMEY7QUFDMUYsNEVBQTBFO0FBQzFFLDJGQUF3RjtBQUN4RixpR0FBOEY7QUFHOUYsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUNyRSx3REFBc0Q7QUFFdEQsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQStCdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHVDQUFpQjtnQkFDakIsMkNBQW1CO2dCQUNuQixnQ0FBYztnQkFDZCx5Q0FBa0I7Z0JBQ2xCLDZDQUFvQjthQUV2QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvc3RDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL3Bvc3QvcG9zdC9wb3N0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9zdExpc3RDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL3Bvc3QvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvc3REZXRhaWxDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL3Bvc3QvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBbGJ1bUNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvYWxidW0vYWxidW0vYWxidW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBbGJ1bUxpc3RDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2FsYnVtL2FsYnVtLWxpc3QvYWxidW0tbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFsYnVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS1kZXRhaWwvYWxidW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFBvc3RTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvcG9zdC5zZXJ2aWNlXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFBvc3RDb21wb25lbnQsXG4gICAgICAgIFBvc3RMaXN0Q29tcG9uZW50LFxuICAgICAgICBQb3N0RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBBbGJ1bUNvbXBvbmVudCxcbiAgICAgICAgQWxidW1MaXN0Q29tcG9uZW50LFxuICAgICAgICBBbGJ1bURldGFpbENvbXBvbmVudFxuICAgICAgICBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQb3N0U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==