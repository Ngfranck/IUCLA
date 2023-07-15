import React, { useState } from "react";
import Modal from "react-modal";
import ReservationForm from "./ReservationForm";
import Update from "./Update";

const Lablist = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isModificationModalOpen, setIsModificationModalOpen] = useState(false);

  const handleReservation = (labId) => {
    // Code pour réserver un laboratoire avec l'ID `labId`
    console.log(`Réserver le laboratoire ${labId}`);
    setIsReservationModalOpen(true);
  };

  const handleModification = (labId) => {
    // Code pour modifier une réservation pour le laboratoire avec l'ID `labId`
    console.log(`Modifier la réservation pour le laboratoire ${labId}`);
    setIsModificationModalOpen(true);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Liste des laboratoires</h1>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">Laboratoire 1</h2>
            <p className="text-gray-700 mb-4">
              123 Rue du Laboratoire, 75000 Paris
            </p>
            <p className="text-gray-700 mb-4">Téléphone : 01 23 45 67 89</p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                onClick={() => handleReservation(1)}
              >
                Réserver
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleModification(1)}
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">Laboratoire 2</h2>
            <p className="text-gray-700 mb-4">
              456 Avenue des Sciences, 69000 Lyon
            </p>
            <p className="text-gray-700 mb-4">Téléphone : 04 56 78 90 12</p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                onClick={() => handleReservation(2)}
              >
                Réserver
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleModification(2)}
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modale de réservation */}
      <Modal
        isOpen={isReservationModalOpen}
        onRequestClose={() => setIsReservationModalOpen(false)}
      >
        <ReservationForm/>
      </Modal>

      {/* Modale de modification */}
      <Modal
        isOpen={isModificationModalOpen}
        onRequestClose={() => setIsModificationModalOpen(false)}
      >
        <Update/>
      </Modal>
    </div>
  );
};

export default Lablist;
