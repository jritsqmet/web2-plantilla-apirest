import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  private constructor(private http: HttpClient) { }

  private API_NOSOTROS = 'http://localhost:3000/nosotros'

  ////////LEER - GET
  getNosotros():Observable <any>{
    return this.http.get(this.API_NOSOTROS)
  }

  getNosostrosID(id:any): Observable <any>{
    "hola -juan-"
    return this.http.get(`${this.API_NOSOTROS}/${id}`)
  }

  ////// GUARDAR - POST
  postNosotros( persona: JSON):Observable <any>{
    return this.http.post( this.API_NOSOTROS, persona)
  }

  /////// ACTUALIZAR - PUT
  putNosotros( persona: any):Observable<any>{
    return this.http.put(`${this.API_NOSOTROS}/${persona.id}`, persona)
  }

  /////// ELIMINAR DELETE
  deleteNosotrosID(id: any):Observable<any>{
    return this.http.delete(`${this.API_NOSOTROS}/${id}`)
  }

}
