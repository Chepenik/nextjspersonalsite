import React from 'react';

const BinmuckerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Binmucker.com Update</h1>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
          <p className="font-bold">Status: Under Maintenance</p>
          <p>We&apos;re working hard to bring binmucker.com back online.</p>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Hello! I&apos;m Conor Chepenik, and I want to assure you that I&apos;m actively working on getting binmucker.com back up and running as soon as possible. Thank you for your patience and interest in the site.
        </p>
        <p className="text-md text-gray-500 mb-4">
          In the meantime, feel free to explore my other projects and content on my main website.
        </p>
        <a 
          href="https://conorchepenik.com" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Return to Main Site
        </a>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Conor Chepenik. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BinmuckerPage;