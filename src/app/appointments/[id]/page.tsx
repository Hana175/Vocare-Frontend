import { appointments } from "../../lib/data";
import { notFound } from "next/navigation";

export default async function AppointmentDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params object
  const { id } = await params;

  // Test comment

  // Find the appointment using the awaited `id`
  const appointment = appointments.find((a) => a.id === id);

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

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  return appointments.map((appt) => ({
    id: appt.id,
  }));
}

export const dynamicParams = true;
export const dynamic = "force-dynamic";