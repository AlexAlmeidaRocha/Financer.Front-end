import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExtractServices {

    private apiUrl = 'http://localhost:5274';

    constructor(private httpClient: HttpClient) { }

    getExtract(start: Date, end: Date): Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}/extrato?dtInitial=${start.toDateString()}&dtEnd=${end.toDateString()}`);
    }

    getExtractChart(): Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}/extrato/chart`);
    }

    postExtract(obj: any): Observable<any> {
        return this.httpClient.post<any>(`${this.apiUrl}/extrato/avulso`, obj);
    }

    editExtract(id: number, obj: any): Observable<any> {
        return this.httpClient.patch<any>(`${this.apiUrl}/extrato?id=${id}`, obj);
    }

    cancelExtract(id: number, obj: any): Observable<any> {
        return this.httpClient.patch<any>(`${this.apiUrl}/extrato/cancelar?id=${id}`, obj);
    }
}
