import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
export default function Header(){
  const { user, signout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signout()
    navigate('/signin')
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="gradient-bg h-1 w-full" />
      <div className="glass max-w-4xl mx-auto mt-0 p-4 flex items-center justify-between rounded-b-2xl">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">🎮 Civic Quest</Link>
        <nav className="space-x-4 flex items-center">
          <Link to="/quiz" className="link-nav">🗳️ Quiz</Link>
          <Link to="/guide" className="link-nav">📖 How to Vote</Link>
          <Link to="/community" className="link-nav">👥 Community</Link>
          <Link to="/leaderboard" className="link-nav">🏆 Leaderboard</Link>
          {user && (
            <button
              onClick={handleLogout}
              className="ml-4 px-3 py-1.5 rounded-full bg-red-500/90 text-white text-sm font-semibold hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}


