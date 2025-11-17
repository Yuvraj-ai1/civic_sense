import React, { useState } from 'react'
export default function Community(){
  const [posts, setPosts] = useState([{
    id:1, author:'Team', text:'Welcome to Civic Quest! Share your ideas to encourage first-time voters.'
  }])
  const [text, setText] = useState('')
  function post(){
    if(!text) return
    setPosts(p=>[{id:Date.now(), author:'User', text}, ...p])
    setText('')
  }
  return (
    <div className="card space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full gradient-bg" />
        <h2 className="text-xl font-semibold">Community</h2>
      </div>
      <div className="space-y-3">
        <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Share a tip or idea"></textarea>
        <div className="flex justify-end"><button onClick={post} className="btn-primary">Post</button></div>
        <div className="space-y-3">
          {posts.map(p=> (
            <div key={p.id} className="p-3 border rounded-lg bg-white/60">
              <div className="text-sm font-semibold">{p.author}</div>
              <div className="text-sm text-gray-700">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


