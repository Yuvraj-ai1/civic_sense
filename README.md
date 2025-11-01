# 🗳️ Community Connect - Civic Awareness Quiz

A comprehensive gamified quiz system designed to educate youth about voting rights and civic duties in India.

## ✨ Features

### 🎯 Interactive Quiz System
- **15 Comprehensive MCQs** covering Indian civic knowledge
- **10 Random Questions** per session
- **3 Difficulty Levels**: Basic, Moderate, Advanced
- **20-second Timer** per question with visual countdown
- **Immediate Feedback** with educational explanations
- **Progress Bar** and score tracking

### 🏆 Gamification & Rewards
- **Points System**: +10 per correct answer, +50 for completion
- **4 Reward Tiers**: Bronze → Silver → Gold → Platinum
- **Badge System** with visual rewards
- **Progress Tracking** with localStorage persistence

### 📊 Leaderboard
- **Weekly Rankings** with top 10 users
- **State-wise Filtering**
- **User Progress Display**
- **Motivational Elements**

### 📱 Mobile-First Design
- Fully responsive layout
- Touch-friendly interface
- Modern UI with civic theme colors
- Fast loading and smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the app.

### Build for Production

```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`.

## 🌐 GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

### Manual Deployment Steps

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it `cc2` (or update `vite.config.js` with your repo name)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/cc2.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select source: "GitHub Actions"
   - The site will be available at: `https://YOUR_USERNAME.github.io/cc2/`

## 📁 Project Structure

```
cc2/
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Quiz.jsx     # Main quiz component
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Guide.jsx
│   │   │   └── Community.jsx
│   │   ├── data/
│   │   │   └── quizData.js  # Question bank
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   ├── api.js           # API utilities
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies
│   └── vite.config.js       # Vite configuration
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
└── README.md                # This file
```

## 🎨 Design System

### Color Scheme
- **Primary**: Indigo to Purple gradients
- **Secondary**: Blue, White, Saffron (Indian flag colors)
- **Success**: Green for correct answers
- **Warning**: Yellow/Orange for timers
- **Error**: Red for incorrect answers

### Components
- **Cards**: Glass-morphism design with shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Progress Bars**: Animated with color transitions
- **Timers**: Visual countdown with urgency indicators

## 📚 Educational Content

The quiz covers essential civic topics:
- Voting age and rights
- Constitutional knowledge
- Election process and timeline
- Election Commission details
- EVM and voter ID information
- Parliamentary structure

## 🏅 Reward Tiers

| Tier | Points Required | Badge | Reward |
|------|----------------|-------|--------|
| 🥉 Bronze | 100 pts | Civic Learner | Badge |
| 🥈 Silver | 250 pts | Voter Awareness | Certificate |
| 🥇 Gold | 500 pts | Youth Changemaker | Profile Tag |
| 💎 Platinum | 1000 pts | Civic Leader | Internship Eligibility |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with ❤️ for democratic participation and youth civic engagement in India.

---

**Your Voice, Your Vote, Your Power! 🗳️✨**