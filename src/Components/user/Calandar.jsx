import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // ou une autre langue selon vos préférences
import "dayjs/locale/it"; // ou une autre langue selon vos préférences

dayjs.locale("fr"); // ou la langue de votre choix

const Calendar = () => {
  const reservations = [
    { id: 1, date: "2023-07-01", lab: "Labo A", time: "10:00" },
    { id: 2, date: "2023-07-05", lab: "Labo B", time: "14:30" },
    // ... autres réservations
  ];

  const [selectedMonth, setSelectedMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePreviousMonth = () => {
    setSelectedMonth(selectedMonth.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setSelectedMonth(selectedMonth.add(1, "month"));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Ajoutez ici l'action que vous souhaitez effectuer après avoir cliqué sur une date
    console.log("Date sélectionnée :", date.format("YYYY-MM-DD"));
  };

  const today = dayjs();
  const monthStart = selectedMonth.startOf("month");
  const monthEnd = selectedMonth.endOf("month");
  const startDate = monthStart.startOf("week");
  const endDate = monthEnd.endOf("week");
  const monthDays = endDate.diff(startDate, "days") + 1;
  const days = [...Array(monthDays)].map((_, i) =>
    startDate.add(i, "day").format("D")
  );
  const weeks = [...Array(6)].map((_, i) =>
    days.slice(i * 7, (i + 1) * 7)
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-8">Calendrier des réservations</h2>
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousMonth}
        >
          Mois précédent
        </button>
        <h3 className="text-xl font-bold">
          {selectedMonth.format("MMMM YYYY")}
        </h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextMonth}
        >
          Mois suivant
        </button>
      </div>
      <div className="flex flex-wrap">
        {weeks.map((week, i) => (
          <div key={i} className="flex flex-col w-1/7">
            {week.map((day, j) => {
              const date = startDate.add(i * 7 + j, "day");
              const isToday = date.isSame(today, "day");
              const isSelected = date.isSame(selectedDate, "day");
              const reservationsForDay = reservations.filter((r) =>
 dayjs(r.date).isSame(date, "day")
              );
              return (
                <div
                  key={j}
                  className={`flex-1 border border-gray-200 p-2 ${
                    isToday ? "bg-blue-100" : ""
                  } ${isSelected ? "bg-blue-200" : ""}`}
                  onClick={() => handleDateClick(date)}
 >
                  <div className="mb-2">{date.format("dddd D MMMM")}</div>
                  {reservationsForDay.length > 0 ? (
                    <ul className="list-disc pl-4">
                      {reservationsForDay.map((reservation) => (
                        <li key={reservation.id}>
                          {reservation.lab} à {reservation.time}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>Aucune réservation pour cette journée</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
