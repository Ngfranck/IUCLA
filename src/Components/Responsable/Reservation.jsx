import { useState } from 'react';

function Reservations() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      date: '2023-07-15',
      enseignant: 'John Doe',
      laboratoire: 'Laboratoire 1',
      statut: 'En attente',
      note: '',
    },
    {
      id: 2,
      date: '2023-07-16',
      enseignant: 'Jane Smith',
      laboratoire: 'Laboratoire 2',
      statut: 'Approuvé',
      note: '',
    },
    {
      id: 3,
      date: '2023-07-17',
      enseignant: 'Bob Johnson',
      laboratoire: 'Laboratoire 1',
      statut: 'Refusé',
      note: '',
    },
  ]);

  const [formValues, setFormValues] = useState({
    date: '',
    enseignant: '',
    laboratoire: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      id: reservations.length + 1,
      date: formValues.date,
      enseignant: formValues.enseignant,
      laboratoire: formValues.laboratoire,
      statut: 'En attente',
      note: '',
    };
    setReservations([...reservations, newReservation]);
    setFormValues({
      date: '',
      enseignant: '',
      laboratoire: '',
    });
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.id === id) {
        return {
          ...reservation,
          statut: newStatus,
        };
      }
      return reservation;
    });
    setReservations(updatedReservations);
  };

  const handleNoteChange = (id, note) => {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.id === id) {
        return {
          ...reservation,
          note,
        };
      }
      return reservation;
    });
    setReservations(updatedReservations);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Réservations</h1>

      {/* Tableau des réservations */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Enseignant</th>
              <th className="px-4 py-2">Laboratoire</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className="border px-4 py-2">{reservation.id}</td>
                <td className="border px-4 py-2">{reservation.date}</td>
                <td className="border px-4 py-2">{reservation.enseignant}</td>
                <td className="border px-4 py-2">{reservation.laboratoire}</td>
                <td className={`border px-4 py-2 ${reservation.statut === 'En attente' ? 'text-yellow-400' : reservation.statut === 'Approuvé' ? 'text-green-400' : 'text-red-400'}`}>
                  {reservation.statut}
                  {reservation.statut === 'En attente' && (
                    <div className="mt-2">
                      <button
                        onClick={() => handleStatusChange(reservation.id, 'Approuvé')}
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2"
                      >
                        Approuver
                      </button>
                      <button
                        onClick={() => handleStatusChange(reservation.id, 'Refusé')}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Refuser
                      </button>
                    </div>
                  )}
                </td>
                <td className="border px-4 py-2">
                  <textarea
                    value={reservation.note}
                    onChange={(event) => handleNoteChange(reservation.id, event.target.value)}
                    placeholder="Ajouter une note"
                    className="w-full border rounded p-2"
                  ></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulaire d'ajout de réservation */}
      <h2 className="text-lg font-bold mt-8 mb-4">Ajouter une réservation</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-grow mb-4 sm:mb-0">
            <label htmlFor="date" className="block font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formValues.date}
              onChange={handleInputChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex-grow mb-4 sm:mb-0">
            <label htmlFor="enseignant" className="block font-bold mb-2">
              Enseignant
            </label>
            <input
              type="text"
              id="enseignant"
              name="enseignant"
              value={formValues.enseignant}
              onChange={handleInputChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex-grow mb-4 sm:mb-0">
            <label htmlFor="laboratoire" className="block font-bold mb-2">
              Laboratoire
            </label>
            <input
              type="text"
              id="laboratoire"
              name="laboratoire"
              value={formValues.laboratoire}
              onChange={handleInputChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 sm:mt-0">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reservations;
