import { Student } from "../models/student";

export interface Ticket {
  id?: number;
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: string;
  archived?: boolean;
}
