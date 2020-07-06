import { Injectable } from '@angular/core';
import { ICourse, ICourseAuthor } from '../models/course.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}
  public breadcrumb = '';
  public courses: ICourse[] = [];
  public getList(
    start: number,
    count: number,
    textFragment: string
  ): Observable<ICourse[]> {
    const params = new HttpParams()
      .set('start', `${start}`)
      .set('count', `${count}`)
      .set('textFragment', textFragment);
    return this.http.get<ICourse[]>(`http://localhost:3004/courses`, {
      params,
    });
  }
  public createCourse(
    id: number,
    name: string,
    description: string,
    date: string,
    length: number,
    authors: ICourseAuthor[],
    isTopRated: boolean
  ): Observable<ICourse> {
    const newCourse = {
      id: id,
      name: name,
      date: date,
      length: length,
      authors: authors,
      isTopRated: isTopRated,
    };

    return this.http.post<ICourse>(`http://localhost:3004/courses`, {
      newCourse,
    });
  }
  public getItemById(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`http://localhost:3004/courses/${id}`);
  }
  public updateCourse(
    id: number,
    name: string,
    description: string,
    date: string,
    length: number,
    authors: ICourseAuthor[],
    isTopRated: boolean
  ): Observable<ICourse> {
    const updatedCourse = {
      id: id,
      name: name,
      date: date,
      length: length,
      authors: authors,
      isTopRated: isTopRated,
    };

    return this.http.patch<ICourse>(`http://localhost:3004/courses/${id}`, {
      updatedCourse,
    });
  }
  public removeItem(id: number): Observable<void> {
    if (window.confirm('Do you really want to delete this course?')) {
      return this.http.delete<void>(`http://localhost:3004/courses/${id}`);
    }
  }
  public getBreadcrumb(id: number): string {
    this.http
      .get<ICourse>(`http://localhost:3004/courses/${id}`)
      .subscribe((course: ICourse): void => {
        this.breadcrumb = '/ ' + 'Video course ' + course.id;
      });
    return this.breadcrumb;
  }
}
