import { Component, OnInit } from '@angular/core';
import { TransactionDTO } from '../../interfaces/transaction';
import { ApiService } from '../../services/api.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-transactions',
  imports: [CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './list-transactions.component.html',
  styleUrl: './list-transactions.component.scss'
})
export class ListTransactionsComponent implements OnInit {


  transactions: TransactionDTO[] = [];
  displayedColumns: string[] = ['id','payee', 'payer', 'value', 'createdAt'];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.loadTransactions();
  }

  loadTransactions(): void {
    this.apiService.getExtract().subscribe((response) => {
      this.transactions = response;
    });
  }
}
