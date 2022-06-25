import React from "react";

const Card2 = ({ desc, title }) => {
  return (
    <div class="flex flex-col items-center max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10">
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p class="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default Card2;
