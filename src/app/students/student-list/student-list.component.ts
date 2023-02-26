import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { Ticket } from "../../../models/ticket";
import { Student } from "src/models/student";
import { StudentService } from "src/services/student/student.service";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"],
})
export class StudentListComponent implements OnInit {
  public studentList: Student[] = [];

  constructor(public studentService: StudentService, private router: Router) {}

  @Input("clickSubject") clickSubject: Subject<any>;

  ngOnInit() {
    this.clickSubject.subscribe((e) => {
      this.getStudents();
    });
    this.getStudents();
  }

  public getStudents() {
    this.studentService.getStudents().subscribe({
      next: (students) => {
        this.studentList = students;
        console.log(this.studentList);
      },
      error: (err) => console.log(err),
    });
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    // console.log("event received from child:", hasBeenSelected);
  }

  SuppStud(id) {
    console.log("Student has been deleted", id);
    this.studentService.deleteStudents(id).subscribe((data) => {
      console.log(" Student Deleted  => ", data);
      this.getStudents();
    });
  }

  goToDetails(id) {
    this.router.navigate(["/students-notes/" + id]);
  }

  toggleDisplayArchived() {
    // this.displayTicketArchived = !this.displayTicketArchived;
  }
}
