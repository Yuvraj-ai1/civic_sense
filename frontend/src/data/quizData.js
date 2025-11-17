// Comprehensive Civic Awareness Quiz Data
export const quizQuestions = [
  {
    id: 1,
    question: "What is the minimum voting age in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correctAnswer: "18 years",
    difficulty: "Basic",
    explanation: "The minimum voting age in India is 18 years as per Article 326 of the Constitution."
  },
  {
    id: 2,
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad"],
    correctAnswer: "Dr. B.R. Ambedkar",
    difficulty: "Basic",
    explanation: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution for his pivotal role in drafting it."
  },
  {
    id: 3,
    question: "How often are Lok Sabha elections held in India?",
    options: ["Every 3 years", "Every 4 years", "Every 5 years", "Every 6 years"],
    correctAnswer: "Every 5 years",
    difficulty: "Basic",
    explanation: "Lok Sabha elections are held every 5 years, unless dissolved earlier."
  },
  {
    id: 4,
    question: "What does NOTA stand for?",
    options: ["None Of The Above", "National Online Test Authority", "New Ordinance for Tax Amendment", "National Overseas Talent Award"],
    correctAnswer: "None Of The Above",
    difficulty: "Basic",
    explanation: "NOTA (None Of The Above) allows voters to reject all candidates if they find none suitable."
  },
  {
    id: 5,
    question: "Which body conducts elections in India?",
    options: ["Supreme Court", "Election Commission of India", "Parliament", "State Government"],
    correctAnswer: "Election Commission of India",
    difficulty: "Basic",
    explanation: "The Election Commission of India is an autonomous constitutional authority responsible for conducting elections."
  },
  {
    id: 6,
    question: "What is an EVM used for?",
    options: ["Counting population", "Voting electronically", "Managing voter lists", "Tax collection"],
    correctAnswer: "Voting electronically",
    difficulty: "Basic",
    explanation: "EVM (Electronic Voting Machine) is used for electronic voting in Indian elections."
  },
  {
    id: 7,
    question: "Voter ID is also called?",
    options: ["EPIC", "Aadhar", "Passport", "PAN"],
    correctAnswer: "EPIC",
    difficulty: "Basic",
    explanation: "Voter ID is officially called EPIC (Electors Photo Identity Card)."
  },
  {
    id: 8,
    question: "Which Article grants the right to vote?",
    options: ["Article 326", "Article 370", "Article 356", "Article 21"],
    correctAnswer: "Article 326",
    difficulty: "Moderate",
    explanation: "Article 326 of the Constitution grants universal adult suffrage (right to vote)."
  },
  {
    id: 9,
    question: "Who appoints the Chief Election Commissioner?",
    options: ["Prime Minister", "President", "Parliament", "Supreme Court"],
    correctAnswer: "President",
    difficulty: "Moderate",
    explanation: "The Chief Election Commissioner is appointed by the President of India."
  },
  {
    id: 10,
    question: "When was the Election Commission of India established?",
    options: ["1947", "1950", "1952", "1955"],
    correctAnswer: "1950",
    difficulty: "Moderate",
    explanation: "The Election Commission of India was established on 25th January 1950."
  },
  {
    id: 11,
    question: "What is the maximum number of members in the Lok Sabha?",
    options: ["540", "545", "550", "552"],
    correctAnswer: "552",
    difficulty: "Moderate",
    explanation: "The maximum strength of Lok Sabha is 552 members (530 from states + 20 from UTs + 2 Anglo-Indians)."
  },
  {
    id: 12,
    question: "Which amendment reduced the voting age from 21 to 18?",
    options: ["61st Amendment", "62nd Amendment", "63rd Amendment", "64th Amendment"],
    correctAnswer: "61st Amendment",
    difficulty: "Advanced",
    explanation: "The 61st Constitutional Amendment (1988) reduced the voting age from 21 to 18 years."
  },
  {
    id: 13,
    question: "What is the term of office for a Rajya Sabha member?",
    options: ["4 years", "5 years", "6 years", "7 years"],
    correctAnswer: "6 years",
    difficulty: "Advanced",
    explanation: "Rajya Sabha members serve for 6 years, with one-third retiring every 2 years."
  },
  {
    id: 14,
    question: "Which state has the highest number of Lok Sabha seats?",
    options: ["Maharashtra", "Uttar Pradesh", "West Bengal", "Bihar"],
    correctAnswer: "Uttar Pradesh",
    difficulty: "Advanced",
    explanation: "Uttar Pradesh has 80 Lok Sabha seats, the highest among all states."
  },
  {
    id: 15,
    question: "What is the minimum age to contest Lok Sabha elections?",
    options: ["21 years", "25 years", "30 years", "35 years"],
    correctAnswer: "25 years",
    difficulty: "Advanced",
    explanation: "The minimum age to contest Lok Sabha elections is 25 years."
  }
];

// Motivational quotes for the quiz
export const motivationalQuotes = [
  "Your Voice, Your Vote, Your Power! 🗳️",
  "Democracy thrives when citizens participate! 🇮🇳",
  "Every vote counts, every voice matters! ✨",
  "Be the change you want to see! 🌟",
  "Civic duty is the foundation of democracy! 🏛️",
  "Knowledge is power, voting is responsibility! 💪",
  "Together we build a stronger democracy! 🤝",
  "Your vote shapes the future! 🚀"
];

// Reward tiers configuration
export const rewardTiers = [
  {
    name: "Bronze",
    pointsRequired: 100,
    badge: "🥉",
    title: "Civic Learner",
    description: "You're starting your civic journey!"
  },
  {
    name: "Silver", 
    pointsRequired: 250,
    badge: "🥈",
    title: "Voter Awareness Champion",
    description: "You understand the importance of voting!"
  },
  {
    name: "Gold",
    pointsRequired: 500,
    badge: "🥇", 
    title: "Youth Changemaker",
    description: "You're inspiring others to participate!"
  },
  {
    name: "Platinum",
    pointsRequired: 1000,
    badge: "💎",
    title: "Civic Leader",
    description: "You're eligible for civic internship recommendations!"
  }
];

// Points system
export const pointsSystem = {
  correctAnswer: 10,
  quizCompletion: 50,
  shareAwareness: 20,
  inviteFriend: 30,
  dailyStreak: 15,
  perfectScore: 100,
  speedBonus: 5,
  streakBonus: 25
};

// Achievements system
export const achievements = [
  { id: 1, name: "First Steps", icon: "👶", description: "Complete your first quiz", unlocked: false },
  { id: 2, name: "Perfect Score", icon: "💯", description: "Score 100% on any quiz", unlocked: false },
  { id: 3, name: "Speed Demon", icon: "⚡", description: "Answer 5 questions in under 10 seconds each", unlocked: false },
  { id: 4, name: "Streak Master", icon: "🔥", description: "Maintain a 7-day streak", unlocked: false },
  { id: 5, name: "Knowledge Seeker", icon: "📚", description: "Complete 10 quizzes", unlocked: false },
  { id: 6, name: "Civic Expert", icon: "🎓", description: "Answer 100 questions correctly", unlocked: false },
  { id: 7, name: "Daily Champion", icon: "⭐", description: "Complete daily challenge 5 times", unlocked: false },
  { id: 8, name: "Social Butterfly", icon: "🦋", description: "Share 3 achievements", unlocked: false }
];

// Daily challenges
export const dailyChallenges = [
  { id: 1, title: "Quick Learner", description: "Complete a quiz in under 5 minutes", reward: 30, icon: "⏱️" },
  { id: 2, title: "Accuracy Master", description: "Get 8+ correct answers", reward: 40, icon: "🎯" },
  { id: 3, title: "Speed Runner", description: "Answer 3 questions in under 5 seconds each", reward: 50, icon: "🏃" },
  { id: 4, title: "Perfect Day", description: "Score 100% on today's quiz", reward: 75, icon: "✨" }
];

// Level system (XP based)
export const levelSystem = {
  getLevel: (xp) => {
    return Math.floor(xp / 100) + 1;
  },
  getXPForLevel: (level) => {
    return (level - 1) * 100;
  },
  getXPProgress: (xp) => {
    const level = Math.floor(xp / 100) + 1;
    const currentLevelXP = (level - 1) * 100;
    const nextLevelXP = level * 100;
    const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    return { level, progress, currentXP: xp - currentLevelXP, neededXP: nextLevelXP - currentLevelXP };
  }
};

// Dummy leaderboard data
export const leaderboardData = [
  { rank: 1, name: "Priya Sharma", points: 1250, badge: "💎", state: "Maharashtra" },
  { rank: 2, name: "Arjun Patel", points: 1180, badge: "💎", state: "Gujarat" },
  { rank: 3, name: "Sneha Reddy", points: 1100, badge: "💎", state: "Telangana" },
  { rank: 4, name: "Rahul Kumar", points: 950, badge: "🥇", state: "Bihar" },
  { rank: 5, name: "Ananya Singh", points: 880, badge: "🥇", state: "Uttar Pradesh" },
  { rank: 6, name: "Vikram Joshi", points: 750, badge: "🥇", state: "Rajasthan" },
  { rank: 7, name: "Kavya Nair", points: 680, badge: "🥈", state: "Kerala" },
  { rank: 8, name: "Rohan Mehta", points: 620, badge: "🥈", state: "Punjab" },
  { rank: 9, name: "Isha Gupta", points: 580, badge: "🥈", state: "Delhi" },
  { rank: 10, name: "Aryan Shah", points: 520, badge: "🥈", state: "Maharashtra" }
];
