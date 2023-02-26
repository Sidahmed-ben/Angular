import { Injectable } from "@angular/core";
import { Ticket } from "../../models/ticket";
// import { TICKETS_MOCKED } from "../../mocks/tickets.mock";
import { BehaviorSubject } from "rxjs/index";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private backUrl: string = "http://localhost:9428/api/tickets";
  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: Observable<Ticket[]> = this.getTickets();

  constructor(public http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.backUrl);
  }

  addTicket(ticket: Ticket) {
    // this.tickets$.next(this.tickets$.getValue().concat([ticket]));
  }

  // Delete ticket using index
  deleteTicket(ticket: Ticket) {}
}
