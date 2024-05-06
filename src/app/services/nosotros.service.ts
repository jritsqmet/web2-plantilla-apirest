import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  private constructor(private http: HttpClient) { }

  private API_NOSOTROS = 'http://localhost:3000/nosotros'

  getNosotros():Observable <any>{
    return this.http.get(this.API_NOSOTROS)
  }

}
