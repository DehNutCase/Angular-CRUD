import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl);
  }

  getPost(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl + '/' + id);
  }

  putPost(id: any, body: any): Observable<any> {
    return this.http.patch<any[]>(this.postsUrl + '/' + id, body);
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete<any[]>(this.postsUrl + '/' + id);
  }

  createPost(body: any): Observable<any> {
    return this.http.post<any[]>(this.postsUrl, body);
  }
}
