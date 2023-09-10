import React from "react";

export default function ProjectsDiv() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="color bg-yellow-500 rounded-sm shadow-lg w-screen">
                <h2>AI Scribe</h2>
                <p>Text about Ai Scribe</p>
                <img src="AI-Scribe-Screenshot.png" alt="picture of AI Scribe" width={400} height={300}></img>
            </div>
        </div>
    )
}