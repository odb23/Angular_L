import { BadRequestError } from './../../common/errors/bad-request.error';
import { NotFoundError } from './../../common/errors/not-found.error';
import { AppError } from './../../common/errors/app.error';
import { PostsService } from './../../services/posts.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.service.getData().subscribe({
      next: (posts) => this.posts = posts as Array<Object>,
      complete: () => {},
    });
  }

  createPost(titleNode: HTMLInputElement) {
    const postObject: any = { title: titleNode.value };
    titleNode.value = '';

    this.service.create(postObject).subscribe({
      next: (response) => {
        postObject['id'] = (response as any).id;
        this.posts.splice(0, 0, postObject);
        console.log(response);
      },
      error: (error: AppError) => {
        if (error instanceof BadRequestError) {
          console.log(error.oringinalError);
        } else throw error;
      },
      complete: () => {},
    });
  }

  updatePost(post: any) {
    this.service.update(post).subscribe({
      next: (response) => {
        console.log(response);
      },
      complete: () => {},
    });
  }

  deletePost(post: any) {
    
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error: AppError) => {
        this.posts.splice(index, 0, post)
        if (error instanceof NotFoundError) {
          console.log('Post has already been deleted.');
        } else throw error
      },
      complete: () => {},
    });
  }
}
