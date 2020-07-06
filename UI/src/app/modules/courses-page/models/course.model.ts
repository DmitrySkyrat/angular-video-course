import { FormGroup } from '@angular/forms';
export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: ICourseAuthor[];
  isTopRated: boolean;
}

export interface ICourseAuthor {
  id: number;
  name: string;
  lastName: string;
}
export interface IAuthor {
  id: string;
  name: string;
}
export class VideoCourse implements ICourse {
  id: number;
  name: string;
  description: string;
  date: string;
  length: number;
  authors: ICourseAuthor[];
  isTopRated: boolean;

  constructor(form: FormGroup) {
    this.id = form.get('id').value;
    this.name = form.get('title').value;
    this.date = form.get('date').value;
    this.length = form.get('duration').value;
    this.description = form.get('description').value;
    this.authors = form.get('authors').value.map(
      (controlAuthor: IAuthor): ICourseAuthor => {
        const newAuthor: ICourseAuthor = {
          id: parseInt(controlAuthor.id, 10),
          name: controlAuthor.name.split(' ')[0],
          lastName: controlAuthor.name.split(' ')[1],
        };
        return newAuthor;
      }
    );
    this.isTopRated = true;
  }
  getForm(): ICourse {
    return {
      id: this.id,
      name: this.name,
      date: this.date,
      length: this.length,
      description: this.description,
      authors: this.authors,
      isTopRated: this.isTopRated,
    };
  }
}
