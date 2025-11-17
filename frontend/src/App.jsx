import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Guide from './components/Guide'
import Community from './components/Community'
import Leaderboard from './components/Leaderboard'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './contexts/AuthContext'

export default function App(){
  const { user } = useAuth()
  return (
    <div className="app-surface">
      <div className="gradient-bg h-40 w-full absolute inset-0 opacity-20" />
      {user && <Header />}
      <div className="relative max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/signin" element={user ? <Navigate to="/" replace /> : <SignIn />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp />} />
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><Quiz/></ProtectedRoute>} />
          <Route path="/guide" element={<ProtectedRoute><Guide/></ProtectedRoute>} />
          <Route path="/community" element={<ProtectedRoute><Community/></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard/></ProtectedRoute>} />
          <Route path="*" element={<Navigate to={user ? '/' : '/signin'} replace />} />
        </Routes>
        {user && (
          <footer className="mt-8 text-center text-sm text-gray-600">Civic Quest © {new Date().getFullYear()}</footer>
        )}
      </div>
    </div>
  )
}


