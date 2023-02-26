import { Injectable } from "@angular/core";
import { Observable } from "rxjs/index";
import { Student } from "src/models/student";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  constructor(private http: HttpClient) {}

  private backUrl: string = "http://localhost:9428/api/students";

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.backUrl);
  }
  addStudents(student: Student): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    let options = {
      headers: headers,
    };
    return this.http.post<any>(this.backUrl, JSON.stringify(student), options);
  }

  deleteStudents(id): Observable<any> {
    return this.http.delete<any>(this.backUrl + "/" + id);
  }

  getStudentById(id): Observable<Student> {
    return this.http.get<Student>(this.backUrl + "/" + id);
  }

  updateStudentById(student): Observable<any> {
    return this.http.put<any>(this.backUrl + "/" + student.id, student);
  }
}
