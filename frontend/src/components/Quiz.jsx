import React, { useState, useEffect } from 'react'
import { quizQuestions, motivationalQuotes, pointsSystem, rewardTiers, levelSystem } from '../data/quizData'

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeLeft, setTimeLeft] = useState(20)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [totalPoints, setTotalPoints] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [questions, setQuestions] = useState([])
  const [currentTier, setCurrentTier] = useState(null)

  // Initialize quiz with random questions
  useEffect(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, 10))
  }, [])

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showFeedback && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showFeedback) {
      handleTimeUp()
    }
  }, [timeLeft, showFeedback, quizCompleted])

  // Load user points from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('civicPoints')
    if (savedPoints) {
      setTotalPoints(parseInt(savedPoints))
    }
  }, [])

  // Update current tier based on points
  useEffect(() => {
    const tier = rewardTiers
      .slice()
      .reverse()
      .find(tier => totalPoints >= tier.pointsRequired)
    setCurrentTier(tier)
  }, [totalPoints])

  const handleTimeUp = () => {
    setSelectedAnswer('Time Up!')
    setShowFeedback(true)
    setUserAnswers([...userAnswers, { question: questions[currentQuestionIndex], answer: 'Time Up!', correct: false }])
  }

  const handleAnswerSelect = (answer) => {
    if (showFeedback) return
    
    setSelectedAnswer(answer)
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer
    const pointsEarned = isCorrect ? pointsSystem.correctAnswer : 0
    
    setScore(score + (isCorrect ? 1 : 0))
    setTotalPoints(totalPoints + pointsEarned)
    setUserAnswers([...userAnswers, { 
      question: questions[currentQuestionIndex], 
      answer, 
      correct: isCorrect,
      pointsEarned 
    }])
    
    setShowFeedback(true)
    
    // Save points to localStorage
    localStorage.setItem('civicPoints', (totalPoints + pointsEarned).toString())
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setTimeLeft(20)
    } else {
      // Quiz completed
      const completionPoints = pointsSystem.quizCompletion
      let bonusPoints = 0
      
      // Perfect score bonus
      const percentage = Math.round((score / questions.length) * 100)
      if (percentage === 100) {
        bonusPoints += pointsSystem.perfectScore
      }
      
      // Update daily streak
      const today = new Date().toDateString()
      const lastQuizDate = localStorage.getItem('lastQuizDate')
      const currentStreak = parseInt(localStorage.getItem('streakCount') || '0')
      
      if (lastQuizDate === today) {
        // Already completed today, no streak update
      } else {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        if (lastQuizDate === yesterday.toDateString()) {
          // Continue streak
          localStorage.setItem('streakCount', (currentStreak + 1).toString())
          bonusPoints += pointsSystem.streakBonus * (currentStreak + 1)
        } else {
          // New streak
          localStorage.setItem('streakCount', '1')
        }
        localStorage.setItem('lastQuizDate', today)
        localStorage.setItem('dailyStreak', new Date().toISOString())
      }
      
      const finalPoints = totalPoints + completionPoints + bonusPoints
      setTotalPoints(finalPoints)
      
      localStorage.setItem('civicPoints', finalPoints.toString())
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setTimeLeft(20)
    setQuizCompleted(false)
    setUserAnswers([])
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, 10))
  }

  const getRandomQuote = () => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    const completionPoints = pointsSystem.quizCompletion
    let bonusPoints = 0
    if (percentage === 100) {
      bonusPoints += pointsSystem.perfectScore
    }
    const finalPoints = totalPoints
    const levelData = levelSystem.getXPProgress(finalPoints)
    
    return (
      <div className="space-y-6">
        {/* Motivational Banner */}
        <div className="card gradient-bg text-white text-center">
          <h1 className="text-2xl font-bold mb-2">🎉 Quiz Completed! 🎉</h1>
          <p className="text-lg">{getRandomQuote()}</p>
        </div>

        {/* Results Card */}
        <div className="card">
          <div className="text-center space-y-4">
            <div className="text-6xl">
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '🥈' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Amazing Work!</h2>
            <div className="text-2xl font-semibold text-indigo-600">
              {score}/{questions.length} Correct ({percentage}%)
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
              <div className="text-lg font-semibold text-green-800">
                +{completionPoints} XP for Completion!
              </div>
              {bonusPoints > 0 && (
                <div className="text-md font-semibold text-yellow-700 bg-yellow-100 rounded p-2">
                  🎁 Bonus: +{bonusPoints} XP {percentage === 100 ? '(Perfect Score!)' : '(Streak Bonus!)'}
                </div>
              )}
              <div className="text-sm text-green-600">
                Total XP: {finalPoints} | Level {levelData.level}
              </div>
              {/* Level Progress */}
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                    style={{ width: `${levelData.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {Math.round(levelData.progress)}% to Level {levelData.level + 1}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Tier Display */}
        {currentTier && (
          <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
            <div className="text-center">
              <div className="text-4xl mb-2">{currentTier.badge}</div>
              <h3 className="text-xl font-bold text-gray-800">{currentTier.title}</h3>
              <p className="text-gray-600">{currentTier.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                {currentTier.name} Tier - {currentTier.pointsRequired} points required
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={handleRestart}
            className="btn-primary flex-1"
          >
            🔄 Take Another Quiz
          </button>
          <button 
            onClick={() => window.location.href = '/leaderboard'}
            className="btn-outline flex-1"
          >
            🏆 View Leaderboard
          </button>
        </div>

        {/* Detailed Results */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">📊 Detailed Results</h3>
          <div className="space-y-3">
            {userAnswers.map((result, index) => (
              <div key={index} className={`p-3 rounded-lg border ${
                result.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="font-medium text-sm">
                  Q{index + 1}: {result.question.question}
                </div>
                <div className="text-sm mt-1">
                  <span className="font-medium">Your Answer:</span> {result.answer}
                  {result.correct ? (
                    <span className="text-green-600 ml-2">✓ Correct (+{result.pointsEarned} pts)</span>
                  ) : (
                    <span className="text-red-600 ml-2">✗ Incorrect</span>
                  )}
                </div>
                {!result.correct && (
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Correct Answer:</span> {result.question.correctAnswer}
                  </div>
                )}
                <div className="text-xs text-gray-500 mt-1">
                  {result.question.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!questions.length) {
    return (
      <div className="card text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
        <p>Loading quiz questions...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="space-y-6">
      {/* Header with Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">🗳️ Civic Awareness Quiz</h1>
          <div className="text-right">
            <div className="text-sm text-gray-600">Score: {score}/{currentQuestionIndex}</div>
            <div className="text-sm text-indigo-600">XP: {totalPoints}</div>
            <div className="text-xs text-purple-600">Level {levelSystem.getLevel(totalPoints)}</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span className="font-medium">{Math.round(progress)}% Complete</span>
        </div>
      </div>

      {/* Timer */}
      <div className="card">
      <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">⏰ Time Remaining</div>
          <div className={`text-2xl font-bold ${
            timeLeft <= 5 ? 'text-red-500' : timeLeft <= 10 ? 'text-yellow-500' : 'text-green-500'
          }`}>
            {timeLeft}s
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${(timeLeft / 20) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="card">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">
              {currentQuestion.difficulty}
            </span>
            <span className="text-sm text-gray-600">Difficulty Level</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium"
            
            if (showFeedback) {
              if (option === currentQuestion.correctAnswer) {
                buttonClass += " bg-green-100 border-green-500 text-green-800"
              } else if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
                buttonClass += " bg-red-100 border-red-500 text-red-800"
              } else {
                buttonClass += " bg-gray-100 border-gray-300 text-gray-600"
              }
            } else {
              buttonClass += " border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-800"
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && option === currentQuestion.correctAnswer && (
                    <span className="text-green-600">✓</span>
                  )}
                  {showFeedback && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                    <span className="text-red-600">✗</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-2xl">
                {selectedAnswer === currentQuestion.correctAnswer ? '🎉' : '💡'}
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  {selectedAnswer === currentQuestion.correctAnswer 
                    ? 'Correct! Well done!' 
                    : 'Not quite right, but keep learning!'}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {currentQuestion.explanation}
                </div>
                {selectedAnswer === currentQuestion.correctAnswer && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    +{pointsSystem.correctAnswer} points earned!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {showFeedback && (
          <div className="mt-6">
            <button
              onClick={handleNext}
              className="btn-primary w-full py-3 text-lg"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question →' : 'Complete Quiz 🏁'}
            </button>
          </div>
        )}
      </div>

      {/* Motivational Quote */}
      <div className="card bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
        <div className="text-center">
          <div className="text-lg font-medium text-gray-800">
            {getRandomQuote()}
          </div>
        </div>
      </div>
    </div>
  )
}


