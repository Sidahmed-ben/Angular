import { Ticket } from "../models/ticket";

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "SI4 in Madrid (Espagne)",
    description: "",
    date: dateToday,
    student: {
      id: 1,
      nom: "Benaissa",
      prenom: "Sidahmed",
    },
    major: "GE",
    archived: false,
  },
  {
    title: "SI5 in Paris",
    description: "Description du voyage",
    date: dateToday,
    student: {
      id: 2,
      nom: "Tacherift",
      prenom: "Aymen",
    },
    major: "SI",
    archived: false,
  },
];
