import { Component, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Student } from "src/models/student";
import { StudentService } from "src/services/student/student.service";

@Component({
  selector: "app-student-note.component",
  templateUrl: "./student-note.component.html",
  styleUrls: ["./student-note.component.scss"],
})
export class StudentNoteComponent implements OnInit {
  private student: Student;
  public NoteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    public formBuilder: FormBuilder
  ) {
    this.NoteForm = this.formBuilder.group({
      Note: [""],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.studentService.getStudentById(id).subscribe((data) => {
      this.student = data;
      this.NoteForm = this.formBuilder.group({
        Note: [this.student.Note],
      });
    });
  }

  updateStudent(student: Student) {
    student.Note = this.NoteForm.get(["Note"]).value;
    this.studentService.updateStudentById(student).subscribe((data) => {
      console.log(" Put response ", data);
    });
  }
}
