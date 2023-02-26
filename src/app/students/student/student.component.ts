import { Component, EventEmitter } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"],
})
export class StudentComponent {
  clickSubject: Subject<any> = new Subject();
  taskToDoByStudent() {
    this.clickSubject.next(1);
  }
}
