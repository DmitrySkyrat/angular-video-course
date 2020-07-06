export interface ICourse {
  id: number;
  title: string;
  creationDate: string;
  durationMin: number;
  description: string;
  topRated: boolean;
}
export class IVideoCourse implements ICourse {
  id: number;
  title: string;
  creationDate: string;
  durationMin: number;
  description: string;
  topRated: boolean;

  constructor(
    id: number,
    title: string,
    creationDate: string,
    durationMin: number,
    description: string,
    topRated: boolean
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.durationMin = durationMin;
    this.description = description;
    this.topRated = topRated;
  }
}
