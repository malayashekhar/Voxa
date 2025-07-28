# Voxa 🎙️

**Voxa** is a sleek, AI-powered web app that helps users practice pronunciation, listen to synthesized speech, and explore phrases in multiple languages. Powered by **Next.js**, **Acernity UI**, and **Google Gemini**, Voxa offers a modern and intuitive interface with intelligent language support.

🌐 **Live Demo**: [https://voxaa.netlify.app](https://voxaa.netlify.app)

---

## ✨ Features

- 🧠 **Google Gemini Integration**: Generates helpful phrases and translations using Google's generative AI.
- 🗣️ **Text-to-Speech**: Convert typed or AI-generated text into spoken words with the Web Speech API.
- 🌍 **Language Switching**: Select from multiple supported languages.
- 🎛️ **Voice Controls**: Customize pitch and rate to tune the speech output.
- 💻 **Responsive UI**: Built with Acernity UI for a clean and elegant look on all screen sizes.
- ⚡ **Fast Performance**: Optimized using Vite and Next.js for fast loading and interaction.

---

## 🧪 Tech Stack

- **Next.js** – React framework for server-rendered and statically-generated applications
- **Acernity UI** – Tailored, modern UI components for rapid and aesthetic web development
- **Google Gemini API** – Leverages LLMs for phrase generation and intelligent assistance
- **Web Speech API** – Browser-native speech synthesis for audio output
- **Netlify** – CI/CD and hosting platform

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/malayashekhar/Voxa.git
cd Voxa
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment
Create a .env.local file in the root directory:
```bash
GEMINI_API_KEY=your_google_gemini_api_key
```

🔑 Get your Gemini API key from https://aistudio.google.com/app/apikey

### 4. Start the Development Server
```bash
npm run dev
```

Open your browser at: http://localhost:3000

### Project Structure:
```bash
/public            → Static assets  
/pages             → Next.js routing  
/components        → React UI components  
/styles            → Tailwind & custom styles  
/lib/gemini.ts     → Gemini API integration  
.env.local         → Your environment secrets
```



