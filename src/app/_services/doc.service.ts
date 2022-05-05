import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})

export class DocService {

  constructor(private http: HttpClient) { }

  getAllDocumentos(): Observable<any> {
    return this.http.get(API_URL + 'documentos', { responseType: 'text' });
  }

  getDocumentoById(id): Observable<any> {
    return this.http.get(API_URL + 'documentos' + id, { responseType: 'text' });
  }

  createDocumento(data): Observable<any> {
    return this.http.post(API_URL + 'documentos', data);
  }

  updateDocumento(id, data): Observable<any> {
    return this.http.put(API_URL + 'documentos' + id, data);
  }

  deleteDocumento(id): Observable<any> {
    return this.http.delete(API_URL + 'documentos' + id);
  }
}
