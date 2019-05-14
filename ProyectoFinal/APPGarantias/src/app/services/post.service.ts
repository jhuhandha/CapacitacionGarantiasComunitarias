import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http : HttpClient) { }

  get() : Observable<Post[]>{
    return this._http.get<Post[]>(`${environment.URLAPI}/posts`);
  }

}
