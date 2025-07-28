export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { sourceText, selectedLanguage } = req.body;

  if (!sourceText || !selectedLanguage) {
    return res.status(400).json({ error: "Missing input" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const geminiRes = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You will be provided with a sentence: "${sourceText}". Your tasks:
- Detect the language.
- Translate it into ${selectedLanguage}.
Only return the translated sentence.`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await geminiRes.json();

    const translated =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No translation returned";

    return res.status(200).json({ result: translated });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Gemini translation failed" });
  }
}
