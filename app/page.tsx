'use client'

import Name from "./components/Name"
import NavBar from "./components/NavBar"
import AiScribeProject from "./components/AiScribeProject"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-violet-500">
      <NavBar />
      <Name />
      <AiScribeProject />

      
    </main>
  )
}