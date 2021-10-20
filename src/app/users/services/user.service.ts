import { NewUser } from './../model/user';
import { CreateUserResponse, GetUsersResponse } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = 'https://reqres.in/api';

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

  newUser(newUser: NewUser): Observable<CreateUserResponse> {
    return this.httpClient.post<CreateUserResponse>(`${this.API_URL}/users`, {
      ...newUser,
    });
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${this.API_URL}/users/${userId}`);
  }
}
