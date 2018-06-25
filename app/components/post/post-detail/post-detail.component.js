"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("~/services/post.service");
var router_1 = require("@angular/router");
var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(servP, router) {
        this.servP = servP;
        this.router = router;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.post = this.servP.posts.value[this.servP.selected.value];
    };
    PostDetailComponent.prototype.eliminarPost = function (id) {
        var _this = this;
        this.router.navigateByUrl('postList');
        this.servP.posts.value.map(function (p, i) {
            if (p.id == id)
                _this.servP.posts.value.splice(i, 1);
        });
    };
    PostDetailComponent.prototype.guardarPost = function () {
        this.router.navigateByUrl('postList');
        this.servP.selected.next(0);
    };
    PostDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-post-detail',
            templateUrl: './post-detail.component.html',
            styleUrls: ['./post-detail.component.css']
        }),
        __metadata("design:paramtypes", [post_service_1.PostService, router_1.Router])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFzRDtBQUN0RCwwQ0FBeUM7QUFTekM7SUFJRSw2QkFBb0IsS0FBa0IsRUFBVSxNQUFjO1FBQTFDLFVBQUssR0FBTCxLQUFLLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQzlELENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxFQUFVO1FBQXZCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNiLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXRCVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLMkIsMEJBQVcsRUFBa0IsZUFBTTtPQUpuRCxtQkFBbUIsQ0F1Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2VzL3Bvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vbW9kZWxzL3Bvc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcG9zdDogUG9zdDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZQOiBQb3N0U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3N0ID0gdGhpcy5zZXJ2UC5wb3N0cy52YWx1ZVt0aGlzLnNlcnZQLnNlbGVjdGVkLnZhbHVlXTtcbiAgfVxuXG4gIGVsaW1pbmFyUG9zdChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgncG9zdExpc3QnKTtcbiAgICB0aGlzLnNlcnZQLnBvc3RzLnZhbHVlLm1hcCgocCwgaSkgPT4ge1xuICAgICAgaWYgKHAuaWQgPT0gaWQpXG4gICAgICAgIHRoaXMuc2VydlAucG9zdHMudmFsdWUuc3BsaWNlKGksIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgZ3VhcmRhclBvc3QoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgncG9zdExpc3QnKTtcbiAgICB0aGlzLnNlcnZQLnNlbGVjdGVkLm5leHQoMCk7XG4gIH1cbn1cbiJdfQ==