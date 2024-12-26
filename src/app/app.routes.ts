import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ListTransactionsComponent } from './pages/list-transactions/list-transactions.component';

export const routes: Routes = [
 { path: 'users', component: UsersComponent },
 { path: 'transactions', component: ListTransactionsComponent }
];
