const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export async function fetchQuizzes() {
  const res = await fetch(`${BASE}/quizzes`)
  return res.json()
}

export async function submitProgress(payload) {
  const res = await fetch(`${BASE}/progress`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  return res.json()
}

// Points and reward system utilities
export const saveUserPoints = (points) => {
  localStorage.setItem('civicPoints', points.toString())
}

export const getUserPoints = () => {
  const points = localStorage.getItem('civicPoints')
  return points ? parseInt(points) : 0
}

export const resetUserProgress = () => {
  localStorage.removeItem('civicPoints')
  localStorage.removeItem('quizHistory')
}

// Share functionality
export const shareAchievement = (score, points) => {
  const text = `I just scored ${score} points in the Civic Awareness Quiz! 🗳️ Join me in learning about our democratic rights at Civic Quest! #CivicAwareness #YouthVoting`
  
  if (navigator.share) {
    navigator.share({
      title: 'Civic Awareness Achievement',
      text: text,
      url: window.location.origin
    })
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert('Achievement text copied to clipboard! Share it on your social media.')
    })
  }
}


