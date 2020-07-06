import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public counter = 0;
  public users: IUser[] = [];
  public login(email: string, password: string): IUser[] {
    const id: number = this.counter++;
    const token = Math.random().toString();
    const newUser: IUser = {
      id,
      token,
      email,
      password,
    };
    this.users.push(newUser);
    console.log('logged in successfully', this.users[newUser.id]);
    return this.users;
  }
  public logout(id: number): IUser[] {
    this.users = this.users.filter((user: IUser): boolean => user.id !== id);
    return this.users;
  }
  public isAuthenticated(id: number): boolean {
    if (this.users[id]) {
      return true;
    }
  }
  public getUserInfo(id: string): string {
    return this.users[id];
  }
}
