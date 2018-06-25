"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("~/services/post.service");
var router_1 = require("@angular/router");
var post_model_1 = require("~/models/post.model");
var PostComponent = /** @class */ (function () {
    function PostComponent(servP, router) {
        this.servP = servP;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.verPost = function (idx) {
        this.servP.selected.next(idx);
        this.router.navigateByUrl('postDetail');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", post_model_1.Post)
    ], PostComponent.prototype, "post", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PostComponent.prototype, "i", void 0);
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css']
        }),
        __metadata("design:paramtypes", [post_service_1.PostService,
            router_1.Router])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCx3REFBc0Q7QUFDdEQsMENBQXlDO0FBQ3pDLGtEQUEyQztBQVEzQztJQU1FLHVCQUNVLEtBQWtCLEVBQ2xCLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVMLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFmUTtRQUFSLFlBQUssRUFBRTtrQ0FBTyxpQkFBSTsrQ0FBQztJQUNYO1FBQVIsWUFBSyxFQUFFOzs0Q0FBVztJQUhSLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7eUNBUWlCLDBCQUFXO1lBQ1YsZUFBTTtPQVJiLGFBQWEsQ0FrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2VzL3Bvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vbW9kZWxzL3Bvc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcG9zdDogUG9zdDtcbiAgQElucHV0KCkgaTogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2UDogUG9zdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdmVyUG9zdChpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VydlAuc2VsZWN0ZWQubmV4dChpZHgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ3Bvc3REZXRhaWwnKTtcbiAgfVxufVxuIl19