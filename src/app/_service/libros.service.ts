import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Libros } from '../_model/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url: string = `${environment.HOST}posts/`;

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get<Libros[]>(`${this.url}`);
  }

  public listarDetalle(id: number){
   // return this.http.get<detalle[]>(`${this.url}${id}`);
  }
}
