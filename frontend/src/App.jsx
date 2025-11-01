import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Guide from './components/Guide'
import Community from './components/Community'
import Leaderboard from './components/Leaderboard'

export default function App(){
  return (
    <div className="app-surface">
      <div className="gradient-bg h-40 w-full absolute inset-0 opacity-20" />
      <Header />
      <div className="relative max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/guide" element={<Guide/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
        <footer className="mt-8 text-center text-sm text-gray-600">Community Connect © {new Date().getFullYear()}</footer>
      </div>
    </div>
  )
}


