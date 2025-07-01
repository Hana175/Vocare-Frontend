"use client";

import React from "react";
import { appointments } from "../lib/data";
import { useRouter } from "next/navigation";
import { getDay } from "date-fns";

const weekDays: DayName[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
type DayName = "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag";
const dayIndex: Record<DayName, number> = {
  Montag: 1,
  Dienstag: 2,
  Mittwoch: 3,
  Donnerstag: 4,
  Freitag: 5,
};

export default function CalendarPage() {
  const router = useRouter();

  // get today's weekday number (0 = Sunday, 1 = Monday, ...)
  const todayIndex = getDay(new Date());

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Kalender Wochenansicht</h1>

      {/* Calendar Header */}
      <div className="grid grid-cols-6 text-sm font-medium text-center border-b">
        <div className="p-2"></div>
        {weekDays.map((day, i) => {
          const isToday = todayIndex === dayIndex[day];
          return (
            <div
              key={i}
              className={`p-2 border-l ${isToday ? "bg-green-200 text-green-900 font-bold" : ""}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Calendar Body - time slots from 08:00 to 12:00 */}
      <div className="grid grid-cols-6 border-t text-xs">
        {["08:00", "09:00", "10:00", "11:00", "12:00"].map((time, rowIdx) => (
          <React.Fragment key={rowIdx}>
            {/* Time Column */}
            <div className="border p-2 h-24 text-right">{time}</div>

            {/* Columns per Day */}
            {weekDays.map((day, colIdx) => {
              const appt = appointments.find(
                (a) => getDay(new Date(a.date)) === dayIndex[day] && a.time.startsWith(time.slice(0, 2))
              );
              const isToday = todayIndex === dayIndex[day];

              return (
                <div
                  key={colIdx + "-" + rowIdx}
                  className={`relative border h-24 p-1 ${isToday ? "bg-green-100" : ""}`}
                >
                  {appt && (
                    <div
                      onClick={() => router.push(`/appointments/${appt.id}`)}
                      className="absolute top-1 left-1 right-1 bg-green-200 text-xs p-2 rounded shadow cursor-pointer"
                    >
                      <div className="font-semibold">{appt.title}</div>
                      <div className="text-[10px] text-gray-600">{appt.patient}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
