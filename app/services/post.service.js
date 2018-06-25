"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http = require("http");
var rxjs_1 = require("rxjs");
var PostService = /** @class */ (function () {
    function PostService() {
        this.selected = new rxjs_1.BehaviorSubject(0);
        this.posts = new rxjs_1.BehaviorSubject(null);
    }
    PostService.prototype.getPosts = function () {
        var _this = this;
        http.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(function (response) {
            _this.posts.next(response.content.toJSON().splice(0, 10));
        });
    };
    PostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDJCQUE4QjtBQUM5Qiw2QkFBdUM7QUFJdkM7SUFLRTtRQUhBLGFBQVEsR0FBRyxJQUFJLHNCQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFHLElBQUksc0JBQWUsQ0FBYyxJQUFJLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBRWpCLDhCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsNENBQTRDO1lBQ2pELE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDZixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBYyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFkVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQWV2QjtJQUFELGtCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyAgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vbW9kZWxzL3Bvc3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2Uge1xuXG4gIHNlbGVjdGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xuICBwb3N0cyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8UG9zdD4+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0UG9zdHMoKTogdm9pZCB7XG4gICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsXG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMucG9zdHMubmV4dCg8QXJyYXk8UG9zdD4+cmVzcG9uc2UuY29udGVudC50b0pTT04oKS5zcGxpY2UoMCwgMTApKTtcbiAgICB9KTtcbiAgfVxufVxuIl19