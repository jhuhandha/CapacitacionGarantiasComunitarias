import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http : HttpClient) { }

  get(postId) : Observable<Comment[]>{
    return this._http.get<Comment[]>(`${environment.URLAPI}/comments?postId=${postId}`);
  }

}
