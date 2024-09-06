import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/riteshbprofile.jpg";

const formatHeroContent = (content) => {
  const formattedContent = content.split(' ').map((word, index) => {
    const cleanedWord = word.replace(/[.,]/g, '');
    if (["Artificial", "Intelligence", "(ML,", "DL,", "NLP,", "LLMs,", "GenAI)"].includes(cleanedWord)) {
      return <span key={index} className="font-semibold underline text-white">{word} </span>;
    }
    if (["Gurugram", "University", "Gurugram.", "C++", "&", "Python."].includes(cleanedWord)) {
      return <span key={index} className="font-bold text-white">{word} </span>;
    }
    return <span key={index} className="text-white">{word} </span>;
  });

  return <>{formattedContent}</>;
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl lg:text-8xl font-thin tracking-tight text-white"> 
              Ritesh Bhadana
            </h1>
            <span className="text-2xl lg:text-3xl tracking-tight">
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-extrabold">
                Aspiring Developer
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-extrabold">
                AI & ML Engineer
              </span>
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {formatHeroContent(HERO_CONTENT)}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={profilePic} alt="Ritesh Bhadana" className="max-w-full h-auto lg:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
