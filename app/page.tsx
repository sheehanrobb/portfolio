'use client'

import Name from "./components/Name"
import NavBar from "./components/NavBar"
import AiScribeProject from "./components/AiScribeProject"
import TechStack from "./components/TechStack"
import Card from "./components/Card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-violet-500">
      <NavBar />
      <Name />
      <div>
        <h2>Projects</h2>
      </div>
      <Card></Card>
      <TechStack />
      

      
    </main>
  )
}