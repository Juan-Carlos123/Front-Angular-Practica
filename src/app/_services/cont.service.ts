import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})

export class ContService {

  constructor(private http: HttpClient) { }

  getAllContribuyentes(): Observable<any> {
    return this.http.get(API_URL + 'contribuyentes', { responseType: 'text' });
  }

  getContribuyenteById(id): Observable<any> {
    return this.http.get(API_URL + 'contribuyentes' + id, { responseType: 'text' });
  }

  createContribuyente(data): Observable<any> {
    return this.http.post(API_URL + 'contribuyentes', data);
  }

  updateContribuyente(id, data): Observable<any> {
    return this.http.put(API_URL + 'contribuyentes' + id, data);
  }

  deleteContribuyente(id): Observable<any> {
    return this.http.delete(API_URL + 'contribuyentes' + id);
  }
}
