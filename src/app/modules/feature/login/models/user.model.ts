export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  token: string;
}
export class IVideoUser implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    token: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.token = token;
  }
}
