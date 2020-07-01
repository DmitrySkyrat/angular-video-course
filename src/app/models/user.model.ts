export interface User {
  id: number;
  firstName: string;
  lastName: string;
}
export class VideoUser implements User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
