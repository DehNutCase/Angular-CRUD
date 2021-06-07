import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewPostService {
  constructor() {}

  private subject = new Subject<any>();

  newPost(post: any) {
    this.subject.next(post);
  }

  deletePost() {
    this.subject.next();
  }

  getPost(): Observable<any> {
    return this.subject.asObservable();
  }
}
