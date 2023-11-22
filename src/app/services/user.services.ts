import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserServices {

    private apiUrl = 'http://localhost:5274';

    constructor(private httpClient: HttpClient) { }

    postUser(obj: any): Observable<any> {
        return this.httpClient.post<any>(`${this.apiUrl}/user`, obj);
    }

    loginApi(user: any): Observable<any> {
        return this.httpClient.post<any>(`${this.apiUrl}/user`, user)
    }
}
