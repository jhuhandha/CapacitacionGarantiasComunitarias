import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  env = environment;

  constructor(private _http : HttpClient) { }

  get() : Observable<any> {
    return this._http.get(`${this.env.URL}leagues`);
  }

}
