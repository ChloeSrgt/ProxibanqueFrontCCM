import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private baseUrl = 'http://localhost:8080/transfers';

  constructor(private http: HttpClient) { }

  transfer(amount: number, fromAccountId: number, toAccountId: number): Observable<any> {
    return this.http.post(this.baseUrl, null, {
      params: {
        amount: amount.toString(),
        fromAccountId: fromAccountId.toString(),
        toAccountId: toAccountId.toString()
      }
    });
  }
}
