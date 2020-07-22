import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmailService {
    constructor(private http: HttpClient) {

    }

    sendEmail(body: string): Observable<boolean> {
        this.http.post("https://formspree.io/xbjzdpzz", { message: body }).subscribe(
            (data: any) => {
                return of(true);
            },
            error => {
                console.log(error);
                return of(false);
            }
        );
        return of(null);
    }
}
