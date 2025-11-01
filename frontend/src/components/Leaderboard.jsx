import React, { useState, useEffect } from 'react'
import { leaderboardData, rewardTiers } from '../data/quizData'

export default function Leaderboard() {
  const [userPoints, setUserPoints] = useState(0)
  const [userRank, setUserRank] = useState(null)
  const [currentTier, setCurrentTier] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Load user points from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('civicPoints')
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints))
    }
  }, [])

  // Update current tier based on points
  useEffect(() => {
    const tier = rewardTiers
      .slice()
      .reverse()
      .find(tier => userPoints >= tier.pointsRequired)
    setCurrentTier(tier)
  }, [userPoints])

  // Calculate user rank
  useEffect(() => {
    const rank = leaderboardData.findIndex(user => userPoints > user.points) + 1
    setUserRank(rank || leaderboardData.length + 1)
  }, [userPoints])

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return `#${rank}`
  }

  const getRankColor = (rank) => {
    if (rank === 1) return 'text-yellow-600'
    if (rank === 2) return 'text-gray-600'
    if (rank === 3) return 'text-orange-600'
    return 'text-gray-500'
  }

  const filteredData = selectedFilter === 'all' 
    ? leaderboardData 
    : leaderboardData.filter(user => user.state === selectedFilter)

  const uniqueStates = ['all', ...new Set(leaderboardData.map(user => user.state))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card gradient-bg text-white text-center">
        <h1 className="text-3xl font-bold mb-2">🏆 Civic Champions Leaderboard</h1>
        <p className="text-lg opacity-90">Celebrating youth who are making a difference!</p>
      </div>

      {/* User Stats Card */}
      <div className="card bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
        <div className="text-center space-y-4">
          <div className="text-4xl">{currentTier?.badge || '📚'}</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {currentTier?.title || 'Civic Learner'}
            </h2>
            <p className="text-gray-600">{currentTier?.description || 'Start your civic journey!'}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-indigo-600">{userPoints}</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-purple-600">{getRankIcon(userRank)}</div>
              <div className="text-sm text-gray-600">Your Rank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress to Next Tier */}
      {currentTier && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">🎯 Progress to Next Tier</h3>
          <div className="space-y-3">
            {rewardTiers.map((tier, index) => {
              const isCurrentTier = tier.name === currentTier.name
              const isUnlocked = userPoints >= tier.pointsRequired
              const nextTier = rewardTiers[index + 1]
              
              if (isCurrentTier && nextTier) {
                const progress = ((userPoints - tier.pointsRequired) / (nextTier.pointsRequired - tier.pointsRequired)) * 100
                return (
                  <div key={tier.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Progress to {nextTier.name} Tier</span>
                      <span className="text-gray-600">{userPoints - tier.pointsRequired} / {nextTier.pointsRequired - tier.pointsRequired} points</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {nextTier.pointsRequired - userPoints} more points needed for {nextTier.title}
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>
      )}

      {/* Filter Options */}
      <div className="card">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 mr-2">Filter by State:</span>
          {uniqueStates.map(state => (
            <button
              key={state}
              onClick={() => setSelectedFilter(state)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === state
                  ? 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {state === 'all' ? 'All States' : state}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">📊 Weekly Rankings</h2>
          <div className="text-sm text-gray-600">
            {filteredData.length} {selectedFilter === 'all' ? 'participants' : 'from ' + selectedFilter}
          </div>
        </div>

        <div className="space-y-3">
          {filteredData.map((user, index) => (
            <div 
              key={user.rank}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                user.rank <= 3 
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`text-2xl font-bold ${getRankColor(user.rank)}`}>
                    {getRankIcon(user.rank)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{user.name}</div>
                    <div className="text-sm text-gray-600">{user.state}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-indigo-600">{user.points}</div>
                  <div className="text-sm text-gray-500">points</div>
                </div>
                <div className="text-2xl">{user.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Section */}
      <div className="card bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
        <div className="text-center space-y-3">
          <div className="text-3xl">🌟</div>
          <h3 className="text-lg font-bold text-gray-800">Keep Going!</h3>
          <p className="text-gray-600">
            Every quiz you take makes you a more informed citizen. 
            Share your progress and inspire others to join the civic movement!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="btn-primary flex-1">
              📱 Share Your Achievement
            </button>
            <button 
              onClick={() => window.location.href = '/quiz'}
              className="btn-outline flex-1"
            >
              🎯 Take Another Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Reward Tiers Info */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">🏅 Reward Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewardTiers.map(tier => (
            <div 
              key={tier.name}
              className={`p-4 rounded-lg border-2 ${
                userPoints >= tier.pointsRequired
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{tier.badge}</div>
                <div>
                  <div className="font-semibold text-gray-800">{tier.title}</div>
                  <div className="text-sm text-gray-600">{tier.pointsRequired} points</div>
                </div>
                {userPoints >= tier.pointsRequired && (
                  <div className="text-green-600 ml-auto">✓</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
