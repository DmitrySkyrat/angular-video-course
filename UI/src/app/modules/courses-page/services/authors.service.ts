import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IAuthor } from '../models/course.model';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}
  public authors: IAuthor[] = [];
  public getAuthors(textFragment?: string): Observable<IAuthor[]> {
    const params: Params = new HttpParams().set('textFragment', textFragment);
    return this.http.get<IAuthor[]>(`http://localhost:3004/authors`, {
      params,
    });
  }
}
