import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NXBService {

  readonly API_URL = 'http://localhost:8080/api/nxb';

  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  getDetailProduct(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  adddProduct(payload: any): Observable<any> {
    return this.http.post(`${this.API_URL}`, payload);
  }

  updateProduct(payload: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${payload.id}`, payload);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
