import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TicketService } from "../../../services/ticket/ticket.service";
import { Ticket } from "../../../models/ticket";
// import { STUDENTS_MOCKED } from "src/mocks/students.mock";
import { Student } from "src/models/student";
import { StudentService } from "src/services/student/student.service";

enum Major {
  GE = "GE",
  SI = "SI",
}

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
})
export class TicketFormComponent implements OnInit {
  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public majors: string[] = Object.keys(Major).filter((item) => {
    return isNaN(Number(item));
  });

  public students: Student[] = [];

  constructor(
    public formBuilder: FormBuilder,
    public ticketService: TicketService,
    public studentService: StudentService
  ) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [""],
      description: [""],
      major: ["GI"],
      student: [0],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next: (students) => (this.students = students),
      error: (err) => console.log(err),
    });
  }

  // Rajouter un nouveau ticket
  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.title = this.ticketForm.get(["title"]).value;
    ticketToCreate.description = this.ticketForm.get(["description"]).value;
    ticketToCreate.major = this.ticketForm.get(["major"]).value;
    const studentId = this.ticketForm.get(["student"]).value;
    ticketToCreate.student = this.students[studentId - 1];
    this.ticketService.addTicket(ticketToCreate);
  }
}
