import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor( private http: HttpClient) { }

  private API_PERSONAL="https://api.sampleapis.com/futurama/characters"

  getPersonal():Observable <any>{
    return this.http.get(this.API_PERSONAL)
  }

    //"https://api.sampleapis.com/futurama/characters/id"
  getPersonalUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_PERSONAL}/${id}`)
    //return this.http.get(this.API_PERSONAL+"/"+id);
  }

}
