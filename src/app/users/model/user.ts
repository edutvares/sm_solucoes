export interface GetUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface NewUser {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface CreateUserResponse {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  createdAt: string;
}
