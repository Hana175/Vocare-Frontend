import { appointments } from "../../lib/data";
import { notFound } from "next/navigation";

export default function AppointmentDetail({
  params,
}: {
  params: { id: string };
}) {
  const appointment = appointments.find((a) => a.id === params.id);

  if (!appointment) return notFound();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{appointment.title}</h1>
      <div className="space-y-2 text-sm">
        <div><strong>Datum:</strong> {appointment.date}</div>
        <div><strong>Uhrzeit:</strong> {appointment.time}</div>
        <div><strong>Patient:</strong> {appointment.patient}</div>
        <div><strong>Beschreibung:</strong> {appointment.description}</div>
      </div>
    </div>
  );
}

// ✅ Must be async for static params generation
export async function generateStaticParams() {
  return appointments.map((appt) => ({
    id: appt.id,
  }));
}

// ✅ ADD THIS — prevents Vercel from inferring broken types
export const dynamicParams = true;
