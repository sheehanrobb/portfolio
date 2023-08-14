'use client'

import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-violet-500">
      <NavBar />
      <div>
        <h1 className="text-9xl flex-row">Sheehan</h1>
        <h2 className="text-9xl text-violet-200 flex-row">Robb</h2>
      </div>
      

      
    </main>
  )
}