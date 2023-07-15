import React, { useState } from "react";

const ReservationForm = ({ reservation, onSave, onCancel, onDelete }) => {
  const [name, setName] = useState(reservation ? reservation.name : "");
  const [email, setEmail] = useState(reservation ? reservation.email : "");
  const [lab, setLab] = useState(reservation ? reservation.lab : "");
  const [date, setDate] = useState(reservation ? reservation.date : "");
  const [time, setTime] = useState(reservation ? reservation.time : "");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSave({
        id: reservation ? reservation.id : null,
        name,
        email,
        lab,
        date,
        time,
      });
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Le nom est obligatoire";
    }
    if (!email.trim()) {
      errors.email = "L'adresse email est obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "L'adresse email est invalide";
    }
    if (!lab.trim()) {
      errors.lab = "Le laboratoire est obligatoire";
    }
    if (!date.trim()) {
      errors.date = "La date est obligatoire";
    }
    if (!time.trim()) {
      errors.time = "L'heure est obligatoire";
    }
    return errors;
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Nom et prénom
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
          id="name"
          type="text"
          placeholder="Entrez votre nom et prénom"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Adresse email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
          id="email"
          type="email"
          placeholder="Entrez votre adresse email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="lab">
          Laboratoire
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.lab ? "border-red-500" : ""
          }`}
          id="lab"
          type="text"
          placeholder="Entrez le nom du laboratoire"
          value={lab}
          onChange={(event) => setLab(event.target.value)}
        />
        {errors.lab && (
          <p className="text-red-500 text-xs italic">{errors.lab}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.date ? "border-red-500" : ""
          }`}
          id="date"
          type="date"
          placeholder="Entrez la date de réservation"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        {errors.date && (
          <p className="text-red-500 text-xs italic">{errors.date}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
          Heure
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.time ? "border-red-500" : ""
          }`}
          id="time"
          type="time"
          placeholder="Entrez l'heure de réservation"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        {errors.time && (
          <p className="text-red-500 text-xs italic">{errors.time}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        {onDelete && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onDelete}
          >
            Supprimer
          </button>
        )}
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="submit"
            onClick={handleSubmit}
          >
            Enregistrer
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onCancel}
          >
            Annuler
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
