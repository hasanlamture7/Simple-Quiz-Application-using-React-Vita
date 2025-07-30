# 🧠 React Quiz Application

<img width="1253" height="887" alt="image" src="https://github.com/user-attachments/assets/37bdfaa3-31a9-4e03-93fd-70d591634f4e" />

## 🧩 Introduction

This React Quiz Application is an interactive, web-based quiz game that allows users to test their knowledge across various categories and difficulty levels. Built with **React + Vite**, it provides a smooth and responsive user experience with features like timed questions, progress tracking, visual navigation, and score review.

---

## 🚀 Features
- ✅ Fetches real-time quiz questions (category + difficulty selection)
- 🎯 15 Multiple-choice questions per quiz
- ⏱️ 30-second countdown timer per question
- 🔁 Navigation with Next/Previous buttons
- 🧭 Interactive **Question Palette** to jump to any question
- ✅ Tracks answered / not visited / current questions
- 📊 Progress bar for quiz completion status
- 🧮 Score display + review correct answers after quiz
- 🔄 Option to restart the quiz


## ⚙️ Technologies Used

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [OpenTrivia DB API](https://opentdb.com/)
- CSS3

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/hasanlamture7/react-quiz-app.git

# Navigate into the project folder
cd react-quiz-app

# Install dependencies
npm install

# Start the development server
npm run dev
Visit: http://localhost:5173

▶️ Usage
Select quiz category and difficulty.

Click Start Quiz.

Answer each question within 30 seconds.

Use Next/Previous or the question palette to navigate.

Submit to view score and correct answers.

Click Restart to try again.



🗂️ Project Structure
quiz-app/
├── src/
│   ├── components/
│   │   ├── AnswerOptions.jsx
│   │   ├── NavigationButtons.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Question.jsx
│   │   ├── QuizContainer.jsx
│   │   ├── QuizSettings.jsx
│   │   ├── ScoreDisplay.jsx
│   │   └── TotalQuestion.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
🧩 Components
QuizContainer – Main logic hub for quiz

QuizSettings – Category & difficulty selector

Question – Renders question & options

AnswerOptions – Interactive answer choices

NavigationButtons – Navigate through quiz

ProgressBar – Shows quiz progress

ScoreDisplay – Final score + review answers

QuestionPalette – Color-coded jump-to-question UI

📡 API
OpenTrivia API – https://opentdb.com/api.php

Query Parameters:

amount: Number of questions (e.g., 15)

category: Selected category ID

difficulty: easy, medium, or hard

type: multiple

🎨 Styling
Custom styling is handled via:

App.css (global UI)

index.css (reset/defaults)

Component-level class-based styling

Responsive layout designed for mobile, tablet, and desktop views.

📈 Future Enhancements
🔐 User login and score history

🏆 Leaderboard and challenge friends

📅 Custom quiz duration & question count

♿ Accessibility (keyboard & screen-reader support)

🧪 Unit tests with Jest & React Testing Library

🤝 Contributing
Contributions are welcome!
If you find a bug or have a feature request, feel free to open an issue or submit a PR.

📃 License
This project is open source and licensed under the MIT License.

👨‍💻 About Me
Mahamadhasan Ibrahim Lamture
Aspiring Software Engineer | Data Science | Machine Learning

📧 lamturehasan123@gmail.com

🔗 LinkedIn - https://www.linkedin.com/in/hasanlamture/

💻 GitHub -https://github.com/hasanlamture7/hasanlamture7
