export interface Course {
  id: number;
  title: string;
  creationDate: string;
  durationMin: number;
  description: string;
}
export class VideoCourse implements Course {
  id: number;
  title: string;
  creationDate: string;
  durationMin: number;
  description: string;

  constructor(
    id: number,
    title: string,
    creationDate: string,
    durationMin: number,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.durationMin = durationMin;
    this.description = description;
  }
}
