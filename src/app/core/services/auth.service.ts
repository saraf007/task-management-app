import { Injectable } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { response } from "express";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly apiUrl = 'https://api.example.com/auth/login'; // dummy login endpoint

    //constructor(private http: HttpClient) {}

    // login(credentials: { email: string; password: string}): Observable<any> {
    //     return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
    //         tap(response => {
    //             localStorage.setItem('jwtToken', response.token);
    //         })
    //     );
    // }

    getToken(): string | null {
        return localStorage.getItem('jwtToken');
    }

    logout(): void {
        localStorage.removeItem('jwtToken');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

}