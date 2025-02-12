import { Component, OnInit } from "@angular/core";
import { TicketService } from "../../../services/ticket/ticket.service";
import { Ticket } from "../../../models/ticket";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
})
export class TicketListComponent implements OnInit {
  public ticketList: Ticket[] = [];

  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe({
      next: (tickets) => (this.ticketList = tickets),
      error: (err) => console.log(err),
    });
  }

  ngOnInit() {}

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log("event received from child:", hasBeenSelected);
  }

  ticketHasBeenDeleted(ticket: Ticket) {
    console.log("Ticket has been deleted", ticket);
    this.ticketService.deleteTicket(ticket);
  }

  toggleDisplayArchived() {
    this.displayTicketArchived = !this.displayTicketArchived;
  }
}
