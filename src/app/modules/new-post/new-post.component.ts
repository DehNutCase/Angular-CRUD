import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  post: any;
  submitted = false;
  postForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private jsonService: JsonPlaceholderService,
    private postService: NewPostService
  ) {}

  id = 'New Post';

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  get f() {
    return this.postForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.createPost(this.id);
  }

  createPost(id: any): void {
    this.postService.newPost(this.postForm.value);
    this.jsonService.createPost(this.postForm.value).subscribe((res) => {
      alert('The created value is: \n' + JSON.stringify(res));
    });
  }
  onReset() {
    this.submitted = false;
    this.postForm.reset();
  }
}
