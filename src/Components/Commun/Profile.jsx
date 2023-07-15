import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-center -mt-16">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-white"
            src="path/to/profile-image.jpg"
            alt="Profile"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Front-end Developer</p>
        </div>
        <div className="mt-8 px-6">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet justo ac nunc ultrices, vitae tincidunt enim fermentum.
            Donec auctor, mauris id lacinia consequat, velit ligula
            sollicitudin urna, nec efficitur risus mi at lectus.
          </p>
        </div>
        <div className="mt-8 px-6">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <ul className="mt-4 text-gray-600">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-500"
 fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 13a1 1 0 11-2 0 1 1 0 012 0zm0-9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              john.doe@example.com
            </li>
            <li className="flex items-center mt-2">
              <svg
                className="w-5 h-5 mr-2 text-gray-500"
 fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 13a1 1 0 11-2 0 1 1 0 012 0zm0-9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              (123) 456-7890
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
