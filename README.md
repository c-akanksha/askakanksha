# 🚀 AskAkanksha — AI Resume Assistant

AskAkanksha is an interactive **AI-powered resume chatbot** that allows users (recruiters, hiring managers, or peers) to ask questions about my experience, skills, and projects in a conversational way.

Instead of scanning a traditional resume, users can simply **ask questions and get structured, intelligent responses**.

---

## ✨ Features

* 💬 **Chat-based Resume Exploration**

  * Ask questions like:

    * *"What experience does she have?"*
    * *"Explain her ML projects"*
    * *"What are her technical skills?"*

* 🧠 **AI-Powered Responses**

  * Backend processes resume as context
  * Returns structured outputs:

    * Text
    * Lists (skills, achievements)
    * Cards (projects)
    * Sections (experience)

* 🎯 **Recruiter-Focused UX**

  * Predefined quick questions
  * Clean chat interface
  * Structured responses for easy scanning

* 🎨 **Modern UI**

  * Gradient-based design
  * Glassmorphism chat bubbles
  * Avatars for user & AI
  * Smooth layout with Material UI

* ⚡ **Smart State Handling**

  * Backend health check
  * Loading indicators
  * Error handling

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React (Vite)
* 🎨 Material UI (MUI)
* 🧠 Redux Toolkit (State Management)
* 🌐 Hash Router

### Backend

* 🐍 Python (FastAPI)
* 🤖 LLM-based response generation
* 🔗 REST APIs

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── ChatBubble.jsx
│   ├── ProjectCard.jsx
│   ├── ExperienceCard.jsx
│   ├── Header.jsx
│   ├── ChatInput.jsx
│   ├── EmptyState.jsx
│   ├── TypingIndicator.jsx
│   └── BottomNavChips.jsx
│
├── slices/
│   └── chatSlice.js
│
├── data/
│   └── resumeData.js
│
├── App.jsx
└── main.jsx
```

---

## 🔄 Data Flow

1. User sends a message
2. Redux dispatches async thunk
3. Backend processes query using resume context
4. Response returned in structured format:

```json
{
  "type": "sections | list | cards | text",
  "data": [...],
  "text": "",
  "sender": "bot"
}
```

5. UI dynamically renders based on `type`

---

## 🧩 Supported Response Types

| Type     | UI Component     |
| -------- | ---------------- |
| text     | Chat bubble      |
| list     | Chips            |
| cards    | Project cards    |
| sections | Experience cards |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/c-akanksha/ask-akanksha.git
cd AskAkanksha
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run frontend

```bash
npm run dev
```

### 4. Run backend (Python)

```bash
uvicorn main:app --reload
```

---

## ⚙️ Environment Setup

Create a `.env` file (if needed):

```env
VITE_API_BASE_URL=http://localhost:8000
```

---

## 🧠 Key Design Decisions

* **Structured AI responses** instead of plain text
* **Generic UI renderer** to handle dynamic keys
* **Separation of concerns** (UI vs logic vs API)
* **Recruiter-first UX thinking**

---

## 📸 UI Highlights

* Chat-based interface instead of static resume
* Highlight cards for projects
* Structured experience sections
* Smart empty state with suggestions

---

## 🤝 Why This Project?

Traditional resumes are static.

AskAkanksha transforms a resume into:

> 💡 An interactive, queryable knowledge system

This demonstrates:

* Frontend architecture (React + Redux)
* API integration
* UX thinking
* AI integration

---

## 📬 Contact

* LinkedIn: https://linkedin.com/in/c-akanksha
* GitHub: https://github.com/c-akanksha

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to reach out!
