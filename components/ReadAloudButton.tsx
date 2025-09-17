"use client";

import React from "react";

const ReadAloudButton: React.FC = () => {
  const handleClick = () => {
    const main = document.querySelector("main");
    if (!main) return;

    const elements = main.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li");
    let text = "";
    elements.forEach((el) => {
      // Only include visible text
      const htmlElement = el as HTMLElement;
      if (htmlElement.offsetParent !== null) {
        text += (htmlElement.textContent || "") + " ";
      }
    });

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(text);
      utterance.lang = "nl-NL";
      window.speechSynthesis.speak(utterance);
    } else {
      // eslint-disable-next-line no-alert
      alert("Sorry, uw browser ondersteunt geen voorleesfunctie.");
    }
  };

  return (
    <div className="flex justify-end max-w-5xl mx-auto mt-4 mb-2 pr-2">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleClick}
        aria-label="Lees artikel voor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block mr-2"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6a1 1 0 011-1h4a1 1 0 011 1v13m-7 0h10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553 2.276A1 1 0 0120 13.118V16.88a1 1 0 01-1.447.894L15 15.999M9 10l-4.553 2.276A1 1 0 004 13.118V16.88a1 1 0 001.447.894L9 15.999"
          />
        </svg>
        Lees voor
      </button>
    </div>
  );
};

export { ReadAloudButton };


