import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'civicUsers'
const SESSION_KEY = 'civicSession'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY)
    if (session) {
      setUser(JSON.parse(session))
    }
    setLoading(false)
  }, [])

  const signup = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    if (users.find(u => u.email === email)) {
      throw new Error('Email already registered')
    }
    const newUser = { name, email, password }
    const updated = [...users, newUser]
    localStorage.setItem(USERS_KEY, JSON.stringify(updated))
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser))
    setUser(newUser)
  }

  const signin = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    const existing = users.find(u => u.email === email && u.password === password)
    if (!existing) {
      throw new Error('Invalid credentials')
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(existing))
    setUser(existing)
  }

  const signout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


