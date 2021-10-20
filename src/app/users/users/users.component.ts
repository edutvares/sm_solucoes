import { User } from './../model/user';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  headers = ['id', 'avatar', 'nome', 'email', 'ação'];

  users: User[] = [];
  page: number = 1;
  totalPages: number = 1;

  showAddUserModal: boolean = false;
  showEditUserModal: boolean = false;

  editUserId: number = -1;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(this.page).subscribe(
      (data) => {
        this.users = data.data;
        this.totalPages = data.total_pages;
        console.log('Dados carregados da API');
      },
      (error) => console.log(error)
    );
  }

  addUser({ avatar, email, first_name, id, last_name }: User) {
    console.log('Dados inseridos na API');
    this.users.push({ avatar, email, first_name, id, last_name });
  }

  editUser(newUser: User) {
    console.log('Dados inseridos na API');
    console.log(newUser);
    this.users.map((user, key) => {
      if (user.id === newUser.id) {
        this.users[key] = newUser;
      }
    });
    this.trogleEditUserModal();
  }

  removeUser(userId: string) {
    console.log('Apagando:', userId);
    this.userService.deleteUser(parseInt(userId)).subscribe(
      () => {
        console.log('Tarefa concluída');
        this.users = this.users.filter((i) => {
          return i.id !== userId;
        });
      },
      (error) => console.log(error)
    );
  }

  trogleAddUserModal() {
    this.showAddUserModal = !this.showAddUserModal;
  }

  trogleEditUserModal(userId: string = '-1') {
    if (userId !== '-1') {
      this.editUserId = parseInt(userId);
    }
    this.showEditUserModal = !this.showEditUserModal;
  }
}
