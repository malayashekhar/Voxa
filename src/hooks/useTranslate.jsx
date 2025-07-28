import { useEffect, useState } from "react";

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    if (!sourceText.trim()) return;

    const timeoutId = setTimeout(async () => {
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sourceText, selectedLanguage }),
        });

        const data = await res.json();
        if (res.ok) {
          setTargetText(data.result);
        } else {
          console.error("Translation failed:", data.error);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;
