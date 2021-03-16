import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from "./message.service";
import {environment} from "../../environments/environment";

export interface Course {
  id: number;
  name: string;
  description: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //,Authorization: 'my-auth-token'
  })
};
const url: string = environment.apiUrl + "courses";

@Injectable({providedIn: "root"})
export class CourseService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {};

  public courses: Course[] = [
    {id: 1, name: "Математика", description: "Курс математики"},
    {id: 1, name: "Геометрия", description: "Курс геометрии"},
    {id: 1, name: "Астрономия", description: "Курс астрономии"}
  ];

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(url)
      .pipe(
        tap(_ => this.log('fetched courses')),
        catchError(this.handleError<Course[]>('getCourses', []))
      );
  }

  updateCourse(course: Course): Observable<Course> {
    const updateUrl: string = url + "/" + course.id;

    return this.http.put<Course>(updateUrl, course, httpOptions)
      .pipe(
        tap(_ => this.log('fetched course')),
        catchError(this.handleError<Course>('updateCourse', course))
      );
  }

  createCourse(course: Course) {

    return this.http.post<Course>(url, course, httpOptions)
      .pipe(
        tap(_ => this.log('fetched course')),
        catchError(this.handleError<Course>('createCourse', course))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CourseService: ${message}`);
  }
}
