export interface IUser {
  id?: number;
  token: IToken;
  name?: IFullName;
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
export interface IFullName {
  firstName: string;
  lastName: string;
}
