export interface IUser {
  id?: number;
  token: IToken;
  name?: IName;
  login: string;
  password: string;
}
export interface ILoginRequest {
  login: string;
  password: string;
}
export interface IToken {
  token: string;
}
export interface IName {
  firstName: string;
  lastName: string;
}
export class IVideoUser implements IUser {
  id: number;
  login: string;
  password: string;
  token: IToken;

  constructor(
    id: number,
    login: string,
    password: string,
    token: IToken
  ) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.token = token;
  }
}
