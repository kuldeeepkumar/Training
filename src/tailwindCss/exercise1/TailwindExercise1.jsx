import React from "react";

const TailwindExercise1 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to Tailwind CSS
      </h1>
      <p className="text-lg text-red-500 mb-4 text-center max-w-2xl mx-auto">
        This is a sample project using Tailwind utility classes for layout and
        style.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Get Started
      </button>
    </div>
  );
};

export default TailwindExercise1;