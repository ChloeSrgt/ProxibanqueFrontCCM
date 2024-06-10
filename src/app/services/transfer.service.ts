import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Transfer service to handle transfer operations 
@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private endpoint = 'http://localhost:8080/transfers';

  constructor(private http: HttpClient) {}

  transfer(amount: number, fromAccountId: number, toAccountId: number): Observable<any> {
    const params = {
      amount: amount.toString(),
      fromAccountId: fromAccountId.toString(),
      toAccountId: toAccountId.toString()
    };
    return this.http.post<any>(this.endpoint, {}, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
