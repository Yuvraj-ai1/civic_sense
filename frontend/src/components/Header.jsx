import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
  return (
    <header className="sticky top-0 z-40">
      <div className="gradient-bg h-1 w-full" />
      <div className="glass max-w-4xl mx-auto mt-0 p-4 flex items-center justify-between rounded-b-2xl">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">Community Connect</Link>
        <nav className="space-x-4">
          <Link to="/quiz" className="link-nav">🗳️ Quiz</Link>
          <Link to="/guide" className="link-nav">📖 How to Vote</Link>
          <Link to="/community" className="link-nav">👥 Community</Link>
          <Link to="/leaderboard" className="link-nav">🏆 Leaderboard</Link>
        </nav>
      </div>
    </header>
  )
}


