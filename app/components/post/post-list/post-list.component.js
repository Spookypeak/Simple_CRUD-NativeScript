"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("~/services/post.service");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(servP) {
        var _this = this;
        this.servP = servP;
        this.servP.posts.subscribe(function (posts) { return _this.posts = posts; });
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.css']
        }),
        __metadata("design:paramtypes", [post_service_1.PostService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0RBQXNEO0FBV3REO0lBSUUsMkJBQW9CLEtBQWtCO1FBQXRDLGlCQUVDO1FBRm1CLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFUVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBSzJCLDBCQUFXO09BSjNCLGlCQUFpQixDQVc3QjtJQUFELHdCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9wb3N0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwifi9tb2RlbHMvcG9zdC5tb2RlbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wb3N0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdC1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcG9zdHM6IEFycmF5PFBvc3Q+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydlA6IFBvc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2UC5wb3N0cy5zdWJzY3JpYmUocG9zdHMgPT4gdGhpcy5wb3N0cyA9IHBvc3RzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn0iXX0=