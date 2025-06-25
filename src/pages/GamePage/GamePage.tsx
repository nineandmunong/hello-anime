import { useState } from "react"

export default function GamePage() {
  const [start, setStart] = useState(false)
  const [question, setQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)

  if (!start) {
    return (
      <div>
        <h1>aaaa</h1>
      </div>
    )
  }

  return (
    <div>
      <div>Game Page</div>
    </div>
  )
}
