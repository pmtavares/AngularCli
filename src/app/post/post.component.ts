import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[];



  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts)
   }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = "";
    this.service.create(post).subscribe(
      newPost => {
        post['id'] = newPost.id;
      
    },
      (error: AppError) => {
        if (error instanceof BadInput) {
          this.posts.splice(0, 1);
          //this.form.setErrors(error.json()); COMMENTED BECAUSE WE DONT HAVE A FORM
          alert("Not found error");
        } else throw error; //will handle by a global error handler


      });
  }

  updatePost(post) {
    //this.http.put(this.url, JSON.stringify(post));
    
    this.service.update(post).subscribe(
      updatedPost => {
        console.log(updatedPost);
      });
   

  }
  deletePost(post) {
    this.service.delete(post.id).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("This item has already been deleted");
        }
        else throw error;

      

    });
  }

}
