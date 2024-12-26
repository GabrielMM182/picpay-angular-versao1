import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserDTO } from '../../interfaces/user';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './users.component.html',
  standalone: true,
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: UserDTO[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'cpf', 'email', 'balance', 'type'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getWallets().subscribe((response) => {
      this.users = response;
    });
  }

}
