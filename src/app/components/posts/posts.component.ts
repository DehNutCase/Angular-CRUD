import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewPostService } from 'src/app/services/new-post.service';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { NewPostComponent } from '../new-post/new-post.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @ViewChild(PostComponent)
  newPostComponent!: PostComponent;
  subscription!: Subscription;
  subject: any = {};
  constructor(
    private jsonService: JsonPlaceholderService,
    private postService: NewPostService,
    private router: Router
  ) {}
  posts: any[] = [];
  ngOnInit(): void {
    this.getPosts();
    this.subscription = this.postService.getPost().subscribe((post) => {
      if (post) {
        this.subject = post;
      } else {
        this.subject = {};
      }
    });
  }

  ngOnDestroy(): void {}

  getPosts(): void {
    this.jsonService.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }
}
