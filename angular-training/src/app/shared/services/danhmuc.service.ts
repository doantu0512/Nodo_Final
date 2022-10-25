import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DanhMucService {
    readonly API_URL = 'http://localhost:8080/api/dm';
    constructor(private http: HttpClient) {}

    getDanhMuc(): Observable<any> {
        return this.http.get(`${this.API_URL}`);
    }

    getDetailDanhMuc(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addDanhMuc(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateDanhMuc(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/danhmuc/update`,
            payload
        );
    }

    deleteDanhMuc(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
    //filter ma


}
