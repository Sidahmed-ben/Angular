import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  TicketComponent,
  TicketFormComponent,
  TicketListComponent,
} from "./tickets";
import { TicketService } from "../services/ticket/ticket.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { StudentFormComponent, StudentListComponent } from "./students";
import { StudentComponent } from "./students/student/student.component";
import { StudentNoteComponent } from "./students/student-note";

const routes: Routes = [
  { path: "tickets", component: TicketListComponent },
  { path: "students", component: StudentComponent },
  { path: "students-notes/:id", component: StudentNoteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    StudentListComponent,
    StudentComponent,
    StudentFormComponent,
    StudentNoteComponent,
    HeaderComponent, // All the components needs to be declared
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
    CommonModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent],
})
export class AppModule {}
