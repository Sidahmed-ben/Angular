import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Student } from "src/models/student";
import { StudentService } from "src/services/student/student.service";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"],
})
export class StudentFormComponent implements OnInit {
  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public studentForm: FormGroup;

  public students: Student[] = [];

  constructor(
    public formBuilder: FormBuilder,
    public studentService: StudentService
  ) {
    // Form creation
    this.studentForm = this.formBuilder.group({
      FirstName: [""],
      LastName: [""],
      Note: [""],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  @Output()
  public eventTosendToStudent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {}

  // Rajouter un nouveau student
  addStudent() {
    const studentToAdd: Student = {
      FirstName: this.studentForm.get(["FirstName"]).value,
      LastName: this.studentForm.get(["LastName"]).value,
      Note: this.studentForm.get(["Note"]).value,
    };
    this.studentService.addStudents(studentToAdd).subscribe((data) => {
      console.log(" Post response => ", data);
      this.eventTosendToStudent.emit();
    });
  }
}
