import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../interfaces/user';
import { TransactionDTO } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getWallets(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.baseUrl}/transaction/wallets`);
  }

  getExtract(): Observable<TransactionDTO[]> {
    return this.http.get<TransactionDTO[]>(`${this.baseUrl}/transaction`);
  }
}
