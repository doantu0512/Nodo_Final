import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaidanhmucService {
    readonly API_URL = 'http://localhost:8080/api/loaidanhmuc';
    constructor(private http: HttpClient) {}

    getLoaiDanhMuc(): Observable<any> {
        return this.http.get(`${this.API_URL}`);
    }

    getDetailLoaiDanhMuc(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/{id}`);
    }

    addLoaiDanhMuc(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}`, payload);
    }

    updateLoaiDanhMuc(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/dM`,
            payload
        );
    }

    deleteLoaiDanhMuc(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }
}
