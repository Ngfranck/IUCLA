import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  // État local pour stocker les valeurs des champs de formulaire
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');

  // Fonction de gestionnaire de soumission de formulaire
  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:4000/auth/Login";

    // Vérifiez si les champs de formulaire sont valides
    if (matricule === '' || password === '') {
      alert('Veuillez remplir tous les champs!');
    } else {
      // Envoyer les données de connexion au backend
      console.log('matricule:', matricule);
      console.log('Password:', password);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connectez-vous à votre compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Matricule
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={matricule}
                  onChange={(event) => setMatricule(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Link to ='/dashboard'
                // type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  matricule === '' || password === '' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={matricule === '' || password === ''}
              >
                Se connecter
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
