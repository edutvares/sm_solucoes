import { environment } from './../../../environments/environment';
import { NewUser, GetUserResponse, User } from './../model/user';
import { CreateUserResponse, GetUsersResponse } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = environment.API_PATH;

  constructor(private httpClient: HttpClient) {}

  // Header
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsers(page: number): Observable<GetUsersResponse> {
    return this.httpClient.get<GetUsersResponse>(
      `${this.API_URL}/users?page=${page}`
    );
  }

  getById(userId: number) {
    return this.httpClient.get<GetUserResponse>(
      `${this.API_URL}/users/${userId}`
    );
  }

  newUser(newUser: NewUser): Observable<CreateUserResponse> {
    return this.httpClient.post<CreateUserResponse>(`${this.API_URL}/users`, {
      ...newUser,
    });
  }

  editUser(user: User) {
    return this.httpClient.put<NewUser>(
      `${this.API_URL}/users/${user.id}`,
      user
    );
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${this.API_URL}/users/${userId}`);
  }
}
