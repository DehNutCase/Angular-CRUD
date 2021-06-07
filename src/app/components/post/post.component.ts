import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input()
  post: any;
  @Input()
  child = false;
  submitted = false;
  postForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private jsonService: JsonPlaceholderService,
    private route: ActivatedRoute
  ) {}

  id: any;

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.post) {
      this.postForm.patchValue({
        id: this.post['id'],
        userId: this.post['userId'],
        title: this.post['title'],
        body: this.post['body'],
      });
      this.id = this.post['id'];
      return;
    }
    this.getPost(this.id);
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
  getPost(id: any): void {
    this.jsonService.getPost(id).subscribe((post) => {
      this.post = post;
      this.postForm.patchValue({
        userId: this.post['userId'],
        title: this.post['title'],
        body: this.post['body'],
      });
    });
  }

  putPost(id: any): void {
    this.jsonService.putPost(this.id, this.postForm.value).subscribe((res) => {
      alert('The updated value is: \n' + JSON.stringify(res));
    });
  }

  deletePost(id: any): void {
    this.jsonService.deletePost(this.id).subscribe((res) => {
      alert(JSON.stringify(res));
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
    this.putPost(this.id);
  }

  onReset() {
    this.submitted = false;
    this.ngOnInit();
  }

  onDelete() {
    this.deletePost(this.id);
  }
}
