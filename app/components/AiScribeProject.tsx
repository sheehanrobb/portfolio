import React from "react";

export default function AiScribeProject() {
    return (
        <div className="flex flex-wrap">
            <h1>Projects</h1>
            <div className="flex flex-grow color bg-cyan-500 rounded-sm shadow-lg w-screen">
                <div className="flex flex-wrap">
                    <h2>AI Scribe</h2>
                    <p>Text about Ai Scribe</p>
                    <img src="AI-Scribe-Screenshot.png" alt="picture of AI Scribe" width={400} height={300}></img>
                </div>
            </div>
        </div>
    )
}