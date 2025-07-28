"use client";
import React, { useState, ChangeEvent } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import TextArea from "@/components/inputs/TextArea";
import SpeechRecognitionComponent from "@/components/speechrecognition/SpeechRecognition";
import LanguageSelector from "@/components/inputs/LanguageSelector";
import useTranslate from "@/hooks/useTranslate";
import Footer from "@/components/ui/footer";
import { IconVolume } from "@tabler/icons-react";

export default function BackgroundBeamsDemo() {
  const [sourceText, setSourceText] = useState<string>("");

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const [languages] = useState<string[]>([
    "English", "Spanish", "French", "German", "Chinese", "Hindi", "Arabic",
    "Portuguese", "Russian", "Japanese", "Korean", "Italian", "Turkish",
    "Dutch", "Polish", "Vietnamese", "Thai", "Bengali", "Urdu", "Persian"
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("Hindi");
  const targetText = useTranslate(sourceText, selectedLanguage);

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Voxa.
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          An intelligent AI-powered translator that makes real-time communication effortless and accurate that helps you speak and understand with confidence.
        </p>

        <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
          <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
            <div className="relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
              <TextArea
                id="source-language"
                value={sourceText}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSourceText(e.target.value)}
                placeholder="Source Language"
              />
              <div className="flex flex-row justify-between w-full">
                <span className="cursor-pointer flex space-x-2 flex-row">
                  <SpeechRecognitionComponent setSourceText={setSourceText} />
                  <IconVolume size={22} onClick={() => handleAudioPlayback(sourceText)} />
                </span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
              <TextArea
                id="target-language"
                value={targetText}
                onChange={() => { }} // read-only output
                placeholder="Target Translation"
              />
              <div className="flex flex-row justify-between w-full">
                <span className="cursor-pointer flex items-center space-x-2 flex-row">
                  <LanguageSelector
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languages={languages}
                  />
                  <IconVolume size={22} onClick={() => handleAudioPlayback(targetText)} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackgroundBeams />
    </div>
  );
}
