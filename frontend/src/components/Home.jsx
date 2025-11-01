import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motivationalQuotes, rewardTiers } from '../data/quizData'

export default function Home(){
  const [userPoints, setUserPoints] = useState(0)
  const [currentTier, setCurrentTier] = useState(null)
  const [currentQuote, setCurrentQuote] = useState('')

  useEffect(() => {
    const savedPoints = localStorage.getItem('civicPoints')
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints))
    }
    
    // Set random quote
    setCurrentQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])
  }, [])

  useEffect(() => {
    const tier = rewardTiers
      .slice()
      .reverse()
      .find(tier => userPoints >= tier.pointsRequired)
    setCurrentTier(tier)
  }, [userPoints])

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="card gradient-bg text-white">
        <h1 className="text-4xl font-bold">Welcome to Community Connect</h1>
        <p className="mt-2 text-white/90">Learn about your voting rights with bite-sized lessons and fun quizzes.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link to="/quiz" className="btn-primary">🗳️ Start Quiz</Link>
          <Link to="/guide" className="btn-outline bg-white/10 text-white border-white/40">📖 How to Vote</Link>
          <Link to="/leaderboard" className="btn-outline bg-white/10 text-white border-white/40">🏆 Leaderboard</Link>
        </div>
      </div>

      {/* User Progress Card */}
      {userPoints > 0 && (
        <div className="card bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <div className="text-center space-y-3">
            <div className="text-3xl">{currentTier?.badge || '📚'}</div>
            <h2 className="text-xl font-bold text-gray-800">
              {currentTier?.title || 'Civic Learner'}
            </h2>
            <div className="text-2xl font-bold text-indigo-600">{userPoints} Points</div>
            <p className="text-sm text-gray-600">{currentTier?.description || 'Start your civic journey!'}</p>
          </div>
        </div>
      )}

      {/* Motivational Quote */}
      <div className="card bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
        <div className="text-center">
          <div className="text-2xl mb-2">🌟</div>
          <div className="text-lg font-medium text-gray-800">
            {currentQuote}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">🗳️</div>
            <h2 className="font-semibold">Interactive Quiz</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">Test your civic knowledge with timed quizzes and earn points for correct answers.</p>
          <Link to="/quiz" className="btn-primary text-sm">Start Learning</Link>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">🏆</div>
            <h2 className="font-semibold">Reward System</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">Earn badges and climb the leaderboard as you master civic knowledge.</p>
          <Link to="/leaderboard" className="btn-outline text-sm">View Rewards</Link>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">📖</div>
            <h2 className="font-semibold">Voting Guide</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">Learn step-by-step how to register and cast your vote in elections.</p>
          <Link to="/guide" className="btn-outline text-sm">Learn More</Link>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">👥</div>
            <h2 className="font-semibold">Community</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect with other young citizens and share your civic journey.</p>
          <Link to="/community" className="btn-outline text-sm">Join Community</Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card gradient-bg text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Make a Difference?</h2>
        <p className="mb-4">Take your first quiz and start earning points towards becoming a civic champion!</p>
        <Link to="/quiz" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
          🚀 Start Your Journey
        </Link>
      </div>
    </div>
  )
}


