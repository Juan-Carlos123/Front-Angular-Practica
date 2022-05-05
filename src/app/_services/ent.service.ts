import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})

export class EntService {

  constructor(private http: HttpClient) { }

  getAllEntidades(): Observable<any> {
    return this.http.get(API_URL + 'entidades', { responseType: 'text' });
  }

  getEntidadById(id): Observable<any> {
    return this.http.get(API_URL + 'entidades' + id, { responseType: 'text' });
  }

  createEntidad(data): Observable<any> {
    return this.http.post(API_URL + 'entidades', data);
  }

  updateEntidad(id, data): Observable<any> {
    return this.http.put(API_URL + 'entidades' + id, data);
  }

  deleteEntidad(id): Observable<any> {
    return this.http.delete(API_URL + 'entidades' + id);
  }
}
