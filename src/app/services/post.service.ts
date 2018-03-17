import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../common/data.services';

@Injectable()
export class PostService extends DataService{
  //private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(http: Http) {
    super("http://jsonplaceholder.typicode.com/posts", http);

  }






  /*
  getPosts() {
    return this.http.get(this.url).catch(this.handleError);
  }


  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }


  updatePost(post) {
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({ title: "Title Test" }))
      .catch(this.handleError);
  }

  deletePost(post) {
    return this.http.delete(this.url + "/" + post)
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    return Observable.throw(new AppError(error));
  }*/

}
