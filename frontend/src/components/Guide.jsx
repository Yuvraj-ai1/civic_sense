import React from 'react'
export default function Guide(){
  return (
    <div className="card space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full gradient-bg" />
        <h2 className="text-xl font-semibold">How to Register and Vote</h2>
      </div>
      <ol className="list-decimal list-inside text-gray-700">
        <li>Check eligibility and prepare ID documents</li>
        <li>Register online using the Election Commission portal</li>
        <li>Locate your polling booth and know the timings</li>
        <li>Carry your voter ID or approved ID on voting day</li>
      </ol>
      <div className="pt-2">
        <a href="#" className="btn-primary">View Official Resources</a>
      </div>
    </div>
  )
}


