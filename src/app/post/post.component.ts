import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      console.log(response.json());
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    //this.http.put(this.url, JSON.stringify(post));
    this.http.patch(this.url + "/"+ post.id, JSON.stringify({ title: "Title Test" }))
      .subscribe(response => {
        console.log(response.json());
      });
   

  }
  deletePost(post) {
    this.http.delete(this.url + "/" + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
