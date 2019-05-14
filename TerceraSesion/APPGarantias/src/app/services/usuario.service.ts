import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http : HttpClient) { }

  guardar(usuario : Usuario) : Observable<any>{
    return this._http.post<any>(`${environment.URLAPI}/usuario`, usuario);
  }

}
