"use client";

import { appointments } from "../lib/data";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";
import { Filter, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ListPage() {
  const router = useRouter();

  // Group appointments by date
  const grouped = appointments.reduce((acc, curr) => {
    acc[curr.date] = acc[curr.date] || [];
    acc[curr.date].push(curr);
    return acc;
  }, {} as Record<string, typeof appointments>);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width Header */}
      {/* Full-width Header */}
<div className="w-full bg-white px-6 py-4 border-b shadow-sm flex items-center justify-between">
  {/* Left side: calendar + Liste/Woche/Monat buttons */}
  <div className="flex gap-2 items-center">
    <input
      type="date"
      className="border px-2 py-1 rounded text-sm"
      defaultValue="2025-06-10"
    />
    <Button variant="outline" size="sm">Liste</Button>
    <Button variant="ghost" size="sm">Woche</Button>
    <Button variant="ghost" size="sm">Monat</Button>
  </div>

  {/* Right side: Termine filtern + Neuer Termin buttons */}
  <div className="flex gap-2 items-center">
    <Button variant="outline" size="sm">
      <Filter className="w-4 h-4 mr-1" />
      Termine filtern
    </Button>
    <Button size="sm">
      <Plus className="w-4 h-4 mr-1" />
      Neuer Termin
    </Button>
  </div>
</div>


      {/* Main content container */}
      <div className="p-6 max-w-screen-md mx-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-white p-3 rounded mb-4 shadow-sm border">
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-1" />
              Termine filtern
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Neuer Termin
            </Button>
          </div>
        </div>

        {/* Appointments */}
{/* Single Heute label aligned to right */}
<div className="flex justify-end">
  <div className="inline-block px-3 py-1 mb-4 rounded text-green-800 bg-green-100 font-semibold">
    Heute
  </div>
</div>


        {Object.entries(grouped).map(([date, appts]) => (
          <div key={date} className="mb-6">
            <div className="text-lg font-bold text-black mb-2">
              {format(parseISO(date), "EEEE, dd. MMMM", { locale: de })}
            </div>

            <div className="space-y-2">
              {appts.map((appt) => (
                <div
                  key={appt.id}
                  onClick={() => router.push(`/appointments/${appt.id}`)}
                  className={cn(
                    "bg-white border rounded p-4 shadow hover:bg-gray-50 cursor-pointer"
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-semibold">{appt.title}</div>
                    <Badge variant="outline">Heute</Badge>
                  </div>
                  <div className="text-xs text-gray-500">
                    {appt.time} Uhr – {appt.patient}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{appt.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-sm text-muted-foreground mt-8">
          Keine weiteren Termine gefunden
        </p>
      </div>
    </div>
  );
}
