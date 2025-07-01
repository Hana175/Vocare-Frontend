export type Appointment = {
    id: string;
    title: string;
    date: string;
    time: string;
    description: string;
    patient: string;
  };
  
  export const appointments: Appointment[] = [
    {
      id: "1",
      title: "Arzttermin",
      date: "2025-06-10",
      time: "09:00",
      description: "Check-Up beim Hausarzt, Musikviertel",
      patient: "Max Mustermann",
    },
    {
      id: "2",
      title: "MCK Besuch",
      date: "2025-06-11",
      time: "11:00",
      description: "Mögliche Erhebung des Pflegegrads",
      patient: "Elena Kaiser",
    },
  ];
  